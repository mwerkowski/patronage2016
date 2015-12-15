(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(usersService) {
    var uc = this;
    usersService.getUsers().then(function (result) {
      uc.user = null;
      uc.users = result;
    }, function (e) {
      console.log(e);
    });

    function getUser(login){
      console.log(login);
      usersService.getUser(login).then(function (result) {
        uc.user = result;
      }, function (e) {
        console.log(e);
      });
    }


  }



})();
