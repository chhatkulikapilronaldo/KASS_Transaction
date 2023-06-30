'use strict';

(() => {
  module.exports = {
    create: require('./methods/create'),
    login: require("./methods/login"),
    details: require("./methods/details"),
    updatePassword: require("./methods/updatePassword"),
    deposit: require("./methods/deposit"),
    updatePIN: require("./methods/updatePIN"),
    getInfo: require("./methods/getInfo"),
    transfer: require("./methods/transfer")
  };
})();
