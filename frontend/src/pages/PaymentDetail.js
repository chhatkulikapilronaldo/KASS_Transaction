import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
// import globalLogo from "../assets/images/globallogo1.png";
import globalLogo from "../assets/images/logo.png";
import { UserDataContext } from "../hooks/UserDataContext";

export const PaymentDetail = () => {
  const navigate = useNavigate();
  const { value3 } = useContext(UserDataContext);
  const transferData = value3;
  const handleBack = () => {
    navigate("/dashboard/transferfund");
  };
  const handleProced = () => {
    navigate("/dashboard/confirmPin");
  };

  return (
    <div className="paymentdetail">
      <div className="wrapper">
        <div className="watermark">
          <img src={globalLogo} alt="logo" />
        </div>
        <div className="background"></div>
        <div className="heading">
          <h3>
            PAYMENT DETAILS
            <span></span>
          </h3>
        </div>
        <div className="amount">
          <h5>AMOUNT</h5>
          <p>
            Rs. {`${Intl.NumberFormat("en-IN").format(transferData?.Amount)}`}
          </p>
        </div>
        <div className="receiverbank">
          <h5>RECEIVER'S BANK</h5>
          <p>Global IME Bank</p>
        </div>
        <div className="acnumber">
          <h5>A/C Number</h5>
          <p>{`${transferData?.Receiver_Account}`}</p>
        </div>
        <div className="fromac">
          <h5>FROM A/C</h5>
          <p>{`${transferData?.ACNumber}`}</p>
        </div>
        <div className="remarks">
          <h5>REMARKS</h5>
          <p>{`${transferData?.Remarks}`}</p>
        </div>
        <div className="proceedbutton">
          <Button className="backbutton" name="Back" handleClick={handleBack} />
          <Button
            className="proceed"
            name="Proceed"
            handleClick={handleProced}
          />
        </div>
      </div>
    </div>
  );
};
