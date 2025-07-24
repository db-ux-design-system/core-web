const targetMapping = [
	{ name: 'react', lib: 'react', mdExtension: 'tsx' },
	{ name: 'vue', lib: 'v', mdExtension: 'vue' },
	{ name: 'angular', lib: 'ngx', mdExtension: 'ts' },
	{ name: 'stencil', lib: 'wc', mdExtension: 'tsx' }
];

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/components/**/docs/*.docs.lite.tsx',
	targets: targetMapping.map(({ name }) => name),
	dest: '../../output',
	options: {
		angular: {
			api: 'signals'
		},
		vue: {
			api: 'composition'
		}
	},
	commonOptions: {
		typescript: true,
		explicitBuildFileExtensions: {
			'.md': /.*(docs\.lite\.tsx)$/g
		},
		plugins: [
			() => ({
				name: 'docs-snippet-plugin',
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
			})
		]
	}
};
