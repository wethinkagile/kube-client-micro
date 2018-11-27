'use strict';

const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;
const logger = require('../lib/logger');

var client;

if (process.env.NODE_ENV === 'production') {
	client = new Client({config: config.getInCluster()});
} else { // For development we use our local kubeconfig
	client = new Client({config: config.fromKubeconfig()});
}

module.exports.deployments = async namespace => {
	await client.loadSpec();
	return await client.apis.apps.v1beta1.namespaces(namespace).deployments.get()
		.then(result => {
			return result;
		})
		.catch(err => {
			logger(err, this);
			return err;
		});
};
