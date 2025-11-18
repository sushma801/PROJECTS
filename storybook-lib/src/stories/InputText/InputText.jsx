import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputText.css";
import cssVars from "../constant";

const InputTextType = ["primary", "secondary"];

const InputText = ({
  type,
  onChange,
  label,
  ariaLabel,
  inputTextType = InputTextType[0],
  Error,
}) => {
  const [isError, setIsError] = useState(false || Error);
  const [errorMsg, setErrorMsg] = useState("Error");
  const [inputValue, setInputValue] = useState("");

  const validateEmail = (text) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(String(text).trim());
  };

  const validatePassword = (text) => {
    const pwdRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+\[\]{};':"\\|,.<>\/?`~]).{8,}$/;
    return pwdRegex.test(String(text).trim());
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    switch (type) {
      case "email": {
        if (!validateEmail(e.target.value)) {
          setIsError(true);
          setErrorMsg("Please enter valid email address");
        } else {
          setIsError(false);
          setErrorMsg("");
        }
        break;
      }
      case "password": {
        if (!validatePassword(e.target.value)) {
          setIsError(true);
          setErrorMsg(
            "Password must be 8+ chars with 1 uppercase, 1 number and 1 special char"
          );
        } else {
          setIsError(false);
          setErrorMsg("");
        }
      }
    }
    onChange(e.target.value);
  };

  return (
    <div className="container" style={cssVars}>
      <label className={`${inputTextType}-label`}>{label}</label>
      <input
        type={type}
        onChange={(e) => handleOnChange(e)}
        aria-label={ariaLabel}
        className={`${inputTextType}-input`}
        value={inputValue}
      />
      {isError && <p className="error-text">{errorMsg}</p>}
    </div>
  );
};

InputText.defaultProps = {
  inputTextType: InputTextType[0],
  type: "text",
  onChange: () => {},
};

InputText.PropTypes = {
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
  inputTextType: PropTypes.oneOf(InputTextType),

  Error: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputText;
