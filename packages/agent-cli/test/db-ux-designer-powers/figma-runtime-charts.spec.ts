import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards the chart contract of the Figma render runtime: a bar graph is read against ONE
 * baseline that sits on the FLOOR of its panel. The runtime enforces this after every render
 * and edit (anchorChartsToCardBottom) and the audit rejects a graph that violates it, so a
 * regression here would silently ship top-aligned or floating bars again.
 *
 * The bundle is a SCRIPT (no exports) that expects a `figma` global, exactly as it runs inside
 * use_figma. It is loaded the same way the store-once loader does and its hardened helper
 * toolkit (EDIT_API) is returned, which is what exposes both functions under test.
 */
const RUNTIME = join(
	dirname(fileURLToPath(import.meta.url)),
	'../../db-ux-designer-powers/skills/generate-figma-screen/assets/db-figma-runtime.min.js'
);

type MockNode = Record<string, any>;

let anchorChartsToCardBottom: (root: MockNode) => number;
let fillHeight: (node: MockNode) => boolean;
let canFillVertical: (node: MockNode) => boolean;
let rowTextHugIndices: (planNode: Record<string, unknown>) => number[];
let rowCellFillIndices: (planNode: Record<string, unknown>) => number[];
let applyProps: (inst: MockNode, map: Record<string, unknown>) => Promise<void>;
let auditTree: (
	root: MockNode,
	opts?: Record<string, unknown>
) => Promise<{ valid: boolean; violations: { type: string }[] }>;

beforeAll(() => {
	(globalThis as any).figma = {
		variables: {
			getVariableByIdAsync: async () => null,
			importVariableByKeyAsync: async () => null
		},
		root: { children: [] }
	};
	const api = new Function(
		readFileSync(RUNTIME, 'utf8') + ';return EDIT_API;'
	)();
	anchorChartsToCardBottom = api.anchorChartsToCardBottom;
	fillHeight = api.fillHeight;
	canFillVertical = api.canFillVertical;
	rowTextHugIndices = api.rowTextHugIndices;
	rowCellFillIndices = api.rowCellFillIndices;
	applyProps = api.applyProps;
	auditTree = api.auditTree;
});

/**
 * Build a mock Figma node: wires parents, `findOne` and the absolute box the audit measures.
 *
 * `layoutSizingVertical` is a real accessor because the runtime's fill guard reads the PARENT's
 * sizing mode before stretching a child, and Figma keeps the two in sync: a node that FILLs (or
 * is FIXED) has a resolved height, so its own axis flips to FIXED and its children may fill in
 * turn — that is what makes an outside-in fill chain possible. A plain data property would let a
 * chain "succeed" in the test that collapses on canvas.
 */
const node = (props: MockNode, children: MockNode[] = []): MockNode => {
	const n: MockNode = { visible: true, ...props, children };
	let vertical: string | undefined = props.layoutSizingVertical;
	Object.defineProperty(n, 'layoutSizingVertical', {
		configurable: true,
		enumerable: true,
		get: () => vertical,
		set: (value: string) => {
			vertical = value;
			const resolved = value === 'HUG' ? 'AUTO' : 'FIXED';
			if (n.layoutMode === 'VERTICAL') n.primaryAxisSizingMode = resolved;
			else if (n.layoutMode === 'HORIZONTAL')
				n.counterAxisSizingMode = resolved;
		}
	});
	if (vertical !== undefined) n.layoutSizingVertical = vertical;
	if (n.y !== undefined && n.height !== undefined)
		n.absoluteBoundingBox = {
			x: n.x ?? 0,
			y: n.y,
			width: n.width ?? 100,
			height: n.height
		};
	if (n.type === 'INSTANCE')
		n.getMainComponentAsync = async () => ({ remote: true });
	n.findOne = (predicate: (x: MockNode) => boolean): MockNode | null => {
		const walk = (current: MockNode): MockNode | null => {
			for (const child of current.children ?? []) {
				if (predicate(child)) return child;
				const hit = walk(child);
				if (hit) return hit;
			}
			return null;
		};
		return walk(n);
	};
	for (const child of children) child.parent = n;
	return n;
};

/**
 * A canonical chart panel: Card → content Container → [title, chart row → 4 columns of
 * bar + caption]. `barBottoms` and `captionBottom` are absolute edges, so a test can express
 * staggered bars or a graph floating above the card floor.
 */
