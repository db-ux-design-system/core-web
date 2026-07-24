async function renderNode(node, parent) {
	switch (node.type) {
		case 'Text':
			// Raw styled text nodes are no longer supported — ALL content text is an official
			// DB typography COMPONENT. Migrate to "Heading" (as: h1..h6) or "Body" (size: …).
			stop(
				'Raw "Text" nodes are not allowed. Use "Heading" (as: h1..h6) for headings or "Body" (size: Small|(Def) Medium|Large|…) for body/caption copy.'
			);
		// falls through (unreachable — stop throws)
		case 'Heading': {
			const h = await buildHeadingComponent(node);
			parent.appendChild(h);
			if (node.hugWidth) hugWidth(h);
			else fillWidth(h);
			return h;
		}
		case 'Body': {
			const b = await buildBodyComponent(node);
			parent.appendChild(b);
			if (node.hugWidth) hugWidth(b);
			else fillWidth(b);
			return b;
		}
		case 'Header': {
			const h = await buildHeader(node);
			parent.appendChild(h);
			fillWidth(h);
			return h;
		}
		case 'Divider': {
			const d = await createLibraryInstance('Divider');
			parent.appendChild(d);
			fillWidth(d);
			return d;
		}
		case 'Button': {
			const b = await createLibraryInstance(
				'Button',
				node.props ?? { variant: 'brand', iconOnly: false }
			);
			await ensureFonts();
			if (node.label) setInstanceLabel(b, node.label);
			if (node.applyProps) await applyProps(b, node.applyProps);
			parent.appendChild(b);
			return b;
		}
		case 'Tag': {
			const tg = await createLibraryInstance(
				'Tag',
				node.props ?? {
					icon: false,
					emphasis: 'weak',
					behavior: 'static'
				}
			);
			await ensureFonts();
			if (node.label) setInstanceLabel(tg, node.label);
			if (node.semantic) await setSemantic(tg, node.semantic);
			if (node.applyProps) await applyProps(tg, node.applyProps);
			parent.appendChild(tg);
			return tg;
		}
		case 'Badge': {
			const bd = await createLibraryInstance(
				'Badge',
				node.props ?? { content: 'text' }
			);
			await ensureFonts();
			if (node.label) setInstanceLabel(bd, node.label);
			if (node.semantic) await setSemantic(bd, node.semantic);
			if (node.applyProps) await applyProps(bd, node.applyProps);
			parent.appendChild(bd);
			return bd;
		}
		case 'Section': {
			const s = await buildSection(node);
			parent.appendChild(s);
			fillWidth(s);
			// A content Section should carry a heading. If title/description are given, the
			// runtime builds a correctly styled + grouped header and separates it from the
			// content with a larger gap — so no bare grid without a heading, and no thin
			// title-only section.
			if (node.title || node.description) {
				// `align: "center"` centers the section content (hero / closing CTA):
				// heading + outer containers use a centered Align, and the title/description
				// text is center-aligned. Hugging children (e.g. Button) center via the container.
				const centered =
					node.align === 'center' || node.align === 'top-center';
				const cAlign = centered ? 'center' : undefined;
				const tAlign = centered ? 'center' : undefined;
				// Title↔description sit in ONE header group with a small gap ("xs", NOT "2xs" —
				// 2xs reads as cramped/broken). Override with node.headerGap only if needed.
				const heading = {
					type: 'ContainerVertical',
					gap: node.headerGap ?? 'xs',
					align: cAlign,
					children: []
				};
				if (node.title)
					heading.children.push({
						type: 'Heading',
						as: node.titleAs ?? 'h2',
						content: node.title,
						fills: 'color.text.strong',
						align: tAlign
					});
				if (node.description)
					heading.children.push({
						type: 'Body',
						size: node.descriptionSize ?? '(Def) Medium',
						content: node.description,
						fills: 'color.text.weak',
						align: tAlign
					});
				const outer = {
					type: 'ContainerVertical',
					gap: node.gap ?? 'lg',
					align: cAlign,
					children: [heading, ...(node.children ?? [])]
				};
				const slot = freshSlot(s, 'Children');
				await renderNode(outer, slot);
			} else {
				await renderChildrenIntoSlot(s, 'Children', node.children);
			}
			return s;
		}
		case 'Card': {
			const c = await buildCard(node);
			parent.appendChild(c);
			fillWidth(c);
			// Equal-height cards in a grid: the tallest card HUGS its content and defines the row
			// height; the others set `fillHeight` so they stretch to that height instead of hugging.
			// (The Grid loop stretches the cell to FILL; here we release the card from HUG to FILL.)
			// A stretched card keeps its content TOP-aligned (the DB Card root defaults to
			// SPACE_BETWEEN, which would otherwise center the content in the extra height).
			if (node.fillHeight) {
				fillHeight(c);
				topAlignFilled(c);
			}
			await renderChildrenIntoSlot(c, 'Children', node.children);
			return c;
		}
		case 'ContainerVertical': {
			const c = buildContainer(node, 'vertical');
			parent.appendChild(c);
			if (node.hugWidth) hugWidth(c);
			else fillWidth(c);
			// When a vertical container FILLs the row height (e.g. the trailing action column
			// of a content card), `justify` controls where its content sits on the main axis:
			// "start" (top) | "center" (default) | "end" (bottom). Use "end" to pin an action
			// (Link/Button) to the BOTTOM of the card, matching the DB content-card reference
			// (text top-left, action bottom-right).
			if (node.fillHeight) {
				fillHeight(c);
				const JUSTIFY = { start: 'MIN', center: 'CENTER', end: 'MAX' };
				try {
					c.primaryAxisAlignItems = JUSTIFY[node.justify] ?? 'CENTER';
				} catch {}
			}
			await renderChildrenIntoSlot(c, 'Slot', node.children);
			return c;
		}
		case 'ContainerHorizontal': {
			const c = buildContainer(node, 'horizontal');
			parent.appendChild(c);
			if (node.hugWidth) hugWidth(c);
			else fillWidth(c);
			if (node.fillHeight) {
				fillHeight(c);
				try {
					c.counterAxisAlignItems = 'CENTER';
				} catch {}
			}
			await renderChildrenIntoSlot(c, 'Slot', node.children);
			// GESTALT / full-width rows: `spread` makes the row use the FULL card width and
			// pushes the two ends apart (info left, status/action right) instead of packing
			// everything to the left (which leaves dead whitespace and cramps long text into a
			// narrow column). The row's Slot is stretched to FILL + SPACE_BETWEEN; pair with a
			// trailing child marked `hugWidth` so only the leading block grows. Re-fetch the
			// slot fresh (ids regenerate on mutation).
			if (node.spread) {
				try {
					const sl = freshSlot(c, 'Slot');
					sl.layoutSizingHorizontal = 'FILL';
					sl.primaryAxisSizingMode = 'FIXED';
					sl.primaryAxisAlignItems = 'SPACE_BETWEEN';
				} catch {}
			} else if (!node.hugWidth) {
				// The container fills its parent width, but the local ContainerHorizontal's
				// inner Slot defaults to HUG — so a FILL child (e.g. a text column beside a
				// fixed-width thumbnail) can't expand and its content wraps. Stretch the Slot
				// to FILL + FIXED (normal left packing) so FILL children take the remaining
				// width. (A HUG container keeps its hugging slot.)
				try {
					const sl = freshSlot(c, 'Slot');
					sl.layoutSizingHorizontal = 'FILL';
					sl.primaryAxisSizingMode = 'FIXED';
				} catch {}
			}
			return c;
		}
		case 'Grid': {
			// A Grid renders as one or more ROWS. Each row is one Grid instance holding up to
			// `cols` children; extra children WRAP into further Grid instances stacked in a
			// ContainerVertical. This replaces the old `cells[i % cells.length]` overflow (which
			// stacked two items in one cell once child count exceeded the column count).
			// Column count comes from an explicit `gridLayout` ("50-50" | "33-66" | "66-33" | "320-auto" | ...)
			// or is derived from the child count; >4 children default to a 4-column wrap.
			const kids = node.children ?? [];
			const gap = node.gridGap ?? '(Def) md';
			const byCount = {
				1: '100',
				2: '50-50',
				3: '(Def) 33-33-33',
				4: '25-25-25-25'
			};
			let layout = node.gridLayout;
			let cols;
			if (layout) {
				cols = gridColumnCountFor(layout);
			} else if (kids.length <= 4) {
				cols = kids.length || 1;
				layout = byCount[cols];
			} else {
				cols = node.gridColumns ?? 4;
				layout = byCount[cols] ?? '25-25-25-25';
			}
			// Single row: one Grid instance (unchanged for <= cols children).
			if (kids.length <= cols) {
				const g = createLocalInstance('Grid', {
					Layout: layout,
					Gap: gap
				});
				parent.appendChild(g);
				fillWidth(g);
				await fillGridRow(g, kids, node);
				return g;
			}
			// Multiple rows: one Grid per chunk of `cols` children, stacked in a
			// ContainerVertical. The row gap matches the grid gap so H/V spacing agree.
			const rowGap = String(node.gridGap ?? 'md').replace(
				/^\(Def\)\s*/,
				''
			);
			const rows = buildContainer(
				{ gap: rowGap, align: node.align ?? 'top-left' },
				'vertical'
			);
			parent.appendChild(rows);
			fillWidth(rows);
			for (let i = 0; i < kids.length; i += cols) {
				const rowKids = kids.slice(i, i + cols);
				const slot = freshSlot(rows, 'Slot');
				const g = createLocalInstance('Grid', {
					Layout: layout,
					Gap: gap
				});
				slot.appendChild(g);
				fillWidth(g);
				await fillGridRow(g, rowKids, node);
			}
			return rows;
		}
		case 'Icon': {
			// Functional icon = a real 48x48 (1:1) icon component instance. NEVER an image
			// rectangle. A specific glyph is chosen via `name` (e.g. "arrow_right", resolved
			// through the ICON_KEYS registry) or a raw `key` (the icon's Figma key from the DB
			// Theme Icons library — a component OR a component set). An explicit key wins over
			// name; without either it falls back to the generic icon-placeholder. Icons hug
			// their size, they never fill.
			let inst = null;
			const iconKey = node.key || iconKeyByName(node.name);
			if (iconKey) {
				try {
					const cs =
						await figma.importComponentSetByKeyAsync(iconKey);
					inst = (
						cs.type === 'COMPONENT_SET'
							? (cs.defaultVariant ?? cs.children[0])
							: cs
					).createInstance();
				} catch {
					try {
						const comp =
							await figma.importComponentByKeyAsync(iconKey);
						inst = comp.createInstance();
					} catch {}
				}
			}
			if (!inst) {
				const set = await importSet(ICON_KEY);
				inst = (
					set.type === 'COMPONENT_SET'
						? (set.defaultVariant ?? set.children[0])
						: set
				).createInstance();
			}
			parent.appendChild(inst);
			// Icon dimensions are INTRINSIC to the component's `Size` variant — NEVER
			// force-resize (pinning an axis to FIXED yields a mismatched box like
			// "32 Hug × 48": width hugs to 32 while height stays a stale 48). If a size is
			// requested, pick it via the `Size` variant (e.g. "16"/"20"/"24"/"32"); then hug
			// BOTH axes so width AND height follow the component.
			if (node.size != null) {
				try {
					setVariant(inst, 'Size', String(node.size));
				} catch {}
			}
			hugWidth(inst);
			hugHeight(inst);
			return inst;
		}
		case 'Image': {
			// Image node = a rectangle carrying an IMAGE paint (like a real Figma image).
			// The image ALWAYS uses a design-system aspect ratio (1:1 | 3:4 | 16:9): the width
			// fills its container and the height derives from the ratio — never a free pixel height.
			// Fill precedence: node.src (real image via URL) → node.imageHash → the DB transparent
			// placeholder image (checkerboard, the designer default) → neutral gray as last resort.
			const r = figma.createRectangle();
			r.name = node.label || 'Image';
			const factor = IMAGE_RATIOS[node.ratio] ?? IMAGE_RATIOS['16:9'];
			// Optional FIXED width (a small thumbnail, e.g. beside text in a ContainerHorizontal).
			// Without it the image FILLS its container width (the default, e.g. inside a Grid cell).
			const fixedW =
				typeof node.imageWidth === 'number' && node.imageWidth > 0
					? node.imageWidth
					: null;
			const baseW = fixedW || 800;
			r.resize(baseW, Math.round(baseW * factor));
			await applyImageFill(r, node);
			// Rounded corners bind to a DB radius token (never a raw number). Default radius.lg;
			// pass radius:"none" to disable, or a token like "radius.md".
			const rad = node.radius === undefined ? 'radius.lg' : node.radius;
			if (rad && rad !== 'none') {
				if (typeof rad === 'number') r.cornerRadius = rad;
				else await bindRadius(r, rad);
			}
			parent.appendChild(r);
			try {
				r.lockAspectRatio();
			} catch {}
			if (fixedW) {
				// Thumbnail: keep an explicit width (hug, don't fill), height from the ratio.
				try {
					r.layoutSizingHorizontal = 'FIXED';
				} catch {}
				try {
					r.resize(fixedW, Math.round(fixedW * factor));
				} catch {}
				try {
					r.layoutSizingVertical = 'FIXED';
				} catch {}
			} else {
				fillWidth(r);
				// Fallback: if aspect-ratio lock doesn't drive height under FILL, pin a FIXED
				// height computed from the laid-out width, then re-assert FILL width.
				try {
					const w = r.width;
					if (w && Math.abs(r.height - w * factor) > 1) {
						r.resize(w, Math.round(w * factor));
						r.layoutSizingHorizontal = 'FILL';
					}
				} catch {}
			}
			return r;
		}
		default: {
			// Generic path: ANY component registered in COMPONENTS is renderable as a leaf
			// instance by using its canonical name as the node type. props -> variant axes,
			// label -> primary TEXT, text {name:value} -> named TEXT props, semantic -> state.
			if (COMPONENTS[node.type]) {
				const inst = await createLibraryInstance(
					node.type,
					node.props ?? {}
				);
				await ensureFonts();
				await loadInstanceFonts(inst);
				if (node.label) setInstanceLabel(inst, node.label);
				if (node.text) setInstanceFields(inst, node.text);
				if (node.semantic) await setSemantic(inst, node.semantic);
				if (node.applyProps) await applyProps(inst, node.applyProps);
				parent.appendChild(inst);
				if (node.fillWidth ?? FILL_DEFAULT.has(node.type))
					fillWidth(inst);
				return inst;
			}
			stop(`Unknown plan node type "${node.type}".`);
		}
	}
}

