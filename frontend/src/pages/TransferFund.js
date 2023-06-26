import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBank,
  faFolderOpen,
  faMoneyBill,
  faPenToSquare,
  faClose,
  faBullseye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import fundTransfer from "../assets/images/fundtransfer.png";
import { InputField, Button } from "../components";
export const TransferFund = () => {
  const [hideAmount, setHideAmount] = useState(false);
  return (
    <>
      <div className="transferFund">
        <div className="transferFund-maindiv">
          <div className="transferFund-form">
            <div className="close">
              <FontAwesomeIcon icon={faClose} />
            </div>
            <div className="senderDetails">
              <div className="accountdetails">
                <h3>Transfer From</h3>
                <p className="senderaccount">
                  <span className="senderAmount">
                    NPR.
                    {hideAmount ? " XXXXXXXX" : " 10,000"}
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
                  NEW SUPER CHATMATKARIK BACHAT KHATA
                </p>
                <p className="accountNumber">A/C No. 15648575465245</p>
              </div>
              <div className="transfer-image">
                <img src={fundTransfer} alt="Fund Transfer" />
              </div>
            </div>
            <div className="receiverDetails">
              <h3>Receiver's Details</h3>
              <form>
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
                  name="ReceiverA/C"
                  label="Receiver's A/C Number"
                  icon={faFolderOpen}
                />
                <InputField
                  type="number"
                  name="ReceiveAmount"
                  label="Amount"
                  icon={faMoneyBill}
                />
                <InputField
                  type="text"
                  name="Remarks"
                  label="Remarks"
                  icon={faPenToSquare}
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
