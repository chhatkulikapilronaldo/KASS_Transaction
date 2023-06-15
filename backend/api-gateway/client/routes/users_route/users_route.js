"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const controller = require("../../controller/user.controller.js");
   
    router.post('/create_users',controller.createUser);
    router.post('/login',controller.loginUser);
  
    module.exports = router;
})()