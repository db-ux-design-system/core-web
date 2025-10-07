import type { StorybookConfig } from '@storybook/react-vite';

import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

const baseUrl = process.env.BASE_URL || '';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-docs'],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	},
	async viteFinal(config) {
		const { mergeConfig } = await import('vite');


		return mergeConfig(config, {
			// TODO: Remove `/storybook` after removing patternhub
			base: `${baseUrl}/storybook`
		});
	},
	refs: (_, { configType }) => {
		if (configType === 'DEVELOPMENT') {
			return {
				angular: {
					title: 'Angular',
					url: 'http://localhost:6006',
					expanded: false
				},
				react: {
					title: 'React',
					url: 'http://localhost:6005',
					expanded: false
				},
				vue: {
					title: 'Vue',
					url: 'http://localhost:6007',
					expanded: false
				}
			};
		}
		return {
			angular: {
				title: 'Angular',
				url: `${baseUrl}/angular-storybook`,
				expanded: false
			},
			react: {
				title: 'React',
				url: `${baseUrl}/react-storybook`,
				expanded: false
			},
			vue: {
				title: 'Vue',
				url: `${baseUrl}/vue-storybook`,
				expanded: false
			}
		};
	}
};
export default config;
