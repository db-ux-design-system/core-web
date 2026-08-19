async function buildSection(node) {
	const inst = await createLibraryInstance('Section'); // library Section (Beta)
	hugVertical(inst); // sections ALWAYS hug (binding)
	if (node.fills) await bindFill(inst, node.fills); // configure BEFORE children
	// Semantic tint: set the adaptive MODE on the section so its bound bg/fills token (and
	// every adaptive token in its subtree) resolves in that palette (e.g. Successful → a
	// green-tinted surface, with on-bg text contrasting automatically). See applySemantic.
	if (node.semantic) await setSemantic(inst, node.semantic);
	// Content max-width (e.g. "Small (768)" for landing pages). Set BEFORE the slot is
	// fetched — setProperties regenerates the instance's internal node ids.
	if (node.contentWidth) {
		const cp = inst.componentProperties ?? {};
		const wk = Object.keys(cp).find(
			(k) =>
				k === 'Width' || (cp[k]?.type === 'VARIANT' && /width/i.test(k))
		);
		if (wk) {
			try {
				inst.setProperties({ [wk]: node.contentWidth });
			} catch {}
		}
	}
	// Section inner spacing (padding-block + header gap). DASHBOARDS / operational B2B
	// screens use "Small" for a denser, more scannable layout; the DB default is
	// "(Def) Medium" (marketing / landing pages). Accepts a friendly value
	// ("small"|"medium"|"large"|"none") or the exact Figma label; matched to the Spacing
	// variant. Set BEFORE the slot is fetched (setProperties regenerates internal ids).
	if (node.spacing) {
		const cp = inst.componentProperties ?? {};
		const sk = Object.keys(cp).find(
			(k) =>
				k === 'Spacing' ||
				(cp[k]?.type === 'VARIANT' && /spacing/i.test(k))
		);
		if (sk) {
			const label = resolveVariantLabel(cp[sk], node.spacing);
			try {
				inst.setProperties({ [sk]: label });
			} catch {}
		}
	}
	return inst;
}
/* A grid instance carries an internal ".⚙️ Code Connect" helper whose id regenerates on
 * every grid mutation; reading its `.name` right after a mutation throws "Node not found".
 * So we (a) never read children names unguarded, and (b) re-resolve cells fresh each time. */
function gridCells(grid) {
	return (grid.children ?? []).filter((c) => {
		try {
			return c.type === 'SLOT' && c.name?.startsWith('Slot');
		} catch {
			return false;
		}
	});
}
function configureGrid(grid) {
	try {
		grid.gridRowSizes = [{ type: 'HUG' }];
	} catch {} // rows hug tallest cell
	try {
		grid.primaryAxisSizingMode = 'AUTO';
	} catch {}
	for (const cell of gridCells(grid)) {
		try {
			cell.layoutSizingVertical = 'HUG';
		} catch {
			try {
				cell.primaryAxisSizingMode = 'AUTO';
			} catch {}
		}
	}
}
// Number of columns a Grid layout label resolves to. Drives multi-row wrapping: more
// children than columns are split across several Grid instances (rows).
function gridColumnCountFor(label) {
	const n = normName(label);
	if (n === '100') return 1;
	if (n.includes('25252525')) return 4;
	if (n.includes('333333')) return 3;
	return 2; // 50-50, 66-33, 33-66, 320-auto
}
/* Fill ONE Grid instance (a single row) with its children. A row never holds more than its
 * column count, so children map 1:1 onto cells[0..k-1] (NO modulo — that was the old overflow
 * bug that stacked two items in one cell). A short last row leaves trailing cells empty, which
 * keeps the columns aligned with the rows above. Re-resolves cells fresh per child (ids
 * regenerate on every grid mutation) and applies the equal-height-cards logic within the row. */
