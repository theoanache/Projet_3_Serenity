import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import star from "./assets/star.png";

function Geolocalisation({ pathologie, handleClickCalendar }) {
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
    <div ref={formRef} className="flex h-44 w-[21rem] ">
      <div className="w-full bg-white rounded-lg flex ">
        <div>
          <img className="ml-5 mt-2 w-16" src={pathologie.image} alt="avatar" />
        </div>
        <div className="ml-5 mt-2">
          <h4 className="text-blue-three font-semibold">
            {pathologie.lastname} {pathologie.firstname}
          </h4>
          <h4>{pathologie.pathologie}</h4>
          <div className="flex items-center ">
            <img className="w-4 h-4" src={star} alt="icon etoile" />
            <h4 className="ml-1">{pathologie.note}</h4>
            <h4 className="ml-2 text-font-gray">{pathologie.reviews}</h4>
          </div>
          <h4>{pathologie.adress}</h4>
          <div className="mt-2 mb-2 flex gap-5">
            <img
              role="presentation"
              onClick={handleClickCalendar}
              className="w-9 cursor-pointer"
              src={pathologie.icon1}
              alt="icon-calendar"
            />
            <img className="w-9" src={pathologie.icon2} alt="icon-phone" />
          </div>
        </div>
      </div>
    </div>
  );
}

Geolocalisation.propTypes = {
  pathologie: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    pathologie: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    icon1: PropTypes.string.isRequired,
    icon2: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleClickCalendar: PropTypes.func.isRequired,
};

export default Geolocalisation;
