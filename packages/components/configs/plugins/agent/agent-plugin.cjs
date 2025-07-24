const targetMapping = [
	{ name: 'react', lib: 'react', mdExtension: 'tsx' },
	{ name: 'vue', lib: 'v', mdExtension: 'vue' },
	{ name: 'angular', lib: 'ngx', mdExtension: 'ts' },
	{ name: 'stencil', lib: 'wc', mdExtension: 'tsx' }
];

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'agent-plugin',
	json: {
		post: (json) => {
			const target = json.pluginData.target;
			const tagetMapItem = targetMapping.find(
				({ name }) => name === target
			);

			return {
				...json,
				imports: json.imports.map((importLine) => {
					if (
						Object.keys(importLine.imports).find((key) =>
							key.startsWith('DB')
						)
					) {
						return {
							...importLine,
							path: `@db-ux/${tagetMapItem.lib}-core-components`
						};
					}

					return importLine;
				})
			};
		}
	},
	code: {
		post: (code, json) => {
			const target = json.pluginData.target;
			const tagetMapItem = targetMapping.find(
				({ name }) => name === target
			);
			const displayName = json.name.replace(/Docs$/, '');

			return [
				`# ${displayName} Examples (${target})`,
				`Use those examples for \`DB${displayName}\` or \`${displayName}\` components in a ${target} environment.`,
				'',
				'```' + tagetMapItem.mdExtension,
				code.trim(),
				'```'
			].join('\n');
		}
	}
});
