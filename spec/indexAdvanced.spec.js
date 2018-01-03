describe('index page advanced', function () {

	beforeAll(function () {
		browser.get("index.html", 1000);
	});

	it('has sub headline', function () {
		var headline = element(by.css("h2"));
		expect(headline.getText()).toBe("ToDo List");
	});

	describe('toDo list', function () {
		it('has list', function () {
			var list = element(by.id("toDo"));
			expect(list.isDisplayed()).toBeTruthy();
		});

		it('has resolved item', function () {
			var resolvedItem = element(by.css(".resolved"));
			expect(resolvedItem.isDisplayed()).toBeTruthy();
		});

		it('has "buy food" item', function () {
			var buyFoodItem = element(by.cssContainingText('li', 'buy food'));
			expect(buyFoodItem.isDisplayed()).toBeTruthy();
		});
	});
});
