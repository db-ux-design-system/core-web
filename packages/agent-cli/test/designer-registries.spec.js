import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

/* Regression tests for the designer power's page-type registries.
 *
 * WHY THESE EXIST
 *   Every rule locked in here was already written down somewhere — in a guideline, in a block
 *   `purpose`, or in an audit rule — and still shipped broken, because nothing compared the
 *   CAPTURED block against the catalog template it claims to reproduce. Two examples that cost a
 *   full screen set:
 *     - `process.stepper` / `process.navigation` lost their edge-to-edge distribution during
 *       capture (`align: "left"` instead of spread), so the registered block CONTRADICTED the
 *       audit rule that demanded spread.
 *     - `dashboard.list-row` carried its own `padding` while living in a padded Card, which
 *       produced a doubled indentation on every list panel.
 *   The validator checks the registry SHAPE; these tests check its CONTENT decisions.
 */

const here = dirname(fileURLToPath(import.meta.url));
const registries = join(
	here,
	'..',
	'db-ux-designer-powers',
	'skills',
	'generate-figma-screen',
	'assets',
	'registries'
);

const load = (pageType, file) =>
	JSON.parse(
		readFileSync(join(registries, pageType, `${file}.json`), 'utf8')
	);

// Expand `$ref`s so a pattern can be inspected as the node tree it actually renders.
const expand = (node, blocks, seen = new Set()) => {
	if (Array.isArray(node)) return node.map((n) => expand(n, blocks, seen));
	if (!node || typeof node !== 'object') return node;
	if (typeof node.$ref === 'string') {
		if (seen.has(node.$ref)) throw new Error(`cyclic $ref: ${node.$ref}`);
		const block = blocks[node.$ref];
		if (!block) throw new Error(`unknown $ref: ${node.$ref}`);
		return expand(block.plan, blocks, new Set([...seen, node.$ref]));
	}
	const out = {};
	for (const [key, value] of Object.entries(node))
		out[key] = expand(value, blocks, seen);
	return out;
};

describe('process catalog matches the Figma templates', () => {
	const { blocks } = load('process', 'blocks');

	it('distributes the stepper edge to edge (template 1716:21928)', () => {
		// Items measured at 0/310/619/940 of 1024 — a left-packed row is a capture error.
		expect(blocks['process.stepper'].plan.spread).toBe(true);
	});

	it('distributes the Back/Next row edge to edge (template 1716:21930)', () => {
		// Ghost at 0, Brand at 941 of 1024: the row spans the column, it does not hug.
		expect(blocks['process.navigation'].plan.spread).toBe(true);
		expect(blocks['process.navigation'].plan.hugWidth).toBeUndefined();
	});

	it('offers all three stepper item states', () => {
		expect(Object.keys(blocks)).toEqual(
			expect.arrayContaining([
				'process.stepper-step-done',
				'process.stepper-step-active',
				'process.stepper-step'
			])
		);
	});

	it('marks done with check, active with pen, and numbers the pending steps', () => {
		const iconOf = (id) =>
			blocks[id].plan.children.find((c) => c.type === 'Icon')?.name;
		expect(iconOf('process.stepper-step-done')).toBe('check');
		expect(iconOf('process.stepper-step-active')).toBe('pen');

		const pending = blocks['process.stepper-step'].plan.children[0];
		expect(pending.type).toBe('Body');
		// The number prefix is what distinguishes a not-yet-reached step from the active one.
		expect(pending.content).toMatch(/^<\d+\./);
		expect(pending.fills).toBe('color.text.muted');
	});

	it('uses exactly one active item in the stepper row', () => {
		const refs = blocks['process.stepper'].plan.children.map((c) => c.$ref);
		expect(
			refs.filter((r) => r === 'process.stepper-step-active')
		).toHaveLength(1);
	});
});

describe('dashboard rows keep panel and row padding separate', () => {
	const { blocks } = load('dashboard', 'blocks');

	it('gives list rows no padding of their own', () => {
		// They live in a Card with spacing "small" (12px) — row padding would double the inset.
		expect(blocks['dashboard.list-row'].plan.padding).toBeUndefined();
		expect(
			blocks['dashboard.list-row-stacked'].plan.padding
		).toBeUndefined();
	});

	it('keeps padding on the rows of the full-bleed table card', () => {
		// The table Card uses spacing "none" so its dividers reach the edge; there the ROW owns
		// the inset. Losing this would make the table content touch the card border.
		expect(blocks['dashboard.table-row'].plan.padding).toBe('sm');
		expect(blocks['dashboard.table-header-row'].plan.padding).toBe('sm');
		expect(blocks['dashboard.panel-title-row'].plan.padding).toBe('sm');
	});

	it('right-aligns the status badge so it cannot float mid-row', () => {
		expect(blocks['dashboard.badge-cell'].plan.align).toBe('right');
	});
});

describe('dashboard table columns line up', () => {
	const { blocks } = load('dashboard', 'blocks');
	const { patterns } = load('dashboard', 'patterns');

	it('gives the header row exactly as many cells as every data row', () => {
		const card = expand(
			patterns['dashboard.table'].plan,
			blocks
		).children.find((c) => c.type === 'Card');
		const rows = card.children.filter(
			(c) => c.type === 'ContainerHorizontal'
		);
		// The first row is the header; the rest are data rows (the title row is vertical).
		const counts = rows.map((r) => r.children.length);
		expect(counts.length).toBeGreaterThanOrEqual(3);
		for (const count of counts) expect(count).toBe(counts[0]);
	});

	it('does not stack a cell in a table row', () => {
		// A stacked name+meta cell is the LIST shape. Combined with a header it is the mix-up
		// that leaves declared columns without values.
		const row = expand(blocks['dashboard.table-row'].plan, blocks);
		const stacked = row.children.filter(
			(c) =>
				c.type === 'ContainerVertical' &&
				(c.children ?? []).filter((k) => k.type === 'Body').length > 1
		);
		expect(stacked).toHaveLength(0);
	});
});
