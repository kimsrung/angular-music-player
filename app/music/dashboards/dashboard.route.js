(function() {
  'use strict';

  angular
    .module('app.music')
    .config(config);

  config.$inject = [
    '$stateProvider'
    ]

  function config($stateProvider) {
    $stateProvider
    .state('layout.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/music/dashboards/dashboard.html'
    })
  }
})();

