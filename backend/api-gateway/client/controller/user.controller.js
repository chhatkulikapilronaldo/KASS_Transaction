let client = require('../client');
const helper = require("../../../mcs/server/helpers/index")

exports.createUser = async(req, res)=>{

   
  const requestObject = {
    FullName: req.body.FullName,
    DOB: req.body.DOB,
    Address: req.body.Address,
    Email :req.body.Email,
    PhoneNumber :req.body.PhoneNumber,
    CitizenShip_No :req.body.CitizenShip_No,
    Password :req.body.Password,
    Confirm_Password:req.body.Confirm_Password
    
  };
        
       const output = await helper.validationHelper.uservalidation(requestObject);
       if(output==true){
         client.create(
           (requestObject),
           (error, response) => {
             if (error) {
               //console.error("Error listing records:", error);
               res.status(400).send(error);
             } else {
               // console.log("List response:", response);
               res.status(200).send(response);
             }
           }
         );
       }
       else{
         res.status(400).send({
           success: false,
          // status: 400, //bad request
           message:'Please provide appropriate data'});
       }
       
       };


       exports.loginUser = async(req, res)=>{

   
        const requestObject = {
         
          PhoneNumber :req.body.PhoneNumber,
         
          Password :req.body.Password,
       
          
        };
              
               client.login(
                 (requestObject),
                 (error, response) => {
                   if (error) {
                     //console.error("Error listing records:", error);
                     res.status(400).send(error);
                   } else {
                     // console.log("List response:", response);
                     res.status(200).send(response);
                   }
                 }
               );
           
             };    


       exports.detailUser = async(req, res)=>{

       const id = req.params;
       
            client.details((id),(error, response) => {
                   if (error) {
                     //console.error("Error listing records:", error);
                     res.status(400).send(error);
                   } else {
                     // console.log("List response:", response);
                     res.status(200).send(response);
                   }
                 }
               );
           
             };
             
             exports.updateUserPassword = async(req, res)=>{
              const dotenv = require("dotenv");
              dotenv.config();
              const JWT = require("jsonwebtoken");
      const requestObject ={
      OldPassword :req.body.OldPassword,
         
      NewPassword :req.body.NewPassword,
        ConfirmPassword :req.body.ConfirmPassword,

            }
            
            if (requestObject.OldPassword && requestObject.NewPassword && requestObject.ConfirmPassword) {
              const decode = JWT.verify(
                req.headers.authorization,
                process.env.JWT_SECRET
              );
          
            if (!decode) {
              res.send("Unauthorized user");
            } else {
              client.updatePassword((requestObject),(error, response) => {
                if (error) {
                  //console.error("Error listing records:", error);
                  res.status(400).send(error);
                } else {
                  // console.log("List response:", response);
                  res.status(200).send(response);
                }
              }
            );
        
            }
                 
                    }
                    else{
                      res.send("Invalid details");
                    }; 
                  }