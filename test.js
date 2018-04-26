const micro = require('micro');
const test = require('ava');
const listen = require('test-listen');
const request = require('request-promise');

test('my endpoint', async t => {
	const service = micro(async (req, res) => {
		micro.send(res, 200, {
			test: 'woot'
		});
	});

	const url = await listen(service);
	const body = await request(url);

	t.deepEqual(JSON.parse(body).test, 'woot');
	service.close();
});

//
// 'use strict';
//
// const listen = require('test-listen');
// const micro = require('micro');
// const test = require('ava');
// const got = require('got');
//
// require('async-to-gen/register')({includes: /index\.js$/});
// const app = require('./index.js'); // eslint-disable-line import/order
//
// test('echo back the text', async t => {
// 	const service = micro(app);
// 	const url = await listen(service);
//
// 	const res = await got(url, {
// 		method: 'post',
// 		json: true,
// 		headers: {'content-type': 'application/json'},
// 		body: JSON.stringify({text: 'Hello!'})
// 	});
//
// 	t.is(res.body, 'Hello!');
// });
