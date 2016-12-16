(function(){
  'use strict';

  function BookmarkController($stateParams, BookmarkFactory, RatingFactory, $state) {

        const model = this;

        //TODO: update
        model.source_types = ["Video", "Conversation Thread", "Book/Publication", "Other", "Blog/Post"];
        model.defaultSource = model.source_types[0];


        model.getBookmarks = getBookmarks;
        model.createBookmark = createBookmark;
        model.updateBookmark = updateBookmark;

        //searching
        model.bookmarkSortOrder = "-rating";

        //voting
        model.getVote = getVote;
        model.newRating = ""

        function getBookmark(){
          return BookmarkFactory.getBookmark($stateParams.id)
                                .then(function(responseData){
                                  return model.bookmark = responseData;
                                });
        }

        function getBookmarks(){
          return BookmarkFactory.getBookmarks()
                                .then(function(responseData){
                                  debugger
                                  return model.bookmarks = responseData;
                              });
        }

        function updateBookmark(){
        }


        function activate(){
          getBookmarks();
        }

        activate();

        function getVote(value, bookmark){
          const sum = RatingFactory.getVote(value, bookmark);
          // model.newRating = sum;
          // return VoteFactory.getVote(value, bookmark)
                            // .then(successResponse);
                            // .then(function(responseData){
                            //   debugger
                            //   return responseData;
                            // });
        }

        // function successResponse(successResponse){
        //   debugger
        //   return successResponse.data;
        // }

  }

  angular
    .module('shareMark')
    .controller('BookmarkController', BookmarkController);

}());
