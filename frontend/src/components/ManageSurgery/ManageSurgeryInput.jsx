import PropTypes from "prop-types";
import React from "react";

function ManageSurgeryInput({
  id,
  classNameDiv,
  label,
  type,
  value,
  name,
  placeholder,
  classNameInput,
  addNewSurgery,
  setAddNewSurgery,
}) {
  const handleChange = (e) => {
    setAddNewSurgery({
      ...addNewSurgery,
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
        placeholder={placeholder}
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
}

ManageSurgeryInput.propTypes = {
  classNameDiv: PropTypes.string.isRequired,
  classNameInput: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  addNewSurgery: PropTypes.func.isRequired,
  setAddNewSurgery: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ManageSurgeryInput;
