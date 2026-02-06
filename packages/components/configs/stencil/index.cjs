const onClickPlugin = require('../plugins/on-click.cjs');
const undefinedKeyPlugin = require('../plugins/undefined-key.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: {
		enabled: true,
		customRef: '_ref'
	},
	plugins: [undefinedKeyPlugin, onClickPlugin]
};
