(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('ArtistSrv', ArtistSrv);

  ArtistSrv.$inject = [
    '$http'
  ]

  function ArtistSrv($http) {
    var artists = [];
    /**************************
     Provides a way to create a new playlist
     **************************/

    var PlayListObj = {
      getSongs: getSongs,
      getArtist: getArtist
    };

    return PlayListObj;

    function getSongs(callback){
      $http.get('dist/data/artistsMusic.json').success(function(data) {

        artists = data;

        PlayListObj.artists = artists;
        callback(data);

      });
    }

    function getArtist(title,callback) {

      PlayListObj.getSongs(function(data){

        _.map(PlayListObj.artists, function(artistSongs){

          if(artistSongs.url_name == title){
            return callback(artistSongs);
          }
        });

      });

    };

  }
})();

