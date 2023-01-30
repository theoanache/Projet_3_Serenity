import React, { useState } from "react";
import Draggable from "react-draggable";
import Geolocalisation from "./Geolocalisation";
import { useAuth } from "../../contexts/AuthContext";
import data from "./DataGeolocalisation";
import mapkine from "./assets/map-kine.jpg";
import mapinfirmie from "./assets/map-infirmie.jpg";
import mappsycho from "./assets/map-psycho.jpg";
import mappshychiatre from "./assets/map-psychiatre.jpg";
import Calendar from "./Calendar";

function Sortie() {
  const { role } = useAuth();
  const [geoloc, setGeoloc] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [getInfo, setGetInfo] = useState({});

  const handleclick = (e) => {
    setGeoloc(true);
    setSelectedSpeciality(e.target.value);
  };

  const handleClickCalendar = (path) => {
    setGetInfo(path);
  };

  const specialist = [
    { specialitie: "Kinésithérapeute" },
    { specialitie: "Infirmier(e)" },
    { specialitie: "Psychologue" },
    { specialitie: "Aide à domicile" },
  ];

  const maps = [
    { map: mapkine, specialite: "Kinésithérapeute" },
    { map: mapinfirmie, specialite: "Infirmier(e)" },
    { map: mappsycho, specialite: "Psychologue" },
    { map: mappshychiatre, specialite: "Aide à domicile" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-8 mt-12">
        <div
          className={`border-4 border-green-one rounded-2xl w-[90%] flex flex-col gap-6 ${
            role === 1
              ? "bg-background-dark text-white"
              : "bg-background-lighty text-font-dark3"
          }`}
        >
          <div className="flex w-full mt-10 gap-10">
            <div className="ml-12 w-4/5 h-10">
              <h2 className="text-lg">
                Afin de sécuriser votre retour à la maison votre chirurigien
                vous invite à prendre rendez-vous avec les professionnels de
                santé suivant :
              </h2>
            </div>
            <div className="w-3/5 mb-5 ml-10 flex flex-col">
              {specialist.map((speciality) => (
                <button
                  type="button"
                  onClick={handleclick}
                  className="bg-green-three w-2/4 h-12 flex items-center pl-3 text-white font-semibold rounded-[18px] mt-3"
                  value={speciality.specialitie}
                >
                  {speciality.specialitie}
                </button>
              ))}
            </div>
          </div>
          {geoloc ? (
            <div className="">
              <h2 className="ml-12">
                Choisissez votre futur.e {selectedSpeciality}
              </h2>
              <div className="flex h-[26rem]">
                <div className="ml-12 w-10/12 h-[60%] text-black flex flex-wrap gap-x-6 gap-y-3">
                  {data
                    .filter(
                      (event) =>
                        selectedSpeciality === null ||
                        event.pathologie === selectedSpeciality
                    )
                    .map((pathologie) => (
                      <Geolocalisation
                        pathologie={pathologie}
                        handleClickCalendar={() =>
                          handleClickCalendar(pathologie)
                        }
                      />
                    ))}
                </div>
                <div
                  className="w-4/12 mb-14 overflow-scroll mr-10 rounded-lg relative"
                  id="scroll"
                >
                  {maps
                    .filter((event) => event.specialite === selectedSpeciality)
                    .map((map) => (
                      <Draggable defaultPosition={{ x: -530, y: -200 }}>
                        <img
                          className="h-screen max-w-none cursor-pointer"
                          src={map.map}
                          alt="map"
                        />
                      </Draggable>
                    ))}
                </div>
              </div>
            </div>
          ) : null}
          {getInfo.firstname && <Calendar getInfo={getInfo} />}
        </div>
      </div>
    </div>
  );
}

export default Sortie;
