import React, { useState, useEffect } from "react";
import { AccountTab, NavBar } from "../layouts";
import { Modal } from "../components/Modal";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import password from "../assets/images/register.png";
import { Button } from "../components/Button";
import useFormHandling from "../hooks/useFormHandling";
import { Deposit } from "./Deposit";

export const Dashboard = () => {
  const [modalPasswordState, setModalPasswordState] = useState(true);
  const [modalPinState, setModalPinState] = useState(true);

  const { formData, handleFormInput } = useFormHandling({
    Password: "",
    OldPassword: "",
    NewPassword: "",
    ConfirmPassword: "",
  });

  return (
    <div className="dashboard__wrapper">
      {/* ........NavBar/ Modal part......... */}
      <div className="dashboard-navelem">
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
        )}
      </div>

      {/* .......Dashboard Body.......... */}
      <div className="dashboard-body">
        <AccountTab />
      </div>
    </div>
  );
};
