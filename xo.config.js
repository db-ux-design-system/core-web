import ignoreFolders from './.config/ignores.js';

/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
	{
		ignores: [
			...ignoreFolders,
			'**/*.vue',
			// We don't need to check for stories - they will be generated
			'storybooks/*/src/**',
			'scripts/check-docs.js'
		]
	},
	{
		prettier: true,
		rules: {
			'n/prefer-global/process': 0,
			'unicorn/prefer-module': 0,
			'import-x/order': 0, // We use a prettier plugin to organize imports,
			'@typescript-eslint/no-unsafe-type-assertion': 0, // We don't need this tsc will handle it anyway
			'@typescript-eslint/no-unsafe-member-access': 0, // We don't need this tsc will handle it anyway
			'@typescript-eslint/no-unsafe-enum-comparison': 0, // We don't need this tsc will handle it anyway
			'require-unicode-regexp': 0 // We don't need unicode regexp
		}
	},
	{
		files: ['./showcases/angular-showcase/**'],
		rules: {
			'import-x/no-extraneous-dependencies': 0,
			'@typescript-eslint/consistent-type-imports': 0,
			'@stylistic/curly-newline': 0
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
			'import-x/no-extraneous-dependencies': 0, // Foundation and component.css are inside this repo
			'@typescript-eslint/no-base-to-string': 0
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
	},
	{
		files: ['./packages/eslint-plugin/**'],
		rules: {
			'@typescript-eslint/naming-convention': 0, // Uses PascalCase (DBButton, VElement, JSXElement) and UPPER_CASE constants intentionally
			'@typescript-eslint/no-unsafe-assignment': 0, // AST nodes are untyped
			'@typescript-eslint/no-unsafe-call': 0, // AST node method calls
			'@typescript-eslint/no-unsafe-argument': 0, // AST node arguments
			'@typescript-eslint/no-unsafe-return': 0, // AST node returns
			'@typescript-eslint/restrict-plus-operands': 0, // String concatenation with AST values
			'@typescript-eslint/prefer-nullish-coalescing': 0, // Intentional || for falsy checks
			'import-x/no-anonymous-default-export': 0, // ESLint rules export anonymous objects
			'unicorn/prefer-string-slice': 0, // Substring is fine
			'unicorn/no-array-callback-reference': 0, // Intentional
			'unicorn/no-immediate-mutation': 0 // Intentional pattern
		}
	},
	{
		files: ['./packages/mcp-server/**'],
		rules: {
			'@typescript-eslint/naming-convention': 0, // Uses UPPER_CASE constants and snake_case API fields
			'@typescript-eslint/no-unsafe-assignment': 0, // Dynamic manifest handling
			'@typescript-eslint/no-unsafe-call': 0,
			'@typescript-eslint/no-unsafe-argument': 0,
			'@typescript-eslint/no-unsafe-return': 0,
			'@typescript-eslint/consistent-type-imports': 0, // Dynamic imports
			'@typescript-eslint/consistent-type-assertions': 0, // Type assertions needed
			'@typescript-eslint/no-require-imports': 0, // Needed for dynamic requires
			'@typescript-eslint/no-empty-function': 0, // Test stubs
			'import-x/extensions': 0, // Bundled with esbuild
			'import-x/no-extraneous-dependencies': 0, // Monorepo internal deps
			'n/no-extraneous-import': 0, // Monorepo internal deps
			'unicorn/text-encoding-identifier-case': 0, // Utf-8 is standard
			'unicorn/no-process-exit': 0, // This IS a CLI app
			'unicorn/prevent-abbreviations': 0, // Short names in catch
			'unicorn/filename-case': 0, // Existing file names
			'unicorn/import-style': 0, // Named imports for node:path
			'no-await-in-loop': 0, // Sequential file processing
			'new-cap': 0, // Zod schema constructors
			'@typescript-eslint/strict-void-return': 0, // Event handlers
			'@stylistic/curly-newline': 0 // Test formatting
		}
	},
	{
		files: ['./packages/vite-plugin/**'],
		rules: {
			'@typescript-eslint/naming-convention': 0, // UPPER_CASE constants
			'@typescript-eslint/prefer-nullish-coalescing': 0, // Intentional || for defaults
			'unicorn/no-array-sort': 0, // Mutation is intentional
			'unicorn/text-encoding-identifier-case': 0, // Utf-8 is standard
			'unicorn/prevent-abbreviations': 0 // Short names in catch
		}
	},
	{
		files: ['./packages/postcss-plugin/**'],
		rules: {
			'@typescript-eslint/naming-convention': 0, // PostCSS lifecycle hooks (Once, OnceExit)
			'@typescript-eslint/no-unsafe-assignment': 0,
			'@typescript-eslint/no-unsafe-call': 0,
			'@typescript-eslint/no-unsafe-return': 0,
			'@typescript-eslint/no-loop-func': 0, // Intentional closures
			'@typescript-eslint/switch-exhaustiveness-check': 0, // Default case handled elsewhere
			'unicorn/no-for-loop': 0, // Index needed
			'unicorn/prevent-abbreviations': 0 // Short names
		}
	},
	{
		files: ['./packages/agent-cli/**'],
		rules: {
			'import-x/extensions': 0, // Bundled
			'@typescript-eslint/strict-void-return': 0, // CLI entry point
			'unicorn/no-array-sort': 0 // Intentional
		}
	},
	{
		files: ['./packages/stylelint/**'],
		rules: {
			'@typescript-eslint/naming-convention': 0 // UPPER_CASE constants
		}
	}
];

export default xoConfig;
