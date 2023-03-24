const { onV2ComponentUsed } = require('./v2-components.js');

module.exports = {
	rules: {
		'v2-component-used': {
			create: onV2ComponentUsed
		}
	}
};
