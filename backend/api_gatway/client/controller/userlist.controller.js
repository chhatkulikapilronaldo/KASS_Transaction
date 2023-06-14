'use strict';
let client = require('../client')

 exports.getUser = (req, res, next)=>{
    client.list({}, (error, response) => {
        if (error) {
          //console.error("Error listing records:", error);
          res.status(401).send(error)
       
        } else {
          //console.log("List response:", response);
          res.status(200).send(response)
        }
      });
}

exports.testUser =  (req, res, next)=>{
    res.send("This route is working...")
}