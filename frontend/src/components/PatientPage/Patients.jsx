import ReactPaginate from "react-paginate";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientsItem from "./PatientsItem";
import PatientsSubHeader from "./PatientsSubHeader";
import { useAuth } from "../../contexts/AuthContext";
import "./patient.css";

function Patients() {
  const { oneDoctor, setOnePatient } = useAuth();
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    if (oneDoctor.id) {
      axios
        .get(`http://localhost:8000/api/patients/byDoctor/${oneDoctor.id}`, {
          withCredentials: true,
        })
        .then((res) => setPatients(res.data));
    }
  }, []);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 15;

  const currentItems = patients.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(patients.length / 15);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 15) % patients.length;
    setItemOffset(newOffset);
  };

  const searchPatient = (query, findBy) => {
    if (query !== "" && findBy !== "") {
      axios
        .get(`http://localhost:8000/api/patients/search/${query}/by/${findBy}`)
        .then((response) => {
          setPatients(response.data);
        });
    } else {
      axios.get("http://localhost:8000/api/patients").then((response) => {
        setPatients(response.data);
      });
    }
  };

  return (
    <div className=" bg-background-dark flex items-center flex-col text-white mt-3">
      <PatientsSubHeader searchPatient={searchPatient} />
      <div className="patientList ">
        {currentItems.map((patient) => {
          return (
            <div
              role="presentation"
              onClick={() => {
                setOnePatient(patient);
                navigate("/comprendre_mon_operation");
              }}
              className="cursor-pointer"
            >
              <PatientsItem patient={patient} key={patient.id} />
            </div>
          );
        })}

        <ReactPaginate
          className="paginator"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Patients;
