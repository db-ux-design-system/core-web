/* =============================================================================
 * 45-plan-validation.js — STATIC validation of a Composition Plan.
 * -----------------------------------------------------------------------------
 * WHY THIS EXISTS
 *   Most failed renders are statically detectable BEFORE the use_figma call: a
 *   node without `type` (an ES6 shorthand `{block}` instead of the node), a
 *   `text` STRING where a field map belongs, an unregistered token or icon, more
 *   nav items than the Navigation can show. Those used to surface only from the
 *   Figma sandbox — after model output was spent, and for a mistyped page type
 *   not at all (a typo silently disables the page-type audit checks).
 *   Phase 3 of SKILL.md already demanded most of these checks in prose. Prose
 *   rules get skipped under load; a runnable check does not.
 *
 * TWO CONSUMERS, ONE SOURCE OF TRUTH
 *   1. `renderPlan` calls this FIRST and reports EVERY violation at once,
 *      instead of stopping at the first one halfway through a render.
 *   2. `assets/validate-plan.cjs` (`pnpm plan:lint`) runs the SAME function in
 *      Node before the plan is ever pasted — free, instant, and it catches a JS
 *      syntax error in the plan file as a by-product of loading it.
 *   Hence this module MUST stay PURE: no `figma`, no other runtime helper, no
 *   top-level side effects — `validate-plan.cjs` evaluates this ONE file
 *   standalone. Every piece of registry data arrives through `maps`.
 *
 * SCOPE — static only. Anything that needs the rendered tree or the live
 * instance (componentProperties, geometry, zebra, chart baselines, leftover
 * placeholder copy) stays in `auditTree()`. Re-implementing those rules here
 * would create a second, drifting source of truth; this function deliberately
 * checks only what a plan can be wrong about on its own.
 *
 * Identifiers are `PV_`/`pv`-prefixed: the bundle is ONE concatenated script, so
 * a duplicate top-level name would be a SyntaxError.
 * ========================================================================== */

/* Plan node types `renderNode` dispatches explicitly (its `case` labels). ANY
 * name in COMPONENTS is additionally valid through the generic default branch;
 * both sets are unioned below. "Text" is deliberately absent — that case exists
 * only to reject raw text nodes and point at Heading/Body.
 * Kept in sync with the switch by figma-runtime-plan-validation.spec.ts. */
const PV_EXPLICIT_TYPES = [
	'Heading',
	'Body',
	'Header',
	'Divider',
	'Button',
	'Tag',
	'Badge',
	'Section',
	'Tabs',
	'Card',
	'ContainerVertical',
	'ContainerHorizontal',
	'Grid',
	'Icon',
	'ChartBar',
	'ProgressBar',
	'Dialog',
	'Upload',
	'Pagination',
	'Image'
];

const PV_PAGE_TYPES = ['dashboard', 'contentpage', 'form', 'process', 'modal'];

/* `props` is handed straight to resolveKey() for every other component, so an
 * unmatched axis there is a real hard stop. These three are built WITHOUT
 * node.props (buildSection / the Divider case / buildTabs), so checking their
 * axes would report a mismatch the renderer never has. */
const PV_PROPS_NOT_AXES = ['Section', 'Divider', 'Tabs'];

/* Plan fields that carry a spacing STEP (`sm`, `2xl`, …) rather than a token
 * name. Card/Section `spacing` uses a different vocabulary (none/small/medium/
 * large) and is intentionally not listed. */
const PV_STEP_FIELDS = ['gap', 'gridGap', 'padding'];

function pvIsPlainObject(value) {
	return !!value && typeof value === 'object' && !Array.isArray(value);
}

function pvIsPositiveNumber(value) {
	return typeof value === 'number' && isFinite(value) && value > 0;
}

/** Spacing steps derived from the registered `space.*` variables, plus `none`. */
function pvSpacingSteps(maps) {
	const steps = ['none'];
	for (const name of Object.keys(maps.VAR_KEYS || {}))
		if (name.indexOf('space.') === 0) {
			const step = name.slice(6);
			if (steps.indexOf(step) === -1) steps.push(step);
		}
	return steps;
}

/* Mirrors resolveKey() exactly: every prop key must equal the same axis on ONE
 * variant (string-compared), so a key the axes do not have can never match. */
function pvVariantMatches(entry, props) {
	const keys = Object.keys(props);
	if (keys.length === 0) return true;
	return (entry.variants || []).some((variant) =>
		keys.every(
			(key) => String((variant.axes || {})[key]) === String(props[key])
		)
	);
}

