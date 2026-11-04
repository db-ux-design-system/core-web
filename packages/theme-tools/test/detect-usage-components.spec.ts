/*
 * Component-aware detection + the `exclude` escape hatch in `detectUsage`.
 *
 * Beyond literal `color=` / `data-adaptive-color=` scanning, the detector also
 * recognizes USED DB UX components (by JSX tag, web-component tag, or named
 * import) and unions in the colors/materials each component can emit from its
 * own template (`COMPONENT_REQUIREMENTS`). That is what lets a semantic-only
 * usage such as `<DBNotification semantic="critical">` — which renders `red`
 * with no color attribute in the source — still pull `red` into the output.
 *
 * `exclude` then subtracts colors/materials a consumer does not want even when
 * a detected component could render them (the DBNotification informational/blue
 * example). The required baseline is re-added by `generate`, so these tests
 * only assert on the detector's raw sets.
 */
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { detectUsage } from '../src/detector/detect-usage.js';

let root: string;

/* Write a single source file into a throwaway project root per test. */
const writeSource = (filename: string, code: string): void => {
	writeFileSync(join(root, filename), code, 'utf-8');
};

beforeEach(() => {
	root = mkdtempSync(join(tmpdir(), 'theme-tools-detect-'));
});

afterEach(() => {
	rmSync(root, { recursive: true, force: true });
});

describe('detectUsage — component-aware detection', () => {
	it('unions in a component’s colors/materials from a JSX tag with no literal color', async () => {
		// A critical notification renders red; informational renders blue — the
		// manifest keeps every color the component can emit, none written here.
		writeSource(
			'App.tsx',
			`export const App = () => <DBNotification semantic="critical">Boom</DBNotification>;`
		);

		const { colors, materials } = await detectUsage(root, ['**/*.tsx']);

		expect([...colors].sort()).toEqual(['blue', 'green', 'red', 'yellow']);
		// DBNotification defaults its material to filled-2.
		expect([...materials]).toContain('filled-2');
	});

	it('detects the web-component tag form', async () => {
		writeSource(
			'index.html',
			`<db-badge data-semantic="successful"></db-badge>`
		);

		const { colors, materials } = await detectUsage(root, ['**/*.html']);

		// Badge can emit grey/blue/red/yellow/green and filled-1/vibrant.
		expect([...colors].sort()).toEqual([
			'blue',
			'green',
			'grey',
			'red',
			'yellow'
		]);
		expect([...materials].sort()).toEqual(['filled-1', 'vibrant']);
	});

	it('detects a named import from a framework package', async () => {
		writeSource(
			'main.ts',
			`import { DBTag, DBButton } from '@db-ux/react-core-components';`
		);

		const { colors, materials } = await detectUsage(root, ['**/*.ts']);

		// Tag -> blue/green/red/yellow + transparent; Button -> brand + materials.
		expect([...colors].sort()).toContain('brand');
		expect([...colors].sort()).toContain('blue');
		expect([...materials]).toContain('origin');
		expect([...materials]).toContain('transparent');
	});

	it('ignores unknown components', async () => {
		writeSource('App.tsx', `const x = <DBTotallyMadeUp />;`);

		const { colors, materials } = await detectUsage(root, ['**/*.tsx']);

		expect(colors.size).toBe(0);
		expect(materials.size).toBe(0);
	});

	it('still records literal color/material attributes alongside components', async () => {
		writeSource(
			'App.tsx',
			`const x = <div data-adaptive-color="violet" data-material="origin" />;`
		);

		const { colors, materials } = await detectUsage(root, ['**/*.tsx']);

		expect([...colors]).toContain('violet');
		expect([...materials]).toContain('origin');
	});
});

describe('detectUsage — exclude escape hatch', () => {
	it('removes an excluded color a detected component would otherwise add', async () => {
		writeSource(
			'App.tsx',
			`export const App = () => <DBNotification>hi</DBNotification>;`
		);

		const { colors } = await detectUsage(root, ['**/*.tsx'], undefined, {
			colors: ['blue']
		});

		// blue (informational) dropped; the other notification colors remain.
		expect([...colors]).not.toContain('blue');
		expect([...colors]).toContain('red');
		expect([...colors]).toContain('green');
	});

	it('removes an excluded material', async () => {
		writeSource(
			'App.tsx',
			`export const App = () => <DBButton>press</DBButton>;`
		);

		const { materials } = await detectUsage(root, ['**/*.tsx'], undefined, {
			materials: ['transparent']
		});

		expect([...materials]).not.toContain('transparent');
		// Button's other materials survive.
		expect([...materials]).toContain('origin');
	});

	it('exclude also trims a forceInclude value (last word wins)', async () => {
		writeSource('empty.tsx', `export const Empty = () => null;`);

		const { colors } = await detectUsage(
			root,
			['**/*.tsx'],
			{ colors: new Set(['blue', 'red']) },
			{ colors: ['blue'] }
		);

		expect([...colors].sort()).toEqual(['red']);
	});
});
