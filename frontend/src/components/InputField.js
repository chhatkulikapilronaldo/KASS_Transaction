import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const InputField = ({ type, name, handleInput, label, icon, value }) => {
  return ( 
    <div className="inputfield">
      {/* <label htmlFor={name}>{label}I AM LABEL</label>  */}
      <p>{label}</p>
      <div className="inputfield-input">
        <FontAwesomeIcon icon={icon} />
        <input
          type={type}
          name={name}   
          value={value}     
          onChange={handleInput}
          placeholder={`Enter ${name}`} required
        />
      </div>
    </div>
  
  );
};