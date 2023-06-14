'use-strict';
const mysql = require('mysql2/promise');
((dbHelper) => {
  let connection = null;
  dbHelper.init = async () => {
    try {
      if (!connection)
        connection = await mysql.createPool({
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          database: process.env.DB_NAME,
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });
      return connection;
    } catch (err) {
      throw err;
    }
  };
  dbHelper.getConnection = async () => {
    try {
      return await connection.getConnection();
    } catch (error) {
      throw error;
    }
  };
  dbHelper.release = async (connection) => {
    try {
      return await connection.release(connection);
    } catch (error) {
      throw error;
    }
  };
})(module.exports);