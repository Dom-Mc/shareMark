(function(){
  'use strict';

  function BookmarkFactory($http, $stateParams){
    return {
      getBookmarks: getBookmarks,
      getBookmark: getBookmark,
      getTaggedBookmarks: getTaggedBookmarks,
      saveBookmark: saveBookmark
    }

    // NOTE: retrieves an individual bookmark
    function getBookmark(id){
      return $http.get('bookmarks/' + id)
                  .then(function(response){
                    return response.data;
                  });
    }

    // NOTE: retrieves a collection of bookmarks
    function getBookmarks(){
      return $http.get('/bookmarks')
                  .then(function(response){
                    return response.data;
                  });
    }//end getBookmarks

    function getTaggedBookmarks(){
        return $http.get('bookmarks/tags/' + $stateParams.tagName)
                            .then(function(responseData){
                              return responseData.data;
                            });
    }//end getBookmarks


    // NOTE: create or update bookmarks
    function saveBookmark(bookmark){
      let postUrl;
      // let request;
      let bookmarkData;

      // NOTE: updating an exsisting bookmark (rating)
      if (bookmark.hasOwnProperty('id')){
        postUrl = `/bookmarks/${bookmark.id}`;

        bookmarkData = {
          bookmark: {
            rating: bookmark.rating
                    }
        };

      // NOTE: creating new bookmark
      } else {

        postUrl = '/bookmarks';
        const bookmarkTagNames = bookmark.tag.map(function(tag){
          return tag['name']
        });

        bookmarkData = {
          bookmark: {
            display_name: bookmark.display_name,
            description: bookmark.description,
            source: bookmark.source,
            resource_type: bookmark.resource_type,
            url: bookmark.url,
            tag_attributes: {
              tag_names: bookmarkTagNames
            }
          }
        };//end bookmarkData

      }//else

      const request = {
        method: "post",
        url: postUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        data: bookmarkData
      };//end request

      return $http(request)
                .then(function(response){
                  return response.data;
                });

    }//end saveBookmark
  }//end BookmarkFactory

  angular
    .module('shareMark')
    .factory('BookmarkFactory', BookmarkFactory);

}());
