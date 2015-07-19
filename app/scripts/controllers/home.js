'use strict';

/**
* @ngdoc function
* @name navarroApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the navarroApp
*/
angular.module('navarroApp')
.controller('HomeCtrl', function ($scope) {
  $scope.strings = [
    'Here be webdevelopment',
    'AngularJS',
    'Karma'
  ];

  $(function(){
    $(".typed").typed({
      strings: $scope.strings,
      typeSpeed: 0
    });
  });
});
