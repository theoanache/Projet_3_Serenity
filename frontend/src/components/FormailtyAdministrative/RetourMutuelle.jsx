import React, { useEffect, useRef } from "react";
import retour from "./Assets/retour-mutuelle.jpg";

function RetourMutuelle() {
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
    <div className="w-full mt-16 flex flex-col justify-center items-center">
      <h2 className="font-semibold mb-8">Retour Mutuelle</h2>
      <img
        className="w-[70%]"
        src={retour}
        alt="consentement éclairé"
        ref={formRef}
      />
    </div>
  );
}

export default RetourMutuelle;
