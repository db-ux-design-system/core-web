module.exports = {
	prettier: true,
	plugins: ['@db-ui'],
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
			files: [
				'./**/angular-**/**',
				'./showcases/vanilla-showcase/**',
				'./showcases/svelte-showcase/**'
			],
			rules: {
				'new-cap': 0, // fixes issue with @Component annotation
				'import/no-unassigned-import': 0, // fixes issue with including zone.js or db-components
				'no-undef': 0 // fixes issue with document & window
			}
		},
		{
			files: ['./showcases/**', './examples/**'],
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
				'import/no-extraneous-dependencies': 0 // foundation and component.css are inside this repo
			}
		}
	],
	rules: {
		'@db-ui/v2-component-used': 'warn',
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
		]
	}
};
