'use strict';

(() => {
  module.exports = {
    create: require('./methods/create'),
    login: require('./methods/login'),
    update: require('./methods/updatePin'),
    deposit: require('./methods/deposit'),
    getInfo: require('./methods/getInfo'),
    details: require('./methods/details'),
    updatePassword: require('./methods/updatePassword'),
    transfer: require('./methods/transfer')


  
  };
})();
