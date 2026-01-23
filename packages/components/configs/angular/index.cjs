const onClickPlugin = require('../plugins/on-click.cjs');
const angularSlotsPlugin = require('../plugins/angular/slots.cjs');
const classNamePlugin = require('../plugins/angular/className.cjs');
const attributePassingPlugin = require('../plugins/attribute-passing/index.cjs');

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
	plugins: [
		attributePassingPlugin,
		angularSlotsPlugin,
		classNamePlugin,
		onClickPlugin
	]
};
