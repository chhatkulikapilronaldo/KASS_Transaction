"use strict";
(() => {
  const { dbHelper } = require("../../../helpers");
  const httpStatus = require('http-status');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status:  httpStatus.BAD_REQUEST, message: "delete Failed" };
      connection = await dbHelper.getConnection();
      let sql = `DELETE FROM users WHERE id='${call.id}'`;
      const [rows] = await connection.query(sql);
      if (rows.affectedRows > 0) {
        response.status = true;
        response.message = "delete Successfully";
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();
