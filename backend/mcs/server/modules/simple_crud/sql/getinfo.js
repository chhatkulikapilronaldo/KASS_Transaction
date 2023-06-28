"use strict";
(() => {
  const { dbHelper } = require("../../../helpers");

  module.exports = async (call) => {
    let connection;
    try {
      let response = {
        Account_Holder: "",
        Account_Number: "",
        Total_Amount: "",
      };
      connection = await dbHelper.getConnection();
      let sql1 = `SELECT u.FullName AS Account_Holder, u.Account_Number, sum(d.Amount) as Total_Amount 
    from Users As u
    INNER JOIN 
    deposits as d on u.id= d.user_id
    GROUP BY u.FullName, u.Account_Number
    LIMIT 0, 2000;`;
      const [rows1] = await connection.query(sql1);
      if (rows1) {
        response.Account_Holder = rows1[0].Account_Holder;
        response.Account_Number = rows1[0].Account_Number;
        response.Total_Amount = rows1[0].Total_Amount;
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();
