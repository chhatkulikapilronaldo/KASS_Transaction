'use strict';

(() => {
  module.exports = {
    create: require('./create'),
    update: require('./update'),
    list:require('./list'),
    details:require('./details'),
    delete: require('./delete'),
    recognize: require("./recognize"),
    send: require("./sendMessage"),
    retrieve: require("./getMessages")
  };
})();