/* Render an array of children into an owner instance's slot, re-resolving the
 * slot BEFORE EACH append (never cache across the loop). */
async function renderChildrenIntoSlot(ownerInstance, slotName, children) {
	for (const childNode of children ?? []) {
		const slot = freshSlot(ownerInstance, slotName); // fresh every iteration
		await renderNode(childNode, slot);
	}
}

/* -----------------------------------------------------------------------------
 * SCREEN ROOT — placed to the RIGHT of existing frames, never stacked at 0,0.
 * GOTCHA 3: set width via resize FIRST, then primaryAxisSizingMode = AUTO LAST.
 * -------------------------------------------------------------------------- */
function createScreenRoot(name, width, reuse) {
	const page = figma.currentPage;
	let maxRight = 0,
		has = false;
	for (const n of page.children) {
		if (typeof n.x === 'number' && typeof n.width === 'number') {
			maxRight = Math.max(maxRight, n.x + n.width);
			has = true;
		}
	}
	const root = figma.createFrame();
	root.name = name;
	root.layoutMode = 'VERTICAL';
	root.counterAxisSizingMode = 'FIXED';
	root.itemSpacing = 0;
	root.fills = [];
	root.resize(width || 1440, 1); // width first
	page.appendChild(root);
	if (reuse && typeof reuse.x === 'number') {
		root.x = reuse.x;
		root.y = reuse.y;
	} else {
		root.x = has ? maxRight + 200 : 0;
		root.y = 0;
	}
	root.primaryAxisSizingMode = 'AUTO'; // AUTO LAST (do not resize after this)
	return root;
}

