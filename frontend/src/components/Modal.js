import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "./InputField";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import useFormHandling from "../hooks/useFormHandling";
import usePostData from "../hooks/usePostData";
import usePutData from "../hooks/usePutData";
const kapil_PinUpdate_url = "http://10.7.1.13:8080/users/update";
const ankit_PassUpdate_url = "http://10.7.1.183:9000/users/updatePassword";
export const Modal = ({
  transType,
  oldData,
  oldDataLabel,
  newData,
  confirmData,
  icon,
  modalImage,
  displayState,
}) => {
  const [inType, setInType] = useState("text");
  const handleModalClose = () => {
    displayState(true);
  };

  const [validPass, setValidPass] = useState(false);
  const { formData, handleFormInput } = useFormHandling({
    OldPassword: "",
    NewPassword: "",
    ConfirmPassword: "",
  });
  const { putInformation, updateUserPassword } = usePutData(
    ankit_PassUpdate_url,
    formData
  );
  useEffect(() => {
    if (transType === "Change Password") {
      setInType("text");
    } else if (transType === "Change PIN") {
      setInType("number");
    } else {
      setInType("text");
    }
  }, [transType]);

  useEffect(() => {
    if (formData.OldPassword) {
      setValidPass(true);
    } else if (formData.OldPassword.length === 0) {
      setValidPass(false);
    } else {
      setValidPass(false);
    }
  }, [formData.OldPassword]);

  console.log(formData);
  console.log(putInformation);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserPassword();
  };
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal-clear">
          <FontAwesomeIcon icon={faClose} onClick={handleModalClose} />
        </div>
        <div className="modal-form">
          <div className="form-image">
            <img src={modalImage} alt="change" />
          </div>
          <div className="form">
            <h3>{transType}</h3>
            <form onSubmit={handleSubmit}>
              <InputField
                type={inType}
                name={oldData}
                label={oldDataLabel}
                icon={icon}
                handleInput={handleFormInput}
              />
              {transType === "Change Password" ? (
                validPass ? (
                  <span>*Old password must be matched*</span>
                ) : (
                  " "
                )
              ) : (
                <p>hello</p>
              )}

              <InputField
                type={inType}
                name={newData}
                label={newData}
                icon={icon}
                handleInput={handleFormInput}
              />
              <InputField
                type={inType}
                name={confirmData}
                label={confirmData}
                icon={icon}
                handleInput={handleFormInput}
              />
              <Button className="modal-button" type="Submit" name="Confirm" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
