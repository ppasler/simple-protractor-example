describe('index page simple', function () {

	it('has headline', function () {
		// open page '`baseUrl` + index.html' from `conf.js`
		browser.get("index.html", 1000);

		// get element by type
		var headline = element(by.css("h1"));

		// check if headline has the right text
		expect(headline.getText()).toBe("Simple Protractor Example");
	});
});
