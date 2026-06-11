/**
 * Replace custom uuid() function import with build in function for framework
 * @param {import('@builder.io/mitosis').MitosisComponent} json
 */
const jsonPreProcessor = (json) => {
	const { pluginData } = json;
	if (pluginData.target === 'vue' || pluginData.target === 'react') {
		let addUseId = false;
		json.imports.forEach((imp) => {
			if (imp.path === '../../utils' && imp.imports['uuid']) {
				delete imp.imports['uuid'];
				addUseId = true;
			}
		});
		if (addUseId) {
			json.imports.push({
				path: pluginData.target,
				imports: {
					useId: 'useId'
				},
				importKind: 'value'
			});
		}
	}
};

/**
 * Converts the uuid() function call to a one time string at the top of the component
 * @param {string} code
 * @param {import('@builder.io/mitosis').MitosisComponent} json
 * @returns {string}
 */
const codePreProcessor = (code, json) => {
	const { pluginData } = json;
	if (
		(pluginData.target === 'vue' || pluginData.target === 'react') &&
		code.includes('uuid()')
	) {
		const replacement = pluginData.target === 'vue' ? 'props' : '_ref';
		code = code
			.replace(
				`const ${replacement}`,
				`const uuid = useId();\nconst ${replacement}`
			)
			.replaceAll('uuid()', 'uuid');
	}

	return code;
};

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	json: {
		pre: jsonPreProcessor
	},
	code: {
		pre: codePreProcessor
	}
});
