import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import SecondNavBar from "./secondNav/SecondNavBar";
import { useAuth } from "../contexts/AuthContext";
import Header from "./Header/Header";
import malheureux from "./asset/smiley01-nu.png";
import triste from "./asset/smiley02-nu.png";
import neutre from "./asset/smiley03-nu.png";
import content from "./asset/smiley04-nu.png";

function BigContainer() {
  const { role, onePatient } = useAuth();
  const [emoji, setEmoji] = useState("");
  const [valeur, setValeur] = useState({});
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
    switch (true) {
      case valeur.average < 32:
        setEmoji(malheureux);
        break;
      case valeur.average > 33 && valeur.average < 65:
        setEmoji(triste);
        break;
      case valeur.average > 65 && valeur.average < 90:
        setEmoji(neutre);
        break;
      case valeur.average > 90 && valeur.average <= 100:
        setEmoji(content);
        break;
      default:
        break;
    }
  }, [valeur.average, onePatient.id]);

  return (
    <div
      className={`w-10/12 min-h-screen absolute right-0 ${
        role === 1
          ? "bg-background-darker text-white"
          : "bg-background-white text-font-dark3"
      }`}
    >
      <Header />
      {role === 1 && (
        <p className="text-2xl ml-14 mt-5 mb-5 text-font-dark">
          Votre patient{" "}
          <span className="font-bold ">
            {onePatient.firstname} {onePatient.lastname}{" "}
          </span>
          {valeur.average === null ? (
            <p>N'a pas répondu au quizz</p>
          ) : (
            <p className="flex items-center gap-2 text-xl">
              Son état d'anxiété :{" "}
              <img src={emoji} className="w-6 h-6" alt="" />
            </p>
          )}
        </p>
      )}
      <SecondNavBar />
      <Outlet />
    </div>
  );
}

export default BigContainer;
