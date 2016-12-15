//factory is like the model - it access the backend and returns the data to the controller

(function(){
  'use strict';

  angular
    .module('shareMark')
    .factory('BookmarkFactory', BookmarkFactory);

  function BookmarkFactory($http){
    return {
      // NOTE: callable methods
      getBookmarks: getBookmarks,
      getBookmark: getBookmark,
      createBookmark: createBookmark,
      updateBookmark: updateBookmark
    }

    function getBookmark(id){
      return $http.get('bookmarks/' + id)
                  .then(successResponse)
                  // .then(function(response){
                  //   return response.data;
                  // });
    }


    function getBookmarks(){
      //returns our json file via active model serializer
      return $http.get('/bookmarks')
                  //ajax returns a promise
                  .then(successResponse)
                  .catch(errorResponse);
                  // debugger
    }//end getBookmarks

    function createBookmark(bookmark){
      var req = {
        method: "post",
        url: '/bookmarks',
        headers: {
          'Content-Type': 'application/json'
          // "Content-Type": "application/json; charset = utf-8;"
        },
        data: {
          bookmark: bookmark
        }
      }
      return $http(req)
                .catch(errorResponse);
    }//end createBookmark

    function updateBookmark(bookmark){
      debugger
    }//end updateBookmark


    function successResponse(response){
      return response.data;
    }

    function errorResponse(error){
      return error.data;
    }

  }//end BookmarkFactory

}());
