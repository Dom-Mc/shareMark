(function () {
  'use strict';

  var Show = {
    templateUrl: 'pages/show/show.html',
    controllerAs: 'model',

    controller: function controller(BookmarkFactory, $stateParams) {
      var model = this;
      model.getBookmark = getBookmark;

      model.$onInit = function () {
        getBookmark();
      };

      function getBookmark() {
        return BookmarkFactory.getBookmark($stateParams.id)
          .then(function (responseData) {
            return model.bookmark = responseData;
          });
      } //end getBookmark
    } //end controller

  }; //end Show

  angular
    .module("shareMark")
    .component("show", Show);
})();
