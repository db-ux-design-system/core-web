import { defineConfig } from 'cspell';

export default defineConfig({
	version: '0.2',
	ignorePaths: [
		'*.lock',
		'package-lock.json',
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
		'**/test/**',
		'packages/migration/**',
		'output/**',
		'showcases/patternhub/**',
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
