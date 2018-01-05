/** @constructor */
var ToDoList = function () {
	var self = this;

	this.open = function () {
		browser.get("todo.html", 1000);
	};

	this.getToDoContainer = function() {
		return element(by.id("toDo"));
	};

	this.getItemByText = function(text) {
		return self.getToDoContainer()
			.element(by.cssContainingText("span", text)) // no exact match required
			.element(by.xpath(".."))
			.element(by.css('input'));
	};

	this.isItemChecked = function(text) {
		return self.getItemByText(text).isSelected();
	};

	/**
	 * Checks an item in the list with the given text
	 * @param text {string} text to check
	 */
	this.checkItem = function (text) {
		console.log(">>> start checkItem");
		self.getItemByText(text)
			.click()
			.then(function () {
				console.log(">>> after click");
			});
		console.log(">>> end checkItem");
	}
};

module.exports = ToDoList;