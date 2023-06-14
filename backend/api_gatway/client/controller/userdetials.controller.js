"use strict";
const { response } = require("express");
let client = require("../client");
exports.detialsUser = (req, res, next) => {
  const id=req.params;

  client.details(id, (error, response) => {
    if (error) {
      res.status(401).send(error);
    } else {
      res.status(200).send(response);
    }
  });
};
exports.testUser = (req, res, next) => {
  res.send("This route is working...");
};
