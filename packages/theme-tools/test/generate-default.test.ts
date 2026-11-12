/*
 * Output gate for the core generator.
 *
 * Loads the DB palettes from the shared Style Dictionary token fixture (the
 * same `theme.tokens.json` the bundler fixtures use) via `loadTheme`, then
 * asserts `generate` produces the committed baseline CSS. The palettes are NOT
 * part of the shipped package source — the color input always comes from an
 * external theme file — so this keeps the gate self-contained without a
 * baked-in palette.
 *
 * The generator emits compact CSS; the committed baseline is Prettier-formatted
 * (the real pipeline prettifies afterward), so the test prettifies the output
 * before comparing.
 */
import { fileURLToPath } from 'node:url';

import prettier from 'prettier';
import { describe, expect, it } from 'vitest';

import { generate, loadTheme } from '../src/index.js';

const dbTheme = await loadTheme(
	fileURLToPath(
		new URL('./fixtures/vite-app/theme.tokens.json', import.meta.url)
	)
);

describe('generate(dbTheme) — output gate', () => {
	it('matches the committed baseline after prettifying', async () => {
		// `layer: false` keeps the raw, un-layered matrix so this gate stays a
		// byte-for-byte check of the material CSS itself; the outer-layer
		// wrapping is covered by `generate-layer.test.ts`.
		const css = await prettier.format(generate(dbTheme, { layer: false }), {
			parser: 'css',
			useTabs: true,
			tabWidth: 4
		});

		const baselinePath = fileURLToPath(
			new URL('./__snapshots__/generated-colors.css', import.meta.url)
		);

		await expect(css).toMatchFileSnapshot(baselinePath);
	}, 30_000);
});