async function fillGridRow(g, rowKids, node) {
	configureGrid(g);
	const allCards =
		rowKids.length >= 2 && rowKids.every((k) => k && k.type === 'Card');
	const equalize = allCards && node.equalHeights !== false;
	const rendered = [];
	for (let i = 0; i < rowKids.length; i++) {
		const cells = gridCells(g); // fresh every iteration (ids regenerate)
		if (!cells.length) stop('Grid has no Slot cells.');
		const cell = cells[i];
		if (!cell) break; // more items than the variant has cells — guard, should not happen
		// A NON-card child that wants to vertically center against a taller sibling
		// (media/text) fills the row: stretch the cell, then the child fills + centers.
		const wantsFill = rowKids[i] && rowKids[i].fillHeight && !equalize;
		if (wantsFill) {
			try {
				cell.layoutSizingVertical = 'FILL';
			} catch {}
		}
		const child = await renderNode(rowKids[i], cell);
		if (!wantsFill) hugHeight(child); // content drives height first
		rendered.push(child);
	}
	if (equalize) {
		let maxH = 0;
		for (const ch of rendered) {
			const h = safe(() => ch.height, 0);
			if (h > maxH) maxH = h;
		}
		if (maxH > 0) {
			const cells = gridCells(g);
			for (let i = 0; i < rendered.length; i++) {
				const h = safe(() => rendered[i].height, 0);
				if (maxH - h > 1) {
					// shorter card -> stretch to tallest
					try {
						cells[i].layoutSizingVertical = 'FILL';
					} catch {}
					fillHeight(rendered[i]);
					// Keep the stretched card's content top-left (see topAlignFilled).
					topAlignFilled(rendered[i]);
				}
			}
		}
	}
	/* Unused cells: an EMPTY component SLOT is not invisible — Figma paints it as a magenta
	 * placeholder box, which then ships in the render (a 3-column filter row fed two children
	 * showed a pink rectangle where the third column would be). Hiding the leftover cells keeps
	 * the COLUMN GEOMETRY intact — deliberate "two thirds" rows and the short last row of a
	 * wrapped grid stay aligned with the rows above — while nothing is drawn. */
	const trailing = gridCells(g);
	for (let i = rendered.length; i < trailing.length; i++) {
		try {
			trailing[i].visible = false;
		} catch {}
	}
}
/* Friendly gap tokens -> the Grid's exact Gap VARIANT labels. The Core Lab Grid DOES carry a
 * Gap axis; only the `md` step is labelled "(Def) md", and passing a bare "md" misses the
 * variant match, so the Grid silently falls back to the default variant (3 columns) and leaves
 * empty trailing slots. */
const GRID_GAP_LABELS = {
	none: 'None',
	'3xs': '3xs',
	'2xs': '2xs',
	xs: 'xs',
	sm: 'sm',
	md: '(Def) md',
	lg: 'lg',
	xl: 'xl',
	'2xl': '2xl',
	'3xl': '3xl'
};
/* Friendly gap tokens -> DB spacing VARIABLE names. Unlike the Grid (and unlike the retired
 * local primitives), the Core Lab `Container` has NO Gap variant — its spacing is a bound
 * `itemSpacing` variable on the inner Slot. So a plan `gap` becomes a real DB spacing token
 * binding, never a raw pixel value. "auto" is not a spacing value at all: it means
 * SPACE_BETWEEN (children pushed to both ends) and is handled separately. */
const CONTAINER_GAP_TOKENS = {
	none: 'space.none',
	'3xs': 'space.3xs',
	'2xs': 'space.2xs',
	xs: 'space.xs',
	sm: 'space.sm',
	md: 'space.md',
	lg: 'space.lg',
	xl: 'space.xl',
	'2xl': 'space.2xl',
	'3xl': 'space.3xl'
};
// Friendly padding value -> the Container's exact Padding VARIANT label.
const CONTAINER_PADDING_LABELS = { none: '(Def) None' };
/* The plan's 3x3 `align` grid, resolved to Figma axis alignment. Format is
 * "<vertical>-<horizontal>" ("top-left", "bottom-right", …); the bare forms "left" /
 * "center" / "right" mean vertically centered. Applied to the container's inner Slot,
 * since the Core Lab Container carries no Align variant. */
