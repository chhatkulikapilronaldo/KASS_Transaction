'use strict';
(() => {
  const { dbHelper } = require('../../../helpers');
  const httpStatus = require('http-status');
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Create Failed' };
      let insert = {
        firstName: call.firstName,
        lastName: call.lastName,
        email: call.email,
        age: call.age,
        location: call.location,
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
