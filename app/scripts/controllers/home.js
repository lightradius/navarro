'use strict';

/**
 * @ngdoc function
 * @name navarroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the navarroApp
 */
angular.module('navarroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
