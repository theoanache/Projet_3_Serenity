import React from "react";
import { BsPersonPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AddPatientButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/doctor/nouveau_patient");
  }
  return (
    <div className="flex items-center rounded-lg">
      <div>
        <button
          type="button"
          onClick={handleClick}
          className="bg-violet-four text-white font-bold py-1 px-6 rounded flex flex-row"
        >
          Ajouter un nouveau patient
          <div className="flex items-center pl-3 pt-1">
            <BsPersonPlus />
          </div>
        </button>
      </div>
    </div>
  );
}

export default AddPatientButton;
