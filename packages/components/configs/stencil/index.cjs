const onClickPlugin = require('../plugins/on-click.cjs');
const attributePassingPlugin = require('../plugins/attribute-passing/index.cjs');
const slotsPlugin = require('../plugins/stencil/slots.cjs');
const stencilPlugin = require('../plugins/stencil/index.cjs');
const esmExtensionsPlugin = require('../plugins/esm-extensions.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: true,
		customRef: '_ref',
	},
	plugins: [
		stencilPlugin,
		attributePassingPlugin,
		slotsPlugin,
		onClickPlugin,
		esmExtensionsPlugin,
	],
};
