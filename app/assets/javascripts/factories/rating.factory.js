(function () {
  'use strict';

  function RatingFactory(BookmarkFactory) {
    return {
      getVote: getVote,
      updateBookmarkRating: updateBookmarkRating
    };

    function updateBookmarkRating(bookmark) {
      return BookmarkFactory.saveBookmark(bookmark).then(function (successResponse) {
        return successResponse;
      });
    }

    function getVote(vote, bookmark) {
      var newValue = "";
      if (vote === "upVote") {
        newValue = calculateUpVote(bookmark, vote);
      } else {
        newValue = calculateDownVote(bookmark, vote);
      }
      return newValue;
    }

    function calculateUpVote(bookmark, vote) {
      if (bookmark.rating.valueOf() <= bookmark.previousRating.valueOf()) {
        bookmark.rating++;
      } else {
        bookmark.rating--;
      }
      return bookmark.rating;
    }

    function calculateDownVote(bookmark, vote) {
      if (bookmark.rating.valueOf() >= bookmark.previousRating.valueOf()) {
        bookmark.rating--;
      } else {
        bookmark.rating++;
      }
      return bookmark.rating;
    }

  } //end RatingFactory

  angular
    .module('shareMark')
    .factory('RatingFactory', ['BookmarkFactory', RatingFactory]);

})();
