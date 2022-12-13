/*
 * This script generates a tailwind.config.js file
 */

import * as process from 'node:process';
import * as fs from 'node:fs';

const defaultConfig = process.argv[2];

const internal = process.argv[3];

let configFile = `
	const tokens = require('${
		internal ? './' : '@db-ui/foundations/build/tailwind/'
	}tailwind-tokens.json')
	module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
			screens: tokens.screens,
			spacing: tokens.spacing,
			boxShadow: tokens.elevation,
			gap: ({ theme }) => ({
				...theme('spacing')
			}),
			space: ({ theme }) => ({
				...theme('spacing')
			})
  	}
  };
  `;

if (defaultConfig === 'default') {
	configFile = `module.exports = require('@db-ui/foundations/build/tailwind/tailwind.config')`;
}

await fs.writeFileSync(
	`${internal ? './build/tailwind' : '.'}/tailwind.config.js`,
	configFile
);
