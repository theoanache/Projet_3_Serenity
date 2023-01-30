import React from "react";
import { PropTypes } from "prop-types";

function Btn({ type, label, handleClick, color }) {
  return (
    <div>
      <button
        /* eslint-disable-next-line react/button-has-type */
        type={type}
        className={`${color} p-2 rounded-xl`}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
}

Btn.propTypes = {
  type: PropTypes.arrayOf(["button", "submit", "reset"]).isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
export default Btn;
