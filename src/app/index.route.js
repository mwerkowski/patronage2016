(function() {
  'use strict';

  angular
    .module('patronage2016')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('users', {
        url: '/users?id',
        templateUrl: 'app/main/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      .state('user', {
        url: '/users/:userName',
        templateUrl: 'app/main/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'app/main/about.html',
          controller: 'AboutController',
          controllerAs: 'about'
        });
    $urlRouterProvider.otherwise('/');
  }


})();
