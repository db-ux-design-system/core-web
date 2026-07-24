/* =============================================================================
 * DB UX Figma Render Runtime — SELF-CONTAINED, PASTE-VERBATIM into use_figma.
 * -----------------------------------------------------------------------------
 * WHY THIS EXISTS
 *   The render step used to be hand-written imperative Figma code inside every
 *   use_figma call. Strong models recovered from the Figma Plugin API's sharp
 *   edges by trial-and-error; weaker ("auto") models did not and produced the
 *   same failures over and over:
 *     1. setBoundVariable("fills", v)            -> WRONG. Must bind on the paint.
 *     2. cached SLOT ref used after setProperties -> "Node with id ... not found".
 *     3. resize() after primaryAxisSizingMode=AUTO -> silently resets to FIXED
 *        (screen root collapses to height 1).
 *     4. card set to FILL against a collapsed grid row -> content overflows.
 *     5. grid rows collapse when their cells stay FILL.
 *
 *   This runtime encapsulates EVERY one of those. The model's only job is to
 *   produce a declarative Composition Plan (JSON) and call renderPlan(PLAN).
 *   No ad-hoc node code. That is what makes the output model-independent.
 *
 * USAGE (inside a single use_figma call):
 *   // 1) paste this whole file
 *   // 2) const PLAN = { screen, targetNodeId, layout:[...], variables:[...] };
 *   // 3) const res = await renderPlan(PLAN);
 *   // 4) return JSON.stringify(res.audit);   // {valid, violations}
 *
 * The plan schema is documented at the bottom (see PLAN SCHEMA).
 * Key maps are a faithful mirror of the registries in ../registries.
 * If a registry key changes, regenerate the corresponding entry here.
 * ========================================================================== */

// Tokens that MUST NOT back a surface (accent-only). Fail fast if misused as a fill.
/* @db-maps-inject — build-runtime.cjs replaces this with emitMapsSource() */
const SURFACE_FORBIDDEN = new Set(['color.brand.origin']);

// name -> key with normalization (_, -, space equivalent, case-insensitive).
const iconKeyByName = (name) => {
	if (!name || typeof name !== 'string') return null;
	const norm = (s) => s.toLowerCase().replace(/[\s-]+/g, '_');
	const target = norm(name);
	if (ICON_KEYS[target]) return ICON_KEYS[target];
	for (const k in ICON_KEYS) if (norm(k) === target) return ICON_KEYS[k];
	return null;
};
const TEXT_ALIGN_LABELS = {
	left: '(Def) Left',
	center: 'Center',
	right: 'Right'
};

// Library components rendered as leaf instances that should FILL their container width
// by default (form fields, notifications, etc.). Buttons/Tags/Badges hug and are excluded.
const FILL_DEFAULT = new Set([
	'Input',
	'Textarea',
	'Select',
	'Notification',
	'Infotext',
	'Accordion'
]);

// Local layout primitives. Resolved PORTABLY: matched by NAME (normalized, so emoji /
// slashes / spacing don't matter), with the original file's node id only as a fast hint.
// `idHint` makes it instant in the source file; `match` makes it work in ANY file that
// has the DB UX layout primitives — so the runtime is not bound to one Figma file.
const LOCAL = {
	Grid: {
		idHint: '23:4017',
		match: 'grid',
		slots: ['Slot-1', 'Slot-2', 'Slot-3', 'Slot-4']
	},
	ContainerVertical: {
		idHint: '29:3988',
		match: 'containervertical',
		slot: 'Slot'
	},
	ContainerHorizontal: {
		idHint: '29:3989',
		match: 'containerhorizontal',
		slot: 'Slot'
	}
};

/* -----------------------------------------------------------------------------
 * LOW-LEVEL HELPERS — each encapsulates a specific Figma API gotcha.
 * -------------------------------------------------------------------------- */

/** STOP with a clear, actionable message (fail fast instead of silent bad render). */
function stop(msg) {
	throw new Error('[STOP] ' + msg);
}

/** Guarded read: some instance-internal node ids regenerate on layout and throw on access. */
const safe = (fn, dflt) => {
	try {
		return fn();
	} catch {
		return dflt;
	}
};

/** Normalize a component name for portable matching ("Container / Vertical" -> "containervertical"). */
const normName = (s) =>
	String(s || '')
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '');

/* Resolve a friendly spacing/size value ("small"|"medium"|"large"|"none") to the actual
 * VARIANT option available on a property — tolerant of the "(Def)" prefix, which differs
 * per component (Section's default Spacing is "(Def) Medium", Card's is "(Def) Small").
 * A hardcoded label map is wrong for one of them; matching the real variantOptions is not.
 * Falls back to the raw value if nothing matches. */
function resolveVariantLabel(prop, want) {
	const opts = (prop && prop.variantOptions) || [];
	const target = normName(want);
	const strip = (s) => normName(s).replace(/^def/, '');
	return (
		opts.find((o) => strip(o) === target) ||
		opts.find((o) => normName(o) === target) ||
		want
	);
}