/* -----------------------------------------------------------------------------
 * renderPlan — the ONE entry point. Model calls this and returns res.audit.
 * -------------------------------------------------------------------------- */
async function renderPlan(plan) {
	if (!plan || !Array.isArray(plan.layout))
		stop('Plan must have a `layout` array.');
	await ensureFonts();

	// Navigate to the target node's page if provided.
	if (plan.targetNodeId) {
		let target = null;
		for (const p of figma.root.children) {
			if (p.id === plan.targetNodeId) {
				target = p;
				break;
			}
			const f = p.findOne((n) => n.id === plan.targetNodeId);
			if (f) {
				target = p;
				break;
			}
		}
		if (target && target.type === 'PAGE')
			await figma.setCurrentPageAsync(target);
		else if (target && target.parent) {
			let pg = target;
			while (pg && pg.type !== 'PAGE') pg = pg.parent;
			if (pg) await figma.setCurrentPageAsync(pg);
		}
	}

	// GUARD — never silently create a duplicate frame on a page that already has one.
	// A follow-up change to an existing screen MUST go through applyEdits (in place).
	// A deliberate full rebuild requires `replace: true`, which removes the existing
	// matching (or only) frame first and renders in its place — so no sibling pile-up.
	let reusePos = plan.reuse;
	const pageFrames = (figma.currentPage.children ?? []).filter(
		(n) => safe(() => n.type, '') === 'FRAME'
	);
	if (pageFrames.length) {
		const wantName = plan.screen ?? 'Screen';
		const named = pageFrames.filter(
			(f) => safe(() => f.name, '') === wantName
		);
		if (plan.replace) {
			const victims = named.length ? named : pageFrames;
			if (victims[0] && !reusePos)
				reusePos = {
					x: safe(() => victims[0].x, 0),
					y: safe(() => victims[0].y, 0)
				};
			for (const f of victims) {
				try {
					f.remove();
				} catch {}
			}
		} else {
			stop(
				`A frame already exists on page "${safe(
					() => figma.currentPage.name,
					'?'
				)}" (${pageFrames
					.map((f) => `"${safe(() => f.name, '?')}"`)
					.join(
						', '
					)}). Do NOT create a duplicate — use applyEdits to patch the existing frame in place. For a deliberate full rebuild pass { replace: true } (removes the existing frame first).`
			);
		}
	}

	const root = createScreenRoot(
		plan.screen ?? 'Screen',
		plan.width,
		reusePos
	);
	for (const node of plan.layout) await renderNode(node, root);
	hugHeight(root); // final: root hugs total content height

	const audit = await auditTree(root);
	return { root, rootId: root.id, audit };
}

/* -----------------------------------------------------------------------------
 * auditTree — live self-check for the classes of defect the standalone linter
 * can't see at render time (content overflow, collapsed layout, fixed section),
 * plus header/zebra. Returns { valid, violations }. Run it, fix, re-render.
 * -------------------------------------------------------------------------- */
