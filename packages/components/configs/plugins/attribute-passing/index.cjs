// TODO: Remove when https://github.com/BuilderIO/mitosis/pull/1792 is merged

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	code: {
		pre: (code, json) => {
			const { pluginData } = json;
			const { target } = pluginData;

			let changedCode = code;

			if (target === 'angular' || target === 'stencil') {
				changedCode = changedCode.replace(
					`if (attr && attr.name === 'class') {`,
					`      if (attr && attr.name !== "class" && !attr.name.startsWith("_")) {
				element.setAttribute(attr.name, attr.value);
			parent.removeAttribute(attr.name);
		}
					else if (attr && attr.name === "class") {`
				);
			}

			return changedCode;
		},
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
