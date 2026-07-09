import ignoreFolders from './.config/ignores.js';

/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
	{
		ignores: [
			...ignoreFolders,
			'**/*.vue',
			// Tsconfig files use JSONC (comments/trailing commas) which XO's strict JSON parser rejects
			'**/tsconfig*.json',
			// We don't need to check for stories - they will be generated
			'storybooks/*/src/**',
			'scripts/check-docs.js'
		]
	},
	{
		prettier: 'compat',
		rules: {
			'n/prefer-global/process': 0,
			'unicorn/prefer-module': 0,
			'import-x/order': 0, // We use a prettier plugin to organize imports,
			'@typescript-eslint/no-unsafe-type-assertion': 0, // We don't need this tsc will handle it anyway
			'@typescript-eslint/no-unsafe-member-access': 0, // We don't need this tsc will handle it anyway
			'@typescript-eslint/no-unsafe-enum-comparison': 0, // We don't need this tsc will handle it anyway
			'require-unicode-regexp': 0, // We don't need unicode regexp
			// New rules introduced in XO 3 — to be addressed in follow-up PRs
			'@typescript-eslint/strict-boolean-expressions': 0, // 307 violations — requires explicit boolean coercion
			'regexp/prefer-named-capture-group': 0, // 41 violations — named regex groups
			'markdown/no-missing-label-refs': 0, // 41 violations — false positives on non-standard markdown syntax
			'jsdoc/require-param-description': 0, // 27 violations — JSDoc param descriptions
			'jsdoc/require-param-type': 0, // 14 violations — JSDoc param types (redundant with TypeScript)
			'jsdoc/require-returns-description': 0, // 8 violations — JSDoc returns descriptions
			'jsdoc/check-param-names': 0, // 9 violations — JSDoc param name validation
			'jsdoc/escape-inline-tags': 0, // 17 violations — JSDoc inline tag escaping
			'unicorn/no-top-level-side-effects': 0, // 22 violations — top-level side effects (common in showcases)
			'unicorn/no-break-in-nested-loop': 0, // 22 violations — break in nested loops
			'unicorn/no-non-function-verb-prefix': 0, // 20 violations — naming convention
			'unicorn/no-unsafe-string-replacement': 0, // 11 violations — string replacement safety
			'unicorn/no-computed-property-existence-check': 0, // 8 violations
			'unicorn/prefer-minimal-ternary': 0, // 8 violations
			'unicorn/prefer-includes-over-repeated-comparisons': 0, // 7 violations
			'unicorn/prefer-early-return': 0, // 7 violations
			'unicorn/consistent-class-member-order': 0, // Class member ordering
			'regexp/no-super-linear-backtracking': 0, // 14 violations — regex performance
			'@typescript-eslint/no-shadow': 0, // 14 violations — variable shadowing
			'@eslint-community/eslint-comments/require-description': 0, // 14 violations — eslint-disable comments need descriptions
			'@stylistic/no-mixed-operators': 'off', // 10 violations — operator precedence, XO overrides this
			'@stylistic/padding-line-between-statements': 0, // 64 violations — conflicts with Prettier formatting
			'jsdoc/check-indentation': 0, // 1 violation
			'jsdoc/require-asterisk-prefix': 0, // JSDoc * prefix removed by XO's formatting
			// `@public` is used across the monorepo as Knip's public-API marker
			// (see knip.jsonc `tags: ["-public"]`). XO 3's JSDoc rules otherwise
			// reject it as redundant/non-empty, which would conflict with Knip.
			'jsdoc/check-tag-names': 0,
			'jsdoc/empty-tags': 0,
			'unicorn/no-global-object-property-assignment': 0, // 1 violation
			'unicorn/prefer-array-some': 0, // 7 violations
			'unicorn/consistent-compound-words': 0, // 5 violations
			'unicorn/prefer-type-literal-last': 0, // 4 violations
			'unicorn/no-declarations-before-early-exit': 0, // 4 violations
			'unicorn/prefer-ternary': 0, // 3 violations
			'unicorn/no-incorrect-template-string-interpolation': 0, // 3 violations
			'unicorn/no-duplicate-loops': 0, // 3 violations
			'unicorn/prefer-uint8array-base64': 0, // 3 violations
			'unicorn/prefer-number-coercion': 0, // 2 violations
			'unicorn/no-exports-in-scripts': 0, // 2 violations
			'unicorn/prefer-url-href': 0, // 1 violation
			'unicorn/prefer-unicode-code-point-escapes': 0, // Changes \u2013 to \u{2013} which breaks string matching
			'unicorn/prefer-iterator-to-array': 0, // 1 violation
			'unicorn/no-return-array-push': 0, // 1 violation
			'unicorn/no-optional-chaining-on-undeclared-variable': 0, // 1 violation
			'unicorn/better-dom-traversing': 0, // 1 violation
			'regexp/no-super-linear-move': 0, // 5 violations
			'regexp/no-unused-capturing-group': 0, // 4 violations
			'regexp/sort-character-class-elements': 0, // 1 violation
			'jsdoc/require-description': 0, // 7 violations
			'jsdoc/reject-any-type': 0, // 1 violation
			'jsdoc/informative-docs': 0, // 1 violation
			'jsdoc/imports-as-dependencies': 0, // 1 violation
			'@typescript-eslint/naming-convention': 0, // 4 violations
			'@typescript-eslint/no-unnecessary-type-conversion': 0, // 3 violations
			'@typescript-eslint/no-restricted-imports': 0, // 1 violation
			'no-shadow': 0, // 3 violations — covered by @typescript-eslint/no-shadow
			'@html-eslint/require-form-method': 0, // 1 violation — Angular forms use (submit)
			'@html-eslint/no-inline-styles': 0 // 1 violation — acceptable in showcases
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
		files: ['./**/angular-**/**/*.html'],
		rules: {
			// Angular templates use case-sensitive bindings (e.g. [(ngModel)], [formControl], (optionSelected))
			'@html-eslint/lowercase': 0,
			// @html-eslint cannot parse Angular @if/@for control flow blocks, causing false indent errors
			'@html-eslint/indent': 0,
			'@html-eslint/attrs-newline': 0
		}
	},
	{
		files: ['./showcases/**/*.html'],
		rules: {
			// Showcase HTML files are dev/test artifacts, not production pages
			'@html-eslint/require-meta-description': 0,
			'@html-eslint/require-open-graph-protocol': 0,
			// Self-closing tags (e.g. <meta />) and spacing before /> are standard in frameworks
			'@html-eslint/require-closing-tags': 0,
			'@html-eslint/no-extra-spacing-tags': 0
		}
	},
	{
		// Kiro steering files use #[[file:...]] include syntax that conflicts with Prettier/markdown heading rules
		files: ['./.kiro/steering/*.md'],
		rules: {
			'markdown/no-multiple-h1': 0,
			'markdown/no-missing-atx-heading-space': 0,
			'markdown/no-missing-label-refs': 0
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
			'@typescript-eslint/no-unsafe-call': 0, // We don't need this tsc will handle it anyway
			'@typescript-eslint/no-unsafe-assignment': 0 // We don't need this tsc will handle it anyway
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
		files: ['./packages/mcp-server/**/__tests__/**'],
		rules: {
			'@typescript-eslint/no-require-imports': 0 // Test helpers use require for sync file ops
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
			'unicorn/no-array-sort': 0, // Intentional
			'@typescript-eslint/no-unsafe-assignment': 0, // Node.js fs/path calls
			'@typescript-eslint/no-unsafe-call': 0, // Node.js fs/path calls
			'@typescript-eslint/no-unsafe-argument': 0, // Node.js fs/path calls
			'@typescript-eslint/no-unsafe-return': 0, // Node.js fs/path calls
			'@typescript-eslint/restrict-plus-operands': 0 // String concatenation
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
