(function(){
  'use strict';

  function NewController($stateParams, BookmarkFactory, $state) {

        const model = this;
        model.source_types = ["Video", "Conversation Thread", "Book/Publication", "Other", "Blog/Post"];
        model.createBookmark = createBookmark;

        function getBookmarks(){
          return BookmarkFactory.getBookmarks()
                                .then(function(responseData){
                                  return model.bookmarks = responseData;
                              });
        }

        function createBookmark(){
          return BookmarkFactory.createBookmark(model.newBookmark)
            .then(
              function(response) {
                if(response.status == "success"){
                  return $state.go("show", { id: response.success.id});
                } else {
                  return model.error = response.errors;
                }
          });
      }//end createBookmark

}//end NewController

  angular
    .module('shareMark')
    .controller('NewController', NewController);

}());
