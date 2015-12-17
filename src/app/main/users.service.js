(function() {
  'use strict';

  angular
    .module('patronage2016')
    .factory('usersService', usersService);

  /** @ngInject */
  function usersService($log, $http) {
    var apiHost = 'https://api.github.com/users';

    var service = {
      apiHost: apiHost,
      getUsers: getUsers,
      getUser: getUser
    };

    return service;

    function getUsers(since) {
      if (since) {
        return $http.get(apiHost + '?since=' + since)
          .then(getUsersComplete)
          .catch(getUsersFailed);
      }
      else{
        return $http.get(apiHost)
          .then(getUsersComplete)
          .catch(getUsersFailed);
      }
    }

    function getUser(login) {
      return $http.get(apiHost + '/' + login)
        .then(getUsersComplete)
        .catch(getUsersFailed);

    }

    function getUsersComplete(response) {
      return response.data;
    }

    function getUsersFailed(error) {
      $log.error('Failed for getUsers.\n' + angular.toJson(error.data, true));
    }
  }
})();