const chartPanel = ({
	barBottoms,
	captionBottom,
	trailingContent = false,
	cardStretched = true
}: {
	barBottoms: number[];
	captionBottom: number;
	trailingContent?: boolean;
	/**
	 * Was the card STRETCHED by the equal-heights pass (it owns spare height the graph can grow
	 * into) or does it HUG its content (nothing to grow into — stretching would collapse the
	 * block to 0px and paint the bars over the panel title)?
	 */
	cardStretched?: boolean;
}) => {
	const columns = barBottoms.map((bottom, index) =>
		node(
			{
				type: 'INSTANCE',
				name: '🧪 Container',
				layoutMode: 'VERTICAL',
				layoutSizingVertical: 'HUG',
				y: 0,
				height: 160
			},
			[
				node(
					{
						type: 'SLOT',
						name: 'Slot',
						layoutMode: 'VERTICAL',
						layoutSizingVertical: 'HUG',
						primaryAxisAlignItems: 'MIN',
						y: 0,
						height: 160
					},
					[
						node({
							type: 'RECTANGLE',
							name: 'Chart bar',
							layoutSizingHorizontal: 'FILL',
							y: bottom - 72,
							height: 72
						}),
						node({
							type: 'INSTANCE',
							name: '🧪 Text (Concept)',
							y: captionBottom - 20,
							height: 20,
							characters: `Day ${index + 1}`
						})
					]
				)
			]
		)
	);

	const chartRow = node(
		{
			type: 'INSTANCE',
			name: '🧪 Container',
			layoutMode: 'VERTICAL',
			layoutSizingVertical: 'HUG',
			y: 0,
			height: 160
		},
		[
			node(
				{
					type: 'SLOT',
					name: 'Slot',
					layoutMode: 'HORIZONTAL',
					layoutSizingVertical: 'HUG',
					counterAxisAlignItems: 'MIN',
					y: 0,
					height: 160
				},
				columns
			)
		]
	);

	const contentChildren: MockNode[] = [
		node({
			type: 'INSTANCE',
			name: '🧪 Heading (Concept)',
			y: 12,
			height: 32
		}),
		chartRow
	];
	if (trailingContent)
		contentChildren.push(
			node({
				type: 'INSTANCE',
				name: 'Link → (Def) Internal',
				y: 300,
				height: 24
			})
		);

	const card = node(
		{
			type: 'INSTANCE',
			name: 'Card → (Def) Level 1 (Beta)',
			layoutMode: 'VERTICAL',
			// A stretched card has a height handed to it by the grid cell; a hugging card does not.
			layoutSizingVertical: cardStretched ? 'FILL' : 'HUG',
			paddingTop: 12,
			paddingBottom: 12,
			y: 0,
			height: 342
		},
		[
			node(
				{
					type: 'SLOT',
					name: '📦 Children',
					layoutMode: 'VERTICAL',
					layoutSizingVertical: 'HUG',
					y: 12,
					height: 318
				},
				[
					node(
						{
							type: 'INSTANCE',
							name: '🧪 Container',
							layoutMode: 'VERTICAL',
							layoutSizingVertical: 'HUG',
							y: 12,
							height: 318
						},
						[
							node(
								{
									type: 'SLOT',
									name: 'Slot',
									layoutMode: 'VERTICAL',
									layoutSizingVertical: 'HUG',
									itemSpacing: 12,
									y: 12,
									height: 318
								},
								contentChildren
							)
						]
					)
				]
			)
		]
	);

	const root = node(
		{
			type: 'FRAME',
			name: 'Example Operations Dashboard',
			y: 0,
			height: 807
		},
		[card]
	);
	return { root, card, chartRow, columns };
};

const typesOf = async (root: MockNode) =>
	(await auditTree(root, { pageType: 'dashboard' })).violations.map(
		(v) => v.type
	);

describe('chart baseline audit', () => {
	it('accepts bars that share one baseline on the card floor', async () => {
		const { root } = chartPanel({
			barBottoms: [302, 302, 302, 302],
			captionBottom: 330
		});
		expect(await typesOf(root)).not.toContain('chart-baseline');
		expect(await typesOf(root)).not.toContain('chart-not-bottom-anchored');
	});

	it('reports staggered bar bottoms', async () => {
		const { root } = chartPanel({
			barBottoms: [302, 290, 302, 274],
			captionBottom: 330
		});
		expect(await typesOf(root)).toContain('chart-baseline');
	});

	it('reports dead space between the graph and the card floor', async () => {
		const { root } = chartPanel({
			barBottoms: [222, 222, 222, 222],
			captionBottom: 250
		});
		expect(await typesOf(root)).toContain('chart-not-bottom-anchored');
	});

	it('does not demand the floor when content follows the graph', async () => {
		const { root } = chartPanel({
			barBottoms: [222, 222, 222, 222],
			captionBottom: 250,
			trailingContent: true
		});
		expect(await typesOf(root)).not.toContain('chart-not-bottom-anchored');
	});
});

