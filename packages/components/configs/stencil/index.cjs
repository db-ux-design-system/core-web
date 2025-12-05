const onClickPlugin = require('../plugins/on-click.cjs');

/**
 * @type {import('@builder.io/mitosis').ToStencilOptions}
 */
module.exports = {
	typescript: true,
	attributePassing: (component) => {
		// Disable attribute passing for breadcrumb to prevent Host wrapper generation
		if (component?.path?.includes('/breadcrumb/breadcrumb')) {
			return { enabled: false };
		}
		return {
			enabled: true,
			customRef: '_ref'
		};
	},
	plugins: [onClickPlugin]
};
