(function(){
  'use strict'

  const Bookmark = {
    templateUrl: 'shared/bookmark/bookmark.html',

    bindings: {
      bookmark: "<"
    },

    //NOTE: to be used in bookmark.html template
    controllerAs: 'model'
  }
  angular
    .module("shareMark")
    .component("bookmark", Bookmark);

}());
