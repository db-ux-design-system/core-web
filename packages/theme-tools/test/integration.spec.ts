/*
 * Integration tests for both delivery surfaces.
 *
 * Bundler plugin (vite, webpack): each fixture is a real, minimal app (just an
 * `index.html` carrying `data-adaptive-color` / `data-material` attributes) that
 * imports the plugin's virtual CSS module. The test builds the fixture with the
 * real bundler and asserts the EMITTED CSS is optimized: only the detected
 * colors/materials (plus the always-kept baseline) survive.
 *
 * CLI (angular): the Angular builder cannot host the plugin, so the fixture runs
 * the `db-ux-theme-tools` CLI before `ng build` (an npm `prebuild` script) and
 * imports the generated CSS from its global stylesheet. See that describe block.
 *
 * All fixtures are pnpm workspace members (see `pnpm-workspace.yaml`) depending
 * on `@db-ux/core-theme-tools` via `workspace:*`, so the root `pnpm install`
 * already links them — the tests only build. theme-tools must be built first
 * (its compiled `build/` is what the fixtures' plugin/CLI resolve to).
 */
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { beforeAll, describe, expect, it } from 'vitest';

const here = dirname(fileURLToPath(import.meta.url));

/*
 * Each fixture: where it lives and where its built CSS lands. The vite fixture
 * emits a hashed file under `dist/assets`; the webpack fixture emits
 * `dist/main.css`.
 */
const fixtures = [
	{
		name: 'vite',
		path: resolve(here, 'fixtures/vite-app'),
		css: (appPath: string): string => {
			const assets = resolve(appPath, 'dist/assets');
			const file = readdirSync(assets).find((f) => f.endsWith('.css'));
			if (!file) {
				throw new Error('no CSS asset emitted by the vite fixture');
			}
			return readFileSync(resolve(assets, file), 'utf8');
		}
	},
	{
		name: 'webpack',
		path: resolve(here, 'fixtures/webpack-app'),
		css: (appPath: string): string =>
			readFileSync(resolve(appPath, 'dist/main.css'), 'utf8')
	}
];

describe('bundler-plugin integration', () => {
	for (const fixture of fixtures) {
		describe(fixture.name, () => {
			let css = '';

			beforeAll(() => {
				// The workspace install already linked the fixture; just build
				// it with the real bundler via its own package script.
				execSync('pnpm run build', {
					cwd: fixture.path,
					stdio: 'inherit'
				});
				css = fixture.css(fixture.path);
			}, 180_000);

			it('emits the detected colors plus the baseline', () => {
				// Detected in index.html.
				expect(css).toContain('[data-adaptive-color="blue"]');
				expect(css).toContain('[data-adaptive-color="green"]');
				// Always-kept baseline color (the theme defaultColor).
				expect(css).toContain('[data-adaptive-color="grey"]');
			});

			it('drops colors the project does not use', () => {
				for (const unused of [
					'ocean',
					'violet',
					'orange',
					'red',
					'yellow'
				]) {
					expect(css).not.toContain(
						`[data-adaptive-color="${unused}"]`
					);
				}
			});

			it('emits the detected materials plus the baseline', () => {
				expect(css).toContain('[data-material="filled-3"]');
				expect(css).toContain('[data-material="vibrant"]');
				// filled-1 is the always-kept baseline material.
				expect(css).toContain('[data-material="filled-1"]');
			});

			it('drops materials the project does not use', () => {
				for (const unused of [
					'filled-2',
					'inverted',
					'origin',
					'transparent',
					'semi-transparent'
				]) {
					expect(css).not.toContain(`[data-material="${unused}"]`);
				}
			});

			it('emits resolved adaptive material tokens', () => {
				// The generator emits concrete color-mix(light-dark(...)) values.
				expect(css).toContain('--db-bg-default');
				expect(css).toContain('color-mix(in srgb, light-dark(');
			});
		});
	}
});

/*
 * Angular CLI-first flow. Angular's application builder does not host the
 * unplugin, so the supported integration is: run the `db-ux-theme-tools`
 * CLI before the build (here via an npm `prebuild` script) to emit the
 * optimized adaptive CSS, import it from the global stylesheet, then `ng build`.
 *
 * The fixture's config has NO explicit `colors`/`materials` — only a `scan` — so
 * the CLI runs the component-aware Detector against the Angular templates. The
 * app uses `db-notification` / `db-badge` / `db-button` tags plus a literal
 * `data-adaptive-color="violet"`, and excludes `yellow`. We assert on the final
 * `ng build` output (production CSS is minified, so attribute selectors appear
 * UNQUOTED, e.g. `[data-adaptive-color=violet]`).
 */
const angularApp = resolve(here, 'fixtures/angular-app');

describe('angular CLI-first integration', () => {
	let css = '';

	beforeAll(() => {
		// `pnpm run build` runs `prebuild` (the CLI generate) then `ng build`.
		execSync('pnpm run build', { cwd: angularApp, stdio: 'inherit' });

		const browser = resolve(angularApp, 'dist/browser');
		const dist = existsSync(browser)
			? browser
			: resolve(angularApp, 'dist');
		const file = readdirSync(dist).find(
			(f) => f.startsWith('styles') && f.endsWith('.css')
		);
		if (!file) {
			throw new Error('no styles CSS emitted by the angular fixture');
		}
		css = readFileSync(resolve(dist, file), 'utf8');
	}, 300_000);

	it('bundles the CLI-generated adaptive material tokens', () => {
		expect(css).toContain('--db-bg-default');
	});

	it('wraps the generated CSS in the default db-ux-adaptive cascade layer', () => {
		expect(css).toContain('@layer db-ux-adaptive');
	});

	it('includes colors required by the used components (component-aware)', () => {
		// db-button -> brand; db-notification/db-badge -> blue/green/red.
		for (const color of ['brand', 'blue', 'green', 'red']) {
			expect(css).toContain(`[data-adaptive-color=${color}]`);
		}
		// The literal data-adaptive-color in the template.
		expect(css).toContain('[data-adaptive-color=violet]');
		// The always-kept baseline color.
		expect(css).toContain('[data-adaptive-color=grey]');
	});

	it('drops the excluded color even though a used component could render it', () => {
		// `exclude: { colors: ["yellow"] }` — db-notification/db-badge could
		// emit yellow (warning), but the config drops it.
		expect(css).not.toContain('[data-adaptive-color=yellow]');
	});

	it('includes materials required by the used components', () => {
		// db-notification -> filled-2; db-button -> origin/transparent; literal filled-3.
		for (const material of ['filled-2', 'filled-3', 'origin']) {
			expect(css).toContain(`[data-material=${material}]`);
		}
		// Baseline material.
		expect(css).toContain('[data-material=filled-1]');
	});
});
