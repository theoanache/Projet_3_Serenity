import React, { useEffect, useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Calendar from "./Calendar";
import "../../Tailwind.css";

function Header() {
  const { oneDoctor, onePatient, role } = useAuth();
  const location = useLocation();
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const changeWelcomeMessage = () => {
    switch (location.pathname) {
      case "/doctor/nouveau_patient":
        setWelcomeMessage("Un nouveau patient?");
        break;
      case "/doctor/patients":
        setWelcomeMessage("Comment vont vos patients?");
        break;
      case "/doctor/chirurgies":
        setWelcomeMessage("Gerer mes chirurgies");
        break;
      case "/comprendre_mon_operation":
      case "/formalites_administrative/fiche_administrative":
      case "/formalites_administrative/retour_mutuelle":
      case "/formalites_administrative/consentement_eclaire":
      case "/formalites_administrative/rendez_vous_anesthesiste":
      case "/formalites_administrative/signature_devis":
      case "/formalites_administrative":
      case "/preparer_mon_arrivee":
      case "/anticipe_ma_sortie":
      case "/checklist":
        setWelcomeMessage("Comment allez vous?");
        break;
      default:
        setWelcomeMessage("");
    }
  };

  const putCaldendar = () => {
    switch (location.pathname) {
      case "/comprendre_mon_operation":
      case "/formalites_administrative":
      case "/preparer_mon_arrivee":
      case "/anticipe_ma_sortie":
      case "/checklist":
        return <Calendar />;
      default:
        return null;
    }
  };

  useEffect(() => {
    changeWelcomeMessage();
    putCaldendar();
  }, [location.pathname]);

  return (
    <div className="w-full h-32 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <p className="text-xl ml-14">
            Bonjour{" "}
            {role === 1
              ? `Docteur ${oneDoctor.lastname}`
              : `${onePatient.firstname} ${onePatient.lastname}`}{" "}
          </p>
          <p className="text-4xl ml-14 text-font-dark font-bold">
            {welcomeMessage}
          </p>
        </div>
      </div>
      {putCaldendar(location.pathname)}
      <div className="flex w-fit h-fit m-8">
        <button type="button">
          <CiBellOn className="w-12 h-auto rounded-full p-2 shadow-[-3px_5px_15px_-5px_#000000]" />
        </button>
      </div>
    </div>
  );
}

export default Header;
