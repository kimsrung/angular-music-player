(function() {
  'use strict';

  angular
    .module('app.music')
    .controller('ActionsCtrl', ActionsCtrl);

  ActionsCtrl.$inject = [
    '$scope'
  ]

  function ActionsCtrl($scope) {
    var vm = this;

    vm.toggleChat = function () {
      $('.chat-bar').toggleClass("visible");
    };

  }
})();

