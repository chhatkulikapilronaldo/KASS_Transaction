'use strict';

const helpers = require('../../../helpers');

(() => {
  const { dbHelper } = require('../../../helpers');
  const date  = new Date().getTime()
  const { v4: uuidv4 } = require('uuid');
  const httpStatus = require('http-status');

  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Create Failed' };
      const Password = call.Password;
      const hashedPassword = await helpers.hasher.hashpassword(Password);
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
      let insert = {
        uuid:uuidv4(),
        FullName:call.FullName,
        DOB: call.DOB,
        Address: call.Address,
        Email: call.Email,
        PhoneNumber: call.PhoneNumber,
        CitizenShip_No: call.CitizenShip_No,
        Password: hashedPassword,
        Confirm_Password: hashedPassword,
        Account_Number: uniqueRandomAccountNumber,
        createdAt: new Date().getTime()
        
      }
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
