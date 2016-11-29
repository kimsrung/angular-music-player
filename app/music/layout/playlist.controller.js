(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('PlayListCtrl', PlayListCtrl);

  PlayListCtrl.$inject = [
    '$state',
    'PlayListSrv',
    'CreatePlaylistSrv'
  ]

  function PlayListCtrl($state,PlayListSrv, CreatePlaylistSrv) {
    var vm = this;
    var CreateNewPlaylistSrv = CreatePlaylistSrv;

    vm.audioPlaylist = [];

    vm.userPlaylists = PlayListSrv.playlists;

    vm.addSong = function (audioElement) {
      vm.audioPlaylist.push(angular.copy(audioElement));
    };

    vm.removeSong = function (index) {
      vm.audioPlaylist.splice(index, 1);
    };

    vm.dropSong = function (audioElement, index) {
      vm.audioPlaylist.splice(index, 0, angular.copy(audioElement));
    };

    vm.getSongImage = function (currentTrack) {
      if (typeof vm.audioPlaylist[currentTrack - 1] != "undefined") {
        return vm.audioPlaylist[currentTrack - 1].image;
      }
    };

    vm.getSongArtist = function (currentTrack) {
      if (typeof vm.audioPlaylist[currentTrack - 1] != "undefined") {
        return vm.audioPlaylist[currentTrack - 1].artist;
      }
    };

    vm.getSongName = function (currentTrack) {
      if (typeof vm.audioPlaylist[currentTrack - 1] != "undefined") {
        return vm.audioPlaylist[currentTrack - 1].title;
      }
    };

    vm.seekPercentage = function ($event) {
      var percentage = ($event.offsetX / $event.target.offsetWidth);
      if (percentage <= 1) {
        return percentage;
      } else {
        return 0;
      }
    };

    vm.createNewPlaylist = function(song){
      CreateNewPlaylistSrv.openCreateModal(song);
    };

  }
})();

