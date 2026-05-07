const figmaPlugin = require('./plugins/figma/index.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: ['src/**/*.figma.lite.tsx'],
	targets: ['angular', 'react', 'vue'],
	dest: '../../figma-code-connect',
	getTargetPath: ({ target }) => {
		return `${target}-figma`;
	},
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
		plugins: [figmaPlugin],
		explicitBuildFileExtensions: {
			'.batch.ts': /.*(figma\.lite\.tsx|figma\.lite\.ts)$/g
		}
	}
};
