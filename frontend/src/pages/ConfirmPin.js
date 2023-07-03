import React, { useContext, useEffect, useState } from "react";
import { InputField, Button } from "../components";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from "../hooks/UserDataContext";
import usePostData from "../hooks/usePostData";
import useFormHandling from "../hooks/useFormHandling";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const ankit_TransferURL = "http://10.7.1.183:9000/users/fundTransfer";
export const ConfirmPIN = () => {
  const { value3 } = useContext(UserDataContext);
  const transferData = value3;
  const navigate = useNavigate();
  const [validPIN, setValidPIN] = useState(true);
  const { formData, handleFormInput } = useFormHandling();
  const transferRequest = { ...transferData, ...formData };
  const { postInformation, postUserInfo } = usePostData(
    ankit_TransferURL,
    transferRequest
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    delete transferRequest.ACNumber;
    postUserInfo();
    if (postInformation?.status === 200) {
      alert(postInformation?.message);
      navigate("/dashboard/accounttab");
    } else {
      toast.success("Fund transfer failed", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };
  useEffect(() => {
    if (formData?.PIN?.length === 0) {
      setValidPIN(true);
    } else if (formData?.PIN?.length != 4) {
      setValidPIN(false);
    } else {
      setValidPIN(true);
    }
  }, [formData?.PIN]);
  console.log(transferRequest);
  console.log(postInformation);
  return (
    <div className="confirmpin">
      <div className="wrapper">
        <div className="confirm-form">
          <form onSubmit={handleSubmit}>
            <InputField
              icon={faLock}
              label="ENTER YOUR PIN"
              name="PIN"
              type="number"
              handleInput={handleFormInput}
            />
            {validPIN ? (
              " "
            ) : (
              <span className="invalid-pinnumber">*must of only 4 digits</span>
            )}
            <Button className="confirm-button" name="Confirm" type="submit" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
