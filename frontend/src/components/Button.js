import React, { useEffect, useState } from "react";

export const Button = ({
  className,
  type,
  handleClick,
  value,
  name,
  disability,
}) => {
  const [buttonState, setButtonState] = useState(false);
  useEffect(() => {
    if (disability === "true") {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [disability]);
  return (
    <div className="button">
      <button
        className={className}
        type={type}
        onClick={handleClick}
        value={value}
        disabled={buttonState}
      >
        {name}
      </button>
    </div>
  );
};
