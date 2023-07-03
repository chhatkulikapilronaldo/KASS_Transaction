import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";

import { UserDataContext } from "../hooks/UserDataContext";
import { Outlet, useNavigate } from "react-router-dom";
import { Deposit } from "../pages";
export const NavBar = ({ displayModalState, displayPinModalState }) => {

  var d= new Date();
  var time = d.getHours();
  const [modalPasswordState, setModalPasswordState] = useState(true);
  const [modalPinState, setModalPinState] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const navigate = useNavigate();


  const individualUserData = useContext(UserDataContext);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleChangePass = () => {
    // displayModalState(setModalPasswordState);
    displayModalState(false);
    // setModalPasswordState(false);
  };
  const handleChangePin = () => {
    // displayPinModalState(setModalPinState);
    displayPinModalState(false);
    setModalPinState(false);
  };
  const fundtransferSection = () => {
    navigate("transferfund");
  };
  const depositModal = () => {
    setShowDepositModal(true);
  };
  const accountSection = () => {
    navigate("accountTab");
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar-image">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="navbar-user">
            <div className="user-profile">
              <p>
                {time<12?"Good Morning!!":"Good Afternoon!!"}
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
                  <li
                    onClick={handleChangePass}
                    // displayModalState={setModalPasswordState}
                  >
                    Change Password
                  </li>
                  <li
                    onClick={handleChangePin}
                    // displayPinModalState={setModalPinState}
                  >
                    Change Pin
                  </li>
                </ul>
                {/* {modalPasswordState ? (
                  ""
                ) : (
                  <Modal
                    transType="Change Password"
                    oldData="OldPassword"
                    oldDataLabel="OldPassword"
                    newData="NewPassword"
                    confirmData="ConfirmPassword"
                    displayState={setModalPasswordState}
                    icon={faLock}
                    modalImage={password}
                  />
                )}

                {modalPinState ? (
                  ""
                ) : (
                  <Modal
                    transType="Change PIN"
                    oldData="OldPIN_Number"
                    oldDataLabel="Old PIN"
                    newData="NewPIN_Number"
                    confirmData="ConfirmPIN_Number"
                    displayState={setModalPinState}
                    icon={faLock}
                    modalImage={password}
                  />
                )} */}
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
        <div className="dashboard-body">
        <div className="dashboard-links">
              <ul>
                <li onClick={accountSection}>Account</li>

                <li onClick={depositModal}>Deposit</li>
                {showDepositModal === true ? (
                  <Deposit displayState={setShowDepositModal} />
                ) : (
                  " "
                )}
                <li onClick={fundtransferSection}>FundTransfer</li>
              </ul>
            </div>
            </div>  

      </div>
    </>
  );
};
