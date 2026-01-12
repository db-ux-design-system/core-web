const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: true,
		customRef: '_ref'
	},
	plugins: [onClickPlugin]
};
