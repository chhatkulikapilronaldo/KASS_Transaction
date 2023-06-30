'use strict';
(() => {
  const sql = require('../sql');
 
  module.exports = async (call, callback) => {
    try {
      let response = {Account_Holder:"", Account_Number: "",Total_Amount:""  };
      const dbResponse = await sql.getInfo(call.request);
     
      if (dbResponse) {
      response.Account_Holder = dbResponse.Account_Holder;
      response.Account_Number = dbResponse.Account_Number;
      response.Total_Amount = dbResponse.Total_Amount;
      }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();