const ALIGN_V = { top: 'MIN', center: 'CENTER', bottom: 'MAX' };
const ALIGN_H = { left: 'MIN', center: 'CENTER', right: 'MAX' };
function parseAlign(align) {
	const parts = String(align ?? 'top-left')
		.toLowerCase()
		.split('-');
	if (parts.length === 2 && ALIGN_V[parts[0]] && ALIGN_H[parts[1]])
		return { v: ALIGN_V[parts[0]], h: ALIGN_H[parts[1]] };
	if (ALIGN_H[parts[0]]) return { v: 'CENTER', h: ALIGN_H[parts[0]] };
	return { v: 'MIN', h: 'MIN' };
}
/* Gap + alignment live on the Container's inner Slot (the set exposes neither as a variant).
 * `spread` — or an explicit gap "auto" — distributes children to both ends (SPACE_BETWEEN);
 * every other gap binds the Slot's itemSpacing to the matching DB spacing variable. */
async function configureContainerSlot(inst, node, direction) {
	const slot = safe(() => freshSlot(inst, 'Slot'), null);
	if (!slot) return;
	const horizontal = direction === 'horizontal';
	const { v, h } = parseAlign(node.align);
	const spread = node.spread === true || node.gap === 'auto';
	try {
		slot.primaryAxisAlignItems = spread
			? 'SPACE_BETWEEN'
			: horizontal
				? h
				: v;
	} catch {}
	try {
		slot.counterAxisAlignItems = horizontal ? v : h;
	} catch {}
	if (spread) return;
	const gap = node.gap ?? 'md';
	const token = CONTAINER_GAP_TOKENS[gap];
	if (!token)
		stop(
			`Unknown container gap "${gap}". Use one of: ${Object.keys(
				CONTAINER_GAP_TOKENS
			).join(', ')} — or "auto" for SPACE_BETWEEN.`
		);
	await bindItemSpacing(slot, token);
}
/* Does this PLAN child take the full width by default, i.e. does the row DISTRIBUTE space? */
const PLAN_FILLS_BY_DEFAULT = new Set([
	'Heading',
	'Body',
	'ContainerVertical',
	'ContainerHorizontal',
	'Grid',
	'Card',
	'Section',
	'Tabs',
	'Divider',
	'ProgressBar',
	'Image',
	'Header'
]);
function planChildFills(kid) {
	if (!kid) return false;
	if (kid.fillWidth === true) return true;
	if (kid.hugWidth === true) return false;
	return PLAN_FILLS_BY_DEFAULT.has(kid.type) || FILL_DEFAULT.has(kid.type);
}
/* Is the LEADING text of a ContainerHorizontal a LABEL that must hug its glyphs?
 * -----------------------------------------------------------------------------
 * The Concept Heading/Text default to FILL width. In a COLUMN that is right; in a ROW it means
 * the text eats all remaining space and shoves every following sibling to the far right — an
 * "Aktive Filter" label rendered 512px wide with its Tags floating half a panel away instead of
 * sitting one gap behind it. A label and the things it introduces belong together (Gesetz der
 * Nähe), so the label hugs and the row packs tight.
 * Deliberately NARROW, because a filling text in a row is often exactly right:
 *   - `spread` rows (SPACE_BETWEEN) let the leading block grow so the trailing one sits flush
 *     right — never touched.
 *   - a DATA ROW builds its columns from filling text cells (dashboard.list-row); the equal
 *     widths ARE the column alignment. So the rule only applies when EVERY other child hugs.
 *   - a lone text keeps filling, so its own `align` (center/right) still works.
 * Only the FIRST child qualifies (that is what a label is); `fillWidth: true` opts out.
 * Returns indices into `node.children` so the caller can map them onto the rendered nodes. */
function rowTextHugIndices(node) {
	const kids = (node && node.children) ?? [];
	const spread = node.spread === true || node.gap === 'auto';
	if (spread || kids.length < 2) return [];
	const label = kids[0];
	if (!label || (label.type !== 'Heading' && label.type !== 'Body'))
		return [];
	if (label.fillWidth === true) return [];
	for (let i = 1; i < kids.length; i++)
		if (planChildFills(kids[i])) return [];
	return [0];
}
/* Is this ContainerHorizontal a DATA ROW — a table/list row whose children are COLUMNS?
 * Signal: two or more direct text children, which is also why rowTextHugIndices leaves it be. */
