(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(usersService, $stateParams, $log) {
    var vm = this;
    vm.id = parseInt($stateParams.id);

    vm.getUsers = function(){
      usersService.getUsers(vm.id-1).then(function (result) {
        vm.users = result;
      }, function (e) {
        $log(e);
      });
    };

    vm.getUsers();

  }



})();
