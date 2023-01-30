import React from "react";
import axios from "axios";
import ManageSurgeryButton from "./ManageSurgeryButton";
import "./patientintervention.css";
import "../../Tailwind.css";
import InterventionRow from "./InterventionRow";

function PatientIntervention() {
  const [date, setDate] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/surgeries/search/timeDate", {
        withCredentials: true,
      })
      .then((res) => setDate(res.data));
  }, []);

  return (
    <div className="w-10/12 pb-10">
      <ManageSurgeryButton />
      {date.map((d) => {
        return <InterventionRow date={d} id={d.id} />;
      })}
    </div>
  );
}

export default PatientIntervention;
