(function(){
  'use strict';

  function BookmarkController($stateParams, BookmarkFactory, RatingFactory, $state) {

        const model = this;

        model.getBookmarks = getBookmarks;
        model.createBookmark = createBookmark;
        model.updateBookmark = updateBookmark;



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



        function activate(){
          getBookmarks();
        }

        activate();

  }


  angular
    .module('shareMark')
    .controller('BookmarkController', BookmarkController);

}());
