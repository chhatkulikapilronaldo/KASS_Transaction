'use strict';

const authenticate = async(OldPassword, storedPassword) =>{
    try {
    
        if(OldPassword==storedPassword){
          return true;
        }
     else {
    console.log('Authentication failed');
  }
      
      
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = {authenticate};