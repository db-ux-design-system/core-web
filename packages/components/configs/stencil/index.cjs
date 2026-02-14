const onClickPlugin = require('../plugins/on-click.cjs');
const slotsPlugin = require('../plugins/stencil/slots.cjs');
const attributePassingPlugin = require('../plugins/attribute-passing/index.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: true,
		customRef: '_ref'
	},
	plugins: [attributePassingPlugin, slotsPlugin, onClickPlugin]
};
