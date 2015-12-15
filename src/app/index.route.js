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
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/extended/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'app/extended/about.html',
          controller: 'AboutController',
          controllerAs: 'about'
        });
    $urlRouterProvider.otherwise('/');
  }


})();
