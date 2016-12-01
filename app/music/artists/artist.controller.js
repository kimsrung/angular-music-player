(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('ArtistCtrl', ArtistCtrl);

  ArtistCtrl.$inject = [
    '$scope',
    '$stateParams',
    'ArtistSrv',
    'PlayListSrv',
    'navigationMenuService',
    'loggit'
  ]

  function ArtistCtrl($scope, $stateParams, ArtistSrv, PlayListSrv, navigationMenuService, loggit) {
    var vm = this;
    var artistPlaylistVar = [];
    var artistPlaylistAlbums = [];

    vm.ArtistSrv = ArtistSrv;

    vm.AlbumList = true;
    vm.FullList = false;
    vm.following = "Follow artist";
    vm.following_class = "btn-default";

    activate();

    function activate() {

      ArtistSrv.getArtist($stateParams.title, function (response) {
        vm.artistName = response.name;
        vm.artistImage = response.image;
        vm.artistBanner = response.banner;
        vm.artistGenre = response.genre;
        vm.artistAbout = response.about;

        if(angular.isDefined(response.albums)){
          _.map(response.albums, function (album) {

            artistPlaylistAlbums.push({
              album_name: album.album_name,
              album_image: album.album_image,
              album_release: album.album_release,
              songs:[]
            });

            _.map(album.songs, function (song) {

              /*Put them all together in one single list (for adding to new playlists for example)*/

              var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);

              artistPlaylistVar.push({
                id: song.id,
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName:song.displayName
              });

              /*Put songs also in this artist ordered by album*/

              artistPlaylistAlbums[artistPlaylistAlbums.length - 1].songs.push({
                id: song.id,
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName:song.displayName
              });
            });

          });

          vm.artistPlaylist = artistPlaylistVar;
          vm.artistPlaylistAlbums = artistPlaylistAlbums;
        }
      });
    }

    vm.follow = function(){
      vm.following = "Following";
      vm.following_class = "btn-primary";

      loggit.logSuccess('Yaay!! You are now following this artist');

    };

    vm.addSongs = function (playlist, callback) {

      _.each(artistPlaylistVar, function (audioElement) {
        playlist.push(angular.copy(audioElement));

        if ((artistPlaylistVar.indexOf(audioElement) + 1) == artistPlaylistVar.length) {
          // Callback goes here
          if (callback) {
            callback();
          }
        }

      });

      navigationMenuService.menu = false;
      navigationMenuService.playlist = true;

    };

    vm.addSongsAndPlay = function (playlist, mediaPlayer) {

      vm.addSongs(playlist, function () {

        setTimeout(function () {
          mediaPlayer.play();
        }, 1000);

      });

    };

    vm.addSongToPlaylist = function(song,playlist){

      PlayListSrv.addSongToPlaylist(song,playlist);
    };

    vm.toggleAlbumsList = function(){
      vm.AlbumList = true;
      vm.FullList = false;
    };

    vm.toggleFullList = function(){
      vm.AlbumList = false;
      vm.FullList = true;
    };
  }
})();

