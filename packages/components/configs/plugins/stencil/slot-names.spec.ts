import { describe, expect, it } from 'vitest';

// The plugin is CommonJS; import the factory for unit testing.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const slotNamesPlugin = require('./slot-names.cjs');

const node = (props: Record<string, unknown>): any => ({
	'@type': '@builder.io/mitosis/node',
	name: 'div',
	properties: {},
	bindings: {},
	children: [],
	...props
});

const slot = (name: string) => node({ name: 'Slot', properties: { name } });

/**
 * Mirrors DBHeader: `metaNavigation` in the header bar and again inside the
 * drawer, `secondaryAction` in the action container and again in the drawer footer.
 */
const headerJson = () => ({
	name: 'DBHeader',
	children: [
		node({
			properties: { class: 'db-header-meta-navigation' },
			children: [slot('metaNavigation')]
		}),
		node({
			properties: { class: 'db-header-secondary-action' },
			children: [slot('secondaryAction')]
		}),
		node({
			name: 'DBDrawer',
			children: [
				node({
					properties: { class: 'db-header-drawer-navigation' },
					children: [
						node({
							properties: {
								class: 'db-header-meta-navigation'
							},
							children: [slot('metaNavigation')]
						})
					]
				})
			],
			slots: {
				footer: [
					node({
						name: 'DBDrawerFooter',
						children: [slot('secondaryAction')]
					})
				]
			}
		})
	]
});

const slotNames = (tree: any, found: string[] = []): string[] => {
	if (tree?.name === 'Slot') found.push(tree.properties.name);
	for (const child of tree?.children ?? []) slotNames(child, found);
	for (const binding of Object.values<any>(tree?.slots ?? {})) {
		for (const bind of binding) slotNames(bind, found);
	}

	return found;
};

describe('stencil-slot-names', () => {
	it('renames only the occurrences below the configured anchors', () => {
		const json = headerJson();

		slotNamesPlugin().json.post(json);

		expect(slotNames(json as any)).toEqual([
			// header bar keeps the original names
			'metaNavigation',
			'secondaryAction',
			// drawer navigation and drawer footer get their own names
			'mobileMetaNavigation',
			'mobileSecondaryAction'
		]);
	});

	it('leaves components without rules untouched', () => {
		const json = { name: 'DBCard', children: [slot('metaNavigation')] };

		slotNamesPlugin().json.post(json);

		expect(slotNames(json as any)).toEqual(['metaNavigation']);
	});

	it('throws when an anchor no longer matches, instead of skipping silently', () => {
		const json = headerJson();
		// Simulates renaming the drawer container class without updating the rule.
		json.children[2].children[0].properties.class = 'db-header-drawer-nav';

		expect(() => slotNamesPlugin().json.post(json)).toThrow(
			/Expected exactly one "metaNavigation" slot below "\.db-header-drawer-navigation"/
		);
	});
});