function isDataRow(node) {
	const kids = (node && node.children) ?? [];
	if (node.spread === true || node.gap === 'auto') return false;
	let texts = 0;
	for (const kid of kids)
		if (kid && (kid.type === 'Heading' || kid.type === 'Body')) texts++;
	return texts >= 2;
}
/* EVERY cell of a data row fills, so the header row and the rows under it share ONE column grid.
 * -----------------------------------------------------------------------------
 * A table only reads as a table while a value sits under its own header. The defect this
 * prevents: a leading `Checkbox` (or any component that hugs by default used as the first column)
 * keeps its LABEL width, so the header columns start at different x than the row columns — the
 * header "Auswahl" at 90px above "ICE 101 Hamburg–Berlin" at 199px, and every column behind it
 * drifts by a different amount because each row's checkbox label has its own length. In the
 * canonical DB table block every cell of every row is one equal fill column, the checkbox cell
 * included. `hugWidth: true` on a cell opts out.
 * Returns indices into `node.children`. */
function rowCellFillIndices(node) {
	if (!isDataRow(node)) return [];
	const kids = node.children ?? [];
	const indices = [];
	for (let i = 0; i < kids.length; i++) {
		const kid = kids[i];
		if (!kid || kid.hugWidth === true) continue;
		indices.push(i);
	}
	return indices;
}
/* Build a stack. ONE Core Lab `Container` set serves both directions via its Direction axis
 * ("(Def) Column" / "Row"); the plan keeps the two node types ContainerVertical /
 * ContainerHorizontal. Nothing here touches local components. */
async function buildContainer(node, direction) {
	const inst = await createConceptInstance('Container', {
		Direction:
			CONTAINER_DIRECTION[direction] ?? CONTAINER_DIRECTION.vertical,
		Padding:
			CONTAINER_PADDING_LABELS[node.padding] ??
			node.padding ??
			'(Def) None'
	});
	// Some container variants ship with a de-emphasized (0.2 opacity) Slot; force the
	// instance and its slots back to fully opaque so content never renders washed out.
	try {
		inst.opacity = 1;
	} catch {}
	for (const c of inst.children ?? []) {
		if (c.type === 'SLOT') {
			try {
				c.opacity = 1;
			} catch {}
		}
	}
	await configureContainerSlot(inst, node, direction);
	// Optional node-level opacity (e.g. a "disabled" look at 0.4). Applied AFTER the
	// wash-out reset above so the caller's value wins. Dims the whole container + children.
	if (typeof node.opacity === 'number') {
		try {
			inst.opacity = node.opacity;
		} catch {}
	}
	hugVertical(inst);
	return inst;
}
async function buildCard(node) {
	const inst = await createLibraryInstance(
		'Card',
		node.props ?? { elevationLevel: '1' }
	);
	hugVertical(inst); // card hugs content (no overflow)
	if (node.fills) await bindFill(inst, node.fills); // optional surface tint
	// Semantic tint: adaptive MODE on the card → bound bg/fills token + subtree recolor.
	if (node.semantic) await setSemantic(inst, node.semantic);
	// Inner padding via the Card's `Spacing` VARIANT. Accepts a friendly value
	// ("small"|"medium"|"large"|"none") or the exact Figma label. Keep it in sync with the
	// content block's gap (a block with gap `lg` sits in a card with `Spacing: lg`).
	if (node.spacing) {
		const cp = inst.componentProperties ?? {};
		const sk = Object.keys(cp).find(
			(k) =>
				k === 'Spacing' ||
				(cp[k]?.type === 'VARIANT' && /spacing/i.test(k))
		);
		if (sk) {
			const label = resolveVariantLabel(cp[sk], node.spacing);
			try {
				inst.setProperties({ [sk]: label });
			} catch {}
		}
	}
	return inst;
}
async function buildHeader(node) {
	const inst = await createLibraryInstance(
		'Header',
		node.props ?? { device: 'desktop' }
	);
	// A multi-page site names the navigation items; presence of `navItems` implies the
	// Navigation must be shown, regardless of `showNav`.
	const items = Array.isArray(node.navItems)
		? node.navItems.filter((s) => s != null && String(s).length)
		: [];
	const showNav = node.showNav || items.length > 0;
	const cp = inst.componentProperties ?? {};
	const bool = {};
	// Only show elements that carry real content. The Meta Navigation and the
	// Primary/Secondary Action icon buttons are OFF by default — otherwise the Header
	// renders empty placeholder icons ("unused" ✕ boxes) and a stray "External Link".
	// Opt in explicitly with node.metaNav / node.actions when there is a defined action.
	for (const k of Object.keys(cp)) {
		if (cp[k].type !== 'BOOLEAN') continue;
		if (/Application Name/i.test(k)) bool[k] = true;
		else if (/Meta Navigation/i.test(k)) bool[k] = node.metaNav === true;
		else if (/Primary Action|Secondary Action/i.test(k))
			bool[k] = node.actions === true;
		else if (/Navigation/i.test(k)) bool[k] = showNav;
		else if (/Divider/i.test(k)) bool[k] = showNav;
	}
	if (Object.keys(bool).length) inst.setProperties(bool);
	if (node.appName) {
		const cp2 = inst.componentProperties ?? {};
		const tk = Object.keys(cp2).find(
			(k) => cp2[k]?.type === 'TEXT' && /application/i.test(k)
		);
		if (tk) inst.setProperties({ [tk]: node.appName });
	}
	// Named navigation items. The DB Navigation ships with a horizontal LIST of up to 5
	// "Navigation Item" instances (each a "Label" text defaulting to "Navi Item"). Set the
	// label on the first N items to the provided page names and HIDE the remaining items so
	// the nav shows exactly the right count. (Cap: 5 items — extra labels are ignored.)
	if (items.length) {
		await ensureFonts();
		const nav = safe(
			() =>
				inst.findOne(
					(n) =>
						n.type === 'INSTANCE' &&
						/navigation/i.test(n.name) &&
						/desktop|mobile/i.test(n.name)
				),
			null
		);
		if (nav) {
			const navItemNodes =
				safe(
					() =>
						nav.findAll(
							(n) =>
								n.type === 'INSTANCE' &&
								/navigation item/i.test(n.name)
						),
					[]
				) ?? [];
			for (let i = 0; i < navItemNodes.length; i++) {
				const it = navItemNodes[i];
				if (i < items.length) {
					try {
						it.visible = true;
					} catch {}
					await loadInstanceFonts(it);
					setInstanceLabel(it, String(items[i]));
				} else {
					try {
						it.visible = false;
					} catch {}
				}
			}
		}
	}
	if (node.applyProps) await applyProps(inst, node.applyProps);
	return inst;
}

