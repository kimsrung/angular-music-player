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
    .state('layout.artists', {
      url: '/artists',
      templateUrl: 'app/music/artists/artists.html',
      controller: 'ArtistListingCtrl',
      controllerAs: 'artistListing'
    })
    .state('layout.artist', {
      url: '/artists/:title',
      templateUrl: 'app/music/artists/artist.html',
      controller: 'ArtistCtrl',
      controllerAs: 'artist'
    })
  }
})();

