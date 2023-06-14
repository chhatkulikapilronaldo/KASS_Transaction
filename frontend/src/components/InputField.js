import React from "react";

export const InputField = ({ type, name, handleInput, label }) => {
  return (
    <div className="inputfield">
      {/* <label htmlFor={name}>{label}I AM LABEL</label> */}
      <p>{label}</p>
      <input
        type={type}
        name={name}
        onChange={handleInput}
        placeholder={`Enter ${name}`}
      />
    </div>
  );
};
