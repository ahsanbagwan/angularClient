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
   /* var setup = function( pageNumber ) {
        WebsiteService
            .load()
            .then( function( websiteResource ) {
                return websiteResource.$get('blogs', {'page': pageNumber, 'size':10, 'sort':null});
            })
            .then( function( resource )
            {
                $scope.page = resource.page;
                $scope.page.currentPage = $scope.page.number + 1;
                return resource.$get('blogPostList');
            })
            .then( function( blogPostList )
            {
                $scope.blogs = blogPostList;
                blogPostList.forEach( function( blog ) {
                    // load author profile
                    blog.$get('author').then(function(author) {
                        blog.author = author;
                    });

                });
            });

    };

    setup(0);

    $scope.selectBlogPage = function(pageNumber) {
        setup(pageNumber-1); //Spring HATEOAS page starts with 0
    };
*/

	 WebsiteService
            .load()
            .then( function( websiteResource ) {
            	console.log(websiteResource );
            });

}
]);  
