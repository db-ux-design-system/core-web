/*
 * `loadTheme` — Style Dictionary (DTCG) token parsing.
 *
 * `loadTheme` reads a `theme.tokens.json` (the `db` prefix, DTCG `$type`/
 * `$value` leaves) and converts it to the generator's `Theme`. This suite
 * covers the conversion rules — `neutral` -> `grey`, alias colors skipped,
 * non-color groups ignored, palette/origin/on-origin mapping — plus the error
 * cases that must reject rather than emit a partial theme.
 */
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { loadTheme } from '../src/load-theme.js';
import { ThemeValidationError } from '../src/types/generate.js';
import type { Theme } from '../src/types/theme.js';

const tokensFixture = fileURLToPath(
	new URL('./fixtures/db-tokens.json', import.meta.url)
);

let tmp: string;

/** Write an ad-hoc tokens file in a temp dir and return its path. */
const writeTokens = (name: string, data: unknown): string => {
	const path = join(tmp, name);
	writeFileSync(path, JSON.stringify(data), 'utf8');
	return path;
};

beforeAll(() => {
	tmp = mkdtempSync(join(tmpdir(), 'theme-tools-load-'));
});

afterAll(() => {
	rmSync(tmp, { recursive: true, force: true });
});

describe('loadTheme — token conversion', () => {
	let theme: Theme;

	beforeAll(async () => {
		theme = await loadTheme(tokensFixture);
	});

	it('maps the `neutral` token to the `grey` baseline color', () => {
		expect(Object.keys(theme.colors)).toContain('grey');
		expect(Object.keys(theme.colors)).not.toContain('neutral');
		// grey step 0 light channel is the neutral.0 value; dark is the mirror (14).
		expect(theme.colors.grey[0]).toEqual(['#000000', '#ffffff']);
	});

	it('keeps concrete colors with expanded palette + origin', () => {
		expect(Object.keys(theme.colors)).toContain('blue');
		// origin-default is [light.default, dark.default].
		expect(theme.colors.blue['origin-default']).toEqual([
			'#1455c0',
			'#1455c0'
		]);
		// on-origin-default is [light.default, dark.default].
		expect(theme.colors.blue['on-origin-default']).toEqual([
			'#f8f9ff',
			'#f8f9ff'
		]);
	});

	it('skips alias colors (reference $value)', () => {
		expect(Object.keys(theme.colors)).not.toContain('informational');
	});

	it('ignores non-color token groups (border radii)', () => {
		expect(Object.keys(theme.colors)).not.toContain('border');
	});

	it('exposes exactly the two concrete colors from the fixture', () => {
		expect(Object.keys(theme.colors).sort()).toEqual(['blue', 'grey']);
	});
});

describe('loadTheme — error handling', () => {
	it('rejects when the file cannot be read', async () => {
		await expect(
			loadTheme(join(tmp, 'does-not-exist.json'))
		).rejects.toBeInstanceOf(ThemeValidationError);
	});

	it('rejects invalid JSON', async () => {
		const path = join(tmp, 'bad.json');
		writeFileSync(path, '{ not json', 'utf8');
		await expect(loadTheme(path)).rejects.toThrow(/not valid JSON/);
	});

	it('rejects when the `db` group is missing', async () => {
		const path = writeTokens('no-db.json', { other: {} });
		await expect(loadTheme(path)).rejects.toThrow(/"db"/);
	});

	it('rejects when no concrete colors remain after filtering', async () => {
		// Only an alias color + a non-color group: nothing concrete survives.
		const path = writeTokens('only-alias.json', {
			db: {
				informational: { 0: { $type: 'color', $value: '{db.blue.0}' } },
				border: {
					radius: { sm: { $type: 'dimension', $value: '1rem' } }
				}
			}
		});
		await expect(loadTheme(path)).rejects.toThrow(/no concrete colors/);
	});

	it('rejects a concrete color missing palette steps, naming the gap', async () => {
		const path = writeTokens('incomplete.json', {
			db: {
				blue: {
					0: { $type: 'color', $value: '#010d29' }
					// steps 1..14 + origin + on.origin all missing
				}
			}
		});
		await expect(loadTheme(path)).rejects.toThrow(/blue/);
	});
});
