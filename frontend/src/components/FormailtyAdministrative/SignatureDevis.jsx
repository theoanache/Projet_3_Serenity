import React, { useEffect, useRef } from "react";
import devis from "./Assets/devis-acte.jpg";

function SignatureDevis() {
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
      <h2 className="font-semibold mb-8">Signature du devis</h2>
      <img className="w-[70%]" src={devis} alt="devis" ref={formRef} />
    </div>
  );
}

export default SignatureDevis;
