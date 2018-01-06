/**
 * Page object with a wrapper method to call the page itself
 */

/** @constructor */
var ToDoList = function () {
	var self = this;

	this.open = function () {
		browser.get("todo.html", 1000);
	};

	this.getToDoContainer = function () {
		return element(by.id("toDo"));
	};

	this.getItemByText = function (text) {
		return self.getToDoContainer()
			.element(by.cssContainingText("span", text)) // no exact match required
			.element(by.xpath("..")) // use xpath to select parent
			.element(by.css('input'));
	};

	this.isItemChecked = function (text) {
		return self.getItemByText(text).isSelected();
	};

	/**
	 * Checks an item in the list with the given text
	 * @param text {string} text to check
	 */
	this.checkItem = function (text) {
		setItemState(self.getItemByText(text), true);
	};

	/**
	 * Unchecks an item in the list with the given text
	 * @param text {string} text to check
	 */
	this.uncheckItem = function (text) {
		setItemState(self.getItemByText(text), false);
	};

	function setItemState(item, selected) {
		item.isSelected()
			.then(function (isSelected) {
				if (isSelected !== selected) {
					item.click();
				}
			});
	}
};

module.exports = ToDoList;