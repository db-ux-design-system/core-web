import ignoreFolders from './.config/ignores.js';

/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
	{
		ignores: [
			...ignoreFolders,
			'**/*.vue',
			// We don't need to check for stories - they will be generated
			'storybooks/*/src/**'
		]
	},
	{
		prettier: true,
		rules: {
			'n/prefer-global/process': 0,
			'unicorn/prefer-module': 0,
			'import-x/order': 0 // We use a prettier plugin to organize imports
		}
	},
	{
		files: ['./showcases/angular-showcase/**'],
		rules: {
			'import-x/no-extraneous-dependencies': 0,
			'@typescript-eslint/consistent-type-imports': 0
		}
	},
	{
		files: ['./**/angular-**/**'],
		rules: {
			'unicorn/prefer-top-level-await': 0, // We don't need it for angular, some files are generated this way
			'new-cap': 0, // Fixes issue with @Component annotation
			'import/no-unassigned-import': 0, // Fixes issue with including zone.js or db-components
			'no-undef': 0 // Fixes issue with document & window
		}
	},
	{
		files: ['./showcases/**'],
		rules: {
			// In TS we don't need extension
			'import-x/extensions': 0,
			'n/no-extraneous-import': 0,
			'n/file-extension-in-import': 0,
			'@typescript-eslint/no-unsafe-assignment': 0, // We don't need this tsc will handle it anyway
			'@typescript-eslint/no-unsafe-call': 0, // We don't need this tsc will handle it anyway
			'@typescript-eslint/naming-convention': 0, // Too much trouble for different frameworks in a monorepo
			'@typescript-eslint/restrict-template-expressions': 0, // Legit in react
			'@typescript-eslint/no-redundant-type-constituents': 0, // Only happens in cicd
			'@typescript-eslint/no-unsafe-argument': 0, // Valid for app
			'@typescript-eslint/no-unsafe-return': 0, // Valid for app
			'import-x/no-extraneous-dependencies': 0 // Foundation and component.css are inside this repo
		}
	},
	{
		files: ['./**/vite.config.ts'],
		rules: {
			'@typescript-eslint/no-unsafe-call': 0 // We don't need this tsc will handle it anyway
		}
	},
	{
		files: ['./showcases/e2e/**'],
		rules: {
			'@typescript-eslint/no-loop-func': 0, // This is fine for playwright testing
			'@typescript-eslint/prefer-nullish-coalescing': [
				'error',
				{ ignorePrimitives: { boolean: true } }
			]
		}
	},
	{
		files: ['./**/*.spec.ts', './showcases/screen-reader/default.ts'],
		rules: {
			// Playwright tests are async we shall use loops there
			'no-await-in-loop': 0
		}
	},
	{
		files: ['./scripts/**'],
		rules: {
			// Node.js environment
			'no-console': 'off'
		}
	}
];

export default xoConfig;
