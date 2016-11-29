(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('GenresListingSrv', GenresListingSrv);

  GenresListingSrv.$inject = [
    '$http'
  ]

  function GenresListingSrv($http) {
    var genres = [];
    /**************************
     Provides a way to create a new playlist
     **************************/

    var GenresListingObj = {
      getGenres: getGenres
    };

    return GenresListingObj;

    function getGenres(callback){
      $http.get('dist/data/genres.json').success(function(data) {

        genres = data;

        GenresListingObj.genres = genres;
        callback(data);

      });
    }

  }
})();

