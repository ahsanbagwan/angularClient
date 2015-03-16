'use strict';

/**
 * @ngdoc function
 * @name apiconsumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiconsumeApp
 */
angular.module('apiconsumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
