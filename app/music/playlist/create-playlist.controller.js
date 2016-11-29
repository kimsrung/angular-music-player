(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('CreatePlaylistInstanceCtrl', CreatePlaylistInstanceCtrl);

  CreatePlaylistInstanceCtrl.$inject = [
    '$scope',
    '$modalInstance',
    'playlistName',
    'song',
    'loggit'
  ]

  function CreatePlaylistInstanceCtrl($scope, $modalInstance, playlistName, song, loggit) {
    var vm = this;

    $scope.playlistName = playlistName;
    $scope.song = song;

    $scope.ok = function () {

      if($scope.playlistName !== ""){
        $modalInstance.close($scope);
      }
      else {
        $modalInstance.dismiss('cancel');
        loggit.logError("Error! Could not create a playlist with no name..");
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }
})();

