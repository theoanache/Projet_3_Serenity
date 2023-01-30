import React from "react";
import Navbar from "@components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PatientLogin from "@pages/PatientLogin";
import PatientSignUp from "@pages/PatientSignUp";
import ProtectedRoute from "@pages/ProtectedRoute";
import BigContainer from "@components/BigContainer";
import Operation from "@components/PatientOperation/Operation";
import Formality from "@components/FormailtyAdministrative/Formality";
import FormPatient from "@components/FormailtyAdministrative/formPatient/FormPatient";
import RetourMutuelle from "@components/FormailtyAdministrative/RetourMutuelle";
import Consentement from "@components/FormailtyAdministrative/Consentement";
import RdvAnesthesiste from "@components/FormailtyAdministrative/RdvAnesthesiste";
import SignatureDevis from "@components/FormailtyAdministrative/SignatureDevis";
import Arrivee from "@components/FormailtyAdministrative/arrivée/Arrivee";
import Sortie from "@components/PatientSortie/Sortie";
import CheckList from "@components/PatientChecklist/CheckList";
import FirstQuizz from "@pages/FirstQuizz";
import BigContainerDoctor from "@pages/BigContainerDoctor";
import Patients from "@components/PatientPage/Patients";
import AddPatient from "@components/AddPatient/AddPatient";
import ManageSurgery from "@components/ManageSurgery/ManageSurgery";
import { useAuth } from "./contexts/AuthContext";
import ChatBox from "./ChatBox/ChatBox";
import Intervention from "./components/PatientIntervention/PatientIntervention";

function TransitionPatient() {
  const { loginData, role } = useAuth();
  return (
    <>
      {loginData.data && <Navbar />}
      {loginData.data && <ChatBox />}
      <Routes>
        <Route path="/" element={<PatientLogin />} />
        <Route path="/signup" element={<PatientSignUp />} />
        {role === 2 ? (
          <Route element={<ProtectedRoute />}>
            <Route path="/quizz" element={<FirstQuizz />} />
            <Route path="/" element={<BigContainer />}>
              <Route path="comprendre_mon_operation" element={<Operation />} />
              <Route path="formalites_administrative" element={<Formality />}>
                <Route path="fiche_administrative" element={<FormPatient />} />
                <Route path="retour_mutuelle" element={<RetourMutuelle />} />
                <Route path="consentement_eclaire" element={<Consentement />} />
                <Route
                  path="rendez_vous_anesthesiste"
                  element={<RdvAnesthesiste />}
                />
                <Route path="signature_devis" element={<SignatureDevis />} />
              </Route>
              <Route path="preparer_mon_arrivee" element={<Arrivee />} />
              <Route path="anticipe_ma_sortie" element={<Sortie />} />
              <Route path="checklist" element={<CheckList />} />
            </Route>
          </Route>
        ) : (
          <Route element={<ProtectedRoute />}>
            <Route path="/doctor" element={<BigContainerDoctor />}>
              <Route path="interventions" element={<Intervention />} />
              <Route path="patients" element={<Patients />} />
              <Route path="nouveau_patient" element={<AddPatient />} />
              <Route path="chirurgies" element={<ManageSurgery />} />
            </Route>
            <Route path="/" element={<BigContainer />}>
              <Route path="comprendre_mon_operation" element={<Operation />} />
              <Route path="formalites_administrative" element={<Formality />}>
                <Route path="fiche_administrative" element={<FormPatient />} />
                <Route path="retour_mutuelle" element={<RetourMutuelle />} />
                <Route path="consentement_eclaire" element={<Consentement />} />
                <Route
                  path="rendez_vous_anesthesiste"
                  element={<RdvAnesthesiste />}
                />
                <Route path="signature_devis" element={<SignatureDevis />} />
              </Route>
              <Route path="preparer_mon_arrivee" element={<Arrivee />} />
              <Route path="anticipe_ma_sortie" element={<Sortie />} />
              <Route path="checklist" element={<CheckList />} />
            </Route>
          </Route>
        )}
      </Routes>
    </>
  );
}

export default TransitionPatient;
