'use strict';

const { where } = require('sequelize');

(() => {
  const { dbHelper } = require('../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: 'update Failed' };
      connection = await dbHelper.getConnection();
    let sql = `UPDATE users SET firstName='${call.firstName}',lastName='${call.lastName}',email='${call.email}',age='${call.age}',location='${call.location}' WHERE id='${call.id}'`;
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


