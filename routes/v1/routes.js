'use strict';
const {send, json}        = require('micro');
const {router, get, post} = require('microrouter');
const rateLimit           = require('micro-ratelimit');
const controller          = require('../../controller/index');

const hello = rateLimit({window: 5000, limit: 2}, (req, res) => {
	send(res, 200, `Hello, ${req.params.who}`);
});

const notFound = (req, res) => {
	send(res, 404, 'HTTP 404 - Endpoint not found');
};

const namespaces = async (req, res) => {
	const namespaces = await controller.namespace.namespaces();
	send(res, 200, namespaces);
};

const pod = async (req, res) => {
    const pod = await controller.pod.pod();
    send(res, 200, pod);
};


module.exports = router(
	get('/hello/:who', hello),
	get('/namespaces', namespaces),
    get('/pod', pod),
	get('/*', notFound),
);
