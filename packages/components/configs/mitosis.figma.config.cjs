const figmaPlugin = require('./plugins/figma/index.cjs');
const vue = require('./vue/index.cjs');
const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');

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
		react,
		angular,
		vue
	},
	commonOptions: {
		typescript: true,
		plugins: [figmaPlugin],
		explicitBuildFileExtensions: {
			'.batch.ts': /.*(figma\.lite\.tsx|figma\.lite\.ts)$/g
		}
	}
};
