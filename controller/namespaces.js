'use strict';
const namespaceService = require('../service/namespaces');

exports.namespaces = async () => {
	return await namespaceService.namespaces();
};

