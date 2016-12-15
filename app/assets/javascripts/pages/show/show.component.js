(function(){
  'use strict'

  const Show = {
    templateUrl: 'pages/show/show.html',
    controller: 'ShowController',
    controllerAs: 'model'
  }

  angular
    .module("shareMark")
    .component("show", Show);

}());
