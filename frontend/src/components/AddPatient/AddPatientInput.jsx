import PropTypes from "prop-types";
import React from "react";
import "../../Tailwind.css";

function AddPatientInput({
  name,
  id,
  type,
  classNameInput,
  classNameDiv,
  placeholder,
  label,
  value,
  addNewPatient,
  setAddNewPatient,
}) {
  const handleChange = (e) => {
    setAddNewPatient({
      ...addNewPatient,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div key={id} className={classNameDiv}>
      <label className="ml-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={classNameInput}
        value={value}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
}

AddPatientInput.propTypes = {
  classNameDiv: PropTypes.string.isRequired,
  classNameInput: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  addNewPatient: PropTypes.func.isRequired,
  setAddNewPatient: PropTypes.func.isRequired,
};

export default AddPatientInput;
