import React from "react";
import dataPreparationArrivee from "@components/FormailtyAdministrative/arrivée/dataPréparationArrivée";
import Btn from "@components/components_reutilisable/Btn";
import { useAuth } from "../../../contexts/AuthContext";

function Arrivee() {
  const [current, setCurrent] = React.useState(0);
  const { role } = useAuth();
  const handleNext = () => {
    if (current < 3) {
      setCurrent(current + 1);
    }
  };
  const handleBefore = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="flex justify-center mb-8 mt-12">
      <div
        className={`border-4 border-pink-one rounded-2xl w-[90%] pt-4 pb-4 ${
          role === 1
            ? "bg-background-dark text-white"
            : "bg-background-lighty text-font-dark3"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <h3 className="text-blue-one">
              {dataPreparationArrivee[current].label}
            </h3>
            <h2 className="">{dataPreparationArrivee[current].title}</h2>
          </div>
          <div className="flex justify-center gap-6 w-[100%]">
            <div className="w-[40%]">
              <img
                src={dataPreparationArrivee[current].img}
                alt=""
                className="w-10/12 active:scale-150 transform transition duration-500"
                role="presentation"
                id="img"
              />
            </div>
            <div className=" w-[50%] flex flex-col justify-center">
              <p className="text-justify mb-6">
                {dataPreparationArrivee[current].title1}
              </p>
              <p className="mb-2">
                {dataPreparationArrivee[current].soustitre}
              </p>
              <dl>
                <li className="mb-1">
                  {dataPreparationArrivee[current].liste.a}
                </li>
                <li className="mb-1">
                  {dataPreparationArrivee[current].liste.z}
                </li>
                <li className="mb-1">
                  {dataPreparationArrivee[current].liste.e}
                </li>
                <li className="mb-1">
                  {dataPreparationArrivee[current].liste.r}
                </li>
                {(
                  <li className="mb-1">
                    {dataPreparationArrivee[current].liste.t}
                  </li>
                ) && null}
              </dl>
            </div>
          </div>
        </div>
        <div className="flex justify-between m-auto w-[80%] my-4">
          <Btn
            color="bg-pink-one text-white"
            handleClick={handleBefore}
            label="Précédent"
            type="button"
          />
          <Btn
            color="bg-pink-one text-white"
            handleClick={handleNext}
            label="Suivant"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default Arrivee;
