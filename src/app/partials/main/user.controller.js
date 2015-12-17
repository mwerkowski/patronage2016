(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController(usersService, $stateParams, $log) {
    var vm = this;
    vm.userName = $stateParams.userName;

    vm.getUser = function(login){
      usersService.getUser(login).then(function (result) {
        vm.currentUser = result;
      }, function (e) {
        $log(e);
      });
    };

    vm.getUser(vm.userName);
  }


})();
