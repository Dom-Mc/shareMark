(function(){
  'use strict'

  angular
    .module("shareMark")
    .component("search", Search);

    const Search = {
      templateUrl: 'pages/search/search.html',
      controller: 'SearchController',
      controllerAs: 'model'
    }

}());
