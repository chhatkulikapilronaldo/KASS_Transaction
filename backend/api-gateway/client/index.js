"use strict";
// const client = require("./client");
const express = require("express");
const bodyParser = require("body-parser");
const mainroute=require("../client/routes/route");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",mainroute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log("Server running at port %d", PORT);
});