/* Tabs (Beta) — a COMPOSITE: a Tab List whose Children slot holds Tab Item subcomponents
 * (each an ✏️ Label + a 🔀 Active variant) plus a single (active) Tab Panel whose Children
 * slot holds the panel content. This dedicated builder drives all three so a plan never has
 * to reach into the subcomponents:
 *   props    { orientation:"horizontal"|"vertical", tabItemWidth:"auto"|"full",
 *              alignment:"start"|"center"|"right" } → the internal Tabs variant.
 *   tabs     [{ label, active? }] → sets each Tab Item's label + marks ONE active (the first
 *            with active:true, else index 0). The runtime CLONES the last Tab Item when more
 *            tabs are requested than the variant ships, and REMOVES trailing ones for fewer
 *            (never below 1). The active tab draws its own underline indicator (Active=True).
 *   content  a plan node (or array) rendered into the single visible Tab Panel — i.e. the
 *            body shown under the active tab. Only the active panel exists in the variant, so
 *            a static mockup shows exactly the active tab's content.
 * Never fake tabs from Buttons/Tags — this is the real DB Tabs component. */
const TAB_ORIENT = { horizontal: '(Def) Horizontal', vertical: 'Vertical' };
const TAB_WIDTH = { auto: '(Def) Auto', full: 'Full' };
const TAB_ALIGN = {
	start: '(Def) Start',
	left: '(Def) Start',
	center: 'Center',
	right: 'Right'
};
async function buildTabs(node) {
	const entry = COMPONENTS['Tabs'];
	if (!entry) stop('Tabs is not registered in the runtime component map.');
	const set = await importSet(entry.variants[0].key);
	const inst = (
		set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? set.children[0])
			: set
	).createInstance();
	const p = node.props || {};
	if (p.orientation)
		setVariant(
			inst,
			'Orientation',
			TAB_ORIENT[String(p.orientation).toLowerCase()] ?? p.orientation
		);
	if (p.tabItemWidth)
		setVariant(
			inst,
			'Tab Item Width',
			TAB_WIDTH[String(p.tabItemWidth).toLowerCase()] ?? p.tabItemWidth
		);
	if (p.alignment)
		setVariant(
			inst,
			'Tab Item Alignment',
			TAB_ALIGN[String(p.alignment).toLowerCase()] ?? p.alignment
		);
	await ensureFonts();
	await loadInstanceFonts(inst);

	const tabs =
		Array.isArray(node.tabs) && node.tabs.length
			? node.tabs
			: [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }];
	// Re-find Tab Items fresh each time (setProperties/clone/remove regenerate node ids).
	const findItems = () =>
		safe(
			() =>
				inst.findAll(
					(n) => n.type === 'INSTANCE' && /tab item/i.test(n.name)
				),
			[]
		);
	// Match the Tab Item count to the requested tab count: clone the last for MORE, remove
	// the last for FEWER (never below 1 — the slot requires at least one child).
	let items = findItems();
	let guard = 0;
	while (items.length < tabs.length && items.length > 0 && guard++ < 12) {
		const last = items[items.length - 1];
		try {
			const clone = last.clone();
			last.parent.appendChild(clone);
		} catch {
			break;
		}
		items = findItems();
	}
	guard = 0;
	while (items.length > tabs.length && items.length > 1 && guard++ < 12) {
		try {
			items[items.length - 1].remove();
		} catch {
			break;
		}
		items = findItems();
	}
	// Active tab: the first with active:true, else the first tab.
	let activeIdx = tabs.findIndex((t) => t && t.active);
	if (activeIdx < 0) activeIdx = 0;
	// Label + active per item, re-resolving the item before each write.
	for (let i = 0; i < tabs.length; i++) {
		const cur = findItems()[i];
		if (!cur) break;
		const cp = cur.componentProperties || {};
		const labelKey = Object.keys(cp).find(
			(k) => cp[k] && cp[k].type === 'TEXT'
		);
		const activeKey = Object.keys(cp).find(
			(k) => cp[k] && cp[k].type === 'VARIANT' && /active/i.test(k)
		);
		const props = {};
		if (labelKey)
			props[labelKey] = String(tabs[i].label ?? 'Tab ' + (i + 1));
		if (activeKey) props[activeKey] = i === activeIdx ? 'True' : 'False';
		if (Object.keys(props).length) {
			try {
				cur.setProperties(props);
			} catch {}
		}
	}
	// Fill the single (active) Tab Panel with the active tab's body content.
	if (node.content) {
		const panel = safe(
			() =>
				inst.findOne(
					(n) => n.type === 'INSTANCE' && /tab panel/i.test(n.name)
				),
			null
		);
		if (panel) {
			const slot =
				safe(
					() =>
						panel.findOne(
							(n) => n.type === 'SLOT' && /children/i.test(n.name)
						),
					null
				) || safe(() => panel.findOne((n) => n.type === 'SLOT'), null);
			if (slot) {
				const kids = Array.isArray(node.content)
					? node.content
					: [node.content];
				for (const ch of kids) await renderNode(ch, slot);
			}
		}
	}
	return inst;
}

