import PropTypes from "prop-types";
import React from "react";
import AddPatientButton from "./AddPatientButton";
import PatientsSearch from "./PatientsSearch";
import "./subHeader.css";

import "../../Tailwind.css";

function PatientsSubHeader({ searchPatient }) {
  return (
    <div className="w-full flex justify-around mb-3">
      <div className="">
        <PatientsSearch searchPatient={searchPatient} />
      </div>
      <AddPatientButton />
    </div>
  );
}

PatientsSubHeader.propTypes = {
  searchPatient: PropTypes.string.isRequired,
};

export default PatientsSubHeader;
