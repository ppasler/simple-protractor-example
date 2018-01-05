var ToDoList = require('./ToDoList');

/** @constructor */
var IndexPage = function () {
	var self = this;

	this.toDoList = new ToDoList();

	this.open = function () {
		browser.get("index.html", 1000);
	};

};

module.exports = IndexPage;