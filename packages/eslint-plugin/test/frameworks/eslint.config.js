import angularTemplateParser from '@angular-eslint/template-parser';
import dbUx from '@db-ux/core-eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';

export default [
	{
		files: ['**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true }
			}
		},
		plugins: { 'db-ux': dbUx },
		rules: dbUx.configs.recommended.rules
	},
	{
		files: ['**/*.html'],
		languageOptions: { parser: angularTemplateParser },
		plugins: { 'db-ux': dbUx },
		rules: dbUx.configs.recommended.rules
	},
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: 'latest',
				sourceType: 'module',
				extraFileExtensions: ['.vue']
			}
		},
		plugins: { 'db-ux': dbUx },
		rules: dbUx.configs.recommended.rules
	}
];
