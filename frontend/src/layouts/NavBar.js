import React, { useState } from "react";
import logo from "../assets/images/globallogo.jpg";
import profile from "../assets/images/profile.png";
import { Modal } from "../components/Modal";
import { Outlet } from "react-router-dom";

export const NavBar = ({ displayModalState, displayPinModalState }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleChangePass = () => {
    displayModalState(false);
  };
  const handleChangePin = () => {
    displayPinModalState(false);
  };
  return (
    <div className="navbar__wrapper">
      <div className="navbar-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-user">
        <div className="user-profile">
          <p>
            Welcome!!
            <br />
            <span>Username</span>
          </p>
          <img src={profile} alt="profileimage" onClick={handleClick} />
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
