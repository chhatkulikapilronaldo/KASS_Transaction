"use strict";
((validationHelper) => {
  let pattern = /@gmail.com/;
  validationHelper.uservalidation = async (requestObject) => {
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
      } else if (
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
      } else if (
        requestObject.PhoneNumber.length <= 9 &&
        requestObject.PhoneNumber.length>= 11
      ) {
        return false
      } else {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };
})(module.exports);
