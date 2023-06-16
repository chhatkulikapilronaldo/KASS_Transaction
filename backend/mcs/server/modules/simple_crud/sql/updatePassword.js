'use strict';
(() => {

  const { dbHelper, authenticationHelper } = require('../../../helpers');
  const httpStatus = require('http-status');
 
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Update Password Failed' }
      const OldPassword = call.OldPassword;
        const NewPassword = call.NewPassword;
        const ConfirmPassword = call.ConfirmPassword;
      
            connection = await dbHelper.getConnection();
            const [output] = await connection.query(`Select * from from users`);
            // console.log(output);
            let storedPassword = output[0].Password;
      
            const compare = await authenticationHelper.authenticate(OldPassword, storedPassword);
            if (compare == true) {
                  if(NewPassword==ConfirmPassword){
                      const [rows] = await connection.query(`Update users set Password='${NewPassword}, Confirm_Password='${NewPassword}'`);
            if(rows.affectedRows > 0){

                response.status = true;
                response.message = 'update password Successfully';
                     }
                     return response;
                  }
                  else{
                      console.log("Old password and storedPassword doesn't match"); 
                  }
            
            }
          

        
       

    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.release(connection);
    }

  };
})();
