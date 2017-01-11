(function () {
  'use strict';

  var TagBookmarkList = {
    templateUrl: 'shared/bookmark/bookmark-list.html',
    controllerAs: 'model',

    controller: function controller($stateParams, BookmarkFactory) {
      var model = this;
      model.name = $stateParams.tagName;
      model.getTaggedBookmarks = getTaggedBookmarks;

      model.$onInit = function () {
        getTaggedBookmarks();
      };

      function getTaggedBookmarks() {
        return BookmarkFactory.getTaggedBookmarks($stateParams.tagName)
          .then(function (responseData) {
            return model.bookmarks = responseData;
          });
      } //end getBookmarks
    } //end controller

  }; //end TagBookmarkList

  angular
    .module("shareMark")
    .component("tagBookmarkList", TagBookmarkList);
})();
