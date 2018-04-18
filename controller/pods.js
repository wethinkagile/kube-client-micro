'use strict';
const podService = require('../service/pods');

exports.pods = async () => {
	return await podService.pods();
};
