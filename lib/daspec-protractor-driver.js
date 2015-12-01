/*global require, exports*/
var q = require('q'),
	ConsoleRunner = require('daspec'),
	testResult = [];

exports.run = function (runner) {
	'use strict';
	return runner.runTestPreparer().then(function () {
		return q.promise(function (resolve, reject) {
			var config = runner.getConfig().daSpecOptions,
				consoleRunner;

			config.formatters.push('daspec-js-protractor-driver/lib/protractor-formatter');
			config.protractorRunner = runner;
			consoleRunner = new ConsoleRunner(config);
			consoleRunner.run().then(function (result) {
				resolve({
					failedCount: result ? 0 : 1,
					specResults: testResult
				});
			}, reject);
		});
	});
};
