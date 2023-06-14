'use strict';

const httpStatus = require('http-status');

(() => {
  const { dbHelper } = require('../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'DATA NOT FOUND' };
   
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`Select * from users`);
      if (rows.length > 0) {
        response.data=rows
        response.status=httpStatus.OK
        response.message="Data Fetched sucessfully"
      }
      return response;
    } catch (error) {
      throw error;
    } 
  };
})();