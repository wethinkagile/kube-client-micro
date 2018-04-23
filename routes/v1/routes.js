// 'use strict';
const {router, get, post} = require('microrouter');
const rateLimit = require('micro-ratelimit');
const controller = require('../../controller/index');

const hello = rateLimit({window: 5000, limit: 2}, (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.end(res, 200, `Hello, ${req.params.who}`);
});

const notFound = (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.end(res, 404, 'HTTP 404 - Endpoint not found');
};

const namespaces = async (req, res) => {
	const namespaces = await controller.namespaces.namespaces();
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.end(res, 200, namespaces);
};

const pods = async (req, res) => {
	const pods = await controller.pods.pods();
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.end(res, 200, pods);
};

module.exports = router(
	post('/hello/:who', hello),
	get('/namespaces', namespaces),
	get('/pods', pods),
	get('/*', notFound)
);
