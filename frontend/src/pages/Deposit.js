import React, { useState } from "react";
import { InputField, Button } from "../components";
import {
  faSackDollar,
  faFolderOpen,
  faPencilSquare,
  faMultiply,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../components/Modal";
import ModalImage from "../assets/images/deposit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Deposit = ({displayState}) => {
//   const [displayState, setDisplayState] = useState(false);
  const handleModalClose = () => {
    displayState(true);
    console.log("clicked");
};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal-clear">
            <FontAwesomeIcon icon={faClose} onClick={handleModalClose}/>
          </div>
          <div className="modal-form">
            <div className="form-image">
              <img src={ModalImage} alt="change" />
            </div>
            <div className="form">
              <form onSubmit={handleSubmit}>
                <InputField
                  type="number"
                  name="Account_Number"
                  label="A/C Number"
                  icon={faFolderOpen}
                  value="1542658974589652"
                  disability="true"
                  // handleInput={handleFormInput}
                />
                <InputField
                  type="number"
                  name="Amount"
                  label="Amount"
                  icon={faSackDollar}
                  // handleInput={handleFormInput}
                />
                <InputField
                  type="text"
                  name="Remarks"
                  label="Remarks"
                  icon={faPencilSquare}
                  // handleInput={handleFormInput}
                />
                <Button className="modal-button" type="Submit" name="Deposit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
