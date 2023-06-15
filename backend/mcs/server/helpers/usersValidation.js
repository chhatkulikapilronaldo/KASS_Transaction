"use strict";
((validationHelper) => {
  let pattern = /@gmail.com/;

  validationHelper.uservalidation = async (requestObject) => {
   
   // Define a regex pattern to match phone numbers starting with "98 and 97"
   const phonePattern = /^98/;
   const phonePattern1 = /^97/;
   // Define a regex pattern to match valid characters for a name
   const namePattern = /^[a-zA-Z\s-']{1,}$/;
    try {
      if (
        requestObject.FullName == "" &&
        requestObject.DOB == "" &&
        requestObject.Address == "" &&
        requestObject.Email == "" &&
        requestObject.PhoneNumber == "" &&
        requestObject.Citizenship_No == "" &&
        requestObject.Password == "" &&
        requestObject.Confirm_Password == ""
      ) {
        return false
      } 
      else if(namePattern.test(requestObject.FullName)==false){
        return false
      }
        else if (
        (requestObject.Password.length &&
          requestObject.Confirm_Password.length) <= 8){
            return false
          }
       else if(requestObject.Password != requestObject.Confirm_Password)
        {
            return false
        }
      
      else if (pattern.test(requestObject.Email) == false) {
        return false
      }
      else if (
        requestObject.PhoneNumber.length <= 9 &&
        requestObject.PhoneNumber.length>= 11
      ) {
        return false
      }  
      else if((phonePattern.test(requestObject.PhoneNumber)||phonePattern1.test(requestObject.PhoneNumber))==false){
            return false
      }
    // else if(phonePattern1.test(requestObject.PhoneNumber)==false){
    //     return false
    // }
      else {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };
})(module.exports);