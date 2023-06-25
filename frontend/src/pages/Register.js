import React, { useState, useEffect } from "react";
import { InputField } from "../components/InputField";
import { Button } from "../components";
import register from "../assets/images/register.png";
import { Link, useNavigate } from "react-router-dom";
import useFormHandling from "../hooks/useFormHandling";
import { faPhone, faLock } from "@fortawesome/free-solid-svg-icons";
import usePostData from "../hooks/usePostData";
import {
  faUser,
  faAddressCard,
  faEnvelope,
  faFolderOpen,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";

const Phonenum = /^[0-9]{10}$/g;
const Name = /^[a-zA-Z\s']+$/g;
const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const register_URL = "http://10.7.1.183:9000/users/create_users";
export const Register = () => {
  const navigate = useNavigate();
  const [validRegister, setValidRegister] = useState(false);
  const { formData, handleFormInput } = useFormHandling({
    FullName: "",
    PhoneNumber: "",
    Password: "",
    Confirm_Password: "",
  });
  const { postInformation, postUserInfo } = usePostData(register_URL, formData);

  const [validnum, setValidNum] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [validname, setValidName] = useState(false);
  const [passwordMatch, setPassWordMatch] = useState(false);

  useEffect(() => {
    if (formData.FullName.match(Name)) {
      setValidName(true);
    }
  }, [formData.FullName]);

  useEffect(() => {
    if (validnum && validPass && validname) {
      setValidRegister(true);
    } else {
      setValidRegister(false);
    }
  }, [validnum, validPass, validname]);

  useEffect(() => {
    if (formData.Password.length === 0) {
      setValidPass(true);
    } else if (formData.Password.match(Password)) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
    if (formData.Password === formData.Confirm_Password) {
      setPassWordMatch(true);
    }
  }, [formData.Password]);

  useEffect(() => {
    if (formData.PhoneNumber.length === 0) {
      setValidNum(true);
    } else if (formData.PhoneNumber.match(Phonenum)) {
      setValidNum(true);
    } else {
      setValidNum(false);
    }
  }, [formData.PhoneNumber]);

  console.log(postInformation);
  const handleSubmit = (e) => {
    e.preventDefault();
    postUserInfo();
    // if (postInformation.status === 200) {
    //   navigate("/");
    // }
  };
  return (
    <div className="register__wrapper">
      <div className="register-image">
        <img src={register} alt="Registration" />
      </div>
      <div className="register-data">
        <h1>Registration</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <InputField
              icon={faUser}
              label="Full Name"
              type="text"
              name="FullName"
              handleInput={handleFormInput}
            />
            <InputField
              icon={faAddressCard}
              label="Address"
              type="text"
              name="Address"
              handleInput={handleFormInput}
            />
            <InputField
              icon={faPhone}
              label="Phone No."
              type="text"
              name="PhoneNumber"
              handleInput={handleFormInput}
            />
            {validnum ? " " : <span>Number must be 10 digit</span>}

            <InputField
              icon={faEnvelope}
              label="Email"
              type="email"
              name="Email"
              handleInput={handleFormInput}
            />

            <InputField
              icon={faLock}
              label="Password"
              type="password"
              name="Password"
              handleInput={handleFormInput}
            />
            {validPass ? " " : <span>Invalid Password Pattern</span>}

            <InputField
              icon={faLock}
              label="Confirm Password"
              type="password"
              name="Confirm_Password"
              handleInput={handleFormInput}
            />
            <InputField
              icon={faFolderOpen}
              label="Citizenship No."
              type="text"
              name="CitizenShip_No"
              handleInput={handleFormInput}
            />
            <InputField
              icon={faCalendar}
              label="DOB"
              type="date"
              name="DOB"
              handleInput={handleFormInput}
            />
            <p>
              Already have an account?<Link to="/">&nbsp; Login</Link>
            </p>
            {validRegister ? (
              <Button
                className="register-button"
                name="Register"
                disability="false"
              />
            ) : (
              <Button
                className="register-button"
                name="Register"
                disability="true"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
