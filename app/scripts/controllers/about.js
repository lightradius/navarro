'use strict';

/**
 * @ngdoc function
 * @name navarroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the navarroApp
 */
angular.module('navarroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
