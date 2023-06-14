'use strict';
const { request } = require('express');
let client = require('../client')

 exports.updateUser = (request, res, next)=>{
  const id=request.body;
  const firstName=request.body;
  const lastName=request.body;
  const email=request.body;
  const age=request.body;
 const location=request.body;
    client.update((id,firstName,lastName,email,age,location),(error, response) => {   
      
        if (error) {
          res.status(401).send(error)
        } else {
          res.status(200).send(response)
        }
      });
}

exports.testUser =  (req, res, next)=>{
    res.send("This route is working...")
}