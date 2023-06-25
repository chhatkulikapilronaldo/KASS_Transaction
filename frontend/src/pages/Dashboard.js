import React, { useState } from "react";
import { NavBar } from "../layouts";
import { Modal } from "../components/Modal";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import password from "../assets/images/register.png";
export const Dashboard = () => {
  const [modalPasswordState, setModalPasswordState] = useState(true);
  const [modalPinState, setModalPinState] = useState(true);
  return (
    <div className="dashboard__wrapper">
      <NavBar
        displayModalState={setModalPasswordState}
        displayPinModalState={setModalPinState}
      />
      {modalPasswordState ? (
        ""
      ) : (
        <Modal
          transType="Change Password"
          oldData="OldPassword"
          oldDataLabel="Old Password"
          newData="New Password"
          confirmData="Confirm Passowrd"
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
      )}
    </div>
  );
};
