'use strict';
const deploymentService = require('../service/deployments');

exports.deployments = async namespace => {
	return await deploymentService.deployments(namespace);
};
