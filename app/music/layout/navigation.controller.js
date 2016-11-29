(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('NavCtrl', NavCtrl);

  NavCtrl.$inject = [
    'navigationMenuService'
  ]

  function NavCtrl(navigationMenuService) {
    var vm = this;

    vm.navigationState = navigationMenuService;

    vm.SwitchToMenu = function () {
      navigationMenuService.menu = true;
      navigationMenuService.playlist = false;
    };

    vm.SwitchToPlaylist = function () {
      navigationMenuService.menu = false;
      navigationMenuService.playlist = true;
    };

  }
})();

