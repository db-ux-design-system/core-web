/*
 * Behavioral gate for the `highContrast` option of the core generator.
 *
 * The high-contrast layer has two independent delivery branches — the opt-in
 * `[data-contrast="more"]` attribute selector and the
 * `@media (prefers-contrast: more)` query. `HighContrastMode` selects which to
 * emit. This suite asserts each of the four modes produces exactly the right
 * branch(es), using the same nested DB-palette fixture as the output gate so
 * the generator runs against a realistic theme.
 */
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { generate, loadTheme } from '../src/index.js';

const dbTheme = await loadTheme(
	fileURLToPath(
		new URL('./fixtures/vite-app/theme.tokens.json', import.meta.url)
	)
);

/* Markers that identify each high-contrast branch in the emitted CSS. */
const LAYER_WRAPPER = '@layer material-high-contrast {';
const DATA_ATTRIBUTE_SELECTOR = '[data-contrast="more"]';
const MEDIA_QUERY = '@media (prefers-contrast: more)';

describe('generate(dbTheme) — highContrast modes', () => {
	it('"both" emits the data-attribute branch, the media-query branch, and the shared layer', () => {
		const css = generate(dbTheme, { highContrast: 'both' });

		expect(css).toContain(LAYER_WRAPPER);
		expect(css).toContain(DATA_ATTRIBUTE_SELECTOR);
		expect(css).toContain(MEDIA_QUERY);
	});

	it('"data-attribute" emits only the [data-contrast="more"] branch', () => {
		const css = generate(dbTheme, { highContrast: 'data-attribute' });

		expect(css).toContain(LAYER_WRAPPER);
		expect(css).toContain(DATA_ATTRIBUTE_SELECTOR);
		expect(css).not.toContain(MEDIA_QUERY);
	});

	it('"media-query" emits only the @media (prefers-contrast: more) branch', () => {
		const css = generate(dbTheme, { highContrast: 'media-query' });

		expect(css).toContain(LAYER_WRAPPER);
		expect(css).toContain(MEDIA_QUERY);
		expect(css).not.toContain(DATA_ATTRIBUTE_SELECTOR);
	});

	it('"none" emits no high-contrast layer at all', () => {
		const css = generate(dbTheme, { highContrast: 'none' });

		expect(css).not.toContain(LAYER_WRAPPER);
		expect(css).not.toContain(MEDIA_QUERY);
		expect(css).not.toContain(DATA_ATTRIBUTE_SELECTOR);
	});

	it('defaults to "both" when highContrast is omitted', () => {
		const explicitBoth = generate(dbTheme, { highContrast: 'both' });
		const defaulted = generate(dbTheme);

		expect(defaulted).toContain(DATA_ATTRIBUTE_SELECTOR);
		expect(defaulted).toContain(MEDIA_QUERY);
		expect(defaulted).toBe(explicitBoth);
	});
});
