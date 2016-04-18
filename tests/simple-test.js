describe("First test", function() {

	var counter;

	beforeEach(function() {
		counter = 0;
	});

	it("Increment value", function() {

		++counter;

		expect(counter).toEqual(1);
	});

	it("Decrement value", function() {

		--counter;

		expect(counter).toEqual(-1);

	});
});