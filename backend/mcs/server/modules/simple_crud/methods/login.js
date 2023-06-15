'use strict';
(() => {
  const sql = require('../sql');
  const httpStatus = require('http-status');
  module.exports = async (call, callback) => {
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Login Failed', token: "Unauthorized user for getting token" };
      const dbResponse = await sql.login(call.request);
      
      if (dbResponse.status === true) {
        response.status = httpStatus.OK;
        response.message = dbResponse.message;
        response.token = dbResponse.token;
      }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();
