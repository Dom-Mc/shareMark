(function(){
  'use strict'

  angular
    .module("shareMark")
    .component("show", Show);

    const Show = {
      templateUrl: 'pages/show/show.html',
      controller: 'ShowController',
      controllerAs: 'model'
    }

}());
