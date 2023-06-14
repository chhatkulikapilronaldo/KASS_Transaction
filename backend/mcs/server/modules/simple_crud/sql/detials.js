"use strict";
(() => {
  const { dbHelper } = require("../../../helpers");
  module.exports = async (call, callback,res) => {
    let connection;
    try {
      let response = {firstName:"",lastName:"",email:"",age:0,location:"",date:""};
      connection = await dbHelper.getConnection();
      let sql = `select * FROM users WHERE id='${call.id}'`;
      const [rows] = await connection.query(sql);
      if (rows) {
        response.firstName=rows[0].firstName;
        response.lastName=rows[0].lastName;
        response.email=rows[0].email,
        response.age=rows[0].age,
        response.location=rows[0].location,
        response.date=rows[0].date

      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }
  };
})();
