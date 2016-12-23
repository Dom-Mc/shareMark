(function(){
  'use strict'

    function TagFactory($http){
      return {
        getTags: getTags
      }

      function getTags(){
        return $http.get('/tags')
                    .then(function(response){
                      return response.data;
                    })
      }//end getTags

  }//end TagFactory

  angular
    .module('shareMark')
    .factory('TagFactory', TagFactory);

}());
