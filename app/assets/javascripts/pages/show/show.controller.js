(function(){
  'use strict';

  angular
    .module('shareMark')
    .controller('ShowController', ShowController);

    function ShowController($stateParams, BookmarkFactory, $state) {
          const model = this;
          model.getBookmark = getBookmark;

          function getBookmark(){
            return BookmarkFactory.getBookmark($stateParams.id)
                                  .then(function(responseData){
                                    return model.bookmark = responseData;
                                  });
          }//end getBookmark

          model.$onInit = function ($stateParams) {
            getBookmark();
          };


  }//end ShowController

}());
