"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
    const users_route = require("./users_route/userslist_route");
    

    router.use("/users",users_route);
    module.exports = router;
})()