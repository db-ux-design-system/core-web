const onClickPlugin = require('../plugins/on-click.cjs');
const useIdPlugin = require('../plugins/useId.cjs');
const esmExtensionsPlugin = require('../plugins/esm-extensions.cjs');
const invokerCommandsPlugin = require('../plugins/react/invoker-commands.cjs');
const focusgroupPlugin = require('../plugins/react/focusgroup.cjs');
const headingAttributePassingPlugin = require('../plugins/heading-attribute-passing.cjs');

/**
 * @type {import('@builder.io/mitosis').ToReactOptions}
 */
module.exports = {
	typescript: true,
	plugins: [
		useIdPlugin,
		onClickPlugin,
		esmExtensionsPlugin,
		invokerCommandsPlugin,
		focusgroupPlugin,
		headingAttributePassingPlugin
	]
};
