"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const controller = require("../../controller/user.controller.js");
   
    router.post('/create_users',controller.createUser);
 
    router.get('/get_all_record_users',controller.getUser);
     router.put('/update_users',controller.updateUser);
    router.delete('/delete-single_users/:id',controller.deleteUser);
    router.get('/get_single_record_user/:id',controller.detailUser);
    router.post('/recognizeUser',controller.recognizeUser);
    router.post('/sendMessage',controller.sendMessage);
    router.get("/getMessage/:id",controller.getMessage);

  
    module.exports = router;
})()