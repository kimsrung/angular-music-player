(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('navigationMenuService', navigationMenuService);

  navigationMenuService.$inject = [
    '$http'
  ]

  function navigationMenuService($http) {
    var MENU_STATES = {
      menu:true,
      playing:false
    };

    return MENU_STATES;
  }
})();

