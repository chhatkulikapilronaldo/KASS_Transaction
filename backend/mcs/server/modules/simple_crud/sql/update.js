'use strict';

const { where } = require('sequelize');

(() => {
  const { dbHelper } = require('../../../helpers');
  const httpStatus = require('http-status');
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status:httpStatus.BAD_REQUEST, message: 'update Failed' };
       let id= call.id;    
      let firstName= call.firstName;
      let lastName= call.lastName;
      let email= call.email;
      let age= call.age;
      let location= call.location,
      connection = await dbHelper.getConnection();
    let sql = `UPDATE users SET firstName='${firstName}',lastName='${lastName}',email='${email}',age='${age}',location='${location}' WHERE id='${id}'`;
    const [rows] = await connection.query(sql); 
    //console.log(rows) 
    if (rows.affectedRows > 0) {
        response.status = true;
        response.message = 'update Successfully';
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();


