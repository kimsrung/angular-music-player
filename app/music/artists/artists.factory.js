(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('ArtistListingSrv', ArtistListingSrv);

  ArtistListingSrv.$inject = [
    '$http'
  ]

  function ArtistListingSrv($http) {
    var artists = [];
    /**************************
     Provides a way to create a new playlist
     **************************/

    var ArtistListingObj = {
      getArtists: getArtists
    };

    return ArtistListingObj;

    function getArtists(callback){
      $http.get('dist/data/artists.json').success(function(data) {

        artists = data;

        ArtistListingObj.artists = artists;
        callback(data);

      });
    }

  }
})();

