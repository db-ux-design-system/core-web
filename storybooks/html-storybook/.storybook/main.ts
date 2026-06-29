import type {StorybookConfig} from '@storybook/react-vite';
import {createRequire} from 'node:module';

import {dirname, join} from 'node:path';

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
	stories: [
		'../src/index.mdx',
		'../../react-storybook/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: ['@storybook/addon-docs'],
	staticDirs: ['../../react-storybook/public'],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	async viteFinal(config) {
		const {mergeConfig} = await import('vite');
		const baseUrl = process.env.BASE_URL || '';
		return mergeConfig(config, {
			base: `${baseUrl}/html-storybook`,
			build: {
				cssMinify: 'esbuild',
			},
		});
	},
};
export default config;
