import React from "react";
import formalityAdmin from "@components/FormailtyAdministrative/formalityAdmin";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Formality() {
  const { role } = useAuth();
  return (
    <div className="flex justify-center mt-12 mb-8">
      <div
        className={`border-4 border-blue-one rounded-2xl w-[90%] pt-4 pb-4 ${
          role === 1
            ? "bg-background-dark text-white"
            : "bg-background-lighty text-font-dark3"
        }`}
      >
        <h2 className="pl-12 py-4">Quelques documents</h2>
        <div className="flex justify-start flex-wrap gap-6 mx-12">
          {formalityAdmin.map((item) => (
            <div key={item.id} className="flex flex-col w-40 gap-2 font-rubik">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "decoration-none ring-2 ring-blue-one rounded-3xl"
                    : "decoration-none "
                }
              >
                <img src={item.img} alt="" className="rounded-3xl" />
              </NavLink>
              <h3>{item.title}</h3>
              <p className="text-font-gray text-sm">{item.time}</p>
            </div>
          ))}
          {role === 1 && (
            <div className="flex flex-col w-40 gap-2 font-rubik">
              <NavLink to="">
                <div className="flex justify-center items-center h-36 bg-[#636363] rounded-3xl text-5xl">
                  +
                </div>
              </NavLink>
              <h3>Ajouter une nouvelle étape</h3>
            </div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Formality;
