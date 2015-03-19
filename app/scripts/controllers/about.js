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
            	// console.log(websiteResource);
            	// console.log(JSON.stringify(websiteResource));

            	$scope.array = [];
            	$scope.listingData = websiteResource;
            	angular.forEach(websiteResource.data.children, function(value, key){
					$scope.array.push(value);
            	});

            	/*console.log($scope.array);
            	for (var i=0; i<$scope.array.length; i++) {
            		console.log($scope.array[i].data.title);
            	}
            	*/
            });
}	
]);  
