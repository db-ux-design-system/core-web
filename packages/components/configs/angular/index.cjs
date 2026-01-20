const onClickPlugin = require('../plugins/on-click.cjs');
const angularSlotsPlugin = require('../plugins/angular/slots.cjs');
const classNamePlugin = require('../plugins/angular/className.cjs');

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
	plugins: [angularSlotsPlugin, classNamePlugin, onClickPlugin]
};
