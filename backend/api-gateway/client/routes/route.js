
"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
   const users_route = require("../routes/users_route/users_route");
   //const users_route = require("../controller/user.controller")
    

    router.use("/users",users_route);
    module.exports = router;
})()