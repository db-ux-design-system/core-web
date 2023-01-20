const { onOldComponentUsed } = require('./old-components');

module.exports = {
	rules: {
		'old-component-used': {
			create: onOldComponentUsed
		}
	}
};
