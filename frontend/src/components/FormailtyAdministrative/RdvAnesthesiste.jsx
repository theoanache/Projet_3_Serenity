import React, { useEffect, useRef } from "react";
import anesth1 from "./Assets/dossier_anesthesie-1.jpg";
import anesth2 from "./Assets/dossier_anesthesie-2.jpg";
import anesth3 from "./Assets/dossier_anesthesie-3.jpg";
import anesth4 from "./Assets/dossier_anesthesie-4.jpg";

function RdvAnesthesiste() {
  const formRef = useRef();
  useEffect(() => {
    if (formRef.current) {
      window.scrollTo({
        left: 0,
        top: 700,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      ref={formRef}
      className="w-full mt-16 flex flex-col justify-center items-center"
    >
      <h2 className="font-semibold mb-8">Documents anesthésiste</h2>
      <img
        className="w-[70%]"
        src={anesth1}
        alt="dossier anesthesiste"
        ref={formRef}
      />
      <img className="w-[70%] mt-6" src={anesth2} alt="dossier anesthesiste" />
      <img className="w-[70%] mt-6" src={anesth3} alt="dossier anesthesiste" />
      <img className="w-[70%] mt-6" src={anesth4} alt="dossier anesthesiste" />
    </div>
  );
}

export default RdvAnesthesiste;
