(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('GenresCtrl', GenresCtrl);

  GenresCtrl.$inject = [
    '$scope',
    'GenresListingSrv'
    ]

  function GenresCtrl($scope, GenresListingSrv) {
    var vm = this;

    activate();

    function activate() {
      GenresListingSrv.getGenres(function(data) {
        vm.data = data;
      // no need to read data because its binded to $scope.AlbumsSrv
      // You can however process something only after the data comes back
      });
    }
  }
})();

