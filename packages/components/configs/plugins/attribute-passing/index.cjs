// TODO: Remove when https://github.com/BuilderIO/mitosis/pull/1792 is merged

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		post: (code, json) => {
			const { pluginData } = json;
			const { target } = pluginData;
			if (target === 'angular' || target === 'stencil') {
				code = code
					.replace(
						'attr &&',
						"attr && attr.name !== 'data-density' &&"
					)
					.replace(
						`if (attr && attr.name === "class") {`,
						`else if (attr  && attr.name !== 'data-density' && attr.name !== "class" && !attr.name.startsWith("_")) {
				element.setAttribute(attr.name, attr.value);
			parent.removeAttribute(attr.name);
		}
					else if (attr && attr.name === "class") {`
					);
			}

			return code;
		}
	}
});
