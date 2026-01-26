const onClickPlugin = require('../plugins/on-click.cjs');
const useIdPlugin = require('../plugins/useId.cjs');

/**
 * @type {import('@builder.io/mitosis').ToReactOptions}
 */
module.exports = {
	typescript: true,
	plugins: [useIdPlugin, onClickPlugin]
};
