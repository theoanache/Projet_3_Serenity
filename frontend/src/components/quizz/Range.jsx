import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@components/components_reutilisable/Btn";
import dataRange from "./dataRange";
import malheureux from "./assets/smiley01.png";
import triste from "./assets/smiley02.png";
import content from "./assets/smiley03.png";
import heureux from "./assets/smiley04.png";

function Range({ handleNext, current, data, setData, ask, handleEnd }) {
  const [emoji, setEmoji] = useState(content);
  const [show, setShow] = useState(true);
  if (ask.length === ask[current]?.id && show === true) {
    setShow(!show);
  } else if (ask.length !== ask[current]?.id && show === false) {
    setShow(!show);
  }
  useEffect(() => {
    switch (true) {
      case data < 32:
        setEmoji(malheureux);
        break;
      case data > 33 && data < 65:
        setEmoji(triste);
        break;
      case data > 65 && data < 90:
        setEmoji(content);
        break;
      case data > 90 && data < 100:
        setEmoji(heureux);
        break;
      default:
        break;
    }
  }, [data]);
  return (
    <div className="flex  m-auto mt-20 lg:mt-10 w-[95vmin] ">
      <form className="w-[100%] flex flex-col items-center">
        <div className="relative w-[80vmin]">
          <img src={emoji} alt="smiley" className="flex m-auto w-20 mb-2" />
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={data}
            onChange={(event) => setData(event.target.value)}
            className="slider"
            list="ask"
            id="answer"
            name="answer"
          />
          <div className="h-2  w-2 rounded-[50%] bg-white opacity-70 absolute bottom-5 left-40" />
          <div className="h-1 w-1 rounded-[50%] bg-white opacity-70 absolute bottom-10 left-52" />
          <div className="h-2 w-2 rounded-[50%] bg-white opacity-70 absolute bottom-8 left-72" />
        </div>
        <div className="relative w-[80vmin] mt-2">
          {dataRange.map((element) => {
            if (data >= element.nb) {
              return (
                <div
                  className={`bg-input-range2 w-0.5 ${element.height} absolute ${element.position}`}
                />
              );
            }
            return (
              <div
                className={`bg-input-range1 w-0.5 ${element.height} absolute ${element.position}`}
              />
            );
          })}
        </div>
        <div className="flex justify-center  w-[95vmin]">
          <datalist id="ask" className="flex justify-between w-[100%] mt-5">
            <option
              className="pt-3 text-[3vmin] font-inter text-font-blue"
              value="0"
              label="Pas du tout"
            />
            <option
              className="pt-6 text-[3vmin] font-inter text-font-blue"
              value="33"
              label="Pas vraiment"
            />
            <option
              className="pt-6 text-[3vmin] font-inter text-font-blue"
              value="66"
              label="Un peu"
            />
            <option
              className="pt-3 text-[3vmin] font-inter text-font-blue"
              value="100"
              label="Énormément"
            />
          </datalist>
        </div>
        <div className="lg:mt-12">
          {show ? (
            <Button
              color="bg-btn-violet text-white text-2xl"
              handleClick={handleNext}
              label="Suivant"
              type="button"
            />
          ) : (
            <Button
              handleClick={handleEnd}
              type="button"
              label="Terminer"
              color="bg-btn-violet text-white text-2xl"
            />
          )}
        </div>
      </form>
    </div>
  );
}

Range.propTypes = {
  handleNext: PropTypes.objectOf.isRequired,
  current: PropTypes.objectOf.isRequired,
  data: PropTypes.objectOf.isRequired,
  setData: PropTypes.objectOf.isRequired,
  ask: PropTypes.arrayOf.isRequired,
  handleEnd: PropTypes.objectOf.isRequired,
};
export default Range;
