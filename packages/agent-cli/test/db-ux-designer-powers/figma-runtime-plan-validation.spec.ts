import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Guards the STATIC plan validation shared by the render runtime and `plan:lint`.
 *
 * WHY THESE EXIST
 *   Every case locked in here is a defect that reached the Figma sandbox in a real
 *   session, cost a full render round trip, and reported something that pointed away
 *   from the cause:
 *     - `text: "…"` (a string instead of the field map) was enumerated character by
 *       character, so the error listed the character indices "0", "4", "5", … as
 *       field names.
 *     - `{ myBlock }` (ES6 shorthand instead of the node) surfaced as
 *       `Unknown plan node type "undefined"`.
 *     - seven Header `navItems` against a capacity of five stopped the render
 *       AFTER the plan had already been authored around seven top-level areas.
 *   They are all statically detectable, so they must fail BEFORE the MCP call.
 *
 * The module must also stay PURE (no `figma`, no other runtime helper): the CLI
 * evaluates that one file standalone, which the drift test below relies on.
 */
const here = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(
	here,
	'../../db-ux-designer-powers/skills/generate-figma-screen/assets'
);
const RUNTIME = join(ASSETS, 'db-figma-runtime.min.js');
const VALIDATOR_SRC = join(ASSETS, 'src', '45-plan-validation.js');
const RENDERER_SRC = join(ASSETS, 'src', '50-plan-renderer.js');

const require_ = createRequire(import.meta.url);
const { buildMaps } = require_(join(ASSETS, 'build-registry-maps.cjs'));
const maps = buildMaps(join(ASSETS, 'registries'));

type Result = { valid: boolean; errors: string[] };
type Validate = (plan: unknown, maps: unknown) => Result;

/** The validator as the CLI loads it: this ONE file, evaluated on its own. */
const standalone = new Function(
	`${readFileSync(VALIDATOR_SRC, 'utf8')}\nreturn { validatePlanStatic, PV_EXPLICIT_TYPES };`
)() as { validatePlanStatic: Validate; PV_EXPLICIT_TYPES: string[] };

/** The validator as the RUNTIME ships it, via the built bundle's EDIT_API. */
let fromRuntime: Validate;

beforeAll(() => {
	(globalThis as any).figma = {
		variables: {
			getVariableByIdAsync: async () => null,
			importVariableByKeyAsync: async () => null
		},
		root: { children: [] }
	};
	fromRuntime = new Function(
		`${readFileSync(RUNTIME, 'utf8')};return EDIT_API;`
	)().validatePlanStatic;
});

const check = (plan: unknown): Result =>
	standalone.validatePlanStatic(plan, maps);
const codes = (plan: unknown) => check(plan).errors.join('\n');

const header = (navItems: string[] = ['Dashboard', 'Fahrzeuge']) => ({
	type: 'Header',
	appName: 'FleetFlow',
	navItems
});
const plan = (...layout: unknown[]) => ({
	screen: 'Test',
	pageType: 'dashboard',
	layout
});

describe('validatePlanStatic — plan shape', () => {
	it('accepts a minimal valid plan', () => {
		expect(check(plan(header()))).toEqual({ valid: true, errors: [] });
	});

	it('requires a flat layout array', () => {
		expect(codes({ screen: 'x' })).toMatch(/plan\.layout/);
		expect(
			codes({ screen: 'x', layout: { type: 'Screen', children: [] } })
		).toMatch(/FLAT array/);
	});

	it('rejects a mistyped pageType, which would silently disable the audits', () => {
		expect(codes({ ...plan(header()), pageType: 'dashbord' })).toMatch(
			/pageType: "dashbord" is unknown/
		);
	});
});

describe('validatePlanStatic — the defects that reached Figma', () => {
	it('rejects `text` as a string and names the field map', () => {
		const errors = codes(
			plan(header(), {
				type: 'Notification',
				props: { placement: 'standalone', media: 'icon' },
				text: 'Eine Wartung ist überfällig.'
			})
		);
		expect(errors).toMatch(/text: must be a field map/);
		// The old failure mode: character indices reported as field names.
		expect(errors).not.toMatch(/"0"/);
	});

	it('rejects a top-level `headline`, which the renderer never reads', () => {
		expect(
			codes(
				plan(header(), {
					type: 'Notification',
					props: { placement: 'standalone', media: 'icon' },
					headline: 'Hinweis'
				})
			)
		).toMatch(/headline: is not a plan field/);
	});

	it('names the shorthand cause for a node without `type`', () => {
		const block = { type: 'Card', props: { elevationLevel: '1' } };
		const errors = codes(
			plan(header(), {
				type: 'Section',
				children: [{ block }]
			})
		);
		expect(errors).toMatch(/has no `type`/);
		expect(errors).toMatch(/Fields present: block/);
		expect(errors).toMatch(/shorthand/);
	});

	it('rejects more navItems than the Navigation can show', () => {
		expect(maps.NAV_MAX_ITEMS).toBe(5);
		expect(
			codes(
				plan(
					header([
						'Dashboard',
						'Fahrzeuge',
						'Buchungen',
						'Fahrer',
						'Wartung & Schäden',
						'Auswertungen',
						'Informationen'
					])
				)
			)
		).toMatch(/7 items, but the Navigation can only show 5/);
		expect(
			check(
				plan(
					header([
						'Dashboard',
						'Fahrzeuge',
						'Buchungen',
						'Wartung & Schäden',
						'Mehr'
					])
				)
			).valid
		).toBe(true);
	});
});

