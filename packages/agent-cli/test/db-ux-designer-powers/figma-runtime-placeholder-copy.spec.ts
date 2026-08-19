import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards the placeholder-copy contract of the Figma render runtime.
 *
 * Every DB component ships its text slots pre-filled with the LIBRARY's own copy ("Headline",
 * "Text", "Label", …). A plan field that never reaches its TEXT property therefore does not
 * render an empty line — it renders that default, which reads as real product copy and used to
 * pass every other check. That is exactly how a dialog's Notification shipped its headline as
 * literally "Headline": the plan said `label` while the component exposes "✏️ Headline", the
 * field silently matched nothing, and the audit reported `valid: true`.
 *
 * Two independent nets are locked down here:
 *   1. setInstanceFields FAILS LOUDLY on a field that matches no TEXT property (the cause), and
 *   2. auditTree reports leftover library defaults as `placeholder-text` (the symptom), which
 *      also covers a field that was forgotten entirely or a later hand-edit.
 */
const RUNTIME = join(
	dirname(fileURLToPath(import.meta.url)),
	'../../db-ux-designer-powers/skills/generate-figma-screen/assets/db-figma-runtime.min.js'
);

type MockNode = Record<string, any>;

let setInstanceFields: (
	inst: MockNode,
	fields: Record<string, unknown>
) => void;
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
	setInstanceFields = api.setInstanceFields;
	auditTree = api.auditTree;
});

const node = (props: MockNode, children: MockNode[] = []): MockNode => {
	const n: MockNode = { visible: true, ...props, children };
	if (n.y !== undefined && n.height !== undefined)
		n.absoluteBoundingBox = {
			x: n.x ?? 0,
			y: n.y,
			width: n.width ?? 100,
			height: n.height
		};
	if (n.type === 'INSTANCE')
		n.getMainComponentAsync = async () => ({ remote: true });
	n.findOne = () => null;
	for (const child of children) child.parent = n;
	return n;
};

/** The real Notification property set: the primary line is "Headline", not "Label". */
const notification = () => {
	const applied: Record<string, unknown>[] = [];
	return {
		applied,
		inst: {
			name: 'Notification → Standalone - (Def) Icon',
			componentProperties: {
				'👁️ Show Icon#719:55': { type: 'BOOLEAN', value: true },
				'✏️ Headline#719:36': { type: 'TEXT', value: 'Headline' },
				'✏️ Link#719:42': { type: 'TEXT', value: 'Link' },
				'✏️ Text#719:38': { type: 'TEXT', value: 'Text' }
			},
			setProperties: (map: Record<string, unknown>) => {
				applied.push(map);
			}
		} as MockNode
	};
};

describe('setInstanceFields', () => {
	it('maps a Notification headline and body onto the real properties', () => {
		const { inst, applied } = notification();
		setInstanceFields(inst, {
			headline: 'Unwiderruflich',
			text: 'Der Entwurf kann nicht wiederhergestellt werden.'
		});
		expect(applied).toEqual([
			{
				'✏️ Headline#719:36': 'Unwiderruflich',
				'✏️ Text#719:38':
					'Der Entwurf kann nicht wiederhergestellt werden.'
			}
		]);
	});

	/** `label` is the intuitive name for a primary line and must not silently vanish. */
	it('resolves the label alias onto the headline property', () => {
		const { inst, applied } = notification();
		setInstanceFields(inst, { label: 'Unwiderruflich', value: 'Detail' });
		expect(applied).toEqual([
			{
				'✏️ Headline#719:36': 'Unwiderruflich',
				'✏️ Text#719:38': 'Detail'
			}
		]);
	});

	it('fails loudly instead of dropping a field that matches nothing', () => {
		const { inst, applied } = notification();
		expect(() =>
			setInstanceFields(inst, { subtitle: 'Nirgendwo' })
		).toThrow(/"subtitle"/);
		expect(applied).toEqual([]);
	});

	it('names the available properties so the plan can be fixed', () => {
		const { inst } = notification();
		expect(() => setInstanceFields(inst, { footnote: 'x' })).toThrow(
			/Headline/
		);
	});
});

describe('placeholder-text audit', () => {
	const screenWith = (characters: string, extra: MockNode = {}): MockNode => {
		const text = node({
			type: 'TEXT',
			name: '✏️ Headline',
			characters,
			y: 0,
			height: 24,
			...extra
		});
		const instance = node(
			{
				type: 'INSTANCE',
				name: 'Notification → Standalone - (Def) Icon',
				y: 0,
				height: 24
			},
			[text]
		);
		return node({ type: 'FRAME', name: 'Screen', y: 0, height: 24 }, [
			instance
		]);
	};
	const typesFor = async (root: MockNode) =>
		(
			await auditTree(root, { module: true, pageType: 'modal' })
		).violations.map((v) => v.type);

	it('reports the library default that shipped as a headline', async () => {
		expect(await typesFor(screenWith('Headline'))).toContain(
			'placeholder-text'
		);
	});

	it('reports the other library defaults too', async () => {
		for (const copy of ['Text', 'Label', 'Placeholder', 'Description'])
			expect(await typesFor(screenWith(copy))).toContain(
				'placeholder-text'
			);
	});

	it('accepts real product copy', async () => {
		expect(await typesFor(screenWith('Unwiderruflich'))).not.toContain(
			'placeholder-text'
		);
	});

	/** A switched-off region (a Notification's optional Link) keeps its default by design. */
	it('ignores a hidden text node', async () => {
		expect(
			await typesFor(screenWith('Headline', { visible: false }))
		).not.toContain('placeholder-text');
	});

	it('ignores a default inside a hidden region', async () => {
		const root = screenWith('Headline');
		root.children[0].visible = false;
		expect(await typesFor(root)).not.toContain('placeholder-text');
	});

	/** Screenreader copy legitimately contains the word, but is not the bare default. */
	it('does not flag copy that merely contains a placeholder word', async () => {
		expect(await typesFor(screenWith('Text Screenreader'))).not.toContain(
			'placeholder-text'
		);
	});
});
