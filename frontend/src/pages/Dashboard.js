import React, { useState, useEffect } from "react";
import { AccountTab, NavBar } from "../layouts";
import { Modal } from "../components/Modal";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import password from "../assets/images/register.png";
import useGetData from "../hooks/useGetData";
import { UserDataContext } from "../hooks/UserDataContext";
const dashboarddisplay_URL = "http://10.7.1.183:9000/users/getInfo";
export const Dashboard = () => {
  const [modalPasswordState, setModalPasswordState] = useState(true);
  const [modalPinState, setModalPinState] = useState(true);
  const { getInformation, getUserInfo } = useGetData(dashboarddisplay_URL);
  useEffect(() => {
    getUserInfo();
  }, []);
  console.log(getInformation);
  return (
    <div className="dashboard__wrapper">
      {/* ........NavBar/ Modal part......... */}
      <UserDataContext.Provider value={getInformation}>
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
      </UserDataContext.Provider>
    </div>
  );
};
