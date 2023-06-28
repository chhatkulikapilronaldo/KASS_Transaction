'use strict';

(() => {
  module.exports = {
    create: require('./create'),
    login: require('./login'),
    update: require('./updatePin'),
    deposit: require('./deposit'),
    getInfo: require('./getinfo'),
    details: require('./details'),
    updatePassword: require('./updatePassword'),
    transfer: require('./transfer')
  };
})();