'use strict';

(() => {
  module.exports = {
    create: require('./create'),
    login: require('./login'),
    details: require("./details"),
    updatePassword: require("./updatePassword"),
    deposit: require("./deposit"),
    updatePIN: require("./updatePIN"),
    getInfo: require("./getInfo"),
    transfer: require("./transfer")
  };
})();
