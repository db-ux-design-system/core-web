const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToReactOptions}
 */
module.exports = {
	typescript: true,
	plugins: [onClickPlugin]
};
