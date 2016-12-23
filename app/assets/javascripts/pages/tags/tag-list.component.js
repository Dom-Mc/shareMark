(function(){
  'use strict'

  const TagList = {
    templateUrl: 'pages/tags/tag-list.html',
    controllerAs: 'model',

    controller: function(TagFactory){
      const model = this;
      model.getTags = getTags;
      
      model.$onInit = function () {
        getTags();
      };

      function getTags(){
        return TagFactory.getTags()
                         .then(function(responseData){
                           return model.tags = responseData;
                         });
      }//end getTags

    }//end controller

  }//end TagList

  angular
    .module("shareMark")
    .component("tagList", TagList);

}());
