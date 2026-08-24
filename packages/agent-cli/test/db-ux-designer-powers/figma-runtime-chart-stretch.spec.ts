import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards the RENDERER, not the audit.
 *
 * A dashboard shipped 82px of dead space under a bar graph while the audit reported `valid: true`.
 * The existing tests could not catch it, because they all assert that the AUDIT detects a defect —
 * none asserted that the RENDERER avoids it. `anchorChartsToCardBottom` applied `fillHeight` along
 * the chain from the card down to the graph and then trusted the result, but stretching is a chain
 * of preconditions and any link may refuse: `canFillVertical` correctly declines to fill the main
 * axis of a hugging parent, and a component's internal content SLOT can be that blocker even
 * though the card above it already owns a fixed height.
 *
 * So the renderer now MEASURES the outcome and, if the graph still falls short, distributes the
 * surplus with the mechanism the DB Card already provides — its root ships `SPACE_BETWEEN` so
 * trailing content sticks to the bottom. That needs no stretching at all, only a parent with a
 * height, which a stretched card has by definition.
 */
const RUNTIME = join(
	dirname(fileURLToPath(import.meta.url)),
	'../../db-ux-designer-powers/skills/generate-figma-screen/assets/db-figma-runtime.min.js'
);

type MockNode = Record<string, any>;

let anchorChartsToCardBottom: (root: MockNode) => number;

beforeAll(() => {
	(globalThis as any).figma = {
		variables: {
			getVariableByIdAsync: async () => ({ name: 'bg/basic/level-1' }),
			importVariableByKeyAsync: async () => null
		},
		root: { children: [] }
	};
	anchorChartsToCardBottom = new Function(
		readFileSync(RUNTIME, 'utf8') + ';return EDIT_API;'
	)().anchorChartsToCardBottom;
});

const node = (props: MockNode, children: MockNode[] = []): MockNode => {
	const n: MockNode = { visible: true, ...props, children };
	if (n.y !== undefined && n.height !== undefined)
		n.absoluteBoundingBox = {
			x: n.x ?? 0,
			y: n.y,
			width: n.width ?? 458,
			height: n.height
		};
	for (const child of children) child.parent = n;
	return n;
};

/**
 * The measured FleetFlow chart card: the bento pass stretched the card to 362px, but its content
 * ends 74px above the padded floor. Geometry is static in this harness — exactly the situation the
 * renderer must not accept just because it wrote FILL somewhere.
 */
const stretchedChartCard = () => {
	const bar = (x: number, h: number) =>
		node({
			type: 'RECTANGLE',
			name: 'Chart bar',
			x,
			y: 100 + (156 - h),
			width: 99,
			height: h
		});
	const column = (x: number, h: number) =>
		node(
			{
				type: 'INSTANCE',
				name: '🧪 Container',
				x,
				y: 100,
				width: 99,
				height: 176
			},
			[
				node(
					{
						type: 'SLOT',
						name: 'Slot',
						layoutMode: 'VERTICAL',
						x,
						y: 100,
						width: 99,
						height: 176
					},
					[bar(x, h)]
				)
			]
		);
	const chartRowSlot = node(
		{
			type: 'SLOT',
			name: 'Slot',
			layoutMode: 'HORIZONTAL',
			x: 0,
			y: 100,
			width: 434,
			height: 176
		},
		[column(0, 84), column(111, 112), column(222, 138), column(333, 156)]
	);
	const chartRow = node(
		{
			type: 'INSTANCE',
			name: '🧪 Container',
			x: 0,
			y: 100,
			width: 434,
			height: 176
		},
		[chartRowSlot]
	);
	const titleGroup = node({
		type: 'INSTANCE',
		name: '🧪 Heading (Concept)',
		x: 0,
		y: 12,
		width: 434,
		height: 60
	});
	// The container that owns BOTH the title and the graph — where the surplus belongs.
	const innerSlot = node(
		{
			type: 'SLOT',
			name: 'Slot',
			layoutMode: 'VERTICAL',
			primaryAxisSizingMode: 'AUTO',
			primaryAxisAlignItems: 'MIN',
			x: 0,
			y: 12,
			width: 434,
			height: 264
		},
		[titleGroup, chartRow]
	);
	const inner = node(
		{
			type: 'INSTANCE',
			name: '🧪 Container',
			x: 0,
			y: 12,
			width: 434,
			height: 264
		},
		[innerSlot]
	);
	const childrenSlot = node(
		{
			type: 'SLOT',
			name: '📦 Children',
			layoutMode: 'VERTICAL',
			primaryAxisSizingMode: 'AUTO',
			x: 0,
			y: 12,
			width: 434,
			height: 264
		},
		[inner]
	);
	const card = node(
		{
			type: 'INSTANCE',
			name: 'Card → (Def) Level 1 (Beta)',
			layoutMode: 'VERTICAL',
			primaryAxisSizingMode: 'FIXED',
			layoutSizingVertical: 'FILL',
			paddingBottom: 12,
			x: 0,
			y: 0,
			width: 458,
			height: 362
		},
		[childrenSlot]
	);
	const root = node({ type: 'FRAME', name: 'Dashboard', y: 0, height: 400 }, [
		card
	]);
	return { root, card, innerSlot, chartRowSlot };
};

describe('chart in a stretched card', () => {
	it('distributes the surplus so the graph reaches the card floor', () => {
		const { root, innerSlot } = stretchedChartCard();
		anchorChartsToCardBottom(root);
		// Title stays at the top, graph moves to the floor — that is SPACE_BETWEEN, not MAX.
		expect(innerSlot.primaryAxisAlignItems).toBe('SPACE_BETWEEN');
	});

	it('still seats every column of the row on one baseline', () => {
		const { root, chartRowSlot } = stretchedChartCard();
		anchorChartsToCardBottom(root);
		expect(chartRowSlot.counterAxisAlignItems).toBe('MAX');
	});

	it('leaves a hugging card untouched', () => {
		// A hugging card is already exactly as tall as its content: there is no surplus, and
		// forcing the chain would collapse the block and paint the bars over the panel title.
		const { root, card, innerSlot } = stretchedChartCard();
		card.layoutSizingVertical = 'HUG';
		anchorChartsToCardBottom(root);
		expect(innerSlot.primaryAxisAlignItems).toBe('MIN');
	});
});
