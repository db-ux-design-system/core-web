const { globSync, readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const storyBookPlugin = require('./plugins/storybook/storybook-plugin.cjs');
const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');
const vue = require('./vue/index.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
/**
 * Examples with `storybookIgnore: true` in their `useMetadata` (e.g. test
 * fixtures of the showcases) get no story file in any Storybook.
 */
const ignoredExamples = globSync(
	'src/components/*/examples/*.example.lite.tsx',
	{
		cwd: resolve(__dirname, '..')
	}
)
	.filter((file) =>
		/storybookIgnore:\s*true/.test(
			readFileSync(resolve(__dirname, '..', file), 'utf8')
		)
	)
	.map((file) => `!${file}`);

module.exports = {
	files: [
		'**/*.example.lite.tsx',
		'**/examples/data.ts',
		'**/model.ts',
		...ignoredExamples
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