/**
 * The sizing guard itself. Figma does not reject a main-axis FILL inside a hugging parent, it just
 * hands the child no height — so the runtime has to refuse the write up front. Cross-axis
 * stretching (vertical inside a HORIZONTAL row) stays allowed: it reaches the tallest sibling.
 */
describe('vertical fill guard', () => {
	const child = (parentProps: MockNode) =>
		node(parentProps, [node({ type: 'INSTANCE', name: 'child' })])
			.children[0];

	it('refuses to stretch inside a hugging vertical parent', () => {
		const target = child({
			type: 'FRAME',
			name: 'hugging column',
			layoutMode: 'VERTICAL',
			layoutSizingVertical: 'HUG'
		});
		expect(canFillVertical(target)).toBe(false);
		expect(fillHeight(target)).toBe(false);
		expect(target.layoutSizingVertical).toBeUndefined();
	});

	it('stretches inside a vertical parent that owns a height', () => {
		const target = child({
			type: 'FRAME',
			name: 'fixed column',
			layoutMode: 'VERTICAL',
			layoutSizingVertical: 'FIXED'
		});
		expect(canFillVertical(target)).toBe(true);
		expect(fillHeight(target)).toBe(true);
		expect(target.layoutSizingVertical).toBe('FILL');
	});

	it('stretches on the cross axis of a hugging horizontal row', () => {
		const target = child({
			type: 'FRAME',
			name: 'hugging row',
			layoutMode: 'HORIZONTAL',
			layoutSizingVertical: 'HUG'
		});
		expect(fillHeight(target)).toBe(true);
		expect(target.layoutSizingVertical).toBe('FILL');
	});

	it('reports a node that was collapsed by a manual fill', async () => {
		const collapsed = node({
			type: 'INSTANCE',
			name: '🧪 Container',
			layoutSizingVertical: 'FILL',
			y: 0,
			height: 1
		});
		const root = node(
			{
				type: 'FRAME',
				name: 'Screen',
				layoutMode: 'VERTICAL',
				primaryAxisSizingMode: 'AUTO',
				y: 0,
				height: 40
			},
			[collapsed]
		);
		const types = (await auditTree(root, { module: true })).violations.map(
			(v) => v.type
		);
		expect(types).toContain('collapsed-fill-height');
	});
});

