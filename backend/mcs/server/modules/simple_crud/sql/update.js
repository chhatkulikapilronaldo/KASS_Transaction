"use strict";

const { where } = require("sequelize");

(() => {
  const { dbHelper } = require("../../../helpers");
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: "update Failed" };
      connection = await dbHelper.getConnection();
      const PINs = await connection.query(
        `Select PIN from users WHERE uuid='${call.uuid}'`
      );

      if (call.OldPIN_Number == PINs[0][0].PIN) {
        if (call.NewPIN_Number == call.ConfirmPIN_Number) {
          let sql = `UPDATE users SET PIN='${call.ConfirmPIN_Number}'WHERE uuid='${call.uuid}'`;
          const [rows] = await connection.query(sql);
          //console.log(rows)
          if (rows.affectedRows > 0) {
            response.status = true;
            response.message = "update Successfully";
          }
          return response;
        }
        response.status = true;
        response.message = "OldPIN_Number does not exit";
      } else {
        response.status = true;
        response.message = "New and confirm pin are not same";
      }
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();
