import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards the process page-type contract of the audit. A step frame is carried by two rows that
 * span the content column and push their ends apart (SPACE_BETWEEN) — the stepper and the
 * Back/Next navigation — and it must actually ASK the user something.
 *
 * All three checks exist because a rendered process screen shipped without them: the catalog
 * fragments had lost `spread: true`, so stepper and navigation collapsed into a left-packed
 * cluster, and `process.step` was filled with its heading only, so the step asked for nothing.
 * The registry validator cannot see any of that (each fragment is internally valid), and the
 * checks must also hold when an agent composes freely instead of using the registry — which is
 * why they live in the audit and are tested here.
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
			// The zebra-start check resolves the topmost section's bound fill; returning the
			// level-1 variable keeps these fixtures focused on the process checks.
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
	// Every Section fixture carries a bound fill so the screen-level zebra check resolves to the
	// level-1 variable stubbed above; otherwise it would report on every fixture and drown the
	// process violations these tests are about.
	if (n.type === 'INSTANCE' && /Section/i.test(String(n.name ?? '')))
		n.boundVariables = { fills: [{ id: 'level-1' }] };
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

/** A Core Lab Container instance wrapping one horizontal or vertical Slot. */
const container = (slotProps: MockNode, children: MockNode[] = []): MockNode =>
	node({ type: 'INSTANCE', name: '🧪 Container' }, [
		node({ type: 'SLOT', name: 'Slot', ...slotProps }, children)
	]);

/** One stepper item: a Container of icon + label, as the catalog builds it. */
const stepItem = (label: string): MockNode =>
	container({ layoutMode: 'HORIZONTAL', primaryAxisAlignItems: 'MIN' }, [
		node({ type: 'INSTANCE', name: 'check' }),
		node({ type: 'TEXT', name: 'Text', characters: label })
	]);

/** The stepper row. `spread` mirrors the plan's `spread: true` on the ContainerHorizontal. */
const stepperSection = (spread: boolean, items = 3): MockNode =>
	node({ type: 'INSTANCE', name: 'Section (Beta)', y: 73, height: 180 }, [
		node({ type: 'SLOT', name: '📦 Children' }, [
			container(
				{
					layoutMode: 'HORIZONTAL',
					primaryAxisAlignItems: spread ? 'SPACE_BETWEEN' : 'MIN'
				},
				Array.from({ length: items }, (_, i) =>
					stepItem(`Step ${i + 1}`)
				)
			)
		])
	]);

/** The Back/Next row: a ghost paired with a brand Button. */
const navSection = (spread: boolean): MockNode =>
	node({ type: 'INSTANCE', name: 'Section (Beta)', y: 353, height: 200 }, [
		node({ type: 'SLOT', name: '📦 Children' }, [
			container(
				{
					layoutMode: 'HORIZONTAL',
					primaryAxisAlignItems: spread ? 'SPACE_BETWEEN' : 'MIN'
				},
				[
					node({ type: 'INSTANCE', name: 'Button → Ghost' }),
					node({ type: 'INSTANCE', name: 'Button → Brand' })
				]
			)
		])
	]);

/** The step content section: heading pair, plus the fields when the step asks for something. */
const stepSection = (fields: MockNode[]): MockNode =>
	node({ type: 'INSTANCE', name: 'Section (Beta)', y: 253, height: 100 }, [
		node({ type: 'SLOT', name: '📦 Children' }, [
			container({ layoutMode: 'VERTICAL' }, [
				node({ type: 'INSTANCE', name: '🧪 Heading (Concept)' }),
				...fields
			])
		])
	]);

const input = (): MockNode =>
	node({
		type: 'INSTANCE',
		name: 'Input → (Def) Label Above - (Def) Empty'
	});

/**
 * A summary panel: a Card of label/value rows — what a pure REVIEW step shows instead of asking
 * for input. Scoped to rows inside a Card so the stepper and the Back/Next row can never be
 * mistaken for a summary.
 */
const summaryCard = (rows: [string, string][]): MockNode =>
	node({ type: 'INSTANCE', name: 'Card', paddingTop: 12 }, [
		node(
			{ type: 'SLOT', name: '📦 Children' },
			rows.map(([label, value]) =>
				container(
					{ layoutMode: 'HORIZONTAL', primaryAxisAlignItems: 'MIN' },
					[
						node({
							type: 'TEXT',
							name: 'Body',
							characters: label
						}),
						node({ type: 'TEXT', name: 'Body', characters: value })
					]
				)
			)
		)
	]);

const frame = (sections: MockNode[]): MockNode =>
	node({ type: 'FRAME', name: 'Example Process – Schritt 1' }, [
		node({ type: 'INSTANCE', name: 'Header → Desktop (Beta)' }),
		...sections
	]);

