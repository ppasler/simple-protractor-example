// smallest working conf.js
exports.config = {
	baseUrl: 'file://' + __dirname + '/app/', // absolute path to html files
	onPrepare: function () {
		browser.waitForAngularEnabled(false); // needed for static html content
	},
	specs: ['test/e2e/*.spec.js'] // all specs to run
};
