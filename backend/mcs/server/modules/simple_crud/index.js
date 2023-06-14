'use strict';

(() => {
  module.exports = {
    create: require('./methods/create'),
    update:require('./methods/update'),
    list:require('./methods/list'),
    delete:require('./methods/delete'),
    details:require('./methods/details'),
    recognize: require("./methods/recognize"),
    SendMessage: require("./methods/sendMessage"),
    GetMessage: require("./methods/getMessages")
  };
})();
