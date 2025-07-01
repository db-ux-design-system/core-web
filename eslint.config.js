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
