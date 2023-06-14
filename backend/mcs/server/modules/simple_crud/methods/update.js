'use strict';
(() => {
  const sql = require('../sql');
  const httpStatus = require('http-status');
  module.exports = async (call, callback) => {
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'update Failed' };
      const dbResponse = await sql.update(call.request);
      if (dbResponse.status === true) {
        response.status = httpStatus.OK;
        response.message = dbResponse.message;
        
      }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();