import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards two row-sizing contracts that shipped broken on a delivered process frame.
 *
 * 1. A HUGGING container must hug its GLYPHS. `Heading`/`Body` are Core Lab components with a
 *    `Max Width` and default to FILL, so an untouched text measures ~500px REGARDLESS of its
 *    content. A hugging container then hugs that phantom and still reports `HUG` — measured: five
 *    stepper items of 512-540px summed to 2 588px inside a 1 024px column and were painted
 *    outside the frame. `rowTextHugIndices` could not catch it: it inspects kids[0] only and bails
 *    when that is not a text, and in a stepper item kids[0] is the Icon.
 *
 * 2. A `spread` row with ONE child renders it flush LEFT (SPACE_BETWEEN needs two ends). A single
 *    ACTION belongs right — measured: nav Slot FILL + SPACE_BETWEEN 1 024px, one Brand Button at
 *    x = 0. A single NON-action (a lone page title) must stay left.
 *
 * The audit nets below are DECLARATIVE on purpose. Geometry is not settled while a render runs:
 * the stepper frame passed its render audit with `valid: true` and only reported
 * `content-overflow` when the same audit re-ran on the delivered frame.
 */
const here = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(
	here,
	'../../db-ux-designer-powers/skills/generate-figma-screen/assets'
);
const RUNTIME = join(ASSETS, 'db-figma-runtime.min.js');

const require_ = createRequire(import.meta.url);
const { buildMaps } = require_(join(ASSETS, 'build-registry-maps.cjs'));
const maps = buildMaps(join(ASSETS, 'registries'));

type Api = {
	hugContainerTextIndices: (node: unknown) => number[];
	spreadSingleChildAlign: (node: unknown) => string | null;
	applyLeafWidth: (inst: unknown, node: unknown) => string;
	rowTextHugIndices: (node: unknown) => number[];
	validatePlanStatic: (
		plan: unknown,
		maps: unknown
	) => { valid: boolean; errors: string[] };
	auditTree: (
		root: unknown,
		opts?: Record<string, unknown>
	) => Promise<{ valid: boolean; violations: { type: string }[] }>;
};
let api: Api;

beforeAll(() => {
	(globalThis as any).figma = {
		variables: {
			getVariableByIdAsync: async () => null,
			importVariableByKeyAsync: async () => null
		},
		root: { children: [] }
	};
	api = new Function(
		`${readFileSync(RUNTIME, 'utf8')};return EDIT_API;`
	)() as Api;
});

/** Minimal mock node with the properties the audit reads. */
const node = (props: Record<string, any>, children: any[] = []) => {
	const n: Record<string, any> = { visible: true, ...props, children };
	if (n.x !== undefined && n.width !== undefined)
		n.absoluteBoundingBox = {
			x: n.x,
			y: n.y ?? 0,
			width: n.width,
			height: n.height ?? 20
		};
	if (n.type === 'INSTANCE')
		n.getMainComponentAsync = async () => ({ remote: true });
	n.findOne = () => null;
	for (const c of children) c.parent = n;
	return n;
};
const types = async (root: any, opts: Record<string, unknown> = {}) =>
	(await api.auditTree(root, opts)).violations.map((v) => v.type);

describe('hugContainerTextIndices — a hug container hugs its glyphs', () => {
	const icon = { type: 'Icon', name: 'check', size: 16 };
	const body = {
		type: 'Body',
		size: 'Small',
		content: 'Schaden beschreiben'
	};

	it('hugs the text of a hug row even when the FIRST child is an icon', () => {
		// The exact stepper item shape that rendered 540px wide.
		expect(
			api.hugContainerTextIndices({
				type: 'ContainerHorizontal',
				hugWidth: true,
				children: [icon, body]
			})
		).toEqual([1]);
		// Proof this is a gap rowTextHugIndices structurally cannot close.
		expect(
			api.rowTextHugIndices({
				type: 'ContainerHorizontal',
				hugWidth: true,
				children: [icon, body]
			})
		).toEqual([]);
	});

	it('also hugs the text of a hug COLUMN (the pending stepper item)', () => {
		expect(
			api.hugContainerTextIndices({
				type: 'ContainerVertical',
				hugWidth: true,
				children: [{ type: 'Body', content: '3. Fahrbereitschaft' }]
			})
		).toEqual([0]);
	});

	it('leaves filling containers and explicit fillWidth alone', () => {
		expect(
			api.hugContainerTextIndices({
				type: 'ContainerHorizontal',
				children: [body]
			})
		).toEqual([]);
		expect(
			api.hugContainerTextIndices({
				type: 'ContainerVertical',
				hugWidth: true,
				children: [{ ...body, fillWidth: true }]
			})
		).toEqual([]);
	});

	it('audits the declared contradiction, independent of geometry', async () => {
		const filling = node({
			name: '🧪 Text',
			type: 'INSTANCE',
			layoutSizingHorizontal: 'FILL',
			x: 0,
			width: 512
		});
		const hugRow = node(
			{
				name: 'Slot',
				type: 'SLOT',
				layoutMode: 'HORIZONTAL',
				layoutSizingHorizontal: 'HUG',
				x: 0,
				width: 512
			},
			[filling]
		);
		const frame = node(
			{
				name: 'Screen',
				type: 'FRAME',
				layoutMode: 'VERTICAL',
				x: 0,
				width: 1440
			},
			[hugRow]
		);
		expect(await types(frame)).toContain('hug-parent-filling-child');
	});
});

