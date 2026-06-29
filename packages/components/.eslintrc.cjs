/* eslint-disable no-undef */

/** @type {import('eslint').Linter.Config} */
module.exports = {
	overrides: [
		{
			files: ['**/*.lite.tsx', '**/model.ts'],
			rules: {
				/**
				 * We need "any" for events because of different behavior between frameworks
				 */
				'@typescript-eslint/no-explicit-any': 'off'
			}
		},
		{
			files: ['**/shared/model.ts'],
			rules: {
				/**
				 * We have some generics that are used later after generating the code for frameworks
				 */
				'@typescript-eslint/no-unused-vars': 'off'
			}
		},
		{
			files: ['**/configs/**/*.cjs'],
			rules: {
				/**
				 * Mitosis requires CommonJS modules
				 */
				'@typescript-eslint/no-require-imports': 'off',
				'no-undef': 'off'
			}
		}
	],
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@builder.io/mitosis/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', '@builder.io/mitosis']
};
