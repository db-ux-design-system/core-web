const onClickPlugin = require('../plugins/on-click.cjs');
const stencilPlugin = require('../plugins/stencil/index.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: true,
		customRef: '_ref'
	},
	plugins: [stencilPlugin, onClickPlugin]
};
