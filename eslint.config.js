// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// For more info, see https://github.com/storybookjs/storybook/tree/next/code/lib/eslint-plugin#configuration-eslintconfigcmjs
// import storybook from "eslint-plugin-storybook";

import eslintConfigPrettier from 'eslint-config-prettier/flat';
import xoConfig from 'eslint-config-xo';
import { defineConfig, globalIgnores } from 'eslint/config';
import ignoreFolders from './.config/ignores.js';

// We use this for IDEs
export default defineConfig([
	xoConfig,
	eslintConfigPrettier,
	globalIgnores([...ignoreFolders])
]);
