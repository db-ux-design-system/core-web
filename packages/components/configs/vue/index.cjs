const onClickPlugin = require('../plugins/on-click.cjs');
const defineOptionsPlugin = require('../plugins/vue/define-options.cjs');
const slotsPlugin = require('../plugins/vue/slots.cjs');

/**
 * @type {import('@builder.io/mitosis').ToVueOptions}
 */
module.exports = {
	typescript: true,
	api: 'composition',
	plugins: [onClickPlugin, defineOptionsPlugin, slotsPlugin]
};
