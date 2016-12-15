(function(){
  'use strict';

  angular
    .module('shareMark', ['ui.router', 'templates', 'ngclipboard'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: "/",
        template: "<home></home>"
      })

      .state('search', {
          url: '/search',
          template: '<search></search>'
      })

      .state('new', {
        url: '/new',
        template: '<new></new>'
      })

      .state('show', {
        url: '/:id',
        template: '<show></show>'
      })

    });//end config

}());
