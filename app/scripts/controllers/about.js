'use strict';

/**
 * @ngdoc function
 * @name apiconsumeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apiconsumeApp
 */

angular.module('apiconsumeApp').controller('AboutCtrl',
			['$rootScope', '$scope', 'WebsiteService',
 function($rootScope, $scope, WebsiteService) {
  
  	WebsiteService
            .load()
            .then( function( websiteResource ) {
            	console.log(websiteResource );
            });

}
]);  
