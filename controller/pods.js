'use strict';
const podService = require('../service/pods');

exports.pods = async namespace => {
	return await podService.pods(namespace);
};
