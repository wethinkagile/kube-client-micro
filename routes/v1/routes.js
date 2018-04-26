'use strict';
const {send} = require('micro');
const {router, get, post} = require('microrouter');
// const rateLimit = require('micro-ratelimit');
const cors = require('micro-cors')();
const auth0 = require('micro-auth0');
const controller = require('../../controller/index');

let auth = async (req, res) => {
	const user = await auth0(req, process.env.AUTH0_DOMAIN);
	if (!user) {
		return send(res, 403, {error: 'Forbidden'});
	}
	return;
};

const pods = async (req, res) => {
	await auth(req, res);
	const pods = await controller.pods.pods(req.params.namespace);
	send(res, 200, pods);
};

const notFound = async (req, res) => {
	send(res, 404, 'HTTP 404 - Endpoint not found');
};

module.exports = cors(router(
	get('/:namespace/pods', pods),
	get('/*', notFound),
	post('/*', notFound)
));
