/**
 * PROTOTYPE – reads the colors of the Storybook theme from the design system
 * and writes `theme-values.json`.
 *
 * The Storybook manager (sidebar, toolbar) does not load the design system
 * CSS, so its theme needs plain values instead of `var(--db-…)`. They are
 * resolved from the semantic tokens of `@db-ux/core-foundations` (which pick a
 * palette step with `light-dark()`) and the palette of `@db-ux/db-theme`
 * (`@property` initial values), in Light Mode.
 *
 * Run after a theme update, then sync.ts:
 *
 *   node storybooks/_shared/storybook-config/generate-theme.ts
 */
import { readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..', '..', '..');
const read = (path: string) => readFileSync(path, 'utf8');

const foundations = read(
	join(ROOT, 'packages/foundations/build/styles/bundle.css')
);
const dbThemePackage = realpathSync(
	join(ROOT, 'storybooks/_storybook/node_modules/@db-ux/db-theme')
);
const dbTheme = read(join(dbThemePackage, 'build/styles/rollup.css'));

/** Custom properties: palette values of the theme, then the semantic tokens. */
const properties = new Map<string, string>();
for (const match of dbTheme.matchAll(
	/@property (--[\w-]+)\s*\{[^}]*?initial-value:\s*([^;]+);/g
)) {
	properties.set(match[1], match[2].trim());
}

for (const match of foundations.matchAll(/(--db-[\w-]+):\s*([^;{}]+);/g)) {
	if (!properties.has(match[1])) {
		properties.set(match[1], match[2].replaceAll(/\s+/g, ' ').trim());
	}
}

/** Resolves `var()` and takes the Light Mode branch of `light-dark()`. */
const resolveValue = (value: string, depth = 0): string => {
	if (depth > 10) {
		throw new Error(`[theme] cannot resolve ${value}`);
	}

	const lightDark = /^light-dark\(\s*(.+?)\s*,\s*(.+)\s*\)$/.exec(value);
	if (lightDark) {
		return resolveValue(lightDark[1], depth + 1);
	}

	const variable = /^var\(\s*(--[\w-]+)\s*(?:,[^)]*)?\)$/.exec(value);
	if (variable) {
		const next = properties.get(variable[1]);
		if (!next) {
			throw new Error(`[theme] ${variable[1]} is not defined`);
		}

		return resolveValue(next, depth + 1);
	}

	return value;
};

const token = (name: string) => {
	const value = properties.get(name);
	if (!value) {
		throw new Error(`[theme] ${name} is not defined`);
	}

	return resolveValue(value);
};

const values = {
	brand: token('--db-brand-origin-light-default'),
	onBrand: token('--db-brand-on-origin-light-default'),
	background: token('--db-neutral-bg-basic-level-1-default'),
	backgroundLevel2: token('--db-neutral-bg-basic-level-2-default'),
	backgroundLevel3: token('--db-neutral-bg-basic-level-3-default'),
	text: token('--db-neutral-on-bg-basic-emphasis-100-default'),
	// Emphasis 70 reaches only 4.49:1 on white, below the 4.5:1 of WCAG AA.
	textMuted: token('--db-neutral-on-bg-basic-emphasis-80-default'),
	border: token('--db-neutral-on-bg-basic-emphasis-50-default'),
	fontSans: '"DB Neo Screen Sans", helvetica, arial, sans-serif',
	fontHead: '"DB Neo Screen Head", helvetica, arial, sans-serif',
	fontCode: 'ui-monospace, monospace'
};

for (const [key, value] of Object.entries(values)) {
	if (!key.startsWith('font') && !/^#[\da-f]{3,8}$/i.test(value)) {
		throw new Error(`[theme] ${key} resolved to "${value}", not a color`);
	}
}

const target = join(import.meta.dirname, 'theme-values.json');
writeFileSync(target, `${JSON.stringify(values, null, '\t')}\n`);
console.log('[theme] wrote', target.replace(`${ROOT}/`, ''), values);
