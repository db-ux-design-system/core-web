module.exports = {
	files: 'src/components/**/docs/*.docs.lite.tsx',
	targets: ['react', 'angular', 'vue', 'html'],
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
							`# ${displayName} (${target})`,
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
