'use strict';

exports.sanitizer = function (sanitizeMethod, inputValue) {
	const log = function (inputValue, sanitizeMethod) {
		console.log('<sanitizer>: ' + sanitizeMethod.toString() + ' ' + inputValue.toString());
	};

	if (sanitizeMethod === 'number') {
		let regex = /^[0-9]+$/;
		if (inputValue.match(regex)) {
			log(true, sanitizeMethod);
			return true;
		}
		console.log(false, sanitizeMethod);
		return false;
	}
};

// Usage:
//
// if (!sanitizer.sanitizer("string",rawNameSpaceId)) {
// 	throw createError(422, 'Unprocessable Entity')
// }
