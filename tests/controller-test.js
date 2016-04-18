describe("Controller Test", function() {
	var mockScope = {};
	var controller;
	beforeEach(angular.mock.module('exampleApp'));
	beforeEach(angular.mock.inject(function($controller, $rootScope) {
		mockScope = $rootScope.$new();
		controller = $controller("defaultCtrl", {
			$scope: mockScope
		});
	}));
	console.dir(mockScope);
	it("Create variable", function() {
		expect(mockScope.counter).toEqual(0);
	});
	it("Increment variable", function() {
		mockScope.incrementCounter();
		expect(mockScope.counter).toEqual(1);
	});
});