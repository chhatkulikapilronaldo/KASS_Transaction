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
        return bcrypt.compare(password, hashpassword);     
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = {hashpassword, comparePassword};