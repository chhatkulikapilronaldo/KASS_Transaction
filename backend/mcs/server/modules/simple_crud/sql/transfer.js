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
        message: "Transfer Failed",
      };
      connection = await dbHelper.getConnection();
      const userdetail = await connection.query(
        `Select * from login_infos WHERE token='${call.token}'`
      );
      const concernedUserId = userdetail[0][0].uuid;
      connection = await dbHelper.getConnection();
      const userdetail1 = await connection.query(
        `Select * from users WHERE uuid='${concernedUserId}'`
      );

      const Sender_Account = userdetail1[0][0].Account_Number;
      const insert = {
        Sender_Account: Sender_Account,
        Receiver_Account: call.Receiver_Account,
        Amount: call.Amount,
        Remarks: call.Remarks,
      };

      const [Receiver_Account] = await connection.query(
        `Select * from users where Account_Number='${call.Receiver_Account}'`
      );
      const receive_info = Receiver_Account[0].uuid;
      const receive_user_id = Receiver_Account[0].id;
      const value = {
        uuid: receive_info,
        Account_Number: call.Receiver_Account,
        Amount: call.Amount,
        Remarks: call.Remarks,
        user_id: receive_user_id,
      };

      connection = await dbHelper.getConnection();
      const balanceUpdate = await connection.query(
        `Update deposits set Amount = Amount - ? where Account_Number = ? LIMIT 1;`,
        [insert.Amount, insert.Sender_Account],
        (err, result) => {
          if (err) {
            connection.rollback(() => {
              throw err;
            });
          }
          // Check if sender's account has sufficient balance
          if (result.affectedRows === 0) {
            connection.rollback(() => {
              throw new Error("Insufficient balance.");
            });
          }
        }
      );

      connection = await dbHelper.getConnection();
      await connection.query(`Insert into deposits set ?`, value);

      connection = await dbHelper.getConnection();
      const [transferAmount] = await connection.query(
        `insert into transfers set ?`,
        insert
      );
      if (transferAmount.insertId > 0) {
        response.status = true;
        response.message = "Transfer Successfully";
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();
