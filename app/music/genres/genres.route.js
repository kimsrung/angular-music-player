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
    .state('layout.genres', {
      url: '/genres',
      templateUrl: 'app/music/genres/genres.html',
      controller: 'GenresCtrl',
      controllerAs: 'genres'
    })
  }
})();

