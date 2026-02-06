const onClickPlugin = require('../plugins/on-click.cjs');
const defineOptionsPlugin = require('../plugins/vue/define-options.cjs');
const undefinedKeyPlugin = require('../plugins/undefined-key.cjs');

/**
 * @type {import('@builder.io/mitosis').ToVueOptions}
 */
module.exports = {
	typescript: true,
	api: 'composition',
	plugins: [undefinedKeyPlugin, onClickPlugin, defineOptionsPlugin]
};
