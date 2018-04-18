'use strict';
const namespaceService = require('../service/namespace');

exports.namespaces = async () => {
	return await namespaceService.namespaces();
};

