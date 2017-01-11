(function () {
  'use strict';

  var Search = {
    templateUrl: 'pages/search/search.html',
    controllerAs: 'model',

    controller: ['BookmarkFactory', 'RatingFactory', function (BookmarkFactory, RatingFactory) {

      var model = this;
      model.getBookmarks = getBookmarks;
      model.bookmarkSortOrder = "-rating";
      model.getVote = getVote;

      model.$onInit = function () {
        getBookmarks();
      };

      function getBookmarks() {
        return BookmarkFactory.getBookmarks()
          .then(function (responseData) {
            return model.bookmarks = responseData;
          });
      } //getBookmarks

      // NOTE: record and limit votes
      function getVote(value, bookmark) {
        if (!bookmark.hasOwnProperty('previousRating')) {
          bookmark.previousRating = bookmark.rating;
        }

        var newVote = RatingFactory.getVote(value, bookmark);

        return BookmarkFactory.saveBookmark(bookmark).then(function (response) {
          return response.data;
        });
      } //end getVote
    }] //end controller

  }; //end Search

  angular
    .module("shareMark")
    .component("search", Search);

})();
