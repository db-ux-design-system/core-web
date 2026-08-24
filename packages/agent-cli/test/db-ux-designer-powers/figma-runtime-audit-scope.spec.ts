import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards the SCOPE of the measured audit checks: they must report OUR layout defects and stay
 * silent on a library component's internals.
 *
 * All three checks here reported `valid: false` on correct screens, which is worse than no check
 * at all — it teaches people to ignore the audit:
 *   - `unresolved-icon` fired on the blank `<Icon>` that a RESOLVED DB Theme icon carries inside
 *     itself (the close action a Notification ships with). Nothing in a plan can set that node.
 *   - `gap-exceeds-card-padding` measured every component's internal gap against the enclosing
 *     card's padding — 30+ hits on two screens, none of them actionable.
 *   - `table-columns-misaligned` compared a component's inner three-child row against the table
 *     it happened to sit in.
 *
 * Each case is paired with the real defect it must still catch, so the fix cannot be "switch the
 * check off". The bundle is a SCRIPT (no exports) expecting a `figma` global, loaded the way the
 * store-once loader does it, exposing auditTree through the hardened helper toolkit.
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

/** A Core Lab Container instance wrapping one Slot — the shape the runtime renders our rows as. */
const container = (slotProps: MockNode, children: MockNode[] = []): MockNode =>
	node({ type: 'INSTANCE', name: '🧪 Container' }, [
		node({ type: 'SLOT', name: 'Slot', ...slotProps }, children)
	]);

/** A panel. `paddingTop` is what the gap check measures against. */
const card = (children: MockNode[], paddingTop = 12): MockNode =>
	node({ type: 'INSTANCE', name: 'Card', paddingTop }, [
		node({ type: 'SLOT', name: '📦 Children' }, children)
	]);

/**
 * A frame with no Section, so the screen-level checks (Header first, zebra level-1) do not apply
 * and every fixture stays focused on the one check it is about.
 */
const frame = (children: MockNode[]): MockNode =>
	node({ type: 'FRAME', name: 'Scope Fixture' }, children);

const types = async (root: MockNode, opts: Record<string, unknown> = {}) =>
	(await auditTree(root, opts)).violations.map((v) => v.type);

describe('unresolved-icon scope', () => {
	/**
	 * The DB Theme icon components are themselves built around an `<Icon>` node, so a resolved
	 * glyph legitimately nests a blank one below itself.
	 */
	it('ignores the placeholder inside an already resolved icon', async () => {
		const found = await types(
			frame([
				node({ type: 'INSTANCE', name: 'Notification → Inline' }, [
					node({ type: 'SLOT', name: 'Close' }, [
						node({ type: 'INSTANCE', name: 'Button → Ghost' }, [
							node({ type: 'INSTANCE', name: '<IconClose>' }, [
								node({ type: 'INSTANCE', name: '<Icon>' })
							])
						])
					])
				])
			])
		);
		expect(found).not.toContain('unresolved-icon');
	});

	it('still reports an icon-only Button whose slot was never swapped', async () => {
		const found = await types(
			frame([
				node({ type: 'INSTANCE', name: 'Button → Brand' }, [
					node({ type: 'SLOT', name: 'Icon 20' }, [
						node({ type: 'INSTANCE', name: '<Icon>' })
					])
				])
			])
		);
		expect(found).toContain('unresolved-icon');
	});
});

describe('gap-exceeds-card-padding scope', () => {
	it("ignores a library component's internal gap", async () => {
		const found = await types(
			frame([
				card([
					node({ type: 'INSTANCE', name: 'Notification → Inline' }, [
						node(
							{
								type: 'SLOT',
								name: 'Content',
								layoutMode: 'VERTICAL',
								itemSpacing: 16
							},
							[
								node({
									type: 'TEXT',
									characters: 'Fahrzeug gemeldet'
								}),
								node({
									type: 'TEXT',
									characters: 'Die Meldung ist eingegangen.'
								})
							]
						)
					])
				])
			])
		);
		expect(found).not.toContain('gap-exceeds-card-padding');
	});

	it('still reports our own gap exceeding the card padding', async () => {
		const found = await types(
			frame([
				card([
					container({ layoutMode: 'VERTICAL', itemSpacing: 16 }, [
						node({ type: 'TEXT', characters: 'Fahrzeug gemeldet' }),
						node({
							type: 'TEXT',
							characters: 'Die Meldung ist eingegangen.'
						})
					])
				])
			])
		);
		expect(found).toContain('gap-exceeds-card-padding');
	});
});

describe('table-columns-misaligned scope', () => {
	/** One table row of ours: three equal fill cells starting at the given left edges. */
	const ourRow = (xs: number[], y: number): MockNode =>
		container(
			{
				layoutMode: 'HORIZONTAL',
				primaryAxisAlignItems: 'MIN',
				x: 0,
				y,
				width: 1024,
				height: 40
			},
			xs.map((x, i) =>
				node({
					type: 'TEXT',
					name: 'Body',
					characters: `Zelle ${i + 1}`,
					x,
					y,
					width: 300,
					height: 20
				})
			)
		);

	/** A component's OWN inner row — three children at its own, unrelated left edges. */
	const libraryRow = (y: number): MockNode =>
		node({ type: 'INSTANCE', name: 'Tabs → Desktop' }, [
			node(
				{
					type: 'SLOT',
					name: 'Items',
					layoutMode: 'HORIZONTAL',
					primaryAxisAlignItems: 'MIN',
					x: 0,
					y,
					width: 1024,
					height: 40
				},
				[0, 500, 800].map((x, i) =>
					node({
						type: 'TEXT',
						name: 'Label',
						characters: `Reiter ${i + 1}`,
						x,
						y,
						width: 300,
						height: 20
					})
				)
			)
		]);

	it("ignores a library component's inner row inside a table panel", async () => {
		const found = await types(
			frame([
				card([
					ourRow([0, 341, 682], 100),
					ourRow([0, 341, 682], 150),
					libraryRow(200)
				])
			])
		);
		expect(found).not.toContain('table-columns-misaligned');
	});

	it('still reports our own columns drifting apart', async () => {
		const found = await types(
			frame([
				card([ourRow([0, 341, 682], 100), ourRow([0, 400, 700], 150)])
			])
		);
		expect(found).toContain('table-columns-misaligned');
	});
});
