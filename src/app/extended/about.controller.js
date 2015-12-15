(function() {
  'use strict';

  angular
    .module('patronage2016')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var ac = this;
    ac.name = "Marcin";
    ac.surname = "Werkowski";
    ac.codeAcademyLink="https://www.codecademy.com/wero87#completed"


  }



})();
