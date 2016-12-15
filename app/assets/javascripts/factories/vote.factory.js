(function(){
  'use strict'

  angular
    .module('shareMark')
    .factory('RatingFactory', RatingFactory);

    function RatingFactory(BookmarkFactory){
      return {
        getVote: getVote,
        updateBookmarkRating: updateBookmarkRating,
        runUpdate: runUpdate
      }
    }

    function runUpdate(vote, bookmark){
        debugger
        getvote(vote, bookmark)
        updateBookmarkRating(bookmark)
      }



    function updateBookmarkRating(bookmark){
      debugger
      return BookmarkFactory.updateBookmark(bookmark)
                            .then(function(successResponse){
                             debugger
                             successResponse;
                           });

      // return $http.get('/bookmarks')
      //             //ajax returns a promise
      //             .then(successResponse)
      //             .catch(errorResponse);
    }


    function getVote(vote, bookmark){
      const previusRating = bookmark.rating;
      if (vote === "upVote"){
        return calculateUpVote(bookmark, previusRating);
      } else {
        return calculateDownVote(bookmark, previusRating);
      }
    }

    function calculateUpVote(bookmark, previusRating){
      // debugger
      if (bookmark.rating <= previusRating){
        bookmark.rating++;
      } else {
        bookmark.rating--;
      }
      debugger
      return bookmark.rating;
    }

    function calculateDownVote(bookmark){
      if (bookmark.rating >= previusRating){
        bookmark.rating--;
      } else {
        bookmark.rating++;
      }
      return bookmark.rating;
    }
  // }
  // }());
}());
