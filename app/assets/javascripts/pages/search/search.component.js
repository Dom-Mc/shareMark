(function(){
  'use strict'

  const Search = {
    templateUrl: 'pages/search/search.html',
    controller: 'SearchController',
    controllerAs: 'model'
  }

  angular
    .module("shareMark")
    .component("search", Search);

}());
