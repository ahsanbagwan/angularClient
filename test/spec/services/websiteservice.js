'use strict';

describe('Service: WebsiteService', function () {

  // load the service's module
  beforeEach(module('apiconsumeApp'));

  // instantiate service
  var WebsiteService;
  beforeEach(inject(function (_WebsiteService_) {
    WebsiteService = _WebsiteService_;
  }));

  it('should do something', function () {
    expect(!!WebsiteService).toBe(true);
  });

});
