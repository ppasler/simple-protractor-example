/**
 * Simple page object with a wrapper method to call the page itself
 */

/** @constructor */
var IndexPage = function () {

	this.open = function () {
		browser.get("index.html", 1000);
	};

};

module.exports = IndexPage;