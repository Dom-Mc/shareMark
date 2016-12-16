(function(){
  'use strict'

  angular
    .module('shareMark')
    .factory('RatingFactory', RatingFactory);

    function RatingFactory(BookmarkFactory){
      return {
        getVote: getVote,
        updateBookmarkRating: updateBookmarkRating
      }
    }


    function updateBookmarkRating(bookmark){
      return BookmarkFactory.saveBookmark(bookmark)
                            .then(function(successResponse){
                             successResponse;
                           });
    }


    function getVote(vote, bookmark){
      let newValue = "";
      if (vote === "upVote"){
        newValue = calculateUpVote(bookmark);
      } else {
        newValue = calculateDownVote(bookmark);
      }
      return newValue;
    }

    function calculateUpVote(bookmark){
      if (bookmark.rating.valueOf() <= bookmark.previousRating.valueOf()){
        bookmark.rating++;
      } else {
        bookmark.rating--;
      }
      return bookmark.rating;
    }

    function calculateDownVote(bookmark){
      if (bookmark.rating.valueOf() >= bookmark.previousRating.valueOf()){
        bookmark.rating--;
      } else {
        bookmark.rating++;
      }
      return bookmark.rating;
    }
  // }
  // }());
}());
