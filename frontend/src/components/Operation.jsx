import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Operation() {
  const { role } = useAuth();
  return (
    <div className="flex justify-center mb-8 mt-12">
      <div
        className={`border-4 border-yellow-one rounded-2xl w-[90%] py-4 px-6 flex flex-col gap-6 ${
          role === 1
            ? "bg-background-dark text-white"
            : "bg-background-lighty text-font-dark3"
        }`}
      >
        <h2>Comprendre mon opération</h2>
        <div>
          {role === 1 && (
            <div className="flex flex-col w-40 gap-2 font-rubik">
              <NavLink to="">
                <div className="flex justify-center items-center h-36 bg-[#636363] rounded-3xl text-5xl">
                  +
                </div>
              </NavLink>
              <h3>Ajouter une nouvelle étape</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Operation;
