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
      const pin = call.PIN;
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
      const PinVerify = userdetail1[0][0].PIN;

      const insert ={
        Sender_Account:Sender_Account,
        Receiver_Account:call.Receiver_Account,
        Amount:call.Amount,
        Remarks:call.Remarks
      }

      const [Receiver_Account] = await connection.query(`Select * from users where Account_Number='${call.Receiver_Account}'`);
      const receive_info = Receiver_Account[0].uuid;
      const receive_user_id = Receiver_Account[0].id;
      const value ={
        uuid:receive_info,
        Account_Number:call.Receiver_Account,
        Amount:call.Amount,
        Remarks:call.Remarks,
        user_id:receive_user_id
      }
      connection = await dbHelper.getConnection();
      let sql1 = `SELECT u.FullName AS Account_Holder, u.Account_Number, sum(d.Amount) as Total_Amount 
      from Users As u
      INNER JOIN 
      deposits as d on u.id = d.user_id
      where u.Account_Number='${insert.Sender_Account}'
      GROUP BY u.FullName, u.Account_Number
      LIMIT 0, 2000;`;
      const [rows1] = await connection.query(sql1);
      if(insert.Amount <=rows1[0].Total_Amount){
        if(pin == PinVerify){
          connection = await dbHelper.getConnection();
          await connection.query(`Update deposits set Amount = Amount - ? where Account_Number = ? LIMIT 1;`,[insert.Amount,insert.Sender_Account],(err,result)=>{
            if(err){
              connection.rollback(()=>{
                throw err;
              });
            }
  
          });
    
          connection = await dbHelper.getConnection();
          await connection.query(`Insert into deposits set ?`,value);
    
          connection = await dbHelper.getConnection();
          const [transferAmount] = await connection.query(
          `insert into transfers set ?`,insert
          );
          if(transferAmount.insertId > 0){
            response.status = true;
            response.message = "Transfer Successfully";
          }
          return response;
        }
        else{
          return response;
        }
      }
      else{
        return response;
      }
      
      
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();