function pvCheckNode(node, at, maps, known, add) {
	if (!pvIsPlainObject(node)) {
		add(
			at,
			`must be a plan node object, got ${Array.isArray(node) ? 'an array' : typeof node}.`
		);
		return;
	}
	if (typeof node.type !== 'string' || !node.type) {
		// The classic cause is an ES6 shorthand: `{ myBlock }` builds
		// { myBlock: <node> } instead of inserting the node itself.
		add(
			at,
			`has no \`type\`. Fields present: ${Object.keys(node).join(', ') || 'none'}. A node must be e.g. { type:"Card", … } — check for an accidental shorthand like { myBlock } instead of myBlock.`
		);
		return;
	}
	if (!known.has(node.type)) {
		add(
			at,
			node.type === 'Text'
				? 'type "Text" is not renderable — raw text nodes are forbidden. Use { type:"Heading", as:… } or { type:"Body", size:… }.'
				: `unknown type "${node.type}". It resolves neither to a renderNode case nor to a registered component.`
		);
		return;
	}

	// --- text fields -------------------------------------------------------
	// `text` is a MAP of component TEXT property -> value. A string here used to
	// be enumerated character by character, which reported the character indices
	// as field names ("0", "4", "5", …) and hid the real mistake.
	if (node.text !== undefined) {
		if (!pvIsPlainObject(node.text))
			add(
				at + '.text',
				`must be a field map like text: { headline: "…", text: "…" }, got ${Array.isArray(node.text) ? 'an array' : typeof node.text}. A single visible label is \`label\`, not \`text\`.`
			);
		else if (Object.keys(node.text).length === 0)
			add(at + '.text', 'is empty — drop it or fill it.');
		else
			for (const [field, value] of Object.entries(node.text))
				if (value === null || typeof value === 'object')
					add(at + '.text.' + field, 'must be a string or number.');
	}
	// Top-level `headline` is never read by the renderer, so it silently leaves
	// the library's own "Headline" copy on canvas.
	if (node.headline !== undefined)
		add(
			at + '.headline',
			'is not a plan field — a component\'s headline goes into the field map: text: { headline: "…" }.'
		);

	// --- tokens ------------------------------------------------------------
	if (node.fills !== undefined && !(node.fills in (maps.VAR_KEYS || {})))
		add(at + '.fills', `"${node.fills}" is not a registered color token.`);
	if (node.radius !== undefined && !(node.radius in (maps.RADIUS_KEYS || {})))
		add(
			at + '.radius',
			`"${node.radius}" is not a registered radius token.`
		);
	if (node.style !== undefined)
		add(
			at + '.style',
			'Figma text styles are not supported. Use a Body or Heading component and select its `emphasis` instead.'
		);
	if (
		(node.type === 'Body' || node.type === 'Heading') &&
		node.emphasis !== undefined &&
		['low', 'default', 'high'].indexOf(
			String(node.emphasis).toLowerCase()
		) === -1
	)
		add(
			at + '.emphasis',
			`"${node.emphasis}" is unknown (Low | Default | High).`
		);
	const steps = pvSpacingSteps(maps);
	for (const field of PV_STEP_FIELDS) {
		const value = node[field];
		if (value !== undefined && steps.indexOf(String(value)) === -1)
			add(
				at + '.' + field,
				`"${value}" is not a spacing step (${steps.join(' | ')}).`
			);
	}

	// --- per-type constraints ----------------------------------------------
	/* `spread` distributes children to BOTH ends, so it needs at least two of them. With one
	 * child Figma parks it at the START — which is how a step frame whose `Zurück` was dropped
	 * shipped its only action flush left. Force the plan to say what it means: a single action is
	 * right-aligned. (The runtime additionally corrects this at render time, but a plan that says
	 * "distribute" while meaning "right" stays a plan bug.) */
	if (
		(node.spread === true || node.gap === 'auto') &&
		Array.isArray(node.children) &&
		node.children.length < 2
	)
		add(
			at,
			`\`spread\` distributes children to both ends but this row has ${node.children.length}. Use align: "right" for a single ACTION (that is where one action belongs) or align: "left" to keep a single non-action at the start — with one child, spread renders it flush LEFT.`
		);

	if (node.type === 'Header') {
		const items = Array.isArray(node.navItems) ? node.navItems : [];
		if (node.navItems !== undefined && !Array.isArray(node.navItems))
			add(at + '.navItems', 'must be an array of page names.');
		const max = maps.NAV_MAX_ITEMS;
		if (pvIsPositiveNumber(max) && items.length > max)
			add(
				at + '.navItems',
				`${items.length} items, but the Navigation can only show ${max}. Reconcile the IA (sub-navigation, a tab inside a page, or an overflow entry) and state the change — a dropped nav item makes a page unreachable while the screen still looks fine.`
			);
	}
	if (node.type === 'Icon' && node.name !== undefined) {
		if (!(node.name in (maps.ICON_KEYS || {})))
			add(
				at + '.name',
				`"${node.name}" is not a DB Theme icon. An unverified name renders the placeholder glyph.`
			);
	}
	if (node.type === 'Image') {
		if (node.src !== undefined)
			add(
				at + '.src',
				'is not supported — figma.createImageAsync does not exist in the use_figma sandbox. Ship the image EMPTY with a registered `ratio`, or reference an asset already in the file via `imageHash`.'
			);
		if (
			node.ratio !== undefined &&
			!(node.ratio in (maps.IMAGE_RATIOS || {}))
		)
			add(
				at + '.ratio',
				`"${node.ratio}" is not a registered image ratio (${Object.keys(maps.IMAGE_RATIOS || {}).join(' | ')}).`
			);
	}
	if (
		node.type === 'Grid' &&
		node.gridLayout !== undefined &&
		(maps.GRID_LAYOUTS || []).indexOf(String(node.gridLayout)) === -1
	)
		add(
			at + '.gridLayout',
			`"${node.gridLayout}" is not a Grid layout variant (${(maps.GRID_LAYOUTS || []).join(' | ')}). An unknown value falls back to the default 3-column variant and leaves visible empty slots.`
		);
	if (node.type === 'ChartBar') {
		if (!pvIsPositiveNumber(node.height))
			add(
				at + '.height',
				'requires a positive number — only the bar HEIGHT encodes the value.'
			);
		const hasWidth = pvIsPositiveNumber(node.width);
		if (hasWidth === (node.fillWidth === true))
			add(
				at,
				'needs EITHER fillWidth: true (the rule — a graph spans the full width available) OR exactly one positive `width`.'
			);
		if (node.fills === undefined)
			add(at + '.fills', 'requires a registered fill token.');
	}
	if (node.type === 'ProgressBar') {
		const allowed = maps.PROGRESS_VALUES || [];
		if (allowed.length && allowed.indexOf(node.value) === -1)
			add(
				at + '.value',
				`${JSON.stringify(node.value)} has no variant — the component ships only ${allowed.join(', ')}. Pick the nearest step and phrase the caption to match; never draw a bar.`
			);
	}

	// --- variant axes -------------------------------------------------------
	if (node.props !== undefined) {
		if (!pvIsPlainObject(node.props))
			add(at + '.props', 'must be an object of variant axes.');
		else {
			const entry = (maps.COMPONENTS || {})[node.type];
			if (
				entry &&
				PV_PROPS_NOT_AXES.indexOf(node.type) === -1 &&
				!pvVariantMatches(entry, node.props)
			)
				add(
					at + '.props',
					`no ${node.type} variant matches ${JSON.stringify(node.props)}. Report a missing variant; never approximate.`
				);
		}
	}

	/* `content` is overloaded on purpose: TEXT for Heading/Body (the common case),
	 * and the active Tab Panel body for Tabs. Treating it as children everywhere
	 * would reject every heading. */
	if (node.content !== undefined) {
		if (node.type === 'Tabs') {
			const panels = Array.isArray(node.content)
				? node.content
				: [node.content];
			panels.forEach((kid, index) =>
				pvCheckNode(
					kid,
					`${at}.content${Array.isArray(node.content) ? `[${index}]` : ''}`,
					maps,
					known,
					add
				)
			);
		} else if (
			typeof node.content !== 'string' &&
			typeof node.content !== 'number'
		)
			add(
				at + '.content',
				'must be the text content as a string (Heading/Body).'
			);
	}

	// --- recurse ------------------------------------------------------------
	if (node.children !== undefined) {
		if (!Array.isArray(node.children))
			add(at + '.children', 'must be an array of plan nodes.');
		else {
			pvCheckNotificationOrder(node.children, at, add);
			node.children.forEach((kid, index) =>
				pvCheckNode(kid, `${at}.children[${index}]`, maps, known, add)
			);
		}
	}
}

