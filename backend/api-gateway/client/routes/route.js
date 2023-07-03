
"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
   const users_route = require("../routes/users_route/users_route");
  
    router.use("/users",users_route);
    module.exports = router;
})()