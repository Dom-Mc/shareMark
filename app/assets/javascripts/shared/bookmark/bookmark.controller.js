(function(){
  'use strict';

  function BookmarkController($stateParams, BookmarkFactory, VoteFactory) {

        const model = this;
        model.source_types = ["Blog/Post", "Video", "Conversation Thread", "Book/Publication", "Other"];
        model.source_type = "Blog";
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
                                  return model.bookmarks = responseData;
                              });
        }

        function updateBookmark(){
        }

        function createBookmark(){
          return BookmarkFactory.createBookmark(model.newBookmark)
                                .then(getBookmarks);
          // return BookmarkFactory.createBookmark(model.newBookmark)
          //                       .then(function(){
          //                         $state.go('home/bookmark')
          //                       });
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

        function successResponse(successResponse){
          debugger
          return successResponse.data;
        }

  }

  angular
    .module('shareMark')
    .controller('BookmarkController', BookmarkController);

}());
