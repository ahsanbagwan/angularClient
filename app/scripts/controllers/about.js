'use strict';

/**
 * @ngdoc function
 * @name apiconsumeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apiconsumeApp
 */
angular.module('apiconsumeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
