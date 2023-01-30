import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import star from "./assets/star.png";
import CalendarRDV from "./CalendarRDV";
import "react-toastify/dist/ReactToastify.css";

function Calendar({ getInfo }) {
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

  const handleClickToast = () => {
    toast.success("Votre rendez-vous a été ajouté à votre agenda", {
      position: "top-center",
      theme: "colored",
      style: { fontSize: "1.1em", textAlign: "center" },
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <div ref={formRef} className="flex gap-10 mb-8 w-full pl-12">
      <div className="w-1/2">
        <h2>Ajouter votre rendez-vous à votre agenda</h2>
        <div>
          <div className="mt-5 h-30 w-2/3 bg-white rounded-lg flex">
            <div>
              <img
                className="ml-5 mt-2 w-16"
                src={getInfo.image}
                alt="avatar"
              />
            </div>
            <div className="ml-5 mt-2">
              <h4 className="text-blue-three font-semibold">
                {getInfo.lastname} {getInfo.firstname}
              </h4>
              <h4>{getInfo.pathologie}</h4>
              <div className="flex items-center ">
                <img className="w-4 h-4" src={star} alt="icon etoile" />
                <h4 className="ml-1">{getInfo.note}</h4>
                <h4 className="ml-2 text-font-gray">{getInfo.reviews}</h4>
              </div>
              <h4>{getInfo.adress}</h4>
              <div className="mt-2 mb-2 flex gap-5">
                <img className="w-9" src={getInfo.icon1} alt="icon-calendar" />
                <img className="w-9" src={getInfo.icon2} alt="icon-phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 h-200 bg-white rounded-[24px]">
        <h2 className="mt-4">Nouveau rendez-vous</h2>
        <div className="mt-4 mb-6 w-[80%]">
          <CalendarRDV />
        </div>
        <div />
        <button
          onClick={handleClickToast}
          type="button"
          className="bg-green-three text-white font-semibold w-1/3 h-12 items-center rounded-full mt-3 mb-4"
        >
          Ajouter
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

Calendar.propTypes = {
  getInfo: PropTypes.string.isRequired,
};

export default Calendar;