describe('anchorChartsToCardBottom', () => {
	it('bottom-aligns the columns and grows the block into the card height', () => {
		const { root, chartRow, columns } = chartPanel({
			barBottoms: [222, 210, 222, 194],
			captionBottom: 250
		});

		expect(anchorChartsToCardBottom(root)).toBe(4);

		const rowSlot = chartRow.children[0];
		expect(rowSlot.counterAxisAlignItems).toBe('MAX');
		expect(rowSlot.layoutSizingVertical).toBe('FILL');
		expect(chartRow.layoutSizingVertical).toBe('FILL');
		for (const column of columns) {
			expect(column.children[0].primaryAxisAlignItems).toBe('MAX');
			expect(column.layoutSizingVertical).toBe('FILL');
		}
		// The whole chain up to the card's content slot must fill, otherwise the row has no
		// height to grow into.
		const cardChildrenSlot = root.children[0].children[0];
		expect(cardChildrenSlot.layoutSizingVertical).toBe('FILL');
		expect(cardChildrenSlot.children[0].layoutSizingVertical).toBe('FILL');
	});

	it('keeps the natural height when content follows the graph', () => {
		const { root, chartRow } = chartPanel({
			barBottoms: [222, 222, 222, 222],
			captionBottom: 250,
			trailingContent: true
		});

		anchorChartsToCardBottom(root);

		// Baseline alignment still applies; only the fill-into-the-card chain is skipped.
		expect(chartRow.children[0].counterAxisAlignItems).toBe('MAX');
		expect(chartRow.layoutSizingVertical).toBe('HUG');
	});

	/**
	 * The collapse trap. Figma accepts `layoutSizingVertical = "FILL"` on the MAIN axis of a
	 * HUGGING parent and then gives the child NO height: the block shrinks to ~0px and its bars
	 * are painted over the panel title. A hugging card has no spare height to grow into anyway,
	 * so the chain must be skipped entirely — the graph keeps its content height.
	 */
	it('never stretches the block into a card that hugs its content', () => {
		const { root, chartRow } = chartPanel({
			barBottoms: [222, 210, 222, 194],
			captionBottom: 250,
			cardStretched: false
		});

		expect(anchorChartsToCardBottom(root)).toBe(4);

		const rowSlot = chartRow.children[0];
		// Baseline alignment is what puts the columns on one edge — and it still runs.
		expect(rowSlot.counterAxisAlignItems).toBe('MAX');
		expect(chartRow.layoutSizingVertical).toBe('HUG');
		expect(rowSlot.layoutSizingVertical).toBe('HUG');
		const cardChildrenSlot = root.children[0].children[0];
		expect(cardChildrenSlot.layoutSizingVertical).toBe('HUG');
		expect(cardChildrenSlot.children[0].layoutSizingVertical).toBe('HUG');
	});

	/**
	 * Vertical is the row's CROSS axis, so Figma lets every column stretch even while the row
	 * hugs — but then NO child contributes an intrinsic height, the row hugs to a meaningless
	 * leftover value, and the tallest bars spill out of it. Inside a hugging row the columns must
	 * therefore hug: `counterAxisAlignItems = MAX` already gives them one baseline.
	 */
	it('lets the columns hug inside a hugging row so the row keeps a real height', () => {
		const { root, columns } = chartPanel({
			barBottoms: [222, 210, 222, 194],
			captionBottom: 250,
			cardStretched: false
		});

		anchorChartsToCardBottom(root);

		for (const column of columns) {
			expect(column.children[0].primaryAxisAlignItems).toBe('MAX');
			expect(column.layoutSizingVertical).toBe('HUG');
			expect(column.children[0].layoutSizingVertical).toBe('HUG');
		}
	});

	it('is a no-op on a tree without a graph', () => {
		const root = node(
			{ type: 'FRAME', name: 'No chart', y: 0, height: 100 },
			[
				node({
					type: 'INSTANCE',
					name: 'Card → (Def) Level 1 (Beta)',
					y: 0,
					height: 100
				})
			]
		);
		expect(anchorChartsToCardBottom(root)).toBe(0);
	});
});

/**
 * A label and the things it introduces belong together. The Concept Heading/Text fill their width
 * by default, so in a ROW the label eats the remaining space and shoves its siblings to the far
 * right ("Aktive Filter" rendered 512px wide with its Tags floating half a panel away). Only a
 * `spread` row is meant to distribute space.
 */
describe('leading label hugs in a left-packed row', () => {
	const filterRow = (extra: Record<string, unknown> = {}) => ({
		type: 'ContainerHorizontal',
		gap: 'sm',
		children: [
			{ type: 'Body', size: 'Small', content: '<Active filters>' },
			{ type: 'Tag', label: 'Region: Nord', hugWidth: true },
			{ type: 'Tag', label: 'Status: Offen', hugWidth: true }
		],
		...extra
	});

	it('hugs the label so the tags sit one gap behind it', () => {
		expect(rowTextHugIndices(filterRow())).toEqual([0]);
	});

	it('hugs a heading followed by a hugging badge', () => {
		expect(
			rowTextHugIndices({
				type: 'ContainerHorizontal',
				children: [
					{ type: 'Heading', as: 'h4', content: 'Meldungen' },
					{ type: 'Badge', label: '3' }
				]
			})
		).toEqual([0]);
	});

	it('leaves a spread row alone so the leading block still pushes right', () => {
		expect(rowTextHugIndices(filterRow({ spread: true }))).toEqual([]);
		expect(rowTextHugIndices(filterRow({ gap: 'auto' }))).toEqual([]);
	});

	it('respects an explicit fillWidth', () => {
		const explicit = filterRow();
		(explicit.children[0] as Record<string, unknown>).fillWidth = true;
		expect(rowTextHugIndices(explicit)).toEqual([]);
	});

	it('keeps a lone text filling so its own align still works', () => {
		expect(
			rowTextHugIndices({
				type: 'ContainerHorizontal',
				children: [
					{ type: 'Body', content: 'Centered', align: 'center' }
				]
			})
		).toEqual([]);
	});

	/** dashboard.list-row: the equal FILL widths of the text cells ARE the column alignment. */
	it('never touches a data row whose text cells are the columns', () => {
		expect(
			rowTextHugIndices({
				type: 'ContainerHorizontal',
				gap: 'sm',
				padding: 'sm',
				children: [
					{ type: 'Body', size: 'Small', content: '<Value>' },
					{ type: 'Body', size: 'Small', content: '<Value>' },
					{ type: 'Body', size: 'Small', content: '<Value>' },
					{
						type: 'ContainerVertical',
						children: [{ type: 'Badge', label: '<Status>' }]
					},
					{
						type: 'ContainerHorizontal',
						children: [{ type: 'Link', label: '<Details>' }]
					}
				]
			})
		).toEqual([]);
	});

	it('ignores a row that does not start with text', () => {
		expect(
			rowTextHugIndices({
				type: 'ContainerHorizontal',
				children: [
					{ type: 'Icon', name: 'information_circle' },
					{ type: 'Body', content: 'A hint that keeps filling' }
				]
			})
		).toEqual([]);
	});

	it('leaves a text next to a filling field alone', () => {
		expect(
			rowTextHugIndices({
				type: 'ContainerHorizontal',
				children: [
					{ type: 'Body', content: 'Label' },
					{ type: 'Input', label: 'Value' }
				]
			})
		).toEqual([]);
	});
});

