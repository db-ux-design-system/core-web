module.exports = {
	prettier: true,
	ignores: [
		'./showcases/nuxt-showcase/**',
		'./packages/migration/**',
		'./packages/stylelint/**',
		'./packages/foundations/**'
	],
	overrides: [
		{
			files: ['./showcases/angular-showcase/**'],
			rules: {
				'import/no-extraneous-dependencies': 0,
				'@typescript-eslint/consistent-type-imports': 0
			}
		},

		{
			files: ['./**/angular-**/**'],
			rules: {
				'unicorn/prefer-top-level-await': 0 // we don't need it for angular, some files are generated this way
			}
		},
		{
			files: ['./**/angular-**/**', './showcases/svelte-showcase/**'],
			rules: {
				'new-cap': 0, // fixes issue with @Component annotation
				'import/no-unassigned-import': 0, // fixes issue with including zone.js or db-components
				'no-undef': 0 // fixes issue with document & window
			}
		},
		{
			files: ['./showcases/**'],
			rules: {
				// In TS we don't need extension
				'import/extensions': 0,
				'n/file-extension-in-import': 0,
				'@typescript-eslint/no-unsafe-assignment': 0, // We don't need this tsc will handle it anyway
				'@typescript-eslint/no-unsafe-call': 0, // We don't need this tsc will handle it anyway
				'@typescript-eslint/naming-convention': 0, // Too much trouble for different frameworks in a monorepo
				'@typescript-eslint/restrict-template-expressions': 0, // Legit in react
				'@typescript-eslint/no-redundant-type-constituents': 0, // only happens in cicd
				'@typescript-eslint/no-unsafe-argument': 0, // valid for app
				'@typescript-eslint/no-unsafe-return': 0, // valid for app
				'import/no-extraneous-dependencies': 0 // foundation and component.css are inside this repo
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
				'@typescript-eslint/no-loop-func': 0 // this is fine for playwright testing
			}
		},
		{
			files: ['./**/*.spec.ts'],
			rules: {
				// Playwright tests are async we shall use loops there
				'no-await-in-loop': 0
			}
		},
		{
			files: ['./scripts/**'],
			rules: {
				// We could set the correct path to package.json for the following folder, as we're only using the scripts package as an abtraction, but list those dependencies in roots package.json file
				'import/no-extraneous-dependencies': [
					'error',
					{ packageDir: './' }
				],
				// Node.js environment
				'no-console': 'off'
			}
		}
	],
	rules: {
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'unicorn/prefer-module': 0, // TODO: we need to change every package to "type":"module"
		'n/prefer-global/process': 0, // We use process.env in config files so don't use require("process")
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					kebabCase: true,
					pascalCase: true
				}
			}
		],
		'unicorn/prevent-abbreviations': 0
	}
};
