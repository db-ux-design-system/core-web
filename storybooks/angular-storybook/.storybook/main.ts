import { StorybookConfig } from '@storybook/angular';
import * as webpack from 'webpack';

import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, 'package.json')));
}

const BASE_URL = `${process.env.BASE_URL ? `${process.env.BASE_URL}/` : ''}angular-storybook`;

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],
	framework: {
		name: getAbsolutePath('@storybook/angular'),
		options: {}
	},
	webpackFinal: async (config) => {
		if (config.output) {
			config.output.publicPath = BASE_URL;
		} else {
			config.output = { publicPath: BASE_URL };
		}
		config.plugins = [
			...(config.plugins || []),
			new webpack.DefinePlugin({
				'process.env.BASE_URL': JSON.stringify(BASE_URL)
			})
		];
		return config;
	}
};
export default config;
