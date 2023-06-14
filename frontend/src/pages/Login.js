import React, { useEffect, useState } from "react";
import { InputField, Button } from "../components";
import { Link } from "react-router-dom";
import signinImage from "../assets/images/signin.png";
import { faPhone, faLock } from "@fortawesome/free-solid-svg-icons";
import useFormHandling from "../hooks/useFormHandling";
const numbers = /^(97)([0-9]{8})$/g;
const numberOnly = /^(98)([0-9]{8})$/g;
export const Login = () => {
  const [validNum, setValidNum] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const { formData, handleFormInput } = useFormHandling({
    PhoneNumber: "",
    Password: "",
  });

  console.log(validNum);
  useEffect(() => {
    //validating phone number
    if (
      !(
        formData.PhoneNumber.match(numberOnly) ||
        formData.PhoneNumber.match(numbers)
      )
    ) {
      setValidNum(false);
    } else {
      setValidNum(true);
    }
    //validating password
    if (formData.Password.length < 8) {
      setValidPass(false);
    } else {
      setValidPass(true);
    }
  }, [formData]);
  const handleSubmit = (e) => {
    e.preventDefault();
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
                Invalid phonenumber
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
                Must be at least 8 characters
              </span>
            )}
            {/* {validLogin ? (
              <Button type="Submit" name="Login" />
            ) : (
              <Button
                type="Submit"
                name="Login"
                className="validLogin"
                disabled
              />
            )} */}
            <Button type="Submit" name="Login" />
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
