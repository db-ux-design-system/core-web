import angularTemplateParser from '@angular-eslint/template-parser';
import dbUx from '@db-ux/eslint-plugin';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import xoConfig from 'eslint-config-xo';
import { defineConfig, globalIgnores } from 'eslint/config';
import vueParser from 'vue-eslint-parser';
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
			'@typescript-eslint': tseslint,
			'db-ux': dbUx
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...dbUx.configs.recommended.rules
		}
	},
	{
		files: ['showcases/angular-showcase/**/*.html'],
		languageOptions: {
			parser: angularTemplateParser
		},
		plugins: {
			'db-ux': dbUx
		},
		rules: dbUx.configs.recommended.rules
	},
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			'db-ux': dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
]);
