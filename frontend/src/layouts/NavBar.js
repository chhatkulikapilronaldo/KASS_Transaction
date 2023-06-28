import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";

import { UserDataContext } from "../hooks/UserDataContext";
export const NavBar = ({ displayModalState, displayPinModalState }) => {
  const [modalPasswordState, setModalPasswordState] = useState(true);
  const [modalPinState, setModalPinState] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
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
      </div>
    </>
  );
};
