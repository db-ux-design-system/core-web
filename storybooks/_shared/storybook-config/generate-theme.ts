/**
 * Reads the colors of the Storybook theme from the design system
 * and writes `theme-values.json`.
 *
 * The Storybook manager (sidebar, toolbar) does not load the design system
 * CSS, so its theme needs plain values instead of `var(--db-…)`. A browser
 * (Playwright) loads the foundations and the DB Theme CSS and resolves the
 * tokens in Light Mode, exactly as a component would see them.
 *
 * Run after a theme update, then sync.ts:
 *
 *   node storybooks/_shared/storybook-config/generate-theme.ts
 */
/* eslint-disable unicorn/isolated-functions -- the page.evaluate callbacks run in the browser, where `document` and `getComputedStyle` exist */
import { chromium } from '@playwright/test';
import { Buffer } from 'node:buffer';
import { readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..', '..', '..');
const read = (path: string) => readFileSync(path, 'utf8');

const dbThemePackage = realpathSync(
	join(ROOT, 'storybooks/_storybook/node_modules/@db-ux/db-theme')
);
const css = [
	read(join(dbThemePackage, 'build/styles/rollup.css')),
	read(join(ROOT, 'packages/foundations/build/styles/bundle.css'))
].join('\n');

/** Theme keys and the design system token behind each of them. */
const TOKENS = {
	brand: '--db-brand-origin-default',
	onBrand: '--db-brand-on-origin-default',
	background: '--db-neutral-bg-basic-level-1-default',
	backgroundLevel2: '--db-neutral-bg-basic-level-2-default',
	backgroundLevel3: '--db-neutral-bg-basic-level-3-default',
	// Sidebar items like the control panel navigation items
	// (styles/internal/_navigation-item.scss): transparent background with
	// the hover and pressed overlay.
	itemHovered: '--db-neutral-bg-basic-transparent-full-hovered',
	itemPressed: '--db-neutral-bg-basic-transparent-full-pressed',
	// Active item indicator (styles/internal/_indicator.scss).
	indicator: '--db-brand-on-bg-basic-emphasis-70-default',
	text: '--db-neutral-on-bg-basic-emphasis-100-default',
	// Emphasis 70 reaches only 4.49:1 on white, below the 4.5:1 of WCAG AA.
	textMuted: '--db-neutral-on-bg-basic-emphasis-80-default',
	// Border of the control panel.
	border: '--db-neutral-on-bg-basic-emphasis-60-default'
} as const;

/** Sizes of the active item indicator, see styles/internal/_indicator.scss. */
const LENGTHS = {
	indicatorWidth: '--db-border-width-xs',
	// Border of the control panel.
	borderWidth: '--db-border-width-3xs',
	radius: '--db-border-radius-xs'
} as const;

/** `rgb()`, `rgba()` or `color(srgb …)` (from `color-mix()`) as hex/rgba. */
const toCssColor = (computed: string): string => {
	const rgb =
		/^rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)$/.exec(
			computed
		);
	const srgb =
		/^color\(srgb ([\d.]+) ([\d.]+) ([\d.]+)(?: \/ ([\d.]+))?\)$/.exec(
			computed
		);
	const channels = rgb
		? rgb.slice(1, 4).map(Number)
		: srgb?.slice(1, 4).map((value) => Number(value) * 255);
	const alpha = Number((rgb ?? srgb)?.[4] ?? 1);
	if (!channels) {
		throw new Error(`[theme] cannot convert ${computed}`);
	}

	const [red, green, blue] = channels.map((value) => Math.round(value));
	if (alpha < 1) {
		return `rgba(${red}, ${green}, ${blue}, ${Number(alpha.toFixed(3))})`;
	}

	return `#${[red, green, blue]
		.map((value) => value.toString(16).padStart(2, '0'))
		.join('')}`;
};

const browser = await chromium.launch();
const page = await browser.newPage({ colorScheme: 'light' });
await page.setContent('<!doctype html><html><body></body></html>');
await page.addStyleTag({ content: css });
const computed = await page.evaluate((tokens) => {
	const probe = document.createElement('div');
	document.body.append(probe);
	return Object.fromEntries(
		Object.entries(tokens).map(([key, name]) => {
			probe.style.backgroundColor = '';
			probe.style.backgroundColor = `var(${name})`;
			return [key, getComputedStyle(probe).backgroundColor];
		})
	);
}, TOKENS);
const lengths = await page.evaluate((tokens) => {
	const probe = document.createElement('div');
	document.body.append(probe);
	return Object.fromEntries(
		Object.entries(tokens).map(([key, name]) => {
			probe.style.width = '';
			probe.style.width = `var(${name})`;
			return [key, getComputedStyle(probe).width];
		})
	);
}, LENGTHS);
await browser.close();

for (const [key, value] of Object.entries(lengths)) {
	// The DB Theme sets the radius to 0; an undefined size also computes to 0,
	// so only the indicator sizes must be positive.
	if (
		!/^\d+(\.\d+)?px$/.test(value) ||
		(key !== 'radius' && value === '0px')
	) {
		throw new Error(
			`[theme] ${LENGTHS[key as keyof typeof LENGTHS]} resolved to "${value}"`
		);
	}
}

const colors = Object.fromEntries(
	Object.entries(computed).map(([key, value]) => {
		// An undefined token computes to transparent.
		if (value === 'rgba(0, 0, 0, 0)') {
			throw new Error(
				`[theme] ${TOKENS[key as keyof typeof TOKENS]} is not defined`
			);
		}

		return [key, toCssColor(value)];
	})
);

/*
 * Logo of the sidebar. `logo.svg` picks its color with `light-dark()`, which
 * follows the OS color scheme inside an `<img>`: white on the light sidebar in
 * Dark Mode. Fix the Light Mode color and the size (32 px instead of 96 px).
 */
const logoSource = read(
	join(ROOT, 'packages/foundations/assets/images/logo.svg')
);
const logo = logoSource
	.replaceAll(/light-dark\(\s*([^,]+?)\s*,[^)]*\)/g, '$1')
	.replace('width="96" height="96"', 'width="32" height="32"');
if (logo.includes('light-dark') || !logo.includes('width="32"')) {
	throw new Error('[theme] logo.svg changed, adjust the logo replacements');
}

const values = {
	...colors,
	...lengths,
	fontSans: '"DB Neo Screen Sans", helvetica, arial, sans-serif',
	fontHead: '"DB Neo Screen Head", helvetica, arial, sans-serif',
	fontCode: 'ui-monospace, monospace',
	brandLogo: `data:image/svg+xml;base64,${Buffer.from(logo.replaceAll(/\s+/g, ' ').trim()).toString('base64')}`
};

const target = join(import.meta.dirname, 'theme-values.json');
writeFileSync(target, `${JSON.stringify(values, null, '\t')}\n`);
console.log('[theme] wrote', target.replace(`${ROOT}/`, ''), colors);
