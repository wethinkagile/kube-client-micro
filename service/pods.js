'use strict';

const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const logger = require('../lib/logger');

if (process.env.NODE_ENV === 'production') {
	var client = new Client({ config: config.getInCluster() });
}
else { // For development we use our local kubeconfig
	var client = new Client({ config: config.fromKubeconfig() });
}

module.exports.pods = async (namespace) => {
	await client.loadSpec();
	return await client.api.v1.namespaces(namespace).pods.get()
		.then(result => {
			return result;
		})
		.catch(err => {
			logger(err, this);
			return err;
		});
};
