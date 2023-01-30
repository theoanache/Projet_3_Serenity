import React, { useState } from "react";
import "../../assets/css/patientsearch.css";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

function PatientsSearch({ searchPatient }) {
  const [query, setQuery] = useState("");
  const [findBy, setFindBy] = useState("lastname");

  return (
    <div>
      <div className="flex items-center  gap-6">
        <div className="flex items-center w-56 relative">
          <input
            className="relative py-1 px-3 rounded w-56 border border-violet-two font-semibold"
            id="search"
            type="text"
            placeholder="Recherche"
            onChange={(event) => {
              const input = event.target;
              setQuery(input.value);
              <CiSearch className="absolute" />;
            }}
          />
          <img
            src="/src/assets/images/loupe.png"
            alt="loupe"
            className="loupeImage absolute right-3"
          />
        </div>
        <select
          className="py-1 px-8 text-black rounded "
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
          className="bg-violet-two text-white font-bold py-1 px-8 rounded"
          type="button"
        >
          Filtrer
        </button>
      </div>
    </div>
  );
}

PatientsSearch.propTypes = {
  searchPatient: PropTypes.string.isRequired,
};
export default PatientsSearch;
