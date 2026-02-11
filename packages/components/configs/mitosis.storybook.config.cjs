const storyBookPlugin = require('./plugins/storybook/storybook-plugin.cjs');
const angular = require('./angular/index.cjs');
const react = require('./react/index.cjs');
const vue = require('./vue/index.cjs');

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
	files: [
		// 'src/components/drawer/examples/*.example.lite.tsx',
		'src/components/button/examples/*.example.lite.tsx',
		'src/components/checkbox/examples/*.example.lite.tsx',
		'src/components/accordion/examples/*.example.lite.tsx',
		'src/components/accordion-item/examples/*.example.lite.tsx',
		'src/components/badge/examples/*.example.lite.tsx',
		'src/components/brand/examples/*.example.lite.tsx',
		'src/components/card/examples/*.example.lite.tsx',
		'src/components/infotext/examples/*.example.lite.tsx',
		'src/components/select/examples/*.example.lite.tsx',
		'src/components/tab-item/examples/*.example.lite.tsx',
		'src/components/custom-select/examples/*.example.lite.tsx',
		'src/components/divider/examples/*.example.lite.tsx',
		'src/components/icon/examples/*.example.lite.tsx',
		'src/components/input/examples/*.example.lite.tsx',
		'src/components/link/examples/*.example.lite.tsx',
		'src/components/radio/examples/*.example.lite.tsx',
		'src/components/section/examples/*.example.lite.tsx',
		'src/components/stack/examples/*.example.lite.tsx',
		'src/components/switch/examples/*.example.lite.tsx',
		'src/components/textarea/examples/*.example.lite.tsx',
		'src/components/tabs/examples/*.example.lite.tsx',
		'src/components/tag/examples/*.example.lite.tsx',
		'src/components/notification/examples/*.example.lite.tsx',
		'src/components/navigation-item/examples/*.example.lite.tsx',
		'src/components/popover/examples/*.example.lite.tsx',
		'src/components/navigation/examples/*.example.lite.tsx',
		'src/components/header/examples/*.example.lite.tsx',
		'src/components/tooltip/examples/*.example.lite.tsx'
	],
	targets: ['angular', 'react', 'vue'],
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
