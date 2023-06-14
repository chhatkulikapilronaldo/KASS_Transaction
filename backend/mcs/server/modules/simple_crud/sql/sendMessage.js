'use strict';
(() => {
  const { dbHelper } = require('../../../helpers');
  const httpStatus = require('http-status');
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Unable to send message'   };
      let insert = {
        sender_id: call.sender_id,
        receiver_id: call.receiver_id,
        message: call.message
      }
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`INSERT INTO messages set ?`,insert);
      if (rows.insertId > 0) {
        response.status = true;
        response.message = "Successfully message send";
      }
      
      return response;
   
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
    
  };
})();
