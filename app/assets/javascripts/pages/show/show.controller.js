(function(){
  'use strict';

  angular
    .module('shareMark')
    .controller('ShowController', ShowController);

    function ShowController($stateParams, BookmarkFactory, $state) {
      debugger
          const model = this;
          model.getBookmark = getBookmark;

          function getBookmark(){
            debugger
            return BookmarkFactory.getBookmark($stateParams.id)
                                  .then(function(responseData){
                                    return model.bookmark = responseData;
                                  });
          }//end getBookmark

          model.$onInit = function ($stateParams) {

            debugger

            getBookmark();
          };

  }//end ShowController

}());
