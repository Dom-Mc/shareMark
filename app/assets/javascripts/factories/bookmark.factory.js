//factory is like the model - it access the backend and returns the data to the controller

(function(){
  'use strict';

  angular
    .module('shareMark')
    .factory('BookmarkFactory', BookmarkFactory);

  function BookmarkFactory($http){
    return {
      getBookmarks: getBookmarks,
      getBookmark: getBookmark,
      createBookmark: createBookmark,
      updateBookmark: updateBookmark
    }

    function getBookmark(id){
      return $http.get('bookmarks/' + id)
                  .then(function(response){
                    return response.data;
                  });
    }

    function getBookmarks(){
      return $http.get('/bookmarks')
                  .then(function(response){
                    return response.data;
                  })
    }//end getBookmarks

    function createBookmark(bookmark){
      const request = {
        method: "post",
        url: '/bookmarks',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          bookmark: bookmark
        }
      }

      return $http(request)
                .then(function(response){
                  return response.data;
                })
    }

    function updateBookmark(bookmark){
      debugger
    }//end updateBookmark

  }//end BookmarkFactory

}());
