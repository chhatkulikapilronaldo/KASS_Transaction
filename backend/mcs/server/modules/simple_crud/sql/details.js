'use strict';
(() => {
  
  const { dbHelper} = require('../../../helpers');
 
  module.exports = async call => {
    let connection;
    try {
      let response = {FullName:"",DOB:"",Address:"",Email:" ",PhoneNumber:"",CitizenShip_No:"",Account_Number:"",PIN:""};
      connection = await dbHelper.getConnection();
      let sql = `select * FROM users WHERE Account_Number='${call.Account_Number}'`;
      const [rows] = await connection.query(sql);
      if (rows) {
        response.FullName=rows[0].FullName;
        response.DOB=rows[0].DOB;
        response.Address=rows[0].Address,
        response.Email=rows[0].Email,
        response.PhoneNumber=rows[0].PhoneNumber,
        response.CitizenShip_No=rows[0].CitizenShip_No,
        response.Account_Number=rows[0].Account_Number,
        response.PIN=rows[0].PIN
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
    
  };
})();