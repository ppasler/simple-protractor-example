var IndexPage = require('./page-objects/IndexPage');

describe('IndexPage (page object)', function () {

	var indexPage = new IndexPage();

	beforeAll(function () {
		indexPage.open();
	});

	it('has headline', function () {
		// get element by type
		var headline = element(by.css("h1"));

		// check if headline has the expected text
		expect(headline.getText()).toBe("Simple Protractor Example");
	});
});
