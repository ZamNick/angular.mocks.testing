describe("Filter Tests", function() {

	var filterInstance;

	beforeEach(angular.mock.module("exampleApp"));

	beforeEach(angular.mock.inject(function($filter) {
		filterInstance = $filter("LabelCase");
	}));

	it("Change case", function() {
		var result = filterInstance("test result");
		expect(result).toEqual("Test result");
	});

	it("Reverse case", function() {
		var result = filterInstance("test phrase", true);
		expect(result).toEqual("tEST PHRASE");
	});


});