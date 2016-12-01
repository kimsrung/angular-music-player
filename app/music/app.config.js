;(function() {
'use strict';

angular
  .module('app.music')
  .config(config)
  .constant('top100SongsEver', [
      { url: 'http://upload.wikimedia.org/wikipedia/en/5/5e/U2_One.ogg', displayName: 'U2 - One' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/6/6c/NirvanaSmellsLikeTeenSpirit.ogg', displayName: 'Nirvana - Smells Like Teen Spirit' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/b/be/My_Name_Is.ogg', displayName: 'Eminem - My Name is' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/c/c4/Radiohead_-_Creep_%28sample%29.ogg', displayName: 'Radiohead - Creep' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/6/64/OasisLiveForever.ogg', displayName: 'Oasis - Live Forever' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Eagles_-_Hotel_California.ogg', displayName: 'Eagles - Hotel California' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Stairway_to_Heaven_3_sections.ogg', displayName: 'Led Zeppelin - Stairway to Heaven' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Pink_floyd_another_brick_in_the_wall_part_2.ogg', displayName: 'Pink Floyd - Another Brick in the Wall' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
      { url: 'http://upload.wikimedia.org/wikipedia/en/d/db/Layla_sample_1.ogg', displayName: 'Derek and the Dominos - Layla' }
    ])
  .run([function () {
    $(document).ready(function(){
        setTimeout(function(){
            $('.page-loading-overlay').addClass("loaded");
            $('.load_circle_wrapper').addClass("loaded");

            console.log("Welcome to Groovy! Navigate and add songs to your playlists.");
        },1000);
    });
  }]);

config.$inject = [
  '$urlRouterProvider',
  '$stateProvider',
  '$locationProvider'
]

function config($urlRouterProvider, $stateProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider
    .state('layout', {
      templateUrl: 'app/music/layout/layout.html',
      controller: 'LayoutCtrl',
      controllerAs: 'generalPlaylist'
    });
}
})();