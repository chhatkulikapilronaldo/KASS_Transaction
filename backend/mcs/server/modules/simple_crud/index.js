'use strict';

(() => {
  module.exports = {
    create: require('./methods/create'),
    login: require('./methods/login'),
    update: require('./methods/updatePin'),
    deposit: require('./methods/deposit'),
    getInfo: require('./methods/getinfo'),
    details: require('./methods/details')
  
  };
})();
