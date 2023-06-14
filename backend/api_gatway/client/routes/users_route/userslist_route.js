"use strict";
(() => {
    const express = require("express");
    const router = express.Router();

    const creates = require("../../controller/usercreate.controller.js")
    const lists = require("../../controller/userlist.controller.js");
    const deletes = require("../../controller/userdelete.controller.js");
    const detiales = require("../../controller/userdetials.controller.js");
    const updates = require("../../controller/userUpdate.controller.js");
    
    router.post('/create_users', creates.createUser);
    router.get('/get_all_record_users',lists.getUser);
    router.delete('/delete_record_users/:id',deletes.deleteUser);
    router.get('/read-single_users/:id',detiales.detialsUser);
    router.put('/update_record_users',updates.updateUser);
  
    module.exports = router;
})()