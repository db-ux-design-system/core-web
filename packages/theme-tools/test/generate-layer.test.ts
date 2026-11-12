/*
 * Outer cascade-layer wrapping (`GenerateOptions.layer`).
 *
 * The whole generated stylesheet is wrapped in a named `@layer` so a consumer
 * can order the adaptive colors against the DB UX component bundles (compare the
 * `db-ux-adaptive` layer in the showcases). This suite covers the default name,
 * a custom name, and the `false` opt-out — and confirms the wrapping does not
 * disturb the material CSS it contains.
 */
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { DEFAULT_LAYER, generate, loadTheme } from '../src/index.js';

const dbTheme = await loadTheme(
	fileURLToPath(
		new URL('./fixtures/vite-app/theme.tokens.json', import.meta.url)
	)
);

describe('generate(dbTheme) — outer cascade layer', () => {
	it('wraps the whole stylesheet in the default db-ux-adaptive layer', () => {
		const css = generate(dbTheme);

		expect(DEFAULT_LAYER).toBe('db-ux-adaptive');
		expect(css.startsWith('@layer db-ux-adaptive {\n')).toBe(true);
		expect(css.trimEnd().endsWith('}')).toBe(true);
		// The material CSS still lives inside the wrapper.
		expect(css).toContain('[data-adaptive-color="grey"]');
		expect(css).toContain('--db-bg-default');
	});

	it('uses a custom layer name when provided', () => {
		const css = generate(dbTheme, { layer: 'my-adaptive' });

		expect(css.startsWith('@layer my-adaptive {\n')).toBe(true);
		expect(css).not.toContain('@layer db-ux-adaptive {');
		expect(css).toContain('[data-adaptive-color="grey"]');
	});

	it('emits no outer layer when layer is false', () => {
		const css = generate(dbTheme, { layer: false });

		// Not wrapped in the outer named layer.
		expect(css.startsWith('@layer db-ux-adaptive')).toBe(false);
		// The generator's OWN inner sub-layers are still present: the file opens
		// with its `@layer material, material-high-contrast, size;` ordering
		// statement, and the material block follows.
		expect(css.split('\n')[0]).toBe(
			'@layer material, material-high-contrast, size;'
		);
		expect(css).toContain('@layer material {');
	});

	it('wrapping only adds the layer envelope — inner content is unchanged', () => {
		const wrapped = generate(dbTheme, { layer: 'x' });
		const raw = generate(dbTheme, { layer: false });

		// Strip the `@layer x {` opener + trailing `}` and de-indent one tab.
		const unwrapped = wrapped
			.replace(/^@layer x \{\n/, '')
			.replace(/\}\n?$/, '')
			.split('\n')
			.map((line) => (line.startsWith('\t') ? line.slice(1) : line))
			.join('\n');

		expect(unwrapped).toBe(raw);
	});
});
