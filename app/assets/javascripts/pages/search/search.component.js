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
      model.showMoreBookmarks = showMoreBookmarks;
      model.limit = 3;

      model.$onInit = function () {
        getBookmarks();
      };

      function getBookmarks() {
        BookmarkFactory.getBookmarks()
          .then(function (responseData) {
            model.bookmarks = responseData;
          });
      } //getBookmarks

      // NOTE: Load more bookmarks
      function showMoreBookmarks(){
        model.limit += 3;
      }

      // NOTE: Record and limit votes
      function getVote(value, bookmark) {
        if (!bookmark.hasOwnProperty('previousRating')) {
          // debugger
          bookmark.previousRating = bookmark.rating;
        }

// NOTE:  necessary????
        var newVote = RatingFactory.getVote(value, bookmark);

        return BookmarkFactory.saveBookmark(bookmark)
          .then(function (response) {
            return response.data;
          });
      } //end getVote
    }] //end controller

  }; //end Search

  angular
    .module("shareMark")
    .component("search", Search);

})();
