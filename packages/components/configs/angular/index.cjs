const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToAngularOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: false,
		customRef: '_ref'
	},
	api: 'signals',
	plugins: [onClickPlugin]
};
