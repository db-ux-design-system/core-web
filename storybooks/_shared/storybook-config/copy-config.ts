/**
 * Copies the shared Storybook config files into `.storybook/` of a Storybook,
 * on every build and start (the "build" and "storybook" scripts):
 *
 * - every Storybook: `mode.ts`, `theme.ts`, `theme-values.json`, `manager.ts`
 * - the framework Storybooks also: `source-imports.ts`, `autodocs-page.mdx`
 *   (the composition Storybook has no component stories)
 *
 * The copies are git-ignored, edit the files in this folder. Copies instead
 * of imports, because the Angular build only compiles files inside its own
 * project, and `storybook/*` resolves only from a Storybook.
 *
 * The head files are not copied: `managerHead` / `previewHead` in
 * `.storybook/main.ts` build them from this folder (head.ts).
 *
 *   node storybooks/_shared/storybook-config/copy-config.ts --storybook <name>
 */
import { copyFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const STORYBOOKS = resolve(import.meta.dirname, '..', '..');
const COMMON_FILES = ['mode.ts', 'theme.ts', 'theme-values.json', 'manager.ts'];
const FRAMEWORK_FILES = ['source-imports.ts', 'autodocs-page.mdx'];
const COMPOSITION = '_storybook';

const index = process.argv.indexOf('--storybook');
const storybook = index === -1 ? undefined : process.argv[index + 1];
const directory = storybook && join(STORYBOOKS, storybook, '.storybook');

if (!directory || !existsSync(directory)) {
	throw new Error(
		'[storybook-config] usage: copy-config.ts --storybook <name of a folder in storybooks/>'
	);
}

const files =
	storybook === COMPOSITION
		? COMMON_FILES
		: [...COMMON_FILES, ...FRAMEWORK_FILES];

for (const file of files) {
	copyFileSync(join(import.meta.dirname, file), join(directory, file));
}

console.log(
	`[storybook-config] ${files.length} files -> ${storybook}/.storybook/`
);
