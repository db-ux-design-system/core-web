// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);

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
	addons: [getAbsolutePath('@storybook/addon-docs')],
	staticDirs: ['../public'],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {}
	},
	async viteFinal(config, { configType }) {
		const { mergeConfig } = await import('vite');

		const isDev = configType === 'DEVELOPMENT';
		const frameworkUrls = {
			angular: isDev
				? 'http://localhost:6006'
				: `${baseUrl}/angular-storybook`,
			react: isDev
				? 'http://localhost:6005'
				: `${baseUrl}/react-storybook`,
			vue: isDev ? 'http://localhost:6007' : `${baseUrl}/vue-storybook`
		};

		return mergeConfig(config, {
			// TODO: Remove `/storybook` after removing patternhub
			base: `${baseUrl}/composition-storybook`,
			build: {
				cssMinify: 'esbuild'
			},
			define: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				__FRAMEWORK_URLS__: JSON.stringify(frameworkUrls)
			}
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