/**
 * A table only reads as a table while a value sits under its own header. One hugging cell — a
 * leading Checkbox keeping its label width — shifts every column behind it by its own label
 * length, and since each row's label differs, the header and the rows drift apart.
 */
describe('data row columns', () => {
	const headerRow = {
		type: 'ContainerHorizontal',
		gap: 'sm',
		padding: 'sm',
		children: [
			{
				type: 'Checkbox',
				props: { size: 'small' },
				text: { label: '<Select all>' }
			},
			{ type: 'Body', size: 'Small', content: '<Column>' },
			{ type: 'Body', size: 'Small', content: '<Column>' },
			{ type: 'Body', size: 'Small', content: '<Column>' }
		]
	};

	it('fills every cell, the hug-by-default checkbox included', () => {
		expect(rowCellFillIndices(headerRow)).toEqual([0, 1, 2, 3]);
	});

	it('lets a cell opt out with hugWidth', () => {
		const optOut = {
			...headerRow,
			children: [{ ...headerRow.children[0], hugWidth: true }].concat(
				headerRow.children.slice(1) as never[]
			)
		};
		expect(rowCellFillIndices(optOut)).toEqual([1, 2, 3]);
	});

	it('is not a data row without at least two text cells', () => {
		expect(
			rowCellFillIndices({
				type: 'ContainerHorizontal',
				children: [
					{ type: 'Body', content: '<Active filters>' },
					{ type: 'Tag', label: 'Region: Nord', hugWidth: true }
				]
			})
		).toEqual([]);
	});

	it('leaves a spread row alone', () => {
		expect(rowCellFillIndices({ ...headerRow, spread: true })).toEqual([]);
	});

	it('reports columns that drift across the rows of one table', async () => {
		const cell = (x: number, width: number) =>
			node({
				type: 'INSTANCE',
				name: '🧪 Text (Concept)',
				x,
				y: 0,
				width,
				height: 20
			});
		const row = (lefts: number[]) =>
			node(
				{
					type: 'INSTANCE',
					name: '🧪 Container',
					y: 0,
					height: 44
				},
				[
					node(
						{
							type: 'SLOT',
							name: 'Slot',
							layoutMode: 'HORIZONTAL',
							primaryAxisAlignItems: 'MIN',
							y: 0,
							height: 20
						},
						lefts.map((x) => cell(x, 100))
					)
				]
			);
		// The header's first cell hugs, so its remaining columns start 100px early.
		const card = node(
			{
				type: 'INSTANCE',
				name: 'Card → (Def) Level 1 (Beta)',
				y: 0,
				height: 200
			},
			[
				node({ type: 'SLOT', name: '📦 Children', y: 0, height: 200 }, [
					row([0, 100, 200]),
					row([0, 200, 400])
				])
			]
		);
		const root = node(
			{ type: 'FRAME', name: 'Screen', y: 0, height: 200 },
			[card]
		);
		const types = (await auditTree(root, { module: true })).violations.map(
			(v) => v.type
		);
		expect(types).toContain('table-columns-misaligned');
	});

	it('accepts a table whose columns line up', async () => {
		const cell = (x: number) =>
			node({
				type: 'INSTANCE',
				name: '🧪 Text (Concept)',
				x,
				y: 0,
				width: 100,
				height: 20
			});
		const row = () =>
			node({ type: 'INSTANCE', name: '🧪 Container', y: 0, height: 44 }, [
				node(
					{
						type: 'SLOT',
						name: 'Slot',
						layoutMode: 'HORIZONTAL',
						primaryAxisAlignItems: 'MIN',
						y: 0,
						height: 20
					},
					[cell(0), cell(200), cell(400)]
				)
			]);
		const card = node(
			{
				type: 'INSTANCE',
				name: 'Card → (Def) Level 1 (Beta)',
				y: 0,
				height: 200
			},
			[
				node({ type: 'SLOT', name: '📦 Children', y: 0, height: 200 }, [
					row(),
					row()
				])
			]
		);
		const root = node(
			{ type: 'FRAME', name: 'Screen', y: 0, height: 200 },
			[card]
		);
		const types = (await auditTree(root, { module: true })).violations.map(
			(v) => v.type
		);
		expect(types).not.toContain('table-columns-misaligned');
	});
});

