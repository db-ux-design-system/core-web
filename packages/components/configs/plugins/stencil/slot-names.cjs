const fs = require('node:fs');
const path = require('node:path');

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
 * `description` is added to the stencil output's `model.ts` as a member of the
 * component's props type. The custom elements manifest resolves a slot's
 * description from the member of that type with the same name (see
 * `output/stencil/scripts/packageLinkPhase.js`), so without it the published
 * manifest, `web-types.json` and VS Code data would document the new slot with a
 * `TODO` placeholder. The member is types-only: stencil props come from the
 * generated `@Prop()` declarations, so this adds no attribute to the element.
 *
 * @type {Record<string, {slot: string, to: string, description: string, withinClass?: string, withinComponent?: string}[]>}
 */
const SLOT_RENAMES = {
	DBHeader: [
		{
			slot: 'metaNavigation',
			to: 'mobileMetaNavigation',
			withinClass: 'db-header-drawer-navigation',
			description:
				'Slot to pass in a meta navigation for the drawer, shown below the navigation.\nOnly rendered below the `md` breakpoint, or when `forceMobile` is set.\n\nThe header bar has its own `metaNavigation` slot, because a slotted element\nexists at exactly one position in the DOM.'
		},
		{
			slot: 'secondaryAction',
			to: 'mobileSecondaryAction',
			withinComponent: 'DBDrawerFooter',
			description:
				'Slot to pass one or more elements like DBButton (e.g. profile, language, etc.) as\nsecondary action for the drawer, shown at the bottom. Only rendered below the `md`\nbreakpoint, or when `forceMobile` is set.\n\nThe header bar has its own `secondaryAction` slot, because a slotted element\nexists at exactly one position in the DOM.'
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
 * Adds the renamed slots as documented members of the component's props type in
 * the stencil output, so the custom elements manifest can resolve a description
 * for them.
 *
 * @param outputDir {string} absolute path to the stencil output root
 * @param componentName {string} the Mitosis component name, e.g. `DBHeader`
 * @param rules {{to: string, description: string}[]}
 * @returns {boolean} `true` if the members were written
 */
const documentRenamedSlots = (outputDir, componentName, rules) => {
	const folder = componentName
		.replace(/^DB/, '')
		.replace(/([A-Z])/g, (match, char, index) =>
			index === 0 ? char.toLowerCase() : `-${char.toLowerCase()}`
		);
	const file = path.resolve(outputDir, 'src/components', folder, 'model.ts');
	if (!fs.existsSync(file)) {
		console.warn(
			`[stencil-slot-names] "${file}" not found — skipping slot documentation`
		);
		return false;
	}

	const anchor = `export type ${componentName}DefaultProps = {`;
	const content = fs.readFileSync(file, 'utf-8');
	if (!content.includes(anchor)) {
		throw new Error(
			`[stencil-slot-names] Could not find "${anchor}" in ${file}. Update documentRenamedSlots() in configs/plugins/stencil/slot-names.cjs.`
		);
	}

	const members = rules
		.map(
			(rule) =>
				`\n\t/**\n${rule.description
					.split('\n')
					.map((line) => `\t * ${line}`.trimEnd())
					.join('\n')}\n\t */\n\t${rule.to}?: any;`
		)
		.join('');

	fs.writeFileSync(file, content.replace(anchor, anchor + members), 'utf-8');
	return true;
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
	build: {
		post: (targetContext, files) => {
			if (!files) return;

			const anyFile =
				(files.nonComponentFiles || [])[0] ||
				(files.componentFiles || [])[0];
			if (!anyFile) return;

			for (const [componentName, rules] of Object.entries(SLOT_RENAMES)) {
				documentRenamedSlots(anyFile.outputDir, componentName, rules);
			}
		}
	},
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
