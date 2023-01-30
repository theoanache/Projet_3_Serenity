import React from "react";
import FolderOperation from "./FolderOperation";
import detente from "./assets/detente.jpg";
import detente2 from "./assets/detente2.jpg";
import { useAuth } from "../../contexts/AuthContext";

function Operation() {
  const { role } = useAuth();

  return (
    <div className="flex justify-center mb-8 mt-12">
      <div
        className={`border-4 border-yellow-one rounded-2xl w-[90%] py-4 px-6 flex gap-6 ${
          role === 1
            ? "bg-background-dark text-white"
            : "bg-background-lighty text-font-dark3"
        }`}
      >
        <div className=" w-3/5 ">
          <h2 className="ml-4">Schéma et documentations</h2>
          <div className="flex gap-2 mt-5 w-full">
            <FolderOperation />
          </div>
        </div>
        <div className=" w-2/5 mb-5">
          <h2>Les vidéos du médecin</h2>
          <div className="gap-2 pr-10 mt-6">
            <div className="flex items-center mt-4 ">
              <img
                className="w-20 rounded-lg"
                src={detente}
                alt="Folder check"
              />
              <div>
                <h4 className="ml-2">Playlist détente</h4>
                <h4 className="ml-2 text-font-gray">2h30</h4>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img
                className="w-20 rounded-lg"
                src={detente2}
                alt="Folder check"
              />
              <div>
                <h4 className="ml-2">Comment améliorer ma prise en charge</h4>
                <h4 className="ml-2 text-font-gray">3 Min</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operation;
