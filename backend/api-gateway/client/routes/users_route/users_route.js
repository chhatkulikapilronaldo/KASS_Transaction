"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const controller = require("../../controller/user.controller.js");
   
    router.post('/create_users',controller.createUser);
    router.post('/login',controller.loginUser);
    router.put('/updatePin',controller.updateUserPIN);
    router.post('/depositAmount',controller.depositAmount);
   // router.get('/getDetials',controller.getDetials)
    module.exports = router;
})()