/* Dialog (Concept) — a COMPOSITE, and the ONLY correct way to render a modal. It ships its own
 * Backdrop plus a Popover whose three slots carry the regions:
 *   📦 Start Slot  -> ↳ Dialog Header  (headline text + close icon button)
 *   📦 Children    -> the dialog body  (rendered from node.children)
 *   📦 End Slot    -> ↳ Dialog Footer  (secondary + primary Button)
 * Never rebuild this from a frame + absolute Backdrop + centered Card: that was the old
 * `overlay` approach and it fakes a component that exists.
 *
 * GOTCHA: the Dialog Header has its OWN slot literally named "Children", and it sits BEFORE
 * the Popover's own "📦 Children" in document order — so a findOne-based slot lookup grabs the
 * wrong one. Always resolve the Popover's DIRECT child slot. */
const DIALOG_SPACING = {
	none: 'None',
	small: '(Def) Small',
	medium: 'Medium',
	large: 'Large'
};
function directSlot(owner, match) {
	const slot = (owner.children ?? []).find(
		(c) => c.type === 'SLOT' && normName(c.name).includes(normName(match))
	);
	if (!slot)
		stop(
			`No direct SLOT matching "${match}" on "${safe(() => owner.name, '?')}".`
		);
	return slot;
}
function setBooleanProp(inst, re, value) {
	const cp = inst.componentProperties ?? {};
	const key = Object.keys(cp).find(
		(k) => cp[k]?.type === 'BOOLEAN' && re.test(k)
	);
	if (key) {
		try {
			inst.setProperties({ [key]: value });
		} catch {}
	}
}
async function buildDialog(node) {
	const inst = await createConceptInstance('Dialog', {});
	/* GOTCHA 2 bites HARD here: every setProperties on the Dialog OR on the Popover regenerates
	 * the subtree's internal node ids, so a Popover reference cached across two writes is already
	 * dead ("Node with id ... not found" on the next property read). Re-resolve before EACH write. */
	const freshPopover = () => {
		const p = safe(
			() =>
				inst.findOne(
					(n) => n.type === 'INSTANCE' && /popover/i.test(n.name)
				),
			null
		);
		if (!p) stop('Dialog instance has no Popover — the component changed.');
		return p;
	};
	// The Backdrop belongs to the component; only switch it off when explicitly asked.
	setBooleanProp(inst, /backdrop/i, node.backdrop !== false);
	if (node.spacing) {
		const label = DIALOG_SPACING[node.spacing] ?? node.spacing;
		try {
			setVariant(freshPopover(), 'Spacing', label);
		} catch {}
	}
	// A region without content is switched OFF rather than rendered empty.
	setBooleanProp(freshPopover(), /show start slot/i, node.title != null);
	setBooleanProp(freshPopover(), /show end slot/i, node.actions != null);
	await ensureFonts();
	await loadInstanceFonts(inst);
	// Headline
	if (node.title != null) {
		const header = safe(
			() =>
				inst.findOne(
					(n) =>
						n.type === 'INSTANCE' && /dialog header/i.test(n.name)
				),
			null
		);
		if (header) setInstanceLabel(header, String(node.title));
	}
	/* Footer actions. Same stale-node trap one level deeper: setting the label on the FIRST
	 * button regenerates the ids of its siblings, so a second reference captured from the same
	 * findAll is already dead. Re-resolve the button for every write. */
	if (node.actions) {
		const findButton = (re) =>
			safe(() => {
				const footer = inst.findOne(
					(n) =>
						n.type === 'INSTANCE' && /dialog footer/i.test(n.name)
				);
				if (!footer) return null;
				return (
					footer
						.findAll(
							(n) =>
								n.type === 'INSTANCE' && /^button/i.test(n.name)
						)
						.find((b) => re.test(b.name)) ?? null
				);
			}, null);
		if (node.actions.secondary == null) {
			const secondary = findButton(/ghost/i);
			if (secondary) {
				try {
					secondary.visible = false;
				} catch {}
			}
		} else {
			const secondary = findButton(/ghost/i);
			if (secondary)
				setInstanceLabel(secondary, String(node.actions.secondary));
		}
		if (node.actions.primary != null) {
			const primary = findButton(/brand/i);
			if (primary)
				setInstanceLabel(primary, String(node.actions.primary));
		}
	}

	// Body: the Popover's OWN Children slot (see the gotcha above), re-resolved per child.
	for (const child of node.children ?? []) {
		const pop = safe(
			() =>
				inst.findOne(
					(n) => n.type === 'INSTANCE' && /popover/i.test(n.name)
				),
			null
		);
		if (!pop) break;
		await renderNode(child, directSlot(pop, 'Children'));
	}
	return inst;
}

/* -----------------------------------------------------------------------------
 * renderNode — depth-first. Discipline that kills the stale-slot bug:
 *   (1) create instance  (2) configure fully (props/fills/gap/label/semantic)
 *   (3) append to parent (4) size AFTER append (5) THEN render children into a
 *   freshly-resolved slot, re-fetched per child.
 * `parent` is the node we appendChild to (a frame, a SLOT, or handled per-type).
 * -------------------------------------------------------------------------- */
