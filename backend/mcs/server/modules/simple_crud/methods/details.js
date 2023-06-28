"use strict";
(() => {
  const sql = require("../sql");

  module.exports = async (call, callback) => {
    try {
      let response = {
        FullName: "",
        DOB: "",
        Address: "",
        Email: " ",
        PhoneNumber: "",
        CitizenShip_No: "",
        Account_Number: "",
        PIN: "",
        Total_Amount: "",
      };
      const dbResponse = await sql.details(call.request);

      if (dbResponse) {
        response.FullName = dbResponse.FullName;
        response.DOB = dbResponse.DOB;
        response.Address = dbResponse.Address,
        response.Email = dbResponse.Email,
        response.PhoneNumber = dbResponse.PhoneNumber,
        response.CitizenShip_No = dbResponse.CitizenShip_No,
        response.Account_Number = dbResponse.Account_Number,
        response.PIN = dbResponse.PIN,
        response.Total_Amount = dbResponse.Total_Amount;
      }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();
