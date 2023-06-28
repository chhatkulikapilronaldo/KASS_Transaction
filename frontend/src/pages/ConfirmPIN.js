import React from "react";
import { InputField, Button } from "../components";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export const ConfirmPIN = () => {
  return (
    <div className="confirmpin">
      <div className="wrapper">
        <div className="confirm-form">
          <form>
            <InputField
              icon={faLock}
              label="ENTER YOUR PIN"
              name="PIN_Number"
              type="number"
            />
            <Button className="confirm-button" name="Confirm" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
