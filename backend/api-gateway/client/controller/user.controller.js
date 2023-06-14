"use strict";
const { request } = require("express");
const client = require("../client");
exports.createUser = (req, res) => {
  const FullName = req.body;
  const DOB = req.body;
  const Address = req.body;
  const Email = req.body;
  const PhoneNumber = req.body;
  const CitizenShip_No = req.body;
  const Password = req.body;
  const Confirm_Password = req.body;

  client.create(
    (FullName,
    DOB,
    Address,
    Email,
    PhoneNumber,
    CitizenShip_No,
    Password,
    Confirm_Password),
    (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
        // console.log("List response:", response);
        res.status(200).send(response);
      }
    }
  );
};
