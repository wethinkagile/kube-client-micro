'use strict';

exports.logger = function (text, source) {
	console.info('<' + source + '> :' + text);
};