describe('validatePlanStatic — registry resolution', () => {
	it('rejects unregistered tokens, icons, ratios and grid layouts', () => {
		const errors = codes(
			plan(header(), {
				type: 'Section',
				fills: 'color.chart.primary',
				children: [
					{ type: 'Icon', name: 'wrench_and_bolt' },
					{ type: 'Image', ratio: '4:3' },
					{ type: 'Grid', gridLayout: '20-20-20-20-20', children: [] }
				]
			})
		);
		expect(errors).toMatch(/fills: "color\.chart\.primary"/);
		expect(errors).toMatch(/is not a DB Theme icon/);
		expect(errors).toMatch(/is not a registered image ratio/);
		expect(errors).toMatch(/is not a Grid layout variant/);
	});

	it('rejects props that match no variant, mirroring resolveKey', () => {
		expect(
			codes(
				plan(header(), {
					type: 'Button',
					props: { variant: 'tertiary' },
					label: 'X'
				})
			)
		).toMatch(/no Button variant matches/);
		expect(
			check(
				plan(header(), {
					type: 'Button',
					props: { variant: 'brand', iconOnly: false },
					label: 'X'
				})
			).valid
		).toBe(true);
	});

	it('rejects a ProgressBar value the component has no variant for', () => {
		expect(maps.PROGRESS_VALUES).toEqual([25, 50, 75]);
		expect(
			codes(plan(header(), { type: 'ProgressBar', value: 63 }))
		).toMatch(/ships only 25, 50, 75/);
	});

	it('rejects a spacing step that is not a registered space token', () => {
		expect(
			codes(
				plan(header(), {
					type: 'ContainerVertical',
					gap: 'medium',
					children: []
				})
			)
		).toMatch(/is not a spacing step/);
	});

	it('rejects an Image src — it cannot be loaded in the sandbox', () => {
		expect(
			codes(
				plan(header(), {
					type: 'Image',
					ratio: '16:9',
					src: 'https://x/y.png'
				})
			)
		).toMatch(/src: is not supported/);
	});
});

describe('validatePlanStatic — a notification sits above its content', () => {
	const notification = (props?: Record<string, string>) => ({
		type: 'Notification',
		props: props ?? { placement: 'standalone', media: 'icon' },
		semantic: 'Warning',
		text: { headline: 'Fahrzeug wird gesperrt', description: 'Hinweis.' }
	});
	const radio = { type: 'Radio', props: { size: 'medium', width: 'full' } };
	const section = (children: unknown[]) => ({
		type: 'Section',
		fills: 'color.background.canvas',
		children
	});

	it('accepts it directly under the heading', () => {
		expect(
			check(
				plan(
					header(),
					section([
						{
							type: 'Heading',
							as: 'h2',
							content: 'Fahrbereitschaft'
						},
						{
							type: 'Body',
							content: 'Wie kann das Fahrzeug genutzt werden?'
						},
						notification(),
						radio
					])
				)
			).valid
		).toBe(true);
	});

	it('rejects it as the LAST element, below the content it refers to', () => {
		// The measured case: the warning sat under the three options it warns about.
		const errors = codes(
			plan(
				header(),
				section([
					{ type: 'Heading', as: 'h2', content: 'Fahrbereitschaft' },
					radio,
					radio,
					notification()
				])
			)
		);
		expect(errors).toMatch(/is the LAST element here/);
		expect(errors).toMatch(/2 content node\(s\)/);
	});

	it('accepts a notification that content follows — the referent is a matter of meaning', () => {
		// A dashboard alert legitimately follows the page-header row; a no-results notice
		// follows the filter bar it explains. Auto-moving on a whitelist basis got this wrong.
		expect(
			check(
				plan(
					header(),
					section([
						{
							type: 'ContainerHorizontal',
							spread: true,
							children: [
								{
									type: 'Heading',
									as: 'h1',
									content: 'Fuhrpark'
								},
								{
									type: 'Button',
									props: { variant: 'brand' },
									label: 'Schaden melden'
								}
							]
						},
						notification(),
						{ type: 'Grid', gridLayout: '50-50', children: [] }
					])
				)
			).valid
		).toBe(true);
	});

	it('accepts a closing notice under a heading with no other content', () => {
		expect(
			check(
				plan(
					header(),
					section([
						{ type: 'Heading', as: 'h2', content: 'Hinweis' },
						notification()
					])
				)
			).valid
		).toBe(true);
	});

	it('exempts viewport-level placements', () => {
		for (const placement of ['docked', 'overlay'])
			expect(
				check(
					plan(
						header(),
						section([
							radio,
							notification({ placement, media: 'icon' })
						])
					)
				).valid
			).toBe(true);
	});
});

