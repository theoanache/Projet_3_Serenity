import React from "react";
import AddPatient from "../components/AddPatient/AddPatient";
import Header from "../components/Header/Header";
import "../Tailwind.css";

function AdminAddPatientPage() {
  return (
    <div className=" bg-background-dark w-10/12 h-screen flex items-center flex-col text-white absolute right-0">
      <Header />
      <div className="bg-background-dark w-3/4 h-3/5 rounded-2xl text-xs shadow-[-6px_14px_15px_0px_#000000]">
        <AddPatient />
      </div>
    </div>
  );
}

export default AdminAddPatientPage;
