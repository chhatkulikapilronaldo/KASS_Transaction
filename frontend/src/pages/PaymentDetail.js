import React from "react";
import { Button } from "../components";
// import globalLogo from "../assets/images/globallogo1.png";
import globalLogo from "../assets/images/logo.png"
export const PaymentDetail = () => {
  return (
    <div className="paymentdetail">
      <div className="wrapper">
        <div className="watermark">
          <img src={globalLogo} alt="logo" />
        </div>
        <div className="background">
            
        </div>
        <div className="heading">
          <h3>
            PAYMENT DETAILS
            <span></span>
          </h3>
        </div>
        <div className="amount">
          <h5>AMOUNT</h5>
          <p>Rs.12,000</p>
        </div>
        <div className="receiverbank">
          <h5>RECEIVER'S BANK</h5>
          <p>Global IME Bank</p>
        </div>
        <div className="acnumber">
          <h5>A/C Number</h5>
          <p>1548785415745415</p>
        </div>
        <div className="fromac">
          <h5>FROM A/C</h5>
          <p>15487845425154541</p>
        </div>
        <div className="remarks">
          <h5>REMARKS</h5>
          <p>Utility payment</p>
        </div>
        <div className="proceedbutton">
          <Button className="backbutton" name="Back" />
          <Button className="proceed" name="Proceed" />
        </div>
      </div>
    </div>
  );
};