(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(usersService, $stateParams, $log) {
    var vm = this;
    vm.id = parseInt($stateParams.id);
    vm.userName = $stateParams.userName;

    vm.getUser = function(login){
      usersService.getUser(login).then(function (result) {
        vm.currentUser = result;
        vm.userName = vm.currentUser.login;
      }, function (e) {
        $log(e);
      });
    };

    vm.getUsers = function(){
      usersService.getUsers(vm.id-1).then(function (result) {
        vm.users = result;
      }, function (e) {
        $log(e);
      });
    };

    if (!vm.userName) {
      vm.getUsers();
    }
    else{
      vm.getUser(vm.userName)
    }

  }



})();
