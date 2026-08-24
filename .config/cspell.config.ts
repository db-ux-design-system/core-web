import { defineConfig } from 'cspell';

export default defineConfig({
	version: '0.2',
	// The DB UX guidelines and the designer power's context are authored in GERMAN, so an
	// English-only checker reported ~4 000 ordinary words ("nicht", "werden", "Regeln") as typos.
	// A check that fires on correct content gets ignored, and ignoring the paths instead would take
	// the runtime source with it — including the audit's violation messages, which are the one
	// place a typo actually costs something. So the checker learns German.
	import: ['@cspell/dict-de-de/cspell-ext.json'],
	ignorePaths: [
		'*.lock',
		'pnpm-lock.yaml',
		'pnpm-workspace.yaml',
		'node_modules',
		'.git',
		'.gitignore',
		'__snapshots__',
		'dist',
		'build',
		'coverage',
		'*.svg',
		'*.png',
		'*.jpg',
		'*.jpeg',
		'*.gif',
		'*.ico',
		'*.woff',
		'*.woff2',
		'*.ttf',
		'*.eot',
		'**/build-*/**',
		// Generated: the minified Figma runtime and its chunked bootstrap snippets. Already
		// excluded from Prettier and xo because formatting them breaks the bootstrap. Spell-checking
		// a minified chunk is meaningless — it reports split suffixes from identifiers that exist
		// in no source file.
		'**/generate-figma-screen/assets/db-figma-runtime.min.js',
		'**/generate-figma-screen/assets/bootstrap/**',
		'**/test-results/**',
		'**/results/**',
		'./showcases/screen-reader/translations.ts',
		'storybooks/_storybook/src/welcome.mdx',
		'playwright-report/**',
		'showcases/shared/*.json',
		'**/*.example.lite.tsx',
		'**/*.showcase.lite.tsx',
		'**/*.example.stories.*',
		'**/scripts/public/**',
		'**/test/**',
		'**/__tests__/**',
		'**/public/**',
		'packages/migration/src/migration/color-q32024.ts',
		'packages/mcp-server/docs/migration/db-ui-icon-migration.md',
		'packages/mcp-server/docs/migration/db-ui-color-migration.md',
		'output/**',
		'showcases/patternhub/**',
		'docs/migration/db-ui/color-migration.md',
		'docs/migration/db-ui/icon-migration.md',
		'packages/mcp-server/src/manifest.json',
		'storybooks/angular-storybook/src/components/documentation.json',
		'packages/foundations/src/all-icons.ts',
		// Examples
		'showcases/react-showcase/src/components/form/index.tsx',
		'showcases/patternhub/pages/foundations/densities/examples.tsx',
		'showcases/angular-showcase/src/app/components/form/form.component.ts',
		'.vscode/extensions.json'
	],
	dictionaries: [
		'custom-words',
		// Listed explicitly rather than via `language: 'en,de'` so German is checked in EVERY file
		// type, independent of locale resolution — the German copy sits in .md, .ts and .js alike.
		'de-de',
		'typescript',
		'css',
		'vue',
		'lorem',
		'lorem-ipsum',
		'npm',
		'node',
		'docker'
	],

	// Tell CSpell about your dictionary
	dictionaryDefinitions: [
		{
			name: 'custom-words',
			path: './cspellignorewords.txt',
			addWords: true
		}
	]
});
