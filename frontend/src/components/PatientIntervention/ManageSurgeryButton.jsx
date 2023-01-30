import React from "react";
import "./managesurgerybutton.css";
import { useNavigate } from "react-router-dom";
import { CiViewBoard } from "react-icons/ci";

function ManageSurgeryButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/chirurgies");
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className=" rounded-lg py-1 px-6 surgerybutton bg-violet-two"
      >
        Gerer mes chirurgies
        <CiViewBoard className="h-6 w-auto rotate-180" />
      </button>
    </div>
  );
}

export default ManageSurgeryButton;
