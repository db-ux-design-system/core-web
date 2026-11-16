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

type Values = Record<string, string>;

/** `textMuted` -> `--db-sb-text-muted: …;`; only plain CSS values. */
const toVariables = (values: Values): string =>
	Object.entries(values)
		.filter(
			([key, value]) =>
				typeof value === 'string' &&
				!key.startsWith('font') &&
				key !== 'brandLogo'
		)
		.map(
			([key, value]) =>
				`--db-sb-${key.replaceAll(/[A-Z\d]+/g, (part) => `-${part.toLowerCase()}`)}: ${value};`
		)
		.join('\n');

/**
 * The `--db-sb-*` values of both modes. manager.ts sets
 * `data-db-sb-mode` on `<html>` from the "Mode" toolbar entry; before it runs
 * (and for "System") the OS color scheme decides.
 */
const themeVariables = (): string => {
	const { light, dark, ...shared } = JSON.parse(
		read('theme-values.json')
	) as Values & { light: Values; dark: Values };
	return [
		`:root {\n${toVariables(shared)}\n${toVariables(light)}\n}`,
		`@media (prefers-color-scheme: dark) {\n:root:not([data-db-sb-mode="light"]) {\n${toVariables(dark)}\n}\n}`,
		`:root[data-db-sb-mode="dark"] {\n${toVariables(dark)}\n}`
	].join('\n');
};

/** Appended to Storybook's manager head (`managerHead` in main.ts). */
export const managerHead = (head = ''): string =>
	[
		head,
		read('manager-head.html'),
		'<style data-db-theme="manager">',
		themeVariables(),
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
