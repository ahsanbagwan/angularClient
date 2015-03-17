'use strict';

/**
 * @ngdoc service
 * @name apiconsumeApp.WebsiteService
 * @description
 * # WebsiteService
 * Factory in the apiconsumeApp.
 */
angular.module('apiconsumeApp')
  .factory('WebsiteService', ['halClient',function(halClient) {
    
    // Public API here
    return {
      load: function () {
        return halClient.$get('https://www.reddit.com/.json');
      }
    };
  }]);
