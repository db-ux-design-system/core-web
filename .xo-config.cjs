module.exports = {
	prettier: true,
	plugins: ["@db-ui"],
	overrides: [
		{
			files: ["./showcases/angular-showcase/**"],
			rules: {
				"import/no-extraneous-dependencies": 0,
				"@typescript-eslint/consistent-type-imports": 0,
			},
		},
		{
			files: ["./showcases/**", "./examples/**"],
			rules: {
				// In TS we don't need extension
				"import/extensions": 0,
			},
		},
	],
	rules: {
		"@db-ui/v2-component-used": "warn",
		"no-console": ["error", { allow: ["warn", "error"] }],
		"unicorn/prefer-module": 0, // we need to change every package to type:module
		"max-depth": 0,
		"n/prefer-global/process": 0,
		"max-params": 0,
		"new-cap": 0,
		"import/no-unassigned-import": 0,
		"no-undef": 0,
		"@typescript-eslint/no-unsafe-call": 0,
		"n/file-extension-in-import": 0,
		"@typescript-eslint/no-unsafe-return": 0,
		"@typescript-eslint/no-unsafe-assignment": 0,
		"unicorn/prefer-top-level-await": 0,
		"@typescript-eslint/naming-convention": 0,
		"@typescript-eslint/restrict-template-expressions": 0,
		"unicorn/filename-case": [
			"error",
			{
				cases: {
					kebabCase: true,
					pascalCase: true,
				},
			},
		],
	},
};
