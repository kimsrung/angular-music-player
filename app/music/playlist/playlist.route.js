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
    .state('layout.playlist', {
      url: '/playlist/:title',
      templateUrl: 'app/music/playlist/playlist.html',
      controller: 'UserPlayListCtrl',
      controllerAs: 'playlist'
    })
  }
})();

