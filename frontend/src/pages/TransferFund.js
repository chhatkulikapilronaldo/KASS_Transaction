import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBank,
  faFolderOpen,
  faMoneyBill,
  faPenToSquare,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import fundTransfer from "../assets/images/fundtransfer.png";
import { InputField, Button } from "../components";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../hooks/UserDataContext";
import useFormHandling from "../hooks/useFormHandling";
export const TransferFund = () => {
  const { value1, value2 } = useContext(UserDataContext);
  const userAccountDetails = value1;
  const transferDetail = value2;
  const navigate = useNavigate();
  const Details = {
    Account_Holder: "Anu Shrestha",
    Account_Number: "4449202108331816",
    Total_Amount: "1229000",
  };

  const [hideAmount, setHideAmount] = useState(false);
  const { formData, handleFormInput } = useFormHandling();

  const handleSubmit = (e) => {
    e.preventDefault();
    transferDetail({ ...formData, ACNumber: `${Details.Account_Number}` });
    navigate("/dashboard/paymentdetail");
  };

  return (
    <>
      <div className="transferFund">
        <div className="transferFund-maindiv">
          <div className="transferFund-form">
            {/* <div className="close">
              <FontAwesomeIcon icon={faClose} />
            </div> */}
            <div className="senderDetails">
              <div className="accountdetails">
                <h3>Transfer From</h3>
                <p className="senderaccount">
                  <span className="senderAmount">
                    NPR.
                    {hideAmount
                      ? " XXXXXX"
                      : `${Intl.NumberFormat("en-IN").format(
                          userAccountDetails?.Total_Amount
                        )}`}
                  </span>
                  <span className="hideamount">
                    {hideAmount ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        onClick={() => setHideAmount(!hideAmount)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={() => setHideAmount(!hideAmount)}
                      />
                    )}
                  </span>
                  <div className="account-button">
                    <button className="account">PRIMARY</button>
                  </div>
                </p>
                <p className="accounttype">
                  NEW SUPER CHAMATKARIK BACHAT KHATA
                </p>
                <p className="accountNumber">
                  A/C No: {userAccountDetails?.Account_Number}
                  {/* A/C No. {userAccountDetails?.Account_Number} */}
                </p>
              </div>
              <div className="transfer-image">
                <img src={fundTransfer} alt="Fund Transfer" />
              </div>
            </div>
            <div className="receiverDetails">
              <h3>Receiver's Details</h3>
              <form onSubmit={handleSubmit}>
                <InputField
                  type="text"
                  name="ReceiverBank"
                  label="Receiver's Bank"
                  value="Global IME Bank"
                  disability="true"
                  icon={faBank}
                />
                <InputField
                  type="number"
                  name="Receiver_Account"
                  label="Receiver's A/C Number"
                  icon={faFolderOpen}
                  handleInput={handleFormInput}
                />
                <InputField
                  type="number"
                  name="Amount"
                  label="Amount"
                  icon={faMoneyBill}
                  handleInput={handleFormInput}
                />
                <InputField
                  type="text"
                  name="Remarks"
                  label="Remarks"
                  icon={faPenToSquare}
                  handleInput={handleFormInput}
                />
                <Button
                  className="fund-transfer"
                  type="submit"
                  name="Proceed"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
