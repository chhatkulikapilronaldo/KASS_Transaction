'use strict';

const bcrypt = require("bcrypt");

const hashpassword = async(password) =>{
    try{
        const salt = 5; //CPU USAGES INCREASES AS VALUE INCREASES, A salt is a random string that makes the hash unpredictable
        const hashpassword = await bcrypt.hash(password, salt);
        return hashpassword;
    }catch(error){
        console.log(error)
    }
}

const comparePassword = async(password,hashpassword) =>{
    try {
        // const compareResult=await bcrypt.compareSync(password,hashpassword,(err,result)=>{
        //     if(err){
        //         return err;
        //     }else{
        //         if(result){
        //             return true;
        //         }
        //         else{
        //             console.log("no aunthentication");
        //         }
        //     }
        // })
        const passwordsMatch = bcrypt.compareSync(password, hashpassword);

  if (passwordsMatch) {
    return true;
  } else {
    console.log('Authentication failed');
  }
      
      
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = {hashpassword, comparePassword};