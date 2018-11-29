'use strict';
const deploymentAllNanespacesService = require('../service/deploymentsAllNamespaces');

exports.deployments = async () => {
	return await deploymentAllNanespacesService.deploymentsAllNamespaces();
};