/**
 * The catch-all net. Every sizing defect this runtime has produced ends the same way: a box is too
 * small and its content is painted outside it, over its neighbours. Naming causes is not enough —
 * the SYMPTOM is measured, so the next variant of the bug class is caught too.
 */
describe('content overflow audit', () => {
	const boxed = (props: MockNode, children: MockNode[] = []) =>
		node({ y: 0, height: 100, width: 200, ...props }, children);

	const typesFor = async (root: MockNode) =>
		(await auditTree(root, { module: true })).violations.map((v) => v.type);

	it('reports a child painted outside its parent box', async () => {
		const root = boxed(
			{
				type: 'FRAME',
				name: 'Screen',
				layoutMode: 'VERTICAL',
				height: 200
			},
			[
				boxed({ type: 'INSTANCE', name: '🧪 Container', height: 1 }, [
					// The collapsed-container symptom: a 140px block centered in a 1px box.
					boxed({
						type: 'SLOT',
						name: 'Slot',
						y: -69,
						height: 140
					})
				])
			]
		);
		expect(await typesFor(root)).toContain('content-overflow');
	});

	it('stays quiet when the content fits', async () => {
		const root = boxed(
			{
				type: 'FRAME',
				name: 'Screen',
				layoutMode: 'VERTICAL',
				height: 200
			},
			[
				boxed(
					{
						type: 'INSTANCE',
						name: '🧪 Container',
						layoutMode: 'VERTICAL',
						height: 140
					},
					[boxed({ type: 'SLOT', name: 'Slot', height: 140 })]
				)
			]
		);
		expect(await typesFor(root)).not.toContain('content-overflow');
	});

	it('exempts an absolutely positioned child', async () => {
		const root = boxed(
			{
				type: 'FRAME',
				name: 'Screen',
				layoutMode: 'VERTICAL',
				height: 40
			},
			[
				boxed({
					type: 'SLOT',
					name: 'Slot',
					layoutPositioning: 'ABSOLUTE',
					y: -60,
					height: 140
				})
			]
		);
		expect(await typesFor(root)).not.toContain('content-overflow');
	});

	it('does not police a library component\u2019s internals', async () => {
		const root = boxed(
			{
				type: 'FRAME',
				name: 'Screen',
				layoutMode: 'VERTICAL',
				height: 40
			},
			[
				boxed(
					{
						type: 'INSTANCE',
						name: 'Button \u2192 Brand',
						layoutMode: 'HORIZONTAL',
						height: 40
					},
					[
						boxed({
							type: 'FRAME',
							name: 'Focus ring',
							y: -4,
							height: 48
						})
					]
				)
			]
		);
		expect(await typesFor(root)).not.toContain('content-overflow');
	});
});

