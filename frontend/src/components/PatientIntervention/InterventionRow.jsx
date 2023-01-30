import PropTypes from "prop-types";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./patientintervention.css";

function InterventionRow({ id, date }) {
  const { oneDoctor } = useAuth();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatDate = new Date(date.date).toLocaleDateString("fr-Fr", options);

  return (
    <div key={id}>
      <div
        className={`card-container ${
          date.lastname === oneDoctor.lastname ? "mySurgery" : null
        } text-white  ml-8 mt-6 pr-8`}
      >
        <div className=" date bg-violet-two mt-2.5 ml-8">
          <p className="text-center mt-2">{formatDate}</p>
          <p className="text-center">{date.time.slice(0, 5)}</p>
        </div>
        <div className="surgery-detail mt-3 mr-12">
          <h3>{date.surgeryName}</h3>
          <h2 className="text-2xl">
            {date.sex === "Féminin" ? "Mme " : "Mr "} {date.patientFirstname}{" "}
            {date.patientLastname}
          </h2>
        </div>
        <h2 className="text-2xl bloc mr-32 mt-6">{date.Bloc}</h2>
        <div className="text-2xl mt-6  mr-8 bloc">Dr {date.lastname}</div>
      </div>
    </div>
  );
}

InterventionRow.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default InterventionRow;
