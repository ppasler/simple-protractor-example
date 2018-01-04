var SpecReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
	directConnect: true,

	specs: ['test/e2e/*.spec.js'],
	baseUrl: 'file://' + __dirname + '/data/', // absolute path to html files
	framework: 'jasmine',

	onPrepare: function () {
		// disable wait for angular as this is a non angular page
		browser.waitForAngularEnabled(false);
		browser.manage().window().setSize(1024, 800);

		// better jasmine 2 reports...
		jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'spec'}));
		jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
			// captureOnlyFailedSpecs: true,
			dest: 'screenshots',
			pathBuilder: function(currentSpec, suites, browserCapabilities) {
				return currentSpec.fullName;
			}
		}));
	},

	capabilities: {
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 2,
		chromeOptions: {
			args: [
				'--disable-infobars',
				'--disable-extensions',
				'verbose',
				'log-path=/tmp/chromedriver.log',
				'allow-file-access-from-files'
			],
			prefs: {
				'profile.password_manager_enabled': false,
				'credentials_enable_service': false,
				'password_manager_enabled': false
			}
		}
	},

	jasmineNodeOpts: {
		showColors: true,
		displaySpecDuration: true,
		// overrides jasmine's print method to report dot syntax for custom reports
		print: function () {
		},
		defaultTimeoutInterval: 50000
	}
};
