'use strict';

const httpStatus = require('http-status');

(() => {
  const { dbHelper } = require('../../../helpers');
  module.exports = async (call) => {
    let connection;
    try {
      let response = {status: httpStatus.BAD_REQUEST, message: 'Message NOT FOUND' };
        const user_id = call.id;
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`SELECT sender_id, receiver_id, message, date FROM messages WHERE id = '${user_id}' ORDER BY date ASC`);
      if (rows.length > 0) {
       //response.message=messages;
        response.status=httpStatus.OK;
        response.message=rows;
      }
      return response;
    } catch (error) {
      throw error;
    } 
  };
})();