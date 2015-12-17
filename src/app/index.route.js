(function() {
  'use strict';

  angular
    .module('patronage2016')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        abstract: true,
        views: {
          'menu': {
            templateUrl: 'app/partials/menu.html'
          },
          'title': {
            templateUrl: 'app/partials/title.html'
          },
          'content': {},
          'foot': {
            templateUrl: 'app/partials/foot.html'
          }
        }
      })
      .state('home', {
        parent: 'index',
        url: '/',
        templateUrl: 'app/partials/main/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('users', {
        parent: 'index',
        url: '/users?id',
        templateUrl: 'app/partials/main/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      .state('user', {
        parent: 'index',
        url: '/users/:userName',
        templateUrl: 'app/partials/main/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
      .state('about', {
        parent: 'index',
        url: '/about',
        templateUrl: 'app/partials/main/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      });
    $urlRouterProvider.otherwise('/');
  }


})();
