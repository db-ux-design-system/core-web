const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: false
	},
	plugins: [onClickPlugin]
};
