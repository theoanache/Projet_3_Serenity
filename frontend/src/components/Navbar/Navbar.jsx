import React, { useEffect, useState } from "react";
import { CiBellOn, CiMail, CiPower, CiTempHigh } from "react-icons/ci";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Button from "../components_reutilisable/Btn";
import Logo from "./assets/logo-serenity.png";
import LogoW from "./assets/logo-serenity-w.png";
import ButtonNavbar from "./ButtonNavbar";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { role, logout, onePatient, oneDoctor } = useAuth();
  const [switchRole, setSwitchRole] = useState({
    color: "",
    logoSerenity: null,
    colorText: "",
  });
  const [valeur, setValeur] = useState([]);

  useEffect(() => {
    if (role === 1) {
      setSwitchRole({
        color:
          "fixed w-1/6 h-screen border-r-2 border-gray-600 text-xs bg-background-dark ",
        logoSerenity: LogoW,
        colorText: "text-white rounded-full ml-2",
      });
    } else {
      setSwitchRole({
        color: "fixed w-1/6 h-screen border-r-2 border-gray-200 text-xs",
        logoSerenity: Logo,
        colorText: "text-font-black rounded-full ml-2 font-semibold",
      });
    }
  }, [role]);

  const handleLogout = () => {
    axios
      .get("http://localhost:8000/api/users/logout", {
        withCredentials: true,
      })
      .then(() => {
        logout();
      });
  };
  const getValeur = () => {
    if (onePatient.id) {
      const url = `http://localhost:8000/api/question_result/${onePatient.id}`;
      axios
        .get(url, {
          withCredentials: true,
        })
        .then((response) => {
          setValeur(response.data);
        });
    }
  };
  useEffect(() => {
    getValeur();
  }, [valeur.average, onePatient.id]);

  return (
    <div className={switchRole.color}>
      <img
        className=" mb-10 pt-8 pl-7 w-4/5"
        src={switchRole.logoSerenity}
        alt="Logo"
      />
      <div className="flex flex-col items-center ">
        <ButtonNavbar />
        {valeur.average === null && role === 2 ? (
          <NavLink
            to="/quizz"
            className={({ isActive }) =>
              isActive
                ? "decoration-none bg-violet-two text-white rounded-lg w-[80%]  flex items-center h-11 pl-3 mt-2 gap-5 text-sm"
                : "decoration-none bg-transparent text-font-gray rounded-lg w-[80%] mt-2 flex items-center h-11 pl-3 gap-5 text-sm hover:bg-violet-two hover:text-white"
            }
          >
            <CiTempHigh size="1.8em" />
            Quizz
          </NavLink>
        ) : null}
      </div>
      <div>
        <h4 className="text-font-gray mt-10 ml-7 text-sm">Des nouvelles</h4>
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center rounded-lg mt-4  w-4/5 h-11 hover:bg-violet-two text-font-gray hover:text-white"
          >
            <div className="flex items-center pl-3">
              <div>
                <CiBellOn className="w-5 h-auto" />
              </div>
              <h4 className="ml-3 text-sm">Notifications</h4>
              <div className="bg-btn-notification h-5 w-5 ml-3 rounded-[50%] text-white flex justify-center items-center">
                21
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center rounded-lg  w-4/5 h-11 hover:bg-violet-two text-font-gray  hover:text-white"
          >
            <div className="flex pl-3">
              <div>
                <CiMail className="w-5 h-auto" />
              </div>
              <h4 className="ml-3 text-sm">Messagerie</h4>
              <div className="bg-btn-notification h-5 w-5 ml-5 rounded-[50%] text-white flex justify-center items-center pb-0.5">
                2
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center absolute bottom-3 w-full">
        <div className="flex items-center pr-3">
          {role === 1 ? (
            <>
              <img src={oneDoctor.image} alt="Avatar" className="w-[35px]" />
              <div>
                <h4 className={switchRole.colorText}>
                  {oneDoctor.firstname} {oneDoctor.lastname}
                </h4>
                <h4 className="pl-2 text-font-gray">
                  {oneDoctor.specialization}
                </h4>
              </div>
            </>
          ) : (
            onePatient && (
              <>
                <img
                  src={onePatient.image}
                  alt="Avatar"
                  className="w-10 rounded-full"
                />
                <h4 className={switchRole.colorText}>
                  {onePatient.firstname} {onePatient.lastname}
                </h4>
              </>
            )
          )}

          <div className=" text-white bg-btn-violet rounded-full ml-8">
            <Button
              type="button"
              handleClick={handleLogout}
              color=""
              label={<CiPower size="1em" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
