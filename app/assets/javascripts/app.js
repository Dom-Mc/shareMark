(function(){
  'use strict';

  angular
    .module('shareMark', ['ngMessages', 'ui.router', 'templates', 'ngclipboard', 'ngTagsInput'])

    .config(function($stateProvider, $urlRouterProvider, $locationProvider){

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

      // TODO: add endpoint to retrieve source_types
      // .state('sourceType', {
      //   url: "/bookmarks/type/:source_type",
      //   template: "<source></source>"
      // })

      .state('show', {
        url: '/bookmarks/:id',
        template: '<show></show>'
      })

    });//end config

}());
