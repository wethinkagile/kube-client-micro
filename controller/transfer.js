'use strict';
const blockService = require('../service/namespace');

exports.transfer = async (rawData) => {
	return await blockService.transfer(rawData);
};

