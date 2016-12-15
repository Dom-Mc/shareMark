(function(){
  'use strict'

  const New = {
    templateUrl: 'pages/new/new.html'

    // templateUrl: 'components/bookmarks/bookmark-search.html',
    // controller: 'NewController'
    // controllerAs: 'model'
  }

  angular
    .module("shareMark")
    .component("new", New);

    
}());