describe('applyLeafWidth — hug or fill, never fixed', () => {
	/** An instance mock that records which sizing mode was written. */
	const inst = (sizing = 'FIXED') => ({
		name: 'Radio → (Def) Medium - Full Width',
		type: 'INSTANCE',
		layoutSizingHorizontal: sizing,
		width: 84,
		children: [],
		findOne: () => ({ type: 'TEXT' })
	});

	it('fills a control whose variant axis says "full"', () => {
		// The measured defect: this Radio kept the library's 84px because nothing sized it.
		const n = inst();
		expect(
			api.applyLeafWidth(n, {
				type: 'Radio',
				props: { size: 'medium', width: 'full' }
			})
		).toBe('fill');
	});

	it('hugs a control whose variant axis says "auto"', () => {
		expect(
			api.applyLeafWidth(inst(), {
				type: 'Radio',
				props: { size: 'medium', width: 'auto' }
			})
		).toBe('hug');
	});

	it('lets the plan override the variant axis', () => {
		expect(
			api.applyLeafWidth(inst(), {
				type: 'Radio',
				props: { width: 'full' },
				hugWidth: true
			})
		).toBe('hug');
	});

	it('falls back to HUG rather than leaving a FIXED width', () => {
		// A component in no list, with no width axis — must still not stay fixed.
		expect(api.applyLeafWidth(inst(), { type: 'Tooltip' })).toBe('hug');
	});

	it('keeps the library default when it is already hug or fill', () => {
		expect(api.applyLeafWidth(inst('HUG'), { type: 'Button' })).toBe(
			'library'
		);
		expect(api.applyLeafWidth(inst('FILL'), { type: 'Button' })).toBe(
			'library'
		);
	});

	it('audits a fixed-width instance that carries text', async () => {
		const radio = node({
			name: 'Radio → (Def) Medium - Full Width',
			type: 'INSTANCE',
			layoutSizingHorizontal: 'FIXED',
			x: 0,
			width: 84,
			height: 144
		});
		radio.findOne = (fn: (n: any) => boolean) =>
			fn({ type: 'TEXT' }) ? { type: 'TEXT' } : null;
		const frame = node(
			{
				name: 'Screen',
				type: 'FRAME',
				layoutMode: 'VERTICAL',
				x: 0,
				width: 1440
			},
			[radio]
		);
		const found = await types(frame, { pageType: 'process' });
		expect(found).toContain('fixed-width-instance');
	});

	it('exempts an icon: intrinsically sized and carries no text', async () => {
		const icon = node({
			name: '<IconCheck>',
			type: 'INSTANCE',
			layoutSizingHorizontal: 'FIXED',
			x: 0,
			width: 24,
			height: 24
		});
		const frame = node(
			{
				name: 'Screen',
				type: 'FRAME',
				layoutMode: 'VERTICAL',
				x: 0,
				width: 1440
			},
			[icon]
		);
		expect(await types(frame)).not.toContain('fixed-width-instance');
	});
});

describe('spreadSingleChildAlign — one action goes right', () => {
	const weiter = {
		type: 'Button',
		props: { variant: 'brand', iconOnly: false },
		label: 'Weiter'
	};

	it('pushes a single ACTION to the end', () => {
		expect(
			api.spreadSingleChildAlign({
				type: 'ContainerHorizontal',
				spread: true,
				children: [weiter]
			})
		).toBe('MAX');
		// A hug group of actions counts as one action group.
		expect(
			api.spreadSingleChildAlign({
				type: 'ContainerHorizontal',
				spread: true,
				children: [
					{
						type: 'ContainerHorizontal',
						hugWidth: true,
						children: [weiter, weiter]
					}
				]
			})
		).toBe('MAX');
	});

	it('keeps a single NON-action at the start', () => {
		// A page-header row whose action row was dropped: the title must not move right.
		expect(
			api.spreadSingleChildAlign({
				type: 'ContainerHorizontal',
				spread: true,
				children: [{ type: 'Heading', as: 'h1', content: 'Fahrzeuge' }]
			})
		).toBe('MIN');
	});

	it('leaves real spread rows (two ends) untouched', () => {
		expect(
			api.spreadSingleChildAlign({
				type: 'ContainerHorizontal',
				spread: true,
				children: [
					{
						type: 'Button',
						props: { variant: 'ghost' },
						label: 'Zurück'
					},
					weiter
				]
			})
		).toBe(null);
		expect(
			api.spreadSingleChildAlign({
				type: 'ContainerHorizontal',
				children: [weiter]
			})
		).toBe(null);
	});

	it('audits a spread row that holds a single action', async () => {
		const button = node({
			name: 'Button → Brand',
			type: 'INSTANCE',
			layoutSizingHorizontal: 'HUG',
			x: 0,
			width: 85
		});
		const navSlot = node(
			{
				name: 'Slot',
				type: 'SLOT',
				layoutMode: 'HORIZONTAL',
				layoutSizingHorizontal: 'FILL',
				primaryAxisAlignItems: 'SPACE_BETWEEN',
				x: 0,
				width: 1024
			},
			[button]
		);
		const frame = node(
			{
				name: 'Screen',
				type: 'FRAME',
				layoutMode: 'VERTICAL',
				x: 0,
				width: 1440
			},
			[navSlot]
		);
		expect(await types(frame, { pageType: 'process' })).toContain(
			'single-action-not-right'
		);
	});

	it('rejects the plan statically, so it never reaches a render', () => {
		const res = api.validatePlanStatic(
			{
				screen: 'Step 1',
				pageType: 'process',
				layout: [
					{ type: 'Header', appName: 'FleetFlow', navItems: ['A'] },
					{
						type: 'ContainerHorizontal',
						spread: true,
						children: [weiter]
					}
				]
			},
			maps
		);
		expect(res.valid).toBe(false);
		expect(res.errors.join('\n')).toMatch(/spread` distributes children/);
		expect(res.errors.join('\n')).toMatch(/align: "right"/);
	});
});
