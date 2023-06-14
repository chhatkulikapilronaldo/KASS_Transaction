import React from "react";
import { InputField } from "../components/InputField";
import { Button } from "../components";
import register from "../assets/images/registerimg.png";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faAddressCard,
  faEnvelope,
  faAddressBook,
  faFolderOpen,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";

export const Register = () => {
  return (
    <div className="register">
    <div className="register__wrapper">
      <div className="register-image">
        <img src={register} alt="Registration" />
      </div>
      <div className="register-data">
        <h1>Registration</h1>
        <div className="data--form">
          <form>
            <InputField
              icon={faUser}
              label="Full Name"
              type="text"
              name="fullname"
            />
            <InputField
              icon={faAddressCard}
              label="Address"
              type="text"
              name="address"
            />
            <InputField
              icon={faPhone}
              label="Phone No."
              type="text"
              name="phone_num"
            />
            <InputField
              icon={faEnvelope}
              label="Email"
              type="email"
              name="email"
            />
            <InputField
              icon={faAddressBook}
              label="Account No."
              type="text"
              name="account_num"
            />
            <InputField
              icon={faFolderOpen}
              label="Citizenship No."
              type="text"
              name="citizenship_num"
            />
            <InputField icon={faCalendar} label="DOB" type="date" name="dob" />
            <p>
              Already have an account?<Link>&nbsp; Login</Link>
            </p>
            <Button className="register-button" name="Register" />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
