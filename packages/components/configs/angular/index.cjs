const onClickPlugin = require('../plugins/on-click.cjs');
const attributePassing = require('../plugins/attribute-passing/wrapper-component.cjs');

/**
 * @type {import('@builder.io/mitosis').ToAngularOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: true,
		customRef: '_ref'
	},
	api: 'signals',
	plugins: [onClickPlugin, attributePassing]
};
