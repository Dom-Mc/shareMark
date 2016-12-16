// (function(){
//   'use strict';
//
//   angular
//     .module('shareMark')
//     .factory('SearchFactory', SearchFactory);
//
//     function searchFactory(searchData){
//       return {
//         //callable methods
//         searchCurrent: searchCurrent,
//         searchHistory: searchHistory
//       }
//
//       function searchCurrent(searchData){
//         console.log("current search:" + searchData);
//         return searchData;
//       }
//
//       function searchHistory(searchCurrent){
//         let searchHistory = searchHistory || [];
//
//         if (searchHistory.length >= 5){
//          searchHistory.shift;
//         }
//
//         console.log("search history: " + searchHistory.push(searchCurrent());
//         return searchHistory.push(searchCurrent());
//       }
//
//
//
//   }//end searchFactory
//
// }());