const types = async (root: MockNode, pageType = 'process') =>
	(await auditTree(root, { pageType })).violations.map((v) => v.type);

describe('process step layout audit', () => {
	it('accepts a step frame with spread rows and real fields', async () => {
		const found = await types(
			frame([
				stepperSection(true),
				stepSection([input()]),
				navSection(true)
			])
		);
		expect(found).toEqual([]);
	});

	it('reports a Back/Next row packed to the left', async () => {
		const found = await types(
			frame([
				stepperSection(true),
				stepSection([input()]),
				navSection(false)
			])
		);
		expect(found).toContain('nav-not-spread');
	});

	it('reports stepper items packed to the left', async () => {
		const found = await types(
			frame([
				stepperSection(false),
				stepSection([input()]),
				navSection(true)
			])
		);
		expect(found).toContain('stepper-not-spread');
	});

	it('reports a step that asks the user for nothing', async () => {
		const found = await types(
			frame([stepperSection(true), stepSection([]), navSection(true)])
		);
		expect(found).toContain('process-step-without-content');
	});

	/**
	 * `🧪 Upload` IS the control of an upload step — the real file-upload component, a drop area
	 * with its own label and button. It was reported as an empty shell only because every Concept
	 * component is prefixed with its maturity emoji, so a name matched from the START never hit
	 * `Upload`.
	 */
	it('accepts a step whose only control is the Upload component', async () => {
		const found = await types(
			frame([
				stepperSection(true),
				stepSection([node({ type: 'INSTANCE', name: '🧪 Upload' })]),
				navSection(true)
			])
		);
		expect(found).toEqual([]);
	});

	/**
	 * A pure review step asks for nothing BY DESIGN — it shows the summary it reviews. Demanding
	 * an input control there was a false alarm on a correct screen.
	 */
	it('accepts a pure review step that shows the summary it reviews', async () => {
		const found = await types(
			frame([
				stepperSection(true),
				stepSection([
					summaryCard([
						['Fahrzeug', 'ICE 101'],
						['Standort', 'Hamburg-Altona'],
						['Termin', '14.09.2026']
					])
				]),
				navSection(true)
			])
		);
		expect(found).toEqual([]);
	});

	/**
	 * The threshold matters: a single stray text row must not excuse a genuinely empty step, or
	 * the check would be trivially satisfied by the step's own description.
	 */
	it('still reports a step whose panel holds one lone row', async () => {
		const found = await types(
			frame([
				stepperSection(true),
				stepSection([summaryCard([['Fahrzeug', 'ICE 101']])]),
				navSection(true)
			])
		);
		expect(found).toContain('process-step-without-content');
	});

	/**
	 * The confirmation frame carries a SINGLE brand action, so it has no Back/Next row — and
	 * therefore no fields to demand either. Without this, the last frame of every flow would
	 * report a false content violation.
	 */
	it('does not demand fields on the confirmation frame', async () => {
		const success = node(
			{ type: 'INSTANCE', name: 'Section (Beta)', y: 253, height: 392 },
			[
				node({ type: 'SLOT', name: '📦 Children' }, [
					container({ layoutMode: 'VERTICAL' }, [
						node({ type: 'INSTANCE', name: 'check-circle' }),
						node({
							type: 'INSTANCE',
							name: '🧪 Heading (Concept)'
						}),
						node({ type: 'INSTANCE', name: 'Button → Brand' })
					])
				])
			]
		);
		const found = await types(frame([stepperSection(true), success]));
		expect(found).toEqual([]);
	});

	/**
	 * A determinate progress bar is the registered alternative to the stepper and is a VERTICAL
	 * block, so it must not be mistaken for a left-packed stepper row.
	 */
	it('leaves a progress-bar section alone', async () => {
		const progress = node(
			{ type: 'INSTANCE', name: 'Section (Beta)', y: 73, height: 180 },
			[
				node({ type: 'SLOT', name: '📦 Children' }, [
					container({ layoutMode: 'VERTICAL' }, [
						node({ type: 'TEXT', characters: 'Schritt 2 von 4' }),
						node({
							type: 'INSTANCE',
							name: '🛟 LoadingIndicator -> BAR Progress (Concept)'
						})
					])
				])
			]
		);
		const found = await types(
			frame([progress, stepSection([input()]), navSection(true)])
		);
		expect(found).toEqual([]);
	});

	/**
	 * The checks are process-scoped on purpose: a form's action row may legitimately sit
	 * right-aligned, so the same tree must stay clean under another page type.
	 */
	it('stays silent for other page types', async () => {
		const found = await types(
			frame([stepperSection(false), stepSection([]), navSection(false)]),
			'form'
		);
		expect(found).toEqual([]);
	});
});
