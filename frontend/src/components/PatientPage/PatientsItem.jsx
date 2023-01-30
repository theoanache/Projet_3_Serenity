import React from "react";
import "./patientItem.css";
import PropTypes from "prop-types";

function PatientsItem({ patient }) {
  return (
    <div className="patientCard ">
      <img
        className="logoPatient"
        src={
          patient.image
            ? patient.image
            : "../../../src/assets/images/avatar-undefined.png"
        }
        alt="patient"
      />

      <div>
        <h4>
          {patient.firstname} {patient.lastname}
        </h4>
        <p className="patientEmail">{patient.email}</p>
        {patient.status === "Actif" ? (
          <h4 className=" text-font-green2 text-xs"> Actif</h4>
        ) : (
          <h4 className=" text-font-red text-xs"> Inactif </h4>
        )}
      </div>
    </div>
  );
}

PatientsItem.propTypes = {
  patient: PropTypes.string.isRequired,
};
export default PatientsItem;
