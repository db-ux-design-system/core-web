/**
 * The two head files of the Storybooks, built from this folder when a
 * Storybook starts (`managerHead` / `previewHead` in `.storybook/main.ts`):
 *
 * - manager head: favicon and fonts (manager-head.html) plus manager.css with
 *   the `--db-sb-*` values from theme-values.json
 * - preview head: docs.css plus docs-anchor.js (deep links to a section of a
 *   docs page)
 *
 * Both CSS files are CSS escape hatches, which Storybook documents for these
 * two heads (https://storybook.js.org/docs/configure/user-interface/theming#css-escape-hatches).
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const read = (file: string) =>
	readFileSync(join(import.meta.dirname, file), 'utf8').trimEnd();

/** `brandLogo` -> `--db-sb-brand-logo`; only plain CSS values. */
const themeVariables = (): string => {
	const values = JSON.parse(read('theme-values.json')) as Record<
		string,
		string
	>;
	return Object.entries(values)
		.filter(([key]) => !key.startsWith('font') && key !== 'brandLogo')
		.map(
			([key, value]) =>
				`--db-sb-${key.replaceAll(/[A-Z\d]+/g, (part) => `-${part.toLowerCase()}`)}: ${value};`
		)
		.join('\n');
};

/** Appended to Storybook's manager head (`managerHead` in main.ts). */
export const managerHead = (head = ''): string =>
	[
		head,
		read('manager-head.html'),
		'<style data-db-theme="manager">',
		`:root {\n${themeVariables()}\n}`,
		read('manager.css'),
		'</style>'
	].join('\n');

/** Appended to Storybook's preview head (`previewHead` in main.ts). */
export const previewHead = (head = ''): string =>
	[
		head,
		'<style data-db-theme="docs">',
		read('docs.css'),
		'</style>',
		'<script data-db-theme="docs-anchor">',
		read('docs-anchor.js'),
		'</script>'
	].join('\n');
