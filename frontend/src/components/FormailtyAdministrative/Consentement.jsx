import React, { useRef, useEffect } from "react";
import consentement from "./Assets/consentement-eclaire.jpg";

function Consentement() {
  const formRef = useRef();
  useEffect(() => {
    if (formRef.current) {
      window.scrollTo({
        left: 0,
        top: formRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      ref={formRef}
      className="w-full mt-16 flex flex-col justify-center items-center"
    >
      <h2 className="font-semibold mb-8">Consentement éclairé</h2>
      <img className="w-[70%]" src={consentement} alt="consentement éclairé" />
    </div>
  );
}

export default Consentement;
