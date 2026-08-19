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

// Layout primitives (Grid / Container) are Core Lab LIBRARY components, imported by key from
// CONCEPT_KEYS — exactly like the Heading/Body typography. There is deliberately NO local
// component path: no `figma.root` page scan, no node-id hint, no name matching. A screen is
// composed exclusively from published library components, so the output is identical in every
// file that has the DB UX libraries added and never picks up a stray look-alike in the file.
// Direction labels for the single Core Lab `Container` set (one set serves both stack
// directions; the retired local primitives were two separate components).
const CONTAINER_DIRECTION = {
	vertical: '(Def) Column',
	horizontal: 'Row'
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
 * GOTCHA: imported LIBRARY instances (e.g. Card) do NOT expose `variantOptions` — the list
 * comes back empty, so we cannot match against the real options. Returning the raw lower-
 * case value then silently no-ops in setProperties (Figma needs the exact-cased label like
 * "Large", not "large") and the instance keeps its default (the "card padding = Small" bug).
 * When no options are available we therefore title-case the friendly value so it matches the
 * canonical Figma label. */
function titleCaseLabel(want) {
	return String(want)
		.split(/\s+/)
		.map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
		.join(' ');
}
function resolveVariantLabel(prop, want) {
	const opts = (prop && prop.variantOptions) || [];
	const target = normName(want);
	const strip = (s) => normName(s).replace(/^def/, '');
	return (
		opts.find((o) => strip(o) === target) ||
		opts.find((o) => normName(o) === target) ||
		// No variantOptions (library instance): title-case so the exact-cased label matches.
		(opts.length === 0 ? titleCaseLabel(want) : want)
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

/* Is this node inside a Card surface? Drives the Image radius default: an image sitting ON the
 * page gets the 8px token, an image INSIDE a card is flush (0) because the card already owns the
 * rounded corner — a rounded image inside a rounded card reads as a double border. */
function insideCard(startNode) {
	let n = startNode;
	while (n) {
		if (
			safe(() => n.type, '') === 'INSTANCE' &&
			/card/i.test(safe(() => n.name, ''))
		)
			return true;
		n = safe(() => n.parent, null);
	}
	return false;
}

/* Bind an auto-layout node's GAP to a DB spacing token (never a raw pixel number).
 * The Core Lab `Container` set has no Gap VARIANT — spacing is a bound `itemSpacing`
 * variable on its inner Slot — so this is how a plan `gap` token becomes a real DB
 * spacing value. Returns false when the binding could not be applied. */
async function bindItemSpacing(node, tokenName) {
	const v = await importVar(tokenName);
	try {
		node.setBoundVariable('itemSpacing', v);
		return true;
	} catch {
		return false;
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
/* Hug a TEXT-carrying COMPONENT (Heading/Body) down to its glyph width. Setting HUG on the
 * instance alone is NOT enough: the concept Heading is a vertical auto-layout frame whose inner
 * TEXT node defaults to FILL (layoutGrow 1, textAutoResize HEIGHT), so the frame keeps a large
 * width (~736) and a "hug" column built around it collapses its fill-sibling and overlaps. The
 * inner text must ALSO be set to HUG for the instance to shrink to the text. Call this together
 * with hugWidth() whenever a Heading/Body should be content-tight (e.g. inside a hug row/column).
 * Only touches inner TEXT nodes, so it is safe to call on any instance (no-op without text). */
function hugTextWidth(node) {
	try {
		const texts =
			typeof node.findAll === 'function'
				? node.findAll((n) => n.type === 'TEXT')
				: [];
		for (const t of texts) {
			try {
				t.layoutSizingHorizontal = 'HUG';
			} catch {}
		}
	} catch {}
}
/* Can this node be stretched vertically, or would FILL COLLAPSE it?
 * -----------------------------------------------------------------------------
 * Figma does NOT reject `layoutSizingVertical = "FILL"` on the MAIN axis of a
 * HUGGING parent — it silently gives the child a height of ~0 while the parent
 * keeps hugging the remaining children. The child's content then spills OUT of
 * its 1px box and overlaps whatever sits above it (this is exactly how a bar
 * graph ended up drawn across its own card title). Because every fill/hug write
 * is wrapped in try/catch, that damage is invisible at write time — so the guard
 * has to be a precondition, not an error handler.
 * Rules:
 *   parent VERTICAL   → vertical is the MAIN axis: only fillable once the parent
 *                       itself has a resolved height (primaryAxisSizingMode FIXED,
 *                       i.e. the parent is FIXED or FILL — not HUG).
 *   parent HORIZONTAL → vertical is the CROSS axis: stretching to the tallest
 *                       sibling is always valid, even while the parent hugs.
 *   parent GRID       → the cell owns the height; stretching is valid.
 *   no auto-layout    → FILL is meaningless. */
function canFillVertical(node) {
	const parent = safe(() => node.parent, null);
	if (!parent) return false;
	const mode = String(safe(() => parent.layoutMode, 'NONE'));
	if (mode === 'HORIZONTAL' || mode === 'GRID') return true;
	if (mode !== 'VERTICAL') return false;
	return safe(() => parent.primaryAxisSizingMode, 'AUTO') === 'FIXED';
}
/* Stretch a node to its parent's height. Returns whether the stretch actually happened, so
 * callers that build a fill CHAIN (outside-in) can stop instead of collapsing the subtree. */
function fillHeight(node) {
	if (!canFillVertical(node)) return false;
	try {
		node.layoutSizingVertical = 'FILL';
		return true;
	} catch {
		return false;
	}
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
/* Pin an auto-layout node's content to the END of its MAIN axis (a vertical stack: bottom).
 * Used to seat a chart column's bar + caption on the panel floor. */
function alignMainEnd(node) {
	try {
		node.primaryAxisAlignItems = 'MAX';
	} catch {}
}
/* Pin an auto-layout node's content to the END of its CROSS axis (a horizontal row: bottom).
 * Used to put every chart column of a row on ONE baseline. */
function alignCrossEnd(node) {
	try {
		node.counterAxisAlignItems = 'MAX';
	} catch {}
}
/* Is this node the LAST visible child of its parent? Slots are skipped by callers: a SLOT sits
 * among the owning component's internal slots (a Card has "Start Slot"/"Children"/"End Slot"),
 * so its position says nothing about the CONTENT order. */
function isLastVisibleChild(node) {
	const parent = safe(() => node.parent, null);
	const kids = (safe(() => parent && parent.children, []) ?? []).filter((c) =>
		safe(() => c.visible, true)
	);
	return kids.length === 0 || kids[kids.length - 1] === node;
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
