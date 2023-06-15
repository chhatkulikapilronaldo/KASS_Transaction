import React, { useEffect, useState } from "react";
import { InputField, Button } from "../components";
import { Link } from "react-router-dom";
import signinImage from "../assets/images/signin.png";
import { faPhone, faLock } from "@fortawesome/free-solid-svg-icons";
import useFormHandling from "../hooks/useFormHandling";
import axios from "axios";
import usePostData from "../hooks/usePostData";
const numbers = /^(97)([0-9]{8})$/g;
const numberOnly = /^(98)([0-9]{8})$/g;
const ankit_url = "http://10.7.1.183:9000/users/login";
export const Login = () => {
  const [validNum, setValidNum] = useState(true);
  const [validPass, setValidPass] = useState(true);
  const [validLogin, setValidLogin] = useState(true);
  const { formData, handleFormInput } = useFormHandling({
    PhoneNumber: "",
    Password: "",
  });
  const { postInformation, postUserInfo } = usePostData(ankit_url, formData);
  useEffect(() => {
    //validating phone number
    if (formData.PhoneNumber.length === 0) {
      setValidNum(true);
    } else if (
      !(
        formData.PhoneNumber.match(numberOnly) ||
        formData.PhoneNumber.match(numbers)
      )
    ) {
      setValidNum(false);
    } else {
      setValidNum(true);
    }
  }, [formData.PhoneNumber]);
  useEffect(() => {
    //validating password
    if (formData.Password.length === 0) {
      setValidPass(true);
    } else if (formData.Password.length < 8) {
      setValidPass(false);
    } else {
      setValidPass(true);
    }
  }, [formData.Password]);
  useEffect(() => {
    if (validPass && validNum) {
      setValidLogin(true);
    } else {
      setValidLogin(false);
    }
  }, [validNum, validPass]);
  console.log(postInformation);
  const handleSubmit = (e) => {
    e.preventDefault();
    postUserInfo();
    console.log(formData);
  };
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login-image">
          <img src={signinImage} alt="Sign In" />
        </div>
        <div className="login-form">
          <h3>Login to your Account</h3>
          <form onSubmit={handleSubmit}>
            <InputField
              icon={faPhone}
              type="text"
              name="PhoneNumber"
              label="Phone Number"
              handleInput={handleFormInput}
            />
            {validNum ? (
              " "
            ) : (
              <span className="login-form-invalidnumber">
                *must start with 97 or 98 and 10 digits
              </span>
            )}
            <InputField
              icon={faLock}
              type="password"
              name="Password"
              label="Password"
              handleInput={handleFormInput}
            />
            {validPass ? (
              " "
            ) : (
              <span className="login-form-invalidnumber">
                *must be at least 8 characters
              </span>
            )}
            {validLogin ? (
              <Button type="Submit" name="Login" disability="false" />
            ) : (
              <Button
                type="Submit"
                name="Login"
                className="validLogin"
                disability="true"
              />
            )}
          </form>
          <p>
            Have Account ?
            <Link>
              <span> Register Here</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
