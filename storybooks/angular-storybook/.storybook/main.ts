import type { StorybookConfig } from '@storybook/angular';

import { dirname, join } from 'node:path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],
	framework: {
		name: getAbsolutePath('@storybook/angular'),
		options: {}
	}
};
export default config;
