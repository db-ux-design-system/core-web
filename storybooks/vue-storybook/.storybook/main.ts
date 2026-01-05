import type { StorybookConfig } from '@storybook/vue3-vite';
import { dirname, join } from 'node:path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-docs'],
	framework: {
		name: getAbsolutePath('@storybook/vue3-vite'),
		options: {}
	},
	async viteFinal(config) {
		const { mergeConfig } = await import('vite');
		const baseUrl = process.env.BASE_URL || '';
		return mergeConfig(config, {
			base: `${baseUrl}/vue-storybook`
		});
	}
};
export default config;
