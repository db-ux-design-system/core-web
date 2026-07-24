async function buildSection(node) {
	const inst = await createLibraryInstance('Section'); // library Section (Beta)
	hugVertical(inst); // sections ALWAYS hug (binding)
	if (node.fills) await bindFill(inst, node.fills); // configure BEFORE children
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
}
// Friendly gap tokens -> exact local-variant labels. Only `md` differs from its token
// (the variant is labelled "(Def) md"); passing the bare "md" misses the variant and the
// container silently falls back to the first (tiny) gap — the "no gap in card" bug.
const CONTAINER_GAP_LABELS = {
	'2xs': '2xs',
	xs: 'xs',
	sm: 'sm',
	md: '(Def) md',
	lg: 'lg',
	xl: 'xl',
	'2xl': '2xl',
	'3xl': '3xl'
};
function buildContainer(node, direction) {
	const name =
		direction === 'horizontal'
			? 'ContainerHorizontal'
			: 'ContainerVertical';
	const gap = node.gap
		? (CONTAINER_GAP_LABELS[node.gap] ?? node.gap)
		: '(Def) md';
	const inst = createLocalInstance(name, {
		Align: node.align ?? 'top-left',
		Gap: gap,
		Padding: node.padding ?? '(Def) None'
	});
	// Some local container variants ship with a de-emphasized (0.2 opacity) Slot; force
	// the instance and its slots back to fully opaque so content never renders washed out.
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
	hugVertical(inst);
	return inst;
}
async function buildCard(node) {
	const inst = await createLibraryInstance(
		'Card',
		node.props ?? { elevationLevel: '1' }
	);
	hugVertical(inst); // card hugs content (no overflow)
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

/* -----------------------------------------------------------------------------
 * renderNode — depth-first. Discipline that kills the stale-slot bug:
 *   (1) create instance  (2) configure fully (props/fills/gap/label/semantic)
 *   (3) append to parent (4) size AFTER append (5) THEN render children into a
 *   freshly-resolved slot, re-fetched per child.
 * `parent` is the node we appendChild to (a frame, a SLOT, or handled per-type).
 * -------------------------------------------------------------------------- */
