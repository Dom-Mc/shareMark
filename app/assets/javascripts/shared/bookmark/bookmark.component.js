(function () {
  'use strict';

  var Bookmark = {
    templateUrl: 'shared/bookmark/bookmark-detail.html',
    controllerAs: 'model',
    bindings: {
      bookmark: '<'
    }
  };

  angular
    .module("shareMark")
    .component("bookmark", Bookmark);
})();
