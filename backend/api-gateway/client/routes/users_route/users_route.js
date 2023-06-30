"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const controller = require("../../controller/user.controller.js");
   
    router.post('/create_users',controller.createUser);
    router.post('/login',controller.loginUser);
    router.get('/retrieve/:id',controller.detailUser);
    router.put('/updatePassword',controller.updateUserPassword);
    router.post('/deposit_Fund',controller.depositAmount);
    router.put("/updatePIN",controller.updateUserPIN);
    router.get("/getInfo",controller.getInfoUser);
    router.post("/fundTransfer",controller.transferMoney)
  
    module.exports = router;
})()