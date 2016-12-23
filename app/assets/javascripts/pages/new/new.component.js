(function(){
  'use strict'

  const New = {
    templateUrl: 'pages/new/new.html',
    controllerAs: 'model',
    controller: function(BookmarkFactory, TagFactory, $state){

      const model = this;
      model.saveBookmark = saveBookmark;
      model.loadTags = loadTags;
      model.validationClass = validationClass;
      model.resource_types = ["video", "conversation thread", "book/publication", "blog/post", "other"];

      // NOTE: add & remove class based on form validation
      function validationClass(value){
        if (value.$dirty){
          return value.$invalid ? 'remove icon red' : 'checkmark icon green';
        }
      }

      // NOTE: ngTagsInput module
      function loadTags(query) {
        model.testing = "clicked";
        return TagFactory.getTags()
                         .then(function(response){
                           return response;
                         });
      }//end loadTags

      // NOTE: save new bookmarks
      function saveBookmark(){
        return BookmarkFactory.saveBookmark(model.newBookmark)
          .then(saveBookmarkResponse)
      }//end saveBookmark

      function saveBookmarkResponse(response){
        if(response.status == "success"){
          return $state.go("show", { id: response.success.id});
        } else {
          return model.error = response.errors;
        }
      }//end saveBookmarkResponse

    }//end controller

  }//end New

  angular
    .module("shareMark")
    .component("new", New);

}());
