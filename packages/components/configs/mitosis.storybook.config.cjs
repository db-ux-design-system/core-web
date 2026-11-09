const { globSync, readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const storyBookPlugin = require('./plugins/storybook/storybook-plugin.cjs');
const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');
const vue = require('./vue/index.cjs');

/**
 * Examples without a story file in any Storybook:
 * - the interaction fixtures of the showcase e2e tests
 *   (`interaction*.example.lite.tsx`: test ids and markers, no usage example)
 * - examples with `storybookIgnore: true` in their `useMetadata`
 */
const isInteractionFixture = (file) =>
	/\/interaction(-[\w-]+)?\.example\.lite\.tsx$/.test(file);
const ignoredExamples = globSync(
	'src/components/*/examples/*.example.lite.tsx',
	{
		cwd: resolve(__dirname, '..')
	}
)
	.filter(
		(file) =>
			isInteractionFixture(file) ||
			/storybookIgnore:\s*true/.test(
				readFileSync(resolve(__dirname, '..', file), 'utf8')
			)
	)
	.map((file) => `!${file}`);

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
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
