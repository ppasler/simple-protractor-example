describe('ToDoPage (advanced)', function () {

	beforeAll(function () {
		browser.get("todo.html", 1000);
	});

	it('has sub headline', function () {
		var headline = element(by.css("h2"));

		expect(headline.getText()).toBe("My Todo List");
	});

	it('has list', function () {
		var list = element(by.id("toDo"));

		expect(list.isDisplayed()).toBeTruthy();
	});

	it('has resolved item', function () {
		var resolvedItem = element(by.css(".ng-not-empty"));

		expect(resolvedItem.isDisplayed()).toBeTruthy();
	});

	it('has "Buy Food" item', function () {
		var buyFoodItem = element(by.cssContainingText('span', 'Buy Food'));

		expect(buyFoodItem.isDisplayed()).toBeTruthy();
	});
});
