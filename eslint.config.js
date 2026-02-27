import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import xoConfig from 'eslint-config-xo';
import { defineConfig, globalIgnores } from 'eslint/config';
import ignoreFolders from './.config/ignores.js';

// We use this for IDEs
export default defineConfig([
	xoConfig,
	eslintConfigPrettier,
	globalIgnores([...ignoreFolders]),
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true }
			}
		},
		plugins: {
			'@typescript-eslint': tseslint
		},
		rules: {
			...tseslint.configs.recommended.rules
		}
	}
]);
