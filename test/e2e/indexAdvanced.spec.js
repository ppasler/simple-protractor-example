var IndexPage = require('./page-objects/IndexPage');

describe('IndexPage (with page object)', function () {

	var indexPage = new IndexPage();

	beforeAll(function () {
		indexPage.open();
	});

	it('has headline', function () {
		var headline = element(by.css("h1"));

		expect(headline.getText()).toBe("Simple Protractor Example");
	});

	describe('ToDo List', function () {
		it('has sub headline', function () {
			var headline = element(by.css("h2"));

			expect(headline.getText()).toBe("ToDo List");
		});

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
