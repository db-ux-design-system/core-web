const storyBookPlugin = require('./plugins/storybook/storybook-plugin.cjs');
const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');
const vue = require('./vue/index.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	/*
	 * Loop-rendered examples (e.g. the adaptive color x material matrices) opt
	 * out of story generation with `useMetadata({ storybookSkip: true })` - they
	 * have no single reference instance for Storybook args. The plugin returns
	 * their source untouched, but Mitosis would still emit it with a `.stories`
	 * extension (forced by `explicitBuildFileExtensions`), producing a file that
	 * is not valid CSF and breaks the Storybook indexer ("missing default
	 * export"). Excluding them here means no story file is generated at all.
	 */
	files: [
		'**/*.example.lite.tsx',
		'!**/adaptive-matrix.example.lite.tsx',
		'**/examples/data.ts',
		'**/model.ts'
	],
	targets: ['angular', 'react', 'vue', 'stencil'],
	dest: '../../storybooks',
	getTargetPath: ({ target }) => {
		return `${target}-storybook`;
	},
	options: {
		react: {
			...react,
			explicitBuildFileExtensions: {
				'.stories.tsx': /.*(example\.lite\.tsx)$/g
			}
		},
		angular,
		vue
	},
	commonOptions: {
		typescript: true,
		plugins: [storyBookPlugin],
		explicitBuildFileExtensions: {
			'.stories.ts': /.*(example\.lite\.tsx)$/g
		}
	}
};
