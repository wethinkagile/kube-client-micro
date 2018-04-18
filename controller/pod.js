'use strict';
const podService = require('../service/pod');

exports.pod = async () => {
	return await podService.pod();
};

