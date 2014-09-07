'use strict';

describe('Controller: VseesCtrl', function () {

  // load the controller's module
  beforeEach(module('vSeeUApp'));

  var VseesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VseesCtrl = $controller('VseesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
