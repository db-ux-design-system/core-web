/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: 'src/components/**/docs/*.docs.lite.tsx',
	targets: ['react', 'angular', 'vue', 'stencil'],
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
						const displayName = json.name.replace(/Docs$/, '');

						return [
							`# ${displayName} Examples (${target})`,
							'',
							'```' + target,
							code.trim(),
							'```'
						].join('\n');
					}
				}
			})
		]
	}
};
