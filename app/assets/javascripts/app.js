(function(){
  'use strict';

  angular
    .module('shareMark', ['ngMessages', 'ui.router', 'templates', 'ngclipboard', 'ngTagsInput'])

    .config(['$httpProvider', '$urlRouterProvider', '$stateProvider', function ($httpProvider, $urlRouterProvider, $stateProvider) {
      
      $httpProvider.useApplyAsync(true);
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: "/",
        template: "<home></home>"
      })

      .state('new', {
        url: '/new',
        template: '<new></new>'
      })

      .state('tagList', {
        url: "/tags",
        template: "<tag-list></tag-list>"
      })

      .state('search', {
          url: '/search',
          template: '<search></search>'
      })

      .state('tagBookmarkList', {
        url: "/tags/:tagName",
        template: "<tag-bookmark-list></tag-bookmark-list>"
      })

      .state('show', {
        url: '/bookmarks/:id',
        template: '<show></show>'
      })

    }]);//end config

}());
