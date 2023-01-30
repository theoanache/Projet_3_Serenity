import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import Folder from "./Folder";

function FolderOperation() {
  const { onePatient, role } = useAuth();
  const [ressources, setRessources] = useState([]);

  const getRessources = () => {
    if (onePatient.id !== undefined) {
      axios
        .get(
          `http://localhost:8000/api/surgeries/ressources/${onePatient.id}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setRessources(res.data, "ressource");
        });
    }
  };

  useEffect(() => getRessources(), [onePatient.id]);

  return (
    <div className=" flex px-4 mb-4">
      <div className="flex flex-wrap gap-x-6 gap-y-3 ">
        {ressources &&
          ressources.map((ressource) => <Folder image={ressource.image} />)}
        {role === 1 && (
          <div className="mt-2 flex flex-col w-36 gap-2 font-rubik ">
            <NavLink to="">
              <div className="flex justify-center items-center h-[105px] bg-[#636363] rounded-3xl text-5xl">
                +
              </div>
            </NavLink>
            <h3>Ajouter un dossier</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default FolderOperation;
