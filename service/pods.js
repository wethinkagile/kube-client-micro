'use strict';

const logger = require('../lib/logger');

// Access via KubeConfig
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;

// Access via InCluster API
const Api = require('kubernetes-client');
const core = new Api.Core(Api.config.getInCluster());

module.exports.pods = async () => {
	const client = new Client({config: config.fromKubeconfig()});
	await client.loadSpec();

    // Access via KubeConfig
	// return await client.api.v1.namespaces('default').pods.get()
	
	// Access via InCluster API
    return await core.namespaces('default').pods.get()
		.then(result => {
			return result;
		})
		.catch(err => {
			logger(err, this);
			console.info(err, this);
			return err;
		});
};
