import React from "react";
import { NavLink } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PropTypes } from "prop-types";
import { useAuth } from "../../contexts/AuthContext";

function SecondNavBarItem({ item }) {
  const { role } = useAuth();
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? `decoration-none ring-[5px] ${item.color} w-44 h-44 flex justify-center text-center rounded-3xl`
          : "decoration-none  w-44 h-44 flex justify-center text-center rounded-3xl"
      }
    >
      <div
        className={`flex flex-col items-center pt-5 pb-6 gap-3  w-44 rounded-3xl  ${
          role === 1
            ? "bg-background-darker text-white"
            : "bg-background-lighty"
        }`}
      >
        <div style={{ width: 70, height: 70 }}>
          <CircularProgressbar
            value={item.data}
            text={`${item.data}%`}
            strokeWidth={10}
            background
            styles={buildStyles({
              pathColor: item.color1,
              trailColor: item.color2,
              backgroundColor: "#F6F4F4",
              textColor: "#11142D",
              textSize: "20px",
              pathTransitionDuration: 2,
            })}
          />
        </div>
        <p className="text-sm w-[70%]">{item.title}</p>
      </div>
    </NavLink>
  );
}

SecondNavBarItem.propTypes = {
  item: PropTypes.shape.isRequired,
};

export default SecondNavBarItem;
