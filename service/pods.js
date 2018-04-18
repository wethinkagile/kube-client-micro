'use strict';

const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;

const logger = require('../lib/logger');
const createError = require('micro').createError;

module.exports.pods = async () => {

    const client = new Client({ config: config.fromKubeconfig() });
	await client.loadSpec();

	return await client.api.v1.namespaces('default').pods.get()
		.then(result => {
			return result;
		})
		.catch(err => {
            logger(err, this);
			console.info(err, this);
			return err;
		});
};
