/**
 * PROTOTYPE – copies the shared Storybook config files into every framework
 * Storybook (`.storybook/mode.ts`, `.storybook/autodocs-page.mdx`,
 * `.storybook/source-imports.ts`, `.storybook/docs.css` and the theme files
 * `theme.ts`, `theme-values.json`, `manager.ts`, `manager-head.html`). The
 * composition Storybook gets `docs.css` and the theme files only.
 *
 * Copies instead of imports, because the Angular build only compiles files
 * inside its own project. Run after editing a file in this folder:
 *
 *   node storybooks/_shared/storybook-config/sync.ts
 */
import { copyFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const STORYBOOKS = resolve(import.meta.dirname, '..', '..');
const FILES = [
	'mode.ts',
	'autodocs-page.mdx',
	'source-imports.ts',
	'docs.css',
	'theme.ts',
	'theme-values.json',
	'manager.ts',
	'manager-head.html'
];
const TARGETS = [
	'react-storybook',
	'angular-storybook',
	'vue-storybook',
	'stencil-storybook',
	'html-storybook'
];

// The composition Storybook has no component stories, it only needs the docs
// styles and the theme.
const COMPOSITION = {
	target: '_storybook',
	files: [
		'docs.css',
		'theme.ts',
		'theme-values.json',
		'manager.ts',
		'manager-head.html'
	]
};

for (const { target, files } of [
	...TARGETS.map((name) => ({ target: name, files: FILES })),
	COMPOSITION
]) {
	for (const file of files) {
		copyFileSync(
			join(import.meta.dirname, file),
			join(STORYBOOKS, target, '.storybook', file)
		);
		console.log(`[storybook-config] ${target}/.storybook/${file}`);
	}
}
