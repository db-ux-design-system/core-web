import { defineConfig } from 'cspell';

export default defineConfig({
	version: '0.2',
	ignorePaths: [
		'*.lock',
		'pnpm-lock.yaml',
		'pnpm-workspace.yaml',
		'node_modules',
		'.git',
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
		'**/test-results/**',
		'**/results/**',
		'./showcases/screen-reader/translations.ts',
		'storybooks/_storybook/src/welcome.mdx',
		'playwright-report/**',
		'showcases/shared/*.json',
		'**/*.example.lite.tsx',
		'**/*.showcase.lite.tsx',
		'**/*.example.stories.*',
		'**/test/**',
		'**/__tests__/**',
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
		'showcases/angular-showcase/src/app/components/form/form.component.ts'
	],
	dictionaries: [
		'custom-words',
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
