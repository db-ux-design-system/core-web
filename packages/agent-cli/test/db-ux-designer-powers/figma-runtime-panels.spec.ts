import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards three panel-level contracts that all failed SILENTLY on a real screen set — the audit
 * returned `valid: true` while the frames were visibly wrong:
 *
 *  1. `nested-card` — a Card wrapped around Cards doubles border and elevation. A group of KPI
 *     cards belongs under a titled AREA, not inside another card.
 *  2. `table-header-arity` — the column-drift check only ever compared rows that already had the
 *     SAME cell count, so a header with 5 cells above 3-cell data rows was never even compared:
 *     two declared columns had no values under them and the audit stayed green.
 *  3. Row detection must not depend on `layoutMode` ALONE. That property is not reliably readable
 *     on the instance-internal SLOT nodes rows actually live in, and a check gated on it returns
 *     early and reports nothing — which is how a left-packed stepper shipped.
 *
 * The bundle is a SCRIPT (no exports) expecting a `figma` global, loaded the way the store-once
 * loader does it, exposing auditTree through the hardened helper toolkit.
 */
const RUNTIME = join(
	dirname(fileURLToPath(import.meta.url)),
	'../../db-ux-designer-powers/skills/generate-figma-screen/assets/db-figma-runtime.min.js'
);

type MockNode = Record<string, any>;

let auditTree: (
	root: MockNode,
	opts?: Record<string, unknown>
) => Promise<{ valid: boolean; violations: { type: string }[] }>;

beforeAll(() => {
	(globalThis as any).figma = {
		variables: {
			getVariableByIdAsync: async () => ({ name: 'bg/basic/level-1' }),
			importVariableByKeyAsync: async () => null
		},
		root: { children: [] }
	};
	auditTree = new Function(
		readFileSync(RUNTIME, 'utf8') + ';return EDIT_API;'
	)().auditTree;
});

const node = (props: MockNode, children: MockNode[] = []): MockNode => {
	const n: MockNode = { visible: true, ...props, children };
	if (n.y !== undefined && n.height !== undefined)
		n.absoluteBoundingBox = {
			x: n.x ?? 0,
			y: n.y,
			width: n.width ?? 1024,
			height: n.height
		};
	if (n.type === 'INSTANCE')
		n.getMainComponentAsync = async () => ({ remote: true });
	for (const child of children) child.parent = n;
	return n;
};

const card = (children: MockNode[], props: MockNode = {}): MockNode =>
	node(
		{
			type: 'INSTANCE',
			name: 'Card → (Def) Level 1 (Beta)',
			y: 0,
			height: 200,
			...props
		},
		[
			node(
				{ type: 'SLOT', name: '📦 Children', y: 0, height: 200 },
				children
			)
		]
	);

const types = async (root: MockNode, opts: Record<string, unknown> = {}) =>
	(await auditTree(root, { module: true, ...opts })).violations.map(
		(v) => v.type
	);

describe('nested card', () => {
	it('reports a Card wrapped around Cards', async () => {
		const root = node(
			{ type: 'FRAME', name: 'Screen', y: 0, height: 400 },
			[card([card([], { name: 'Card → Level 2 (Beta)' })])]
		);
		expect(await types(root)).toContain('nested-card');
	});

	it('leaves sibling cards alone', async () => {
		const root = node(
			{ type: 'FRAME', name: 'Screen', y: 0, height: 400 },
			[card([]), card([])]
		);
		expect(await types(root)).not.toContain('nested-card');
	});
});

describe('table header arity', () => {
	const cell = (x: number) =>
		node({
			type: 'INSTANCE',
			name: '🧪 Text (Concept)',
			x,
			y: 0,
			width: 100,
			height: 20
		});
	// A row whose cells are evenly spaced, so the drift check itself stays quiet.
	const row = (count: number) =>
		node({ type: 'INSTANCE', name: '🧪 Container', y: 0, height: 44 }, [
			node(
				{
					type: 'SLOT',
					name: 'Slot',
					layoutMode: 'HORIZONTAL',
					primaryAxisAlignItems: 'MIN',
					y: 0,
					height: 20,
					width: 1024
				},
				Array.from({ length: count }, (_, i) => cell(i * 100))
			)
		]);

	it('reports a header with more columns than its data rows', async () => {
		const root = node(
			{ type: 'FRAME', name: 'Screen', y: 0, height: 400 },
			[card([row(5), row(3), row(3), row(3)])]
		);
		expect(await types(root)).toContain('table-header-arity');
	});

	it('accepts a header that matches its data rows', async () => {
		const root = node(
			{ type: 'FRAME', name: 'Screen', y: 0, height: 400 },
			[card([row(4), row(4), row(4), row(4)])]
		);
		expect(await types(root)).not.toContain('table-header-arity');
	});
});

describe('row distribution without a readable layoutMode', () => {
	// The stepper items: Containers side by side. The SLOT deliberately carries NO layoutMode and
	// NO primaryAxisAlignItems — exactly the case that used to make the check skip the row.
	const item = (x: number) =>
		node({
			type: 'INSTANCE',
			name: '🧪 Container',
			x,
			y: 0,
			width: 80,
			height: 20
		});
	const stepperRow = (lefts: number[]) =>
		node({ type: 'INSTANCE', name: 'Section (Beta)', y: 0, height: 60 }, [
			node({ type: 'SLOT', name: '📦 Children', y: 0, height: 60 }, [
				node(
					{
						type: 'SLOT',
						name: 'Slot',
						x: 0,
						y: 0,
						width: 1024,
						height: 20
					},
					lefts.map((x) => item(x))
				)
			])
		]);

	it('reports a left-packed stepper even though the row declares nothing', async () => {
		// Items at 0/96/192 of 1024: flush left, far from the right edge — packed, not spread.
		const root = node({ type: 'FRAME', name: 'Step', y: 0, height: 400 }, [
			stepperRow([0, 96, 192])
		]);
		expect(await types(root, { pageType: 'process' })).toContain(
			'stepper-not-spread'
		);
	});

	it('accepts a stepper distributed edge to edge', async () => {
		// Items at 0/472/944 of 1024 — first flush left, last flush right, large inner gaps.
		const root = node({ type: 'FRAME', name: 'Step', y: 0, height: 400 }, [
			stepperRow([0, 472, 944])
		]);
		expect(await types(root, { pageType: 'process' })).not.toContain(
			'stepper-not-spread'
		);
	});
});
