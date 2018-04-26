'use strict';

if (process.env.NODE_ENV === 'development') {
	const Client = require('kubernetes-client').Client;
	const config = require('kubernetes-client').config;
	const logger = require('../lib/logger');

	module.exports.pods = async namespace => {
		const client = new Client({config: config.fromKubeconfig()});
		await client.loadSpec();
		return await client.api.v1.namespaces(namespace).pods.get()
			.then(result => {
				return result;
			})
			.catch(err => {
				logger(err, this);
				console.info(err, this);
				return err;
			});
	};
}

if (process.env.NODE_ENV === 'production') {
	const Api = require('kubernetes-client');
	const logger = require('../lib/logger');
	const core = new Api.Core(Api.config.getInCluster());

	module.exports.pods = async namespace => {
		return await core.namespaces(namespace).pods.get()
			.then(result => {
				return result;
			})
			.catch(err => {
				logger(err, this);
				console.info(err, this);
				return err;
			});
	};
}
