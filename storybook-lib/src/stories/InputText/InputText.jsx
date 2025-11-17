import React from "react";
import PropTypes from "prop-types";

const InputText = ({ type, onChange, label, ariaLabel }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} onchange={onChange} aria-label={ariaLabel} />
    </div>
  );
};

InputText.PropTypes = {
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