const _varCache = {};
async function importVar(tokenName) {
	const key = VAR_KEYS[tokenName];
	if (!key)
		stop(
			`Unknown color/spacing token "${tokenName}". Not in the variable registry.`
		);
	if (_varCache[tokenName]) return _varCache[tokenName];
	const v = await figma.variables.importVariableByKeyAsync(key);
	_varCache[tokenName] = v;
	return v;
}

/* GOTCHA 1: fills/strokes variables must be bound ON THE PAINT, not the node.
 * node.setBoundVariable("fills", v) throws. Always build a bound paint. */
async function bindFill(node, tokenName) {
	if (SURFACE_FORBIDDEN.has(tokenName))
		stop(
			`Token "${tokenName}" is accent-only and must not back a surface. Use a bg level token.`
		);
	const v = await importVar(tokenName);
	const paint = figma.util.solidPaint('#000000');
	const bound = figma.variables.setBoundVariableForPaint(paint, 'color', v);
	node.fills = [bound];
}
async function bindTextFill(textNode, tokenName) {
	const v = await importVar(tokenName);
	const paint = figma.util.solidPaint('#000000');
	const bound = figma.variables.setBoundVariableForPaint(paint, 'color', v);
	textNode.fills = [bound];
}
/* Bind all four corner radii of a node to a DB border-radius token (never a raw number). */
async function bindRadius(node, tokenName) {
	const key = RADIUS_KEYS[tokenName];
	if (!key)
		stop(
			`Unknown radius token "${tokenName}". Use one of: ${Object.keys(RADIUS_KEYS).join(', ')}.`
		);
	const v = await figma.variables.importVariableByKeyAsync(key);
	for (const field of [
		'topLeftRadius',
		'topRightRadius',
		'bottomLeftRadius',
		'bottomRightRadius'
	]) {
		try {
			node.setBoundVariable(field, v);
		} catch {}
	}
}

/* GOTCHA 2: NEVER cache a SLOT reference across a mutation of its owner instance.
 * setProperties(...) / node.fills = ... regenerate the instance's internal node ids,
 * so a previously fetched slot throws "Node with id ... not found" on appendChild.
 * RULE: fully configure the owner (props/fills/gap) FIRST, THEN fetch the slot fresh
 * right before appending — and re-fetch per child. These helpers do exactly that. */
/* Match a slot by normalized name (reuses normName). The DB library prefixes content-slot
 * names with a "📦 " decoration (e.g. "📦 Children"), so exact-string matching breaks;
 * match on the normalized token instead. */
function slotMatches(nodeName, slotName) {
	const nm = normName(nodeName);
	if (slotName) return nm.includes(normName(slotName));
	return nm.includes('children') || nm === 'slot';
}
function freshSlot(ownerInstance, slotName) {
	const slot = ownerInstance.findOne(
		(n) => n.type === 'SLOT' && slotMatches(n.name, slotName)
	);
	if (!slot)
		stop(
			`No SLOT "${slotName || 'Children/Slot'}" found on "${ownerInstance.name}".`
		);
	return slot;
}
/** Append a child into a named slot, always re-resolving the slot first. */
function appendToSlot(ownerInstance, slotName, child) {
	freshSlot(ownerInstance, slotName).appendChild(child);
}

/* GOTCHA 3+4: sizing order. Auto-layout FILL can only be set on a child of an
 * auto-layout parent, and only AFTER appendChild. And NEVER resize() after
 * setting primaryAxisSizingMode = AUTO (it resets to FIXED). */
function fillWidth(node) {
	try {
		node.layoutSizingHorizontal = 'FILL';
	} catch {}
}
/* Opt-out of the default horizontal FILL so an element only takes the width it needs
 * (e.g. a trailing Badge/Tag column in a spread row that should sit flush right). */
function hugWidth(node) {
	try {
		node.layoutSizingHorizontal = 'HUG';
	} catch {}
}
function fillHeight(node) {
	try {
		node.layoutSizingVertical = 'FILL';
	} catch {}
}
function hugHeight(node) {
	try {
		node.layoutSizingVertical = 'HUG';
	} catch {
		try {
			node.primaryAxisSizingMode = 'AUTO';
		} catch {}
	}
}

/* A DB Card's root auto-layout ships with `primaryAxisAlignItems = SPACE_BETWEEN`
 * ("Gap: Auto" in the UI) so an optional bottom action can stick to the bottom. When a
 * shorter card is STRETCHED to fill the row height (equal-height grid), that space-between
 * pushes the content to the vertical MIDDLE — cards must stay TOP-aligned. Force the card
 * root back to MIN so the content starts top-left regardless of the extra height. */
function topAlignFilled(inst) {
	try {
		inst.primaryAxisAlignItems = 'MIN';
	} catch {}
}

/* GOTCHA 4+5: layout primitives + cards ship with FIXED content slots and FILL
 * cells that pin stale heights. Release the instance AND its content slot(s) to hug. */
function hugVertical(inst) {
	hugHeight(inst);
	for (const c of inst.children ?? []) {
		if (c.type === 'SLOT' && slotMatches(c.name)) {
			try {
				c.layoutSizingVertical = 'HUG';
			} catch {
				try {
					c.primaryAxisSizingMode = 'AUTO';
				} catch {}
			}
		}
	}
}

/* -----------------------------------------------------------------------------
 * COMPONENT RESOLUTION
 * -------------------------------------------------------------------------- */
