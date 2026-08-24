import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Guards the Core Lab (conceptComponents) coverage of the component registry.
 *
 * WHY: `conceptComponents` used to be passed through verbatim by build-from-kb.cjs
 * (`conceptComponents: current.conceptComponents`), so Core Lab never came from the Knowledge
 * Database even though the KB carries a component-set key for every entry. The registry was a
 * hand-curated subset of 6, which the skill read as the whole truth — an upload was declared "not
 * in the design system" and rebuilt from an Image grid plus a Button while `🧪 Upload` existed, and
 * a segmented control was assembled from Tag pairs while `SegmentedButton` existed.
 *
 * These tests fail when the registry drifts back into a subset, and they fail on a registered
 * component that no plan could ever use.
 */
const ASSETS = join(
	dirname(fileURLToPath(import.meta.url)),
	'../../db-ux-designer-powers/skills/generate-figma-screen/assets'
);
const read = (file: string) =>
	JSON.parse(readFileSync(join(ASSETS, 'registries', file), 'utf8'));

const registry = read('components.json');
const catalog = read('lab-components-catalog.json');
const concept: Record<string, any> = Object.fromEntries(
	Object.entries(registry.conceptComponents).filter(
		([k]) => !k.startsWith('_')
	)
);

const require_ = createRequire(import.meta.url);
const { buildMaps } = require_(join(ASSETS, 'build-registry-maps.cjs'));
const maps = buildMaps(join(ASSETS, 'registries'));

/* Catalog entries the registry legitimately does not carry, each with a reason. Shrinking this
 * list is the point; growing it needs a reason that is not "nobody got around to it". */
const NOT_REGISTERED: Record<string, string> = {
	heading:
		'registered as "Heading" — the KB has no figma.json for it, so the key stays hand-curated'
};

describe('conceptComponents — Core Lab coverage', () => {
	it('registers every Core Lab component the catalog lists', () => {
		const registeredCodeNames = new Set(
			Object.values(concept).map((d) => d.codeName)
		);
		const missing = Object.keys(catalog.components).filter(
			(name) =>
				!registeredCodeNames.has(name) && !(name in NOT_REGISTERED)
		);
		expect(missing).toEqual([]);
	});

	it('keeps the components that were missing before', () => {
		// The 11 that had a key in the KB and no registry entry at all.
		for (const name of [
			'Breadcrumb',
			'ButtonGroup',
			'Calendar',
			'DynamicButton',
			'Footer',
			'List',
			'LoadingIndicator',
			'Pulse',
			'SegmentedButton',
			'SplitButton',
			'ToggleButton',
			'Upload'
		])
			expect(concept[name], `${name} is not registered`).toBeDefined();
	});
});

describe('conceptComponents — every entry is actually usable', () => {
	it('is addressable as a plan node type', () => {
		for (const [name, def] of Object.entries(concept)) {
			if (!def.setKey) continue; // several sets, none chosen — not addressable yet
			const planTypes = Array.isArray(def.planNodeType)
				? def.planNodeType
				: [def.planNodeType || name];
			for (const planType of planTypes)
				expect(
					maps.CONCEPT_PLAN_TYPES[planType],
					`plan node "${planType}" does not resolve`
				).toBe(name);
		}
	});

	it('carries a Figma anchor: a setKey or several named sets', () => {
		for (const [name, def] of Object.entries(concept))
			expect(
				Boolean(def.setKey) || Boolean(def.figmaSets),
				`${name} has no Figma key`
			).toBe(true);
	});

	it('flags a variant-less COMPONENT so the right import call is used', () => {
		// importComponentSetByKeyAsync reports a plain COMPONENT's key as "not found", which
		// reads exactly like a stale key. `List` is the one that cost that detour.
		expect(concept.List.nodeType).toBe('COMPONENT');
		expect(maps.CONCEPT_NODE_TYPES.List).toBe('COMPONENT');
		expect(concept.List.axes).toBeUndefined();
	});

	it('marks axes that came from the KB and were never verified live', () => {
		// The KB's Core Lab axes disagree with the library (Container "Vertical|Horizontal" vs
		// the live "Column|Row"), so an unverified set must be visible as such.
		const unverified = Object.keys(concept).filter(
			(k) => concept[k].axesUnverified
		);
		expect(unverified).toEqual(['LoadingIndicator']);
		// The runtime-critical ones keep their hand-verified axes.
		expect(concept.Container.axes.Direction).toEqual([
			'(Def) Column',
			'Row'
		]);
		expect(concept.Grid.axes.Height).toEqual(['Auto', '100%']);
		expect(concept.Dialog.axes.Backdrop).toEqual(['true', 'false']);
	});
});
