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
    .state('layout.albums', {
      url: '/albums',
      templateUrl: 'app/music/albums/albums.html',
      controller: 'AlbumsCtrl',
      controllerAs: 'albums'
    })
  }
})();

