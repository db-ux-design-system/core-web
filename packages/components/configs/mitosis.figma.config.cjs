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
		react: {
			explicitBuildFileExtensions: {
				'.tsx': /.*(figma\.lite\.tsx)$/g
			}
		},
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
			'.ts': /.*(figma\.lite\.tsx)$/g
		}
	}
};
