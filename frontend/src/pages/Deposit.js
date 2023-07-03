import React, { useContext, useEffect, useState } from "react";
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
import useFormHandling from "../hooks/useFormHandling";
import usePostData from "../hooks/usePostData";
import { UserDataContext } from "../hooks/UserDataContext";
import useGetData from "../hooks/useGetData";
import { useNavigate } from "react-router-dom";
export const Deposit = ({ displayState }) => {
  //   const [displayState, setDisplayState] = useState(false);
  const deposit_URL = "http://10.7.1.183:9000/users/deposit_Fund";
  const kapil_Deposit_Url = "http://10.7.1.13:8080/users/depositAmount";
  const { getInformation, getUserInfo } = useGetData(kapil_Deposit_Url);
  const { value1 } = useContext(UserDataContext);
  const accountNumber = value1;
  const handleModalClose = () => {
    displayState(false);
  };
  console.log(displayState);

  const { formData, handleFormInput } = useFormHandling({
    Account_Number: "",
    Amount: "",
    remarks: "",
  });
  const { postInformation, postUserInfo } = usePostData(deposit_URL, formData);
  useEffect(() => {
    if (postInformation === undefined) {
      console.log("hello");
    } else {
      displayState(false);
    }
  }, [postInformation]);
  const handleSubmit = (e) => {
    e.preventDefault();
    postUserInfo();
  };
  return (
    <>
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal-clear">
            <FontAwesomeIcon icon={faClose} onClick={handleModalClose} />
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
                  value={accountNumber?.Account_Number}
                  disability="true"
                  handleInput={handleFormInput}
                />
                <InputField
                  type="number"
                  name="Amount"
                  label="Amount"
                  icon={faSackDollar}
                  handleInput={handleFormInput}
                />
                <InputField
                  type="text"
                  name="Remarks"
                  label="Remarks"
                  icon={faPencilSquare}
                  handleInput={handleFormInput}
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
