var ToDoPage = require('./page-objects/ToDoPage');

describe('ToDoPage (page object)', function () {

	var toDoPage = new ToDoPage();

	beforeAll(function () {
		toDoPage.open();
	});

	it('has list', function () {
		var listContainer = toDoPage.getToDoContainer();

		expect(listContainer.isDisplayed()).toBeTruthy();
	});

	describe('"Buy Food" item', function () {
		var itemName = 'Buy Food';

		it('has item', function () {
			var buyFoodItem = toDoPage.getItemByText(itemName);

			expect(buyFoodItem.isDisplayed()).toBeTruthy();
		});

		it('is unchecked', function () {
			expect(toDoPage.isItemChecked(itemName)).toBeFalsy();
		});

		it('checks item', function () {
			toDoPage.checkItem(itemName);

			expect(toDoPage.isItemChecked(itemName)).toBeTruthy();
		});
	});
});
