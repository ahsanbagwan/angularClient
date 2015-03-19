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
  	
  	$scope.listingData = {};
  	WebsiteService
            .load()
            .then( function( websiteResource ) {
            	$scope.array = [];
            	$scope.listingData = websiteResource;
            	angular.forEach(websiteResource.data.children, function(index){
					$scope.array.push(index);
            	
            	});

           	});
	}	
]);  
