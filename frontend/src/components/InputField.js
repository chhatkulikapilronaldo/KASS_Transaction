import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const InputField = ({ type, name, handleInput, label, icon }) => {
  return ( 
    <div className="inputfield">
      {/* <label htmlFor={name}>{label}I AM LABEL</label>  */}
      <p>{label}</p>
      <div className="inputfield-input">
        <FontAwesomeIcon icon={icon} />
        <input
          type={type}
          name={name}        
          onChange={handleInput}
          placeholder={`Enter ${name}`} required
        />
      </div>
    </div>
  
  );
};