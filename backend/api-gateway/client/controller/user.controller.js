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
  const requestObject = {
   uuid: req.body.uuid,
   OldPIN_Number:req.body.OldPIN_Number,
   NewPIN_Number:req.body.NewPIN_Number,
   ConfirmPIN_Number:req.body.ConfirmPIN_Number
  };

  client.update(requestObject, (error, response) => {
    if (error) {
      //console.error("Error listing records:", error);
      res.status(400).send(error);
    } else {
      // console.log("List response:", response);
      res.status(200).send(response);
    }
  });
};
