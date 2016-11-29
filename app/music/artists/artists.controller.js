(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('ArtistListingCtrl', ArtistListingCtrl);

  ArtistListingCtrl.$inject = [
    '$scope',
    'ArtistListingSrv'
  ]

  function ArtistListingCtrl($scope, ArtistListingSrv) {
    var vm = this;

    activate();

    function activate() {
      ArtistListingSrv.getArtists(function(data) {
        vm.data = data;
      // no need to read data because its binded to $scope.AlbumsSrv
      // You can however process something only after the data comes back
      });
    }
  }
})();

