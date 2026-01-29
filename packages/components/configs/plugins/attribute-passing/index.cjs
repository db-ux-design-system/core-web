/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code, json) => {
			const { pluginData } = json;
			const { target } = pluginData;

			if (target === 'angular' || target === 'stencil') {
				code = code.replace(
					'attr &&',
					"attr && attr.name !== 'data-density' &&"
				);
			}

			return code;
		}
	}
});
