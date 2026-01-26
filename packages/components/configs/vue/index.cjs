const onClickPlugin = require('../plugins/on-click.cjs');
const defineOptionsPlugin = require('../plugins/vue/define-options.cjs');
const useIdPlugin = require('../plugins/useId.cjs');

/**
 * @type {import('@builder.io/mitosis').ToVueOptions}
 */
module.exports = {
	typescript: true,
	api: 'composition',
	plugins: [useIdPlugin, onClickPlugin, defineOptionsPlugin]
};
