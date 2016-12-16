// (function(){
//   'use strict';
//
//   function SearchController($stateParams, BookmarkFactory, RatingFactory) {
//
//         const model = this;
//         model.source_type = "Blog";
//         model.getBookmark = getBookmark;
//         model.getBookmarks = getBookmarks;
//
//         model.bookmarkSortOrder = "-rating";
//         model.getVote = getVote;
//
//         function getBookmark(){
//           return BookmarkFactory.getBookmark($stateParams.id)
//                                 .then(function(responseData){
//                                   return model.bookmark = responseData;
//                                 });
//         }
//
//         function getBookmarks(){
//           return BookmarkFactory.getBookmarks()
//                                 .then(function(responseData){
//                                   return model.bookmarks = responseData;
//                               });
//         }
//
//         function activate(){
//           getBookmarks();
//         }
//
//         activate();
//
//
//         function getVote(value, bookmark){
//           if (!bookmark.hasOwnProperty('previousRating')){
//             bookmark.previousRating = bookmark.rating
//           }
//
//           let newVote = RatingFactory.getVote(value, bookmark);
//
//           return BookmarkFactory.saveBookmark(bookmark)
//           .then(function(response){
//             return response.data;
//           })
//         };
//
//   }
//
//   angular
//     .module('shareMark')
//     .controller('SearchController', SearchController);
//
// }());
