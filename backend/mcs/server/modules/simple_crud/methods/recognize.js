'use strict';

(() => {
  const sql = require('../sql');
  const httpStatus = require('http-status');
  module.exports = async (call, callback) => {
    try {
      let response = { result:"Unable to match image" };
      const dbResponse = await sql.recognize(call.request);
     if(dbResponse = "Succesfully match the image with user"){
      response.result=dbResponse.result;
     }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();