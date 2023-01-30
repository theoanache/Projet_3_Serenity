import React, { useState } from "react";
import "../assets/css/patientsearch.css";
import PropTypes from "prop-types";

function PatientsSearch({ searchPatient }) {
  const [query, setQuery] = useState("");
  const [findBy, setFindBy] = useState("lastname");

  return (
    <div>
      <input
        className="py-1 px-3 text-black rounded"
        id="search"
        type="text"
        placeholder="Recherche"
        onChange={(event) => {
          const input = event.target;
          setQuery(input.value);
        }}
      />

      <select
        className="py-1 px-3 text-black  rounded"
        name="patientList"
        id="patient-select"
        onChange={(event) => {
          const input = event.target;
          setFindBy(input.value);
        }}
      >
        <option value="lastname">Nom</option>
        <option value="firstname">Prénom</option>
        <option value="email">Email</option>
      </select>
      <button
        onClick={() => searchPatient(query, findBy)}
        id="patientFilter"
        className="bg-violet-two text-white font-bold py-1 px-4 rounded"
        type="button"
      >
        Filtrer
      </button>
    </div>
  );
}
PatientsSearch.propTypes = {
  searchPatient: PropTypes.string.isRequired,
};
export default PatientsSearch;
