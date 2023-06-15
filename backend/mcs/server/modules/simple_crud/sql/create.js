'use strict';
(() => {
  
  const { dbHelper, hasher } = require('../../../helpers');
  const httpStatus = require('http-status');
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Create Failed' };
      let myDate = new Date().getTime();
     //const nodemailer = require('nodemailer');
  
      const { v4: uuidv4 } = require('uuid'); //super key
      const Password = call.Password;
      const hashedPassword = await hasher.hashpassword(Password);
      function generateUniqueRandomAccountNumber() {
        const accountNumberLength = 16; // Length of the account number
      
        let accountNumber = '';
      
        // Generate random digits for the account number
        while (accountNumber.length < accountNumberLength) {
          const randomDigit = Math.floor(Math.random() * 10);
          accountNumber += randomDigit;
        }

        return accountNumber;
      }
      
      
      const uniqueRandomAccountNumber = generateUniqueRandomAccountNumber();
     // console.log(uniqueRandomAccountNumber);
    
     // Generate a random 4-digit PIN
    function generatePIN() {
        return Math.floor(1000 + Math.random() * 9000);
    }

        const pin = generatePIN();
       // console.log(pin);
 

      let insert = {
        uuid: uuidv4(),
        FullName:call.FullName,
        DOB: call.DOB,
        Address: call.Address,
        Email: call.Email,
        PhoneNumber: call.PhoneNumber,
        CitizenShip_No: call.CitizenShip_No,
        Password: hashedPassword,
        Confirm_Password: hashedPassword,
       // Account_Number: call.Account_Number,
       Account_Number:uniqueRandomAccountNumber,
       PIN:pin,
        createdAt: myDate,   
      }
  //     async function sendMail(){
  //       const transporter = nodemailer.createTransport({
  //         host: smtp.gmail.com,
  //         service: 'Gmail',
  //         auth: {
  //          // user: 'infomanag23@gmail.com',
  //          user: insert.Email,
  //           //pass: 'nccs@bim'
  //           pass: insert.Password
  //         }
  //       });
  //       // Send confirmation email
  // const mailOptions = {
  //   //from: 'infomanag23@gmail.com',
  //   from: insert.Email,
  //   to: 'ankitmaharjan28@gmail.com',
  //   subject: 'Registration Confirmation',
  //   PhoneNumber: insert.PhoneNumber,
  //   Password: insert.Password,
  //   Account_Number: insert.Account_Number,
  //   PIN: insert.PIN
  // };
  // try {
  //   // Send the email
  //   const info = await transporter.sendMail(mailOptions);
  //   console.log('Email sent:', info.response);
  // } catch (error) {
  //   console.log('Error:', error);
  // }
  //     }
   
  //   sendMail();     
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);

  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`insert into users set ?`, insert);
      if (rows.insertId > 0) {
        response.status = true;
        response.message = 'Created Successfully';
      }
      
      return response;
   
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
    
  };
})();
