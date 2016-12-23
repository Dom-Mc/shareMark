(function(){
  'use strict'

  const Search = {
    templateUrl: 'pages/search/search.html',
    controllerAs: 'model',

    controller: function(BookmarkFactory, RatingFactory){
      const model = this;
      model.getBookmarks = getBookmarks;
      model.bookmarkSortOrder = "-rating";
      model.getVote = getVote;
      model.$onInit = function () {
        getBookmarks();
      };

      function getBookmarks(){
        return BookmarkFactory.getBookmarks()
                              .then(function(responseData){
                                return model.bookmarks = responseData;
                            });
      }//getBookmarks

      function getVote(value, bookmark){
        if (!bookmark.hasOwnProperty('previousRating')){
          bookmark.previousRating = bookmark.rating
        }

        const newVote = RatingFactory.getVote(value, bookmark);

        return BookmarkFactory.saveBookmark(bookmark)
        .then(function(response){
          return response.data;
        });
      }//end getVote

      model.addToList = addToList;
      function addToList(){
        debugger
      }

    }//end controller

  }//end Search

  angular
    .module("shareMark")
    .component("search", Search);

}());
