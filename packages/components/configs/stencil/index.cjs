const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	attributePassing: {
		enabled: true,
		customRef: '_ref'
	},
	plugins: [onClickPlugin]
};
