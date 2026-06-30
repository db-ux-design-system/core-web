// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/angular';
import { createRequire } from 'node:module';

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	// TODO: Include html output when addon-html supports v10 https://github.com/whitespace-se/storybook-addon-html/pull/149
	addons: ['@storybook/addon-docs'],
	staticDirs: ['../public'],
	framework: {
		name: getAbsolutePath('@storybook/angular'),
		options: {}
	},
	webpackFinal: async (config) => {
		// Force Angular packages to resolve from this workspace's node_modules
		// rather than from the output/angular workspace which uses Angular 22.
		// This is necessary because the @components path alias points to
		// output/angular/src whose imports would otherwise resolve to Angular 22.
		// We use resolve.modules to prioritize local node_modules over the
		// output/angular workspace's node_modules during module resolution.
		config.resolve = config.resolve || {};
		config.resolve.modules = [
			join(__dirname, '../node_modules'),
			'node_modules',
			...(config.resolve.modules || [])
		];
		return config;
	}
};
export default config;
