'use strict';

(() => {
  module.exports = {
    create: require('./methods/create'),
    login: require("./methods/login"),
    details: require("./methods/details"),
    updatePassword: require("./methods/updatePassword")
  };
})();
