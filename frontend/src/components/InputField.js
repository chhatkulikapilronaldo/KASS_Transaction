import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const InputField = ({
  disability,
  value,
  type,
  name,
  handleInput,
  label,
  icon,
}) => {
  const [inputState, setInputState] = useState(false);
  useEffect(() => {
    if (disability === "true") {
      setInputState(true);
    } else {
      setInputState(false);
    }
  }, [disability]);
  return (
    <div className="inputfield">
      {/* <label htmlFor={name}>{label}I AM LABEL</label> */}
      <p>{label}</p>
      <div className="inputfield-input">
        <FontAwesomeIcon icon={icon} />
        <input
          type={type}
          name={name}
          onChange={handleInput}
          placeholder={`Enter ${name}`}
          value={value}
          disabled={inputState}
          required
        />
      </div>
    </div>
  );
};
