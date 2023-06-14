'use strict';

const httpStatus = require('http-status');

(() => {
  const { dbHelper } = require('../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { result:"Unable to match image" };
      let insert = {
       data:call.data
      }
      const message = "Succesfully match the image with user"
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`Insert into images(data) set ?`,insert);
      if (rows.insertId > 0) {
      response.result = message;
      }
      return response;
    } catch (error) {
      throw error;
    } 
  };
})();