/* A standalone Notification belongs ABOVE the content it refers to.
 * -----------------------------------------------------------------------------
 * A notice is a precondition for reading or acting on what follows, so it is read FIRST — directly
 * under the heading, before the content. At the END of a block it is found only after the user has
 * already worked through, or acted on, the very thing it qualifies. Measured cases: "Fahrzeug wird
 * automatisch gesperrt" sat BELOW the three options it warns about, and "Noch nicht gespeichert"
 * below the summary it applies to.
 *
 * WHAT IS CHECKED, and why not more: the referent of a notice is a matter of MEANING, which a
 * validator cannot know. Whitelisting what may PRECEDE a notification was tried and is wrong — a
 * dashboard's alert legitimately follows the page-header row, a confirmation's follows the success
 * icon and headline, and a no-results notice follows the filter bar it explains. Auto-moving on
 * that basis pushed three notices above content they belonged under. So only the UNAMBIGUOUS
 * defect is reported: the notification is the LAST element of its container while real content
 * precedes it. Nothing follows it, so it can only be read too late.
 *
 * Exempt: `docked` and `overlay` are viewport-level placements (a global alert, a toast) that carry
 * their own position. */
const PV_TEXT_TYPES = ['Heading', 'Body'];
function pvCheckNotificationOrder(children, at, add) {
	const visible = children.filter((c) => c != null);
	for (let i = 0; i < visible.length; i++) {
		const kid = visible[i];
		if (!pvIsPlainObject(kid) || kid.type !== 'Notification') continue;
		const placement = (kid.props ?? {}).placement;
		if (placement && placement !== 'standalone') continue;
		if (i !== visible.length - 1) continue; // content follows it — fine
		// A heading or lead copy above a closing notice is not content it hides behind.
		const contentBefore = visible
			.slice(0, i)
			.filter(
				(sibling) =>
					!(
						pvIsPlainObject(sibling) &&
						PV_TEXT_TYPES.indexOf(sibling.type) !== -1
					)
			);
		if (contentBefore.length === 0) continue;
		add(
			`${at}.children[${i}]`,
			`a standalone Notification is the LAST element here, below the ${contentBefore.length} content node(s) it refers to (first: "${
				pvIsPlainObject(contentBefore[0])
					? contentBefore[0].type
					: typeof contentBefore[0]
			}"). A notice is a precondition for reading or acting, so it belongs ABOVE the content — between the heading and the content. Move it up, or use placement "docked"/"overlay" for a viewport-level alert.`
		);
	}
}

/**
 * Validate a Composition Plan against the registries WITHOUT touching Figma.
 *
 * @param plan the Composition Plan object.
 * @param maps registry data: COMPONENTS, VAR_KEYS, RADIUS_KEYS, ICON_KEYS,
 *   IMAGE_RATIOS, GRID_LAYOUTS, NAV_MAX_ITEMS, PROGRESS_VALUES.
 *   Inside the runtime these are the injected literals; the CLI builds the same
 *   objects from assets/registries via build-registry-maps.cjs.
 * @returns { valid, errors } — ALL findings, so one pass fixes the whole plan.
 */
function validatePlanStatic(plan, maps) {
	const m = maps || {};
	const errors = [];
	const add = (where, message) => errors.push(where + ': ' + message);

	if (!pvIsPlainObject(plan)) {
		add('plan', 'must be an object with a `layout` array.');
		return { valid: false, errors };
	}
	if (!Array.isArray(plan.layout))
		add(
			'plan.layout',
			'is required and must be a FLAT array of top-level nodes. Do not wrap it as { type:"Screen", children:[…] }.'
		);
	if (
		plan.pageType !== undefined &&
		PV_PAGE_TYPES.indexOf(String(plan.pageType)) === -1
	)
		add(
			'plan.pageType',
			`"${plan.pageType}" is unknown (${PV_PAGE_TYPES.join(' | ')}). A typo silently disables the page-type audit checks.`
		);
	if (plan.screen !== undefined && typeof plan.screen !== 'string')
		add('plan.screen', 'must be the frame name as a string.');

	/* Renderable node types: the explicit renderNode cases, every Core component (generic leaf
	 * path) and every registered Core Lab component (generic concept path). The last set is what
	 * makes the Knowledge Database's Core Lab entries usable — without it a registered component
	 * would resolve in Figma but be rejected here. */
	const known = new Set(
		PV_EXPLICIT_TYPES.concat(
			Object.keys(m.COMPONENTS || {}),
			Object.keys(m.CONCEPT_PLAN_TYPES || {})
		)
	);
	if (Array.isArray(plan.layout))
		plan.layout.forEach((node, index) =>
			pvCheckNode(node, `layout[${index}]`, m, known, add)
		);

	return { valid: errors.length === 0, errors };
}
