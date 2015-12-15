(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(usersService, $stateParams) {
    var uc = this;
    uc.id = parseInt($stateParams.id);
    uc.userName = $stateParams.userName;

    uc.getUser = function(login){
      usersService.getUser(login).then(function (result) {
        uc.currentUser = result;
        uc.userName = uc.currentUser.login;
      }, function (e) {
        console.log(e);
      });
    };

    uc.getUsers = function(){
      usersService.getUsers(uc.id-1).then(function (result) {
        uc.users = result;
      }, function (e) {
        console.log(e);
      });
    };

    if (!uc.userName) {
      uc.getUsers();
    }
    else{
      uc.getUser(uc.userName)
    }

  }



})();
