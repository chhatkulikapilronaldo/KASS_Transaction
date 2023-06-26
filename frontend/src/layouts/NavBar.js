import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import { Modal } from "../components/Modal";
import { Outlet} from "react-router-dom";
import { Button } from "../components/Button";
import { Deposit } from "../pages";

export const NavBar = ({ displayModalState, displayPinModalState}) => {

  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleChangePass = () => {
    displayModalState(false);
  };
  const handleChangePin = () => {
    displayPinModalState(false);
  };
  const depositModal=()=>{
    setShowDepositModal(true);
    setShowModal(false);
 }
  return (
    <div className="navbar__wrapper">
      <div className="navbar-image">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li onClick={depositModal}>Deposit</li>
            {
              showDepositModal === true? (
                <Deposit displayState={setShowModal}/>
              ): (" ")
            }
            <li>FundTransfer</li>
          </ul>
        </div>
      </div>

      <div className="navbar-user">
        <div className="user-profile">
          <img src={profile} alt="profileimage" onClick={handleClick} />
          <p>
            Welcome!!
            <br />
            <span>Username</span>
          </p>
        </div>
        {isVisible === true ? (
          <div className="user-setting">
            <ul>
              <li onClick={handleChangePass}>
                Change Password
                {/* {showModal === true ? <Modal /> : " "} */}
              </li>
              <li onClick={handleChangePin}>Change Pin</li>
            </ul>
          </div>
        ) : (
          " "
        )}
        {/* <div className="modalPass">
          <Modal/>
        </div> */}
      </div>
      <Outlet />
    </div>
  );
};
