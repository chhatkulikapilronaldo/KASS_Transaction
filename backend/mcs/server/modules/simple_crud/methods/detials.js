'use strict';
(() => {
  const sql = require('../sql');
  const httpStatus = require('http-status');
  module.exports = async (call, callback,data) => {
    try {
      let response = { firstName:"",lastName:"",email:"",age:0,location:"",Date:""};
      const dbResponse = await sql.detials(call.request);
      console.log(dbResponse);
      if (dbResponse) {
        response.firstName = dbResponse.firstName;
        response.lastName = dbResponse.lastName;
        response.email = dbResponse.email;
        response.age = dbResponse.age;
        response.location= dbResponse.location;
        response.date = dbResponse.date;

      }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();