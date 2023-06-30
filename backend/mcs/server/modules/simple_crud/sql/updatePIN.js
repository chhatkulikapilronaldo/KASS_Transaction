"use strict";


(() => {
  const { dbHelper } = require("../../../helpers");
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: false, message: "Update PIN Failed" };
      connection = await dbHelper.getConnection();
      const userdetail = await connection.query(
        `Select * from login_infos WHERE token='${call.token}'`
      );
      const concernedUserId = userdetail[0][0].uuid;
      const PINs = await connection.query(
        `Select PIN from users WHERE uuid='${concernedUserId}'`
      );

      if (call.OldPIN_Number == PINs[0][0].PIN) {
        if (call.NewPIN_Number == call.ConfirmPIN_Number) {
          let sql = `UPDATE users SET PIN='${call.ConfirmPIN_Number}'WHERE uuid='${concernedUserId}'`;
          const [rows] = await connection.query(sql);
          //console.log(rows)
          if (rows.affectedRows > 0) {
            response.status = true;
            response.message = "update Successfully";
          }
          //return response;
        }
        else{
          response.status = false;
          response.message = "New PIn and Old Pin are not same ";
          //return response;
        }
       
       
      } else {
        response.status = false;
        response.message = "OldPIN_Number does not exist";
        //return response;
      }
      return response;
     
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();