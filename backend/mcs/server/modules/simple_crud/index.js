'use strict';

(() => {
  module.exports = {
    create: require('./methods/create'),
    login: require('./methods/login'),
    update: require('./methods/updatePin'),
    deposit: require('./methods/deposit')
   // details: require('./methods/detailsuser')
  
  };
})();
