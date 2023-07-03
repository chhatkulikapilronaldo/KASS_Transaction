'use strict';

(() => {
  const sql = require('../sql');
  const httpStatus = require('http-status');
  module.exports = async (call, callback) => {
    try {
      let response = {status: httpStatus.BAD_REQUEST, message: 'Message Retrieve Failed' };
      const dbResponse = await sql.retrieve(call.request);
      if (dbResponse.status ==httpStatus.OK ) {
        response.status = httpStatus.OK;
        response.message = dbResponse.message;
        //response.data=dbResponse.data
      }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();