let client = require("../client");
const helper = require("../../../mcs/server/helpers/index");

exports.createUser = async (req, res) => {
  const requestObject = {
    FullName: req.body.FullName,
    DOB: req.body.DOB,
    Address: req.body.Address,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    CitizenShip_No: req.body.CitizenShip_No,
    Password: req.body.Password,
    Confirm_Password: req.body.Confirm_Password,
  };

  const output = await helper.validationHelper.uservalidation(requestObject);
  if (output == true) {
    client.create(requestObject, (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
        // console.log("List response:", response);
        res.status(200).send(response);
      }
    });
  } else {
    res.status(400).send({
      success: false,
      // status: 400, //bad request
      message: "Please provide appropriate data",
    });
  }
};
exports.loginUser = async (req, res) => {
  const requestObject = {
    PhoneNumber: req.body.PhoneNumber,
    Password: req.body.Password,
  };

  client.login(requestObject, (error, response) => {
    if (error) {
      //console.error("Error listing records:", error);
      res.status(400).send(error);
    } else {
      // console.log("List response:", response);
      res.status(200).send(response);
    }
  });
};
exports.updateUserPIN = async (req, res) => {
  const JWT = require("jsonwebtoken");
  const token = req.headers.authorization;
  const secret_key = process.env.JWT_SECRET;
  const requestObject = {
    token: req.headers.authorization,
    OldPIN_Number: req.body.OldPIN_Number,
    NewPIN_Number: req.body.NewPIN_Number,
    ConfirmPIN_Number: req.body.ConfirmPIN_Number,
  };
  if (
    requestObject.OldPIN_Number &&
    requestObject.NewPIN_Number &&
    requestObject.ConfirmPIN_Number
  ) {
    JWT.verify(token, secret_key, (err, decoded) => {
      if (err) {
        console.error("Unverified Token", err.message);
        res.status(404).send("Unverified User");
      } else {
        console.log("Token verified succesfully", decoded);
        client.update(requestObject, (error, response) => {
          if (error) {
            //console.error("Error listing records:", error);
            res.status(400).send(error);
          } else {
            // console.log("List response:", response);
            res.status(200).send(response);
          }
        });
      }
    });
  } else {
    console.log("Invalid user details");
  }
};
exports.depositAmount = async (req, res) => {
  const JWT = require("jsonwebtoken");
  const token = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET;

  const requestObject = {
    token: req.headers.authorization,
    Amount: req.body.Amount,
    Remarks: req.body.Remarks,
  };
  if (requestObject.Amount && requestObject.Remarks) {
    JWT.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err.message);
        res.status(404).send("Please provide token correct, unverified User");
      } else {
        // Token verification successful
        console.log("Token verified successfully:", decoded);
        client.deposit(requestObject, (error, response) => {
          if (error) {
            //console.error("Error listing records:", error);
            res.status(400).send(error);
            //res.status(400).send("Invalid User details");
          } else {
            // console.log("List response:", response);
            res.status(200).send(response);
          }
        });
      }
    });
  } else {
    res.status(400).send("Invalid details");
  }
};
exports.getInfoUser = async (req, res) => {
  const JWT = require("jsonwebtoken");
  const token = req.headers.authorization;
  const secret_key = process.env.JWT_SECRET;
  // const requestObject = {
  //     token:req.headers.authorization
  // }
  if (token) {
    JWT.verify(token, secret_key, (err, decoded) => {
      if (err) {
        console.error("Unverified Token", err.message);
        res.status(404).send("Unverified User");
      } else {
        console.log("Token verified succesfully", decoded);
        client.getInfo({}, (error, response) => {
          if (error) {
            //console.error("Error listing records:", error);
            res.status(400).send(error);
          } else {
            // console.log("List response:", response);
            res.status(200).send(response);
          }
        });
      }
    });
  }
};
exports.detailUser = async (req, res) => {
  const requestObjects = {
    Account_Number: req.body.Account_Number,
  };

  client.details(requestObjects, (error, response) => {
    if (error) {
      //console.error("Error listing records:", error);
      res.status(400).send(error);
    } else {
      // console.log("List response:", response);
      res.status(200).send(response);
    }
  });
};
exports.transferMoney = async (req, res) => {
  const JWT = require("jsonwebtoken");
  const token = req.headers.authorization;
  const secret_key = process.env.JWT_SECRET;
  const requestObject = {
    token: req.headers.authorization,

    Receiver_Account: req.body.Receiver_Account,
    Amount: req.body.Amount,
    Remarks: req.body.Remarks,
  };
  if (token) {
    JWT.verify(token, secret_key, (err, decoded) => {
      if (err) {
        console.error("Unverified Token", err.message);
        res.status(404).send("Unverified User");
      } else {
        console.log("Token verified succesfully", decoded);
        client.transfer(requestObject, (error, response) => {
          if (error) {
            //console.error("Error listing records:", error);
            res.status(400).send(error);
          } else {
            // console.log("List response:", response);
            res.status(200).send(response);
          }
        });
      }
    });
  }
};
exports.updateUserPassword = async (req, res) => {
  const JWT = require("jsonwebtoken");
  const token = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET;
  const requestObject = {
    OldPassword: req.body.OldPassword,
    NewPassword: req.body.NewPassword,
    ConfirmPassword: req.body.ConfirmPassword,
  };

  if (
    requestObject.OldPassword ||
    requestObject.NewPassword ||
    requestObject.ConfirmPassword
  ) {
    JWT.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err.message);
        res.status(404).send({
          Message: "Unverified User, please provide token",
        });
      } else {
        // Token verification successful
        console.log("Token verified successfully:", decoded);
        client.updatePassword(requestObject, (error, response) => {
          if (error) {
            //console.error("Error listing records:", error);
            //res.status(400).send("Invalid User details");
            res.status(400).send(error);
          } else {
            // console.log("List response:", response);
            res.status(200).send(response);
          }
        });
      }
    });
  } else {
    res.status(400).send("Invalid details");
  }
};
