import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import { Modal } from "../components/Modal";
import { Outlet, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Deposit } from "../pages";
import { UserDataContext } from "../hooks/UserDataContext";
export const NavBar = ({ displayModalState, displayPinModalState }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [showDepositModal, setShowDepositModal] = useState(false);
  const individualUserData = useContext(UserDataContext);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleChangePass = () => {
    displayModalState(false);
  }; 
  const handleChangePin = () => {
    displayPinModalState(false);
  };
  const depositModal = () => {
    setShowDepositModal(true);
  };
  console.log(individualUserData);
  return (
    <div className="navbar__wrapper">
      <div className="navbar-image">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li onClick={depositModal}>Deposit</li>
            {showDepositModal === true ? (
              <Deposit displayState={setShowDepositModal} />
            ) : (
              " "
            )}
            <Link to="/transferfund">
              {" "}
              <li>FundTransfer</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="navbar-user">
        <div className="user-profile">
          <p>
            Welcome!!
            <br />
            <span>{individualUserData?.Account_Holder}</span>
            {/* <span>Suraj Pulami Magar</span> */}
          </p>
          <div className="profileImage">
            <img src={profile} alt="profileimage" onClick={handleClick} />
          </div>
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
