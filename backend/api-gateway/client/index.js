"use strict";
// const client = require("./client");
const express = require("express");
const bodyParser = require("body-parser");
const mainroute=require("../client/routes/route");
const cors = require("cors");

const app = express();
app.use(cors());
const path = require('path');
const dotenv = require("dotenv");
dotenv.config({
	path: path.resolve(__dirname,"./.env"),
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",mainroute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log("Server running at port %d", PORT);
});