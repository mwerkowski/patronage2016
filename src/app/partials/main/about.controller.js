(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;
    vm.name = "Marcin";
    vm.surname = "Werkowski";
    vm.codeAcademyLink="https://www.codecademy.com/wero87#completed"

  }

})();
