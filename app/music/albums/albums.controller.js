(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('AlbumsCtrl', AlbumsCtrl);

  AlbumsCtrl.$inject = [
    '$scope',
    'AlbumsListingSrv'
  ]

  function AlbumsCtrl($scope, AlbumsListingSrv) {
    var vm = this;

    activate();

    function activate() {
      AlbumsListingSrv.getAlbums(function(data) {
        vm.data = data;
      // no need to read data because its binded to $scope.AlbumsSrv
      // You can however process something only after the data comes back
      });
    }
  }
})();

