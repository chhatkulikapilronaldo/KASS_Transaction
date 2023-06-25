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
export const Deposit = () => {
  const [displayState, setDisplayState] = useState(true);
  const handleModalClose = () => {
    setDisplayState(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <div className="depositWrapper">
        <div className="depositDiv">
          <div className="deposit-form">
            <FontAwesomeIcon icon={faMultiply} className="close" />
            <form>
              <InputField
                type="number"
                name="Account_Number"
                label="A/C Number"
                icon={faFolderOpen}
                value="1654257899854562"
                disability="true"
              />
              <InputField
                type="number"
                name="Amount"
                label="Deposit Amount"
                icon={faSackDollar}
              />
              <InputField
                type="text"
                name="Remarks"
                label="Remarks"
                icon={faPencilSquare}
              />
              <Button className="deposit-button" type="submit" name="Deposit" />
            </form>
          </div>
        </div>
      </div> */}
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal-clear">
            <FontAwesomeIcon icon={faClose} />
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
