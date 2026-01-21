// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/angular';
import { createRequire } from 'node:module';

import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	// TODO: Include html output when addon-html supports v10 https://github.com/whitespace-se/storybook-addon-html/pull/149
	addons: ['@storybook/addon-docs'],
	framework: {
		name: getAbsolutePath('@storybook/angular'),
		options: {}
	}
};
export default config;
