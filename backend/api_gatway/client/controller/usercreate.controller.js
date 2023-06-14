"use strict";
const { request } = require("express");
const client = require("../client");

exports.createUser = (request, res, next) => {
  const firstName=request.body;
  const lastName=request.body;
  const email=request.body;
  const age=request.body;
  const location=request.body;
  client.create((firstName,lastName,email,age,location),(error, response) => {
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