describe('validatePlanStatic — no false positives', () => {
	it('treats `content` as text on Heading/Body and as a panel on Tabs', () => {
		expect(
			check(
				plan(header(), {
					type: 'Section',
					children: [
						{ type: 'Heading', as: 'h1', content: 'Titel' },
						{ type: 'Body', size: 'Small', content: 'Text' }
					]
				})
			).valid
		).toBe(true);
		expect(
			codes(
				plan(header(), {
					type: 'Tabs',
					tabs: [{ label: 'Eins', active: true }],
					content: { type: 'Nope' }
				})
			)
		).toMatch(/content: unknown type "Nope"/);
	});

	it('accepts every registered block and pattern as a plan fragment', () => {
		const pageTypes = [
			'dashboard',
			'contentpage',
			'form',
			'process',
			'modal'
		];
		const findings: string[] = [];
		for (const pageType of pageTypes) {
			const load = (file: string) =>
				JSON.parse(
					readFileSync(
						join(ASSETS, 'registries', pageType, `${file}.json`),
						'utf8'
					)
				);
			const blocks = load('blocks').blocks ?? {};
			const patterns = load('patterns').patterns ?? {};
			// Expand $refs so a fragment can be validated as the tree it renders.
			const expand = (node: any, seen = new Set<string>()): any => {
				if (Array.isArray(node))
					return node.map((n) => expand(n, seen));
				if (!node || typeof node !== 'object') return node;
				if (typeof node.$ref === 'string') {
					const ref = blocks[node.$ref] ?? patterns[node.$ref];
					if (!ref) throw new Error(`unknown $ref: ${node.$ref}`);
					if (seen.has(node.$ref))
						return { type: 'Body', content: '…' };
					return expand(ref.plan, new Set([...seen, node.$ref]));
				}
				return Object.fromEntries(
					Object.entries(node).map(([k, v]) => [k, expand(v, seen)])
				);
			};
			for (const [id, entry] of Object.entries<any>({
				...blocks,
				...patterns
			})) {
				const res = check({
					screen: id,
					pageType,
					layout: [expand(entry.plan)]
				});
				if (!res.valid)
					findings.push(
						`${pageType}/${id}: ${res.errors.join('; ')}`
					);
			}
		}
		expect(findings).toEqual([]);
	});
});

describe('render limits survive a Knowledge-Database regeneration', () => {
	/* WHY: components.json is FULLY regenerated by build-from-kb.cjs from the Knowledge Database,
	 * and the hand-curated fields it preserves are an explicit allowlist (labelNodePath, note,
	 * forbiddenFallback, deprecated sets, hand-written axes). A render limit stored there is
	 * dropped SILENTLY on the next regeneration — NAV_MAX_ITEMS would become null and the
	 * navigation check would simply stop firing, with no error anywhere. So the limit lives in the
	 * skill-owned constraints file, and these tests keep it there. */
	const registries = join(ASSETS, 'registries');
	const read = (file: string) =>
		JSON.parse(readFileSync(join(registries, file), 'utf8'));

	it('reads Navigation.maxItems from the skill-owned constraints file', () => {
		const constraints = read('component-constraints.json');
		expect(constraints.constraints.Navigation.maxItems).toBe(5);
		expect(maps.NAV_MAX_ITEMS).toBe(5);
	});

	it('keeps the limit OUT of the generated components.json', () => {
		const components = read('components.json');
		const navigation = components.components.Navigation;
		expect(navigation).toBeDefined();
		expect(navigation.maxItems).toBeUndefined();
	});

	it('fails loudly if the limit disappears, instead of disabling the check', () => {
		// Simulates the post-regeneration state: no limit -> the check must be visibly gone,
		// which this assertion documents. It is the reason the two tests above exist.
		const withoutLimit = { ...maps, NAV_MAX_ITEMS: null };
		const tooMany = plan(
			header(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
		) as unknown;
		expect(standalone.validatePlanStatic(tooMany, withoutLimit).valid).toBe(
			true
		);
		expect(standalone.validatePlanStatic(tooMany, maps).valid).toBe(false);
	});
});

describe('validatePlanStatic — one source of truth', () => {
	it('is identical in the built runtime and the standalone module', () => {
		const broken = plan(header(), { type: 'Nope' });
		expect(fromRuntime(broken, maps)).toEqual(check(broken));
	});

	it('knows every node type renderNode dispatches', () => {
		const src = readFileSync(RENDERER_SRC, 'utf8');
		const cases = [...src.matchAll(/^\t\tcase '([^']+)':/gm)].map(
			(m) => m[1]
		);
		expect(cases.length).toBeGreaterThan(15);
		// "Text" exists only to REJECT raw text nodes, so it must not be valid.
		const dispatched = cases.filter((c) => c !== 'Text');
		expect([...standalone.PV_EXPLICIT_TYPES].sort()).toEqual(
			[...new Set(dispatched)].sort()
		);
		expect(standalone.PV_EXPLICIT_TYPES).not.toContain('Text');
		expect(codes(plan(header(), { type: 'Text', content: 'x' }))).toMatch(
			/raw text nodes are forbidden/
		);
	});
});
