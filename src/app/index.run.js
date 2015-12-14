(function() {
  'use strict';

  angular
    .module('patronage2016')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
