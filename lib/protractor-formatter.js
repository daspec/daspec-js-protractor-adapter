/*global module */
module.exports = function (runner, config) {
	'use strict';
	var protractorRunner = config.protractorRunner;
	runner.addEventListener('specEnded',  function (name, counts) {
		var specInfo = {
			name: name,
			category: name
		};
		if (counts.failed > 0) {
			protractorRunner.emit('testFail', specInfo);
		} else {
			protractorRunner.emit('testPass', specInfo);
		}
	});
};
