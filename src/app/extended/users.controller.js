(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(usersService, $stateParams) {
    var uc = this;

    uc.userName = $stateParams.userName;
    uc.getUser = function(login){
      console.log(login);
      usersService.getUser(login).then(function (result) {
        uc.currentUser = result;
        uc.userName = uc.currentUser.login;
        console.log(uc.currentUser)
      }, function (e) {
        console.log(e);
      });
    };

    if (!uc.userName) {
      usersService.getUsers().then(function (result) {
        uc.users = result;
      }, function (e) {
        console.log(e);
      });
    }
    else{
      uc.getUser(uc.userName )
    }


  }



})();
