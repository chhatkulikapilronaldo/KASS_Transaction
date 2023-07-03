import React, { useState, useEffect } from "react";
import { AccountTab, NavBar } from "../layouts";
import { Modal } from "../components/Modal";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import password from "../assets/images/register.png";
import useGetData from "../hooks/useGetData";
import { UserDataContext } from "../hooks/UserDataContext";
import { Outlet, useNavigate } from "react-router-dom";
const dashboarddisplay_URL = "http://10.7.1.183:9000/users/getInfo";
export const Dashboard = () => {
  const navigate = useNavigate();
  const [transferDetails, setTransferDetails] = useState();
  const [modalPasswordState, setModalPasswordState] = useState(true);
  const [modalPinState, setModalPinState] = useState(true);
  const { getInformation, getUserInfo } = useGetData(dashboarddisplay_URL);
  useEffect(() => {
    getInformation?.Total_Amount ? console.log("hello") : getUserInfo();
  }, []);
  console.log(getInformation);
  console.log(transferDetails);
  return (
    <div className="dashboard__wrapper">
      {/* ........NavBar/ Modal part......... */}
      <UserDataContext.Provider
        value={{
          value1: getInformation,
          value2: setTransferDetails,
          value3: transferDetails,
        }}
      >
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

          {/* .......Dashboard Body.......... */}

          <div className="dashboard-body">
            {/* <div className="dashboard-links">
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
            </div> */}
          </div>
          {/* <AccountTab /> */}
        </div>

        <Outlet />
      </UserDataContext.Provider>
    </div>
  );
};
