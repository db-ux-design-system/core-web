const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToAngularOptions}
 */
module.exports = {
	attributePassing: {
		customRef: '_ref'
	},
	api: 'signals',
	plugins: [onClickPlugin]
};