describe('empty grid cell audit', () => {
	it('reports a visible empty cell, accepts a hidden one', async () => {
		const grid = (visible: boolean) =>
			node(
				{
					type: 'INSTANCE',
					name: '🧪 Grid',
					layoutMode: 'GRID',
					y: 0,
					height: 40
				},
				[
					node(
						{
							type: 'SLOT',
							name: 'Slot-1',
							layoutMode: 'VERTICAL',
							y: 0,
							height: 40
						},
						[
							node({
								type: 'INSTANCE',
								name: 'Input',
								y: 0,
								height: 40
							})
						]
					),
					node({
						type: 'SLOT',
						name: 'Slot-2',
						visible,
						y: 0,
						height: 40
					})
				]
			);
		const typesFor = async (visible: boolean) =>
			(
				await auditTree(
					node({ type: 'FRAME', name: 'Screen', y: 0, height: 40 }, [
						grid(visible)
					]),
					{ module: true }
				)
			).violations.map((v) => v.type);
		expect(await typesFor(true)).toContain('empty-grid-cell');
		expect(await typesFor(false)).not.toContain('empty-grid-cell');
	});
});

describe('filter tag emphasis audit', () => {
	const screen = (tagName: string) =>
		node({ type: 'FRAME', name: 'Screen', y: 0, height: 24 }, [
			node({ type: 'INSTANCE', name: tagName, y: 0, height: 24 })
		]);
	const typesFor = async (tagName: string) =>
		(await auditTree(screen(tagName), { module: true })).violations.map(
			(v) => v.type
		);

	it('reports a strong removable filter tag', async () => {
		expect(
			await typesFor('(Def) Tag \u2192 Strong - Removable (Beta)')
		).toContain('filter-tag-emphasis');
	});

	it('accepts the weak one', async () => {
		expect(
			await typesFor('(Def) Tag \u2192 (Def) Weak - Removable (Beta)')
		).not.toContain('filter-tag-emphasis');
	});

	it('leaves a strong INTERACTIVE tag alone (a toggle is not a filter chip)', async () => {
		expect(
			await typesFor(
				'(Def) Tag \u2192 Strong - Interactive Toggle (Beta)'
			)
		).not.toContain('filter-tag-emphasis');
	});
});

/**
 * `applyProps` used to pass VARIANT values through `String(val)`, so `true` became `"true"` while
 * the DB components spell their toggles `"True"`. `setProperties` rejected the whole batch and the
 * silent catch dropped every OTHER prop with it — that is how a search Input kept its icon off.
 */
describe('applyProps variant resolution', () => {
	const instance = (
		props: Record<
			string,
			{ type: string; value?: unknown; variantOptions?: string[] }
		>
	) => {
		const applied: Record<string, unknown>[] = [];
		return {
			applied,
			inst: {
				componentProperties: props,
				setProperties: (map: Record<string, unknown>) => {
					// Mirror Figma: a VARIANT value outside the option list rejects the BATCH.
					for (const [key, value] of Object.entries(map)) {
						const prop = props[key];
						if (prop?.type !== 'VARIANT') continue;
						const options = prop.variantOptions ?? [];
						if (options.length && !options.includes(String(value)))
							throw new Error('failed validation: ' + key);
					}
					applied.push(map);
				},
				findOne: () => null,
				findAll: () => []
			} as MockNode
		};
	};

	it('resolves a boolean onto the True/False variant labels', async () => {
		const { inst, applied } = instance({
			'👁️ Show Icon Leading': {
				type: 'VARIANT',
				value: 'False',
				variantOptions: ['True', 'False']
			}
		});
		await applyProps(inst, { 'Show Icon Leading': true });
		expect(applied).toEqual([{ '👁️ Show Icon Leading': 'True' }]);
	});

	it('title-cases when the instance exposes no option list', async () => {
		const { inst, applied } = instance({
			'👁️ Show Icon Leading': { type: 'VARIANT', value: 'False' }
		});
		await applyProps(inst, { 'Show Icon Leading': true });
		expect(applied).toEqual([{ '👁️ Show Icon Leading': 'True' }]);
	});

	it('normalises loose casing and the (Def) prefix', async () => {
		const { inst, applied } = instance({
			Size: {
				type: 'VARIANT',
				value: '(Def) Medium',
				variantOptions: ['(Def) Medium', 'Small']
			}
		});
		await applyProps(inst, { Size: 'small' });
		expect(applied).toEqual([{ Size: 'Small' }]);
	});

	it('keeps a real BOOLEAN property boolean', async () => {
		const { inst, applied } = instance({
			'👁️ Show Icon#8:289': { type: 'BOOLEAN', value: false }
		});
		await applyProps(inst, { 'Show Icon': true });
		expect(applied).toEqual([{ '👁️ Show Icon#8:289': true }]);
	});
});
