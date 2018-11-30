'use strict';
const deploymentAllNanespacesService = require('../service/deployments-all-namespaces');

exports.deployments = async () => {
	return await deploymentAllNanespacesService.deploymentsAllNamespaces();
};
