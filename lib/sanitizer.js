'use strict';

exports.sanitizer = function (sanitizeMethod, inputValue) {
	if (sanitizeMethod === "number") {

		let regex=/^[0-9]+$/;
		if (inputValue.match(regex)) {
			log(true, sanitizeMethod);
			return true
		}
		log(false, sanitizeMethod);
		return false;
	}
};

const log = function (inputValue, sanitizeMethod) {
	console.log("<sanitizer>: "+sanitizeMethod.toString()+" " +inputValue.toString());
};
