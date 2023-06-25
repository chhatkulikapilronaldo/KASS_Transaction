"use strict";

const helpers = require("../../../helpers");
(() => {
  const { dbHelper } = require("../../../helpers");
  const httpStatus = require("http-status");

  module.exports = async (call) => {
    let connection;
    try {
      let response = {
        status: httpStatus.BAD_REQUEST,
        message: "deposit Failed",
      };
      connection = await dbHelper.getConnection();
      const userdetail = await connection.query(
        `Select * from login_infos WHERE token='${call.token}'`
      );
      const concernedUserId = userdetail[0][0].uuid;
      const allinfo = await connection.query(
        `Select * from users WHERE uuid='${concernedUserId}'`
      );
    // console.log(allinfo)
      let deposits = {
        uuid:allinfo[0][0].uuid,
        Account_Number:allinfo[0][0].Account_Number,

        Amount:call.Amount,
        Remarks:call.Remarks
      };
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`insert into deposits set ?`, deposits);
      if (rows.insertId > 0) {
        response.status = true;
        response.message = "deposit Successfully";
      }

      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();
