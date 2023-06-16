'use strict';
(() => {

  const { dbHelper, hasher } = require('../../../helpers');
  const httpStatus = require('http-status');
  const dotenv = require("dotenv");
  dotenv.config();
  const JWT = require("jsonwebtoken");
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Create Failed', token: "Unauthorized user for getting token" }

      connection = await dbHelper.getConnection();
      const [output] = await connection.query(`Select * from users where PhoneNumber='${call.PhoneNumber}'`);
      // console.log(output);
      let pass = output[0].Password;
      const compare = await hasher.comparePassword(call.Password, pass);
      if (compare == true) {
        //Creating token
        const token = await JWT.sign({}, process.env.JWT_SECRET, {
          expiresIn: "14d",
        });
        let insert = {
          PhoneNumber: call.PhoneNumber,
          Password: call.Password,
          Token: token
        }

        const [rows] = await connection.query(`insert into login_infos set ?`, insert);
        if (rows.insertId > 0) {
          response.status = true;
          response.message = 'Login Successfully';
          response.token = token;
        }

        return response;

      }

    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }

  };
})();