'use strict';

const { request } = require('express');

(() => {

  const { dbHelper,hasher,authenticationHelper } = require('../../../helpers');
  const httpStatus = require('http-status');
 
  module.exports = async (call) => {
    let connection;
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: 'Update Password Failed' };
   
      const OldPassword = call.OldPassword;
     
        const NewPassword = call.NewPassword;
        const ConfirmPassword = call.ConfirmPassword;
        

            connection = await dbHelper.getConnection();
            const [output] = await connection.query(`select * FROM login_infos WHERE Password='${OldPassword}'`);
            let storedPassword = output[0].Password;
            let uuid = output[0].uuid;
            let date = new Date().getTime();
            //let PhoneNumber = output[0].PhoneNumber;
      
            const compare = await authenticationHelper.authenticate(OldPassword,storedPassword);
            if (compare == true) {
                  if(NewPassword==ConfirmPassword){
                    const hashedPassword = await hasher.hashpassword(NewPassword);
                    const change = await connection.query(`Update login_infos set Password='${NewPassword}' where uuid='${uuid}'`) 
                      const [rows] = await connection.query(`Update users set Password='${hashedPassword}', Confirm_Password='${hashedPassword}', updatedAt='${date}' where uuid='${uuid}'`);
            if(rows.affectedRows > 0){

                response.status = true;
                response.message = 'Update password Successfully';

                     }
                     return response;
                  }
                  else{
                      console.log("Old password and storedPassword doesn't match"); 
                  }
            
            }
            else{
              
              response.message=("Old Password and Stored Password doesn't match");
              return response;
             // console.log("Old Password and Stored Password doesn't match");
            }
          

        
       

    } catch (error) {
      // let response =("Old Password and Stored Password doesn't match");
      let response = { status: httpStatus.BAD_REQUEST, message: "Old Password and Stored Password doesnt match" };
      return response;
    } finally {
      if (connection) dbHelper.release(connection);
    }

  };
})();
