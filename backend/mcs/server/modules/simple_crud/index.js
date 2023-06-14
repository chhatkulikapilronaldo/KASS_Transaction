'use strict';

(() => {
  module.exports = {
    create: require('./methods/create'),
    update:require('./methods/update'),
    list:require('./methods/list'),
    delete:require('./methods/delete'),
    detials:require('./methods/detials')
  };
})();
