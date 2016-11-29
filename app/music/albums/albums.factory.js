(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('AlbumsListingSrv', AlbumsListingSrv);

  AlbumsListingSrv.$inject = [
    '$http'
  ]

  function AlbumsListingSrv($http) {
    var albums = [];
    /**************************
     Provides a way to create a new playlist
     **************************/

    var AlbumListingObj = {
      getAlbums: getAlbums
    };

    return AlbumListingObj;

    function getAlbums(callback){
      $http.get('dist/data/albums.json').success(function(data) {

        albums = data;

        AlbumListingObj.albums = albums;
        callback(data);

      });
    }

  }
})();

