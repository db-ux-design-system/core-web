const onClickPlugin = require('../plugins/on-click.cjs');
const stencilHostDisplayPlugin = require('../plugins/stencil-host-display.cjs');
const stencilLandmarkRolePlugin = require('../plugins/stencil-landmark-role.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: true,
		customRef: '_ref'
	},
	plugins: [
		onClickPlugin,
		stencilHostDisplayPlugin,
		stencilLandmarkRolePlugin
	]
};
