/**
 * PROTOTYPE – copies the shared Storybook config files into every framework
 * Storybook (`.storybook/mode.ts`, `.storybook/autodocs-page.mdx`).
 *
 * Copies instead of imports, because the Angular build only compiles files
 * inside its own project. Run after editing a file in this folder:
 *
 *   node storybooks/_shared/storybook-config/sync.ts
 */
import { copyFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const STORYBOOKS = resolve(import.meta.dirname, '..', '..');
const FILES = ['mode.ts', 'autodocs-page.mdx', 'source-imports.ts'];
const TARGETS = [
	'react-storybook',
	'angular-storybook',
	'vue-storybook',
	'stencil-storybook',
	'html-storybook'
];

for (const target of TARGETS) {
	for (const file of FILES) {
		copyFileSync(
			join(import.meta.dirname, file),
			join(STORYBOOKS, target, '.storybook', file)
		);
		console.log(`[storybook-config] ${target}/.storybook/${file}`);
	}
}
