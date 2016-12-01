(function() {
  'use strict';

  angular
    .module('app.music')
    .factory('PlayListSrv', PlayListSrv);

  PlayListSrv.$inject = [
    '$http'
  ]

  function PlayListSrv($http) {
    var playlists = {
      list: []
    }
    var storage_id = "playlists_local_list";

    playlists.list[0] = {
      url_name: 'greatest-heats',
      name: 'Greatest hits',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song10.jpg',
      genre: [],
      songs: [
        {"id": "7","image": "dist/images/songs/song20.jpg", "url": "http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3", "displayName": "La fiesta negra - Laetha", "type": "audio/mpeg" },
        {"id": "8","image": "dist/images/songs/song19.jpg", "url": "http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3", "displayName": "La fiesta negra - Only if", "type": "audio/mpeg" },
        {"id": "9","image": "dist/images/songs/song18.jpg", "url": "http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3", "displayName": "La fiesta negra - Trains over fall", "type": "audio/mpeg" },
        {"id": "10","image": "dist/images/songs/song17.jpg", "url": "http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3", "displayName": "La fiesta negra - Nothing else", "type": "audio/mpeg" },
        {"id": "11","image": "dist/images/songs/song16.jpg", "url": "http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3", "displayName": "La fiesta negra - Tonight we are", "type": "audio/mpeg" },
        {"id": "12","image": "dist/images/songs/song15.jpg", "url": "http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3", "displayName": "La fiesta negra - In the night", "type": "audio/mpeg" },
        {"id": "13","image": "dist/images/songs/song14.jpg", "url": "http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3", "displayName": "La fiesta negra - Nothing else", "type": "audio/mpeg" }
      ]
    };

    playlists.list[1] = {
      url_name: 'songsofdream',
      name: 'Sons of Dream',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song11.jpg',
      genre: ['New age','Celtic','World'],
      songs: [
        {"id": "1", "image": "dist/images/songs/song1.jpg", "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3", "displayName": "The lunatics - Come Together", "type": "audio/mpeg" },
        {"id": "2", "image": "dist/images/songs/song2.jpg", "url": "http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3", "displayName": "The lunatics - Drive my car", "type": "audio/mpeg" },
        {"id": "3", "image": "dist/images/songs/song3.jpg", "url": "http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3", "displayName": "The lunatics - Loser", "type": "audio/mpeg" },
        {"id": "4", "image": "dist/images/songs/song4.jpg", "url": "http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3", "displayName": "The lunatics - All my loving", "type": "audio/mpeg" },
        {"id": "5", "image": "dist/images/songs/song5.jpg", "url": "http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3", "displayName": "The lunatics - Taxman", "type": "audio/mpeg" },
        {"id": "6", "image": "dist/images/songs/song6.jpg", "url": "http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3", "displayName": "The lunatics - Tonight we do", "type": "audio/mpeg" }
      ]
    };

    var PlayListObj = {
      get: get,
      put: put,
      update: update,
      getPlaylist: getPlaylist,
      addSongToPlaylist: addSongToPlaylist,
      removeSongFromPlaylist: removeSongFromPlaylist
    };

    PlayListObj.playlistsObj = PlayListObj.get();
    PlayListObj.playlists = PlayListObj.playlistsObj.list;

    return PlayListObj;

    function get(){
      return JSON.parse(localStorage.getItem(storage_id) || JSON.stringify(playlists));
    }

    function put(playlist,callback) {

      PlayListObj.playlists.push(playlist);

      localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));

      setTimeout(function(){
        callback(localStorage.getItem(storage_id));
      },500);
    };

    function update(playlists){

      PlayListObj.playlists = playlists;

      return localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));
    };

    function getPlaylist(title,callback) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.url_name == title){
          return callback(playlist);
        }
      });
    };

    function addSongToPlaylist(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          playlist.songs.push(song);

          PlayListObj.update(PlayListObj.playlists);
        }

      });
    };

    function removeSongFromPlaylist(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          _.map(playlist.songs, function(songOnList){

            if(songOnList.url == song.url){

              playlist.songs = _.without(playlist.songs,songOnList);

              console.log(PlayListObj.playlists);

              PlayListObj.update(PlayListObj.playlists);

            }

          });

        }

      });

    };

  }
})();

