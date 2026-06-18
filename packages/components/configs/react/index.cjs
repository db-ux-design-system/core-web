const onClickPlugin = require('../plugins/on-click.cjs');
const useIdPlugin = require('../plugins/useId.cjs');
const esmExtensionsPlugin = require('../plugins/esm-extensions.cjs');

/**
 * @type {import('@builder.io/mitosis').ToReactOptions}
 */
module.exports = {
	typescript: true,
	plugins: [useIdPlugin, onClickPlugin, esmExtensionsPlugin]
};
