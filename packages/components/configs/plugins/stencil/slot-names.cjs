/**
 * Renames a duplicated named slot for the Stencil output, so that every rendered
 * position gets its own slot name.
 *
 * React, Vue and Angular render slot content once per site, so the same slot name
 * may legitimately appear twice in a `.lite.tsx` template. Web components cannot
 * do that: slotted content is a single DOM node and therefore exists at exactly
 * one position, and which of the duplicated slots receives it is up to the
 * compiler — Stencil changed it from first-wins to last-wins in 4.44.0. See
 * "One Slot Name = One Position" in packages/components/AGENTS.md.
 *
 * Each rule renames only the occurrence below a structural anchor, so the other
 * occurrences of the same name stay untouched.
 *
 * @type {Record<string, {slot: string, to: string, withinClass?: string, withinComponent?: string}[]>}
 */
const SLOT_RENAMES = {
	DBHeader: [
		{
			slot: 'metaNavigation',
			to: 'mobileMetaNavigation',
			withinClass: 'db-header-drawer-navigation'
		},
		{
			slot: 'secondaryAction',
			to: 'mobileSecondaryAction',
			withinComponent: 'DBDrawerFooter'
		}
	]
};

/**
 * @param node {import('@builder.io/mitosis').MitosisNode}
 * @param rule {{withinClass?: string, withinComponent?: string}}
 * @returns {boolean} whether this node opens the anchored subtree
 */
const isAnchor = (node, rule) => {
	if (rule.withinComponent) {
		return node.name === rule.withinComponent;
	}

	return Boolean(
		rule.withinClass &&
		String(node.properties?.class ?? '')
			.split(' ')
			.includes(rule.withinClass)
	);
};

/**
 * Renames matching `<Slot name="…" />` nodes inside the anchored subtree.
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 * @param rule {{slot: string, to: string, withinClass?: string, withinComponent?: string}}
 * @param anchored {boolean} whether an ancestor already matched the anchor
 * @returns {number} how many slots were renamed
 */
const renameSlots = (node, rule, anchored = false) => {
	if (!node || node['@type'] !== '@builder.io/mitosis/node') return 0;

	const insideAnchor = anchored || isAnchor(node, rule);
	let renamed = 0;

	if (
		insideAnchor &&
		node.name === 'Slot' &&
		node.properties?.name === rule.slot
	) {
		node.properties.name = rule.to;
		renamed++;
	}

	for (const child of node.children ?? []) {
		renamed += renameSlots(child, rule, insideAnchor);
	}

	// Slot content passed to a child component (e.g. the drawer's `footer`) lives
	// in `slots` until the stencil slots plugin moves it into `children`.
	for (const binding of Object.values(node.slots ?? {})) {
		for (const bind of binding) {
			renamed += renameSlots(bind, rule, insideAnchor);
		}
	}

	return renamed;
};

/**
 * Mitosis plugin that applies the configured slot renames to the Stencil output.
 *
 * Registered for the Stencil target only (see `configs/stencil/index.cjs`).
 *
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'stencil-slot-names',
	json: {
		post: (json) => {
			const rules = SLOT_RENAMES[json.name];
			if (!rules) return json;

			for (const rule of rules) {
				const renamed = (json.children ?? []).reduce(
					(sum, child) => sum + renameSlots(child, rule),
					0
				);

				// A rename that silently matches nothing is how this regresses, so
				// fail the build instead of shipping a duplicated slot name.
				if (renamed !== 1) {
					const anchor =
						rule.withinComponent ?? `.${rule.withinClass}`;
					throw new Error(
						`[stencil-slot-names] Expected exactly one "${rule.slot}" slot below "${anchor}" in ${json.name}, found ${renamed}. Update the rule in configs/plugins/stencil/slot-names.cjs.`
					);
				}
			}

			return json;
		}
	}
});
