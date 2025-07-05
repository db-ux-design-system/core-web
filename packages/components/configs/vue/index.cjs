const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToVueOptions}
 */
module.exports = {
	typescript: true,
	api: 'composition',
	plugins: [onClickPlugin]
};
