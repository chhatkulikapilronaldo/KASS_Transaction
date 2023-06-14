let client = require('../client');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 exports.getUser = (req, res, next)=>{
    client.list({}, (error, response) => {
        if (error) {
          //console.error("Error listing records:", error);
          res.status(400).send(error);
        } else {
         // console.log("List response:", response);
         res.status(200).send(response);
        }
      });
}

exports.createUser = (req, res)=>{
//   const request = {
//     firstName: req.query,
//     lastName: req.query,
//     email: req.query,
//     age: req.query,
//     location: req.query
// };
//const {firstName, lastName, email, age ,location}= req.body;
 const firstName = req.body;
 const lastName = req.body;
 const email = req.body;
 const age = req.body;
 const location = req.body;
 //const date = req.body;
// const user = {
//   firstName: req.body.firstName,
//   lastName: "Singh",
//   email: "ankii@gmail.com",
//   age: "29",
//   location: "Chakrapath"
// };
// const request = {
//   body: {
//     firstName: req.body,
//     lastName: req.body,
//     email: req.body,
//   age: req.body,
//   location: req.body
//   },
// };
  //const request = { first_name: req.body.firstName, lastName: req.lastName, email:req.email, age:req.age ,location:req.location };
  
  client.create((firstName, lastName, email, age ,location), (error, response) => {
    if (error) {
      //console.error("Error listing records:", error);
      res.status(400).send(error);
    } else {
     // console.log("List response:", response);
     res.status(200).send(response);
    }
  });
}

exports.deleteUser = (req, res, next)=>{
  const id = req.params;
    client.delete(id, (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
       // console.log("List response:", response);
       res.status(200).send(response);
      }
    });
  }
  
  exports.updateUser = (req, res, next)=>{
    const id = req.body;
    const firstName = req.body;
    const lastName = req.body;
    const email = req.body;
    const age = req.body;
    const location = req.body;
    client.update((id,firstName, lastName, email, age ,location), (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
       // console.log("List response:", response);
       res.status(200).send(response);
      }
    });
  }
    
  exports.detailUser = (req, res, next)=>{
    const id = req.params;
    client.details(id, (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
       // console.log("List response:", response);
       res.status(200).send(response);
      }
    });
  }
  
  exports.recognizeUser = (req, res, next)=>{
    const imageRequest = fs.readFileSync('../image.png');

    
    client.details(imageRequest, (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
       // console.log("List response:", response);
       res.status(200).send(response);
      }
    });
  }

  exports.sendMessage = (req, res, next)=>{
  
    // const { sender_id, receiver_id, message } = req.query;
  
    const sender_id = req.body;
    const receiver_id = req.body;
    const message = req.body;
    // const request = {
    //   sender_id,
    //   receiver_id,
    //   message,
    // };
    
    client.SendMessage((sender_id,receiver_id,message) , (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
       // console.log("List response:", response);
       res.status(200).send(response);
      }
    });
  }
  exports.getMessage = (req, res, next)=>{
  const userID = req.params;
    
    client.GetMessage(userID , (error, response) => {
      if (error) {
        //console.error("Error listing records:", error);
        res.status(400).send(error);
      } else {
       // console.log("List response:", response);
       res.status(200).send(response);
      }
    });
  }





exports.testUser =  (req, res, next)=>{
    res.send("This route is working...")
}