var IndexPage = require('./page-objects/IndexPage');

describe('IndexPage (page object)', function () {

	var indexPage = new IndexPage();

	beforeAll(function () {
		indexPage.open();
	});

	describe('ToDo List', function () {
		var toDoList = indexPage.toDoList;

		it('has list', function () {
			var listContainer = toDoList.getToDoContainer();

			expect(listContainer.isDisplayed()).toBeTruthy();
		});

		describe('"Buy Food" item', function () {
			var itemName = 'buy food';

			it('has item', function () {
				var buyFoodItem = toDoList.getItemByText(itemName);

				expect(buyFoodItem.isDisplayed()).toBeTruthy();
			});

			it('is unchecked', function () {
				expect(toDoList.isItemChecked(itemName)).toBeFalsy();
			});

			it('checks item', function () {
				toDoList.checkItem(itemName);

				expect(toDoList.isItemChecked(itemName)).toBeTruthy();
			});
		});
	});
});
