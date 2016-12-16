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
      saveBookmark: saveBookmark
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

    function saveBookmark(bookmark){
      let postUrl = "";
      if (bookmark.hasOwnProperty('id')){
        postUrl = `/bookmarks/${bookmark.id}`;
      } else {
        postUrl = '/bookmarks';
      }
      let request = {
        method: "post",
        url: postUrl,
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

  }//end BookmarkFactory

}());
