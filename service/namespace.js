'use strict';

const Client = require('kubernetes-client').Client
const config = require('kubernetes-client').config;

const sanitizer = require('../lib/sanitizer');
const log = require('../lib/logger');
const createError = require('micro').createError;


module.exports.namespaces = async () => {

	// if (!sanitizer.sanitizer("string",rawNameSpaceId)) {
	// 	throw createError(422, 'Unprocessable Entity')
	// }

	const client = new Client({ config: config.fromKubeconfig(), version: '1.9' });
	await client.loadSpec();

	return await client.api.v1.namespaces.get()
		.then(result => {
			return result;
		})
		.catch(err => {
			log(err, this);
			return err;
		});
};
