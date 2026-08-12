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
			if (node.hugWidth) {
				hugWidth(h);
				hugTextWidth(h); // Heading only shrinks if its inner TEXT also hugs
			} else fillWidth(h);
			return h;
		}
		case 'Body': {
			const b = await buildBodyComponent(node);
			parent.appendChild(b);
			if (node.hugWidth) {
				hugWidth(b);
				hugTextWidth(b);
			} else fillWidth(b);
			return b;
		}
		case 'Header': {
			const h = await buildHeader(node);
			parent.appendChild(h);
			fillWidth(h);
			return h;
		}
		case 'Divider': {
			// The Divider component carries a `Variant` axis (Horizontal | Vertical) and an
			// `Emphasis` axis. Default is a HORIZONTAL rule that FILLS its container width.
			// `orientation: "vertical"` selects the Vertical variant and stretches it to FILL
			// the parent's HEIGHT (hug width) — a full-bleed panel separator between two
			// columns in a horizontal container (e.g. journey ↔ price/action panel). For a
			// full-bleed divider the surrounding Card/Section padding must be off (handled by
			// per-column padding), so the rule touches both edges.
			const d = await createLibraryInstance('Divider');
			parent.appendChild(d);
			if (node.orientation === 'vertical') {
				setVariant(d, 'Variant', 'Vertical');
				try {
					d.layoutSizingHorizontal = 'HUG';
				} catch {}
				try {
					d.layoutSizingVertical = 'FILL';
				} catch {}
			} else {
				fillWidth(d);
			}
			if (node.emphasis) setVariant(d, 'Emphasis', node.emphasis);
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
			// First-class icons: `iconLeading`/`iconTrailing` accept a DB Theme icon
			// name (e.g. "calendar") or a raw key. Applied AFTER applyProps so the
			// active icon slot follows the button Size (e.g. Small → smaller icon).
			if (node.iconLeading)
				await setButtonIcon(b, node.iconLeading, 'leading');
			if (node.iconTrailing)
				await setButtonIcon(b, node.iconTrailing, 'trailing');
			parent.appendChild(b);
			// A Button HUGS its label by default. `fillWidth: true` stretches it to the
			// container width (label centers) — use for the PRIMARY action in a fixed-width
			// action column (e.g. a "Weiter" button spanning the price/action panel).
			if (node.fillWidth) fillWidth(b);
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
				// Title↔description are the elements of ONE content block (the section header),
				// so they sit at R (lg) per the Spacing-Hierarchie (layout-guidelines.md).
				// Override with node.headerGap only if needed.
				const heading = {
					type: 'ContainerVertical',
					gap: node.headerGap ?? 'lg',
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
						// Standard body text is emphasis-100 (screen-guidelines.md → Typografie:
						// "100 ist Standard; 90/80 nur für bewusst abgeschwächten Text"). Hierarchy
						// to the title comes from weight/size, not a muted color.
						fills: node.descriptionFill ?? 'color.text.strong',
						align: tAlign
					});
				// Section header → content region sits one step above the content-block gap
				// (blocks-to-each-other = R+1 = xl → header = R+2 = 2xl), staying the largest
				// separation inside the section (Gesetz der Nähe). Centered hero / closing-CTA
				// sections are a single centered message (title + subline + action), NOT a
				// header+content split, so they stay tight (lg). Override per-section with node.gap.
				// In a centered section (hero / closing CTA) the text must read centered too:
				// direct Heading/Body children (e.g. a hero subline) inherit center text-align
				// unless they set their own `align`. Cloned so the source plan is never mutated.
				const kids = (node.children ?? []).map((ch) =>
					centered &&
					ch &&
					(ch.type === 'Heading' || ch.type === 'Body') &&
					ch.align == null
						? { ...ch, align: 'center' }
						: ch
				);
				const outer = {
					type: 'ContainerVertical',
					gap: node.gap ?? (centered ? 'lg' : '2xl'),
					align: cAlign,
					children: [heading, ...kids]
				};
				const slot = freshSlot(s, 'Children');
				await renderNode(outer, slot);
			} else {
				// No header — but the Section's own "Children" slot does NOT apply the plan
				// `gap` (its internal itemSpacing is ~0), so direct children would touch (e.g.
				// a hero Image sitting flush on the card below it, or a summary Card flush on a
				// following hint). Wrap the children in a ContainerVertical that carries the
				// gap so an untitled Section separates its content blocks just like a titled
				// one. Default xl = content-blocks-to-each-other (R+1); override via node.gap.
				const centered =
					node.align === 'center' || node.align === 'top-center';
				const cAlign = centered ? 'center' : undefined;
				const kids = (node.children ?? []).map((ch) =>
					centered &&
					ch &&
					(ch.type === 'Heading' || ch.type === 'Body') &&
					ch.align == null
						? { ...ch, align: 'center' }
						: ch
				);
				const wrap = {
					type: 'ContainerVertical',
					gap: node.gap ?? 'xl',
					align: cAlign,
					children: kids
				};
				const slot = freshSlot(s, 'Children');
				await renderNode(wrap, slot);
			}
			return s;
		}
		case 'Tabs': {
			// DB Tabs (Beta) composite — see buildTabs. props → variant, tabs[] → Tab Item
			// labels + active, content → the active Tab Panel body. Fills width by default
			// (a tabbed panel spans its container); pass hugWidth for an auto-width tab strip.
			const t = await buildTabs(node);
			parent.appendChild(t);
			if (node.hugWidth) hugWidth(t);
			else fillWidth(t);
			return t;
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
			// Optional surface: bind a fill (a colored bar/panel) + radius, and/or a semantic
			// MODE that recolors the container's bound token + its subtree. Lets a colored
			// surface be pure-plan (no custom edit) — e.g. a dark line bar or a tinted panel.
			if (node.fills) await bindFill(c, node.fills);
			if (node.radius) await bindRadius(c, node.radius);
			if (node.semantic) await setSemantic(c, node.semantic);
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
			if (node.fills) await bindFill(c, node.fills);
			if (node.radius) await bindRadius(c, node.radius);
			if (node.semantic) await setSemantic(c, node.semantic);
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
			// everything to the left. The DB-native mechanism is the container's Gap "auto"
			// variant (SPACE_BETWEEN) — already applied in buildContainer when node.spread is
			// set. Here we only stretch the Slot to FILL so the row spans the full width for
			// the distribution to have room; pair with a trailing child marked `hugWidth` so
			// only the leading block grows. Re-fetch the slot fresh (ids regenerate on mutation).
			if (node.spread) {
				try {
					const sl = freshSlot(c, 'Slot');
					sl.layoutSizingHorizontal = 'FILL';
					sl.primaryAxisSizingMode = 'FIXED';
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
			// Normalize the gap token to the Grid's Gap VARIANT label — the "md" step is
			// labelled "(Def) md" on the component (like containers). Without this, gridGap:"md"
			// fails the {Layout, Gap} variant match in createLocalInstance and silently falls
			// back to children[0] = the default "(Def) 33-33-33" (3 columns), leaving an empty
			// trailing slot rendered as a pink image placeholder. Maps md → "(Def) md"; other
			// tokens (sm/lg/xl/2xl/…) pass through unchanged.
			const gap =
				CONTAINER_GAP_LABELS[node.gridGap] ??
				node.gridGap ??
				'(Def) md';
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
			// Color: an icon only shows a hue at emphasis-70 (color.icon). At emphasis-100 —
			// the DB Theme icon default — it stays near-BLACK in EVERY semantic mode, so
			// setting a mode alone does nothing (screen-guidelines.md → Farbe: "70 nur für
			// Icons"; layout-guidelines.md → Einfärben). To tint an icon we therefore (1) bind
			// its glyph fill to the emphasis-70 token, then (2) set the semantic MODE.
			// `fills` overrides the token explicitly; when only `semantic` is given we auto-drop
			// to color.icon so the tint is actually visible instead of silently black.
			const iconTint =
				node.fills || (node.semantic ? 'color.icon' : null);
			if (iconTint) {
				const v = await importVar(iconTint);
				const paint = figma.variables.setBoundVariableForPaint(
					figma.util.solidPaint('#000000'),
					'color',
					v
				);
				// Recolor the glyph's fill layer(s) — the inner vector / masked color
				// rectangle — NOT the instance frame itself (setting the frame fill would add
				// a colored background box behind the icon).
				const glyphs = safe(
					() =>
						inst.findAll(
							(n) => Array.isArray(n.fills) && n.fills.length > 0
						),
					[]
				);
				for (const g of glyphs) {
					try {
						g.fills = [paint];
					} catch {}
				}
			}
			// Semantic tint: recolors the bound emphasis-70 token to the mode's palette
			// (e.g. Successful → green, Critical → red). Applied AFTER the emphasis bind so
			// the mode has a 70-emphasis token to act on.
			if (node.semantic) await setSemantic(inst, node.semantic);
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
 * Additional screens on the SAME page sit beside the rightmost frame with a
 * `gap` gutter (default 200px, override via plan.screenGap) — a multi-screen
 * site lives on one Figma page, side by side, instead of on separate pages.
 * GOTCHA 3: set width via resize FIRST, then primaryAxisSizingMode = AUTO LAST.
 * -------------------------------------------------------------------------- */
function createScreenRoot(name, width, reuse, gap) {
	const page = figma.currentPage;
	const gutter = typeof gap === 'number' && gap >= 0 ? gap : 200;
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
		root.x = has ? maxRight + gutter : 0;
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

	// GUARD — never DUPLICATE the same screen; place ADDITIONAL (differently-named) screens
	// side by side. `replace` is SAFE + IDEMPOTENT: it removes ONLY the frame(s) whose name
	// matches `screen` (a re-render replaces its own twin in place, reusing its position); if
	// NONE match it places a NEW frame to the right — it NEVER wipes other frames. So you can
	// pass `replace: true` on EVERY call of a multi-frame batch: first render places new,
	// re-render replaces in place, no "only the last frame survived" footgun and no
	// "replace-only-the-first" dance. Use `replaceAll: true` ONLY for a deliberate PAGE WIPE.
	let reusePos = plan.reuse;
	const pageFrames = (figma.currentPage.children ?? []).filter(
		(n) => safe(() => n.type, '') === 'FRAME'
	);
	if (pageFrames.length) {
		const wantName = plan.screen ?? 'Screen';
		const named = pageFrames.filter(
			(f) => safe(() => f.name, '') === wantName
		);
		const removeFrames = (victims) => {
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
		};
		if (plan.replaceAll) {
			removeFrames(pageFrames); // deliberate PAGE WIPE (rare)
		} else if (plan.replace) {
			if (named.length) removeFrames(named); // replace own twin; none → place as new
		} else if (named.length) {
			stop(
				`A frame named "${wantName}" already exists on page "${safe(
					() => figma.currentPage.name,
					'?'
				)}". Do NOT create a duplicate — use applyEdits to patch it in place, pass { replace: true } to rebuild THIS frame (safe: replaces only the same-named frame), or { replaceAll: true } to wipe the page. (Additional, differently-named screens ARE allowed and get placed to the right automatically.)`
			);
		}
	}

	// OVERLAY mode (modal): a screen-sized frame with a Backdrop (Beta) filling it and the
	// dialog surface CENTERED on top. Used for a modal/dialog — the backdrop provides the
	// focus/separation, so the dialog Card is a LOW elevation (level 1), not a heavy shadow.
	// The frame is fixed W×H (default 1440×1024); the backdrop is an ABSOLUTE, screen-filling
	// child (ignored by the centering auto-layout); the single dialog surface in `layout` is a
	// normal auto-layout child, centered both axes, resized to a fixed `cardWidth` (default 520).
	if (plan.overlay) {
		const W = plan.width ?? 1440;
		const H = plan.height ?? 1024;
		const CW = plan.cardWidth ?? 520;
		const page = figma.currentPage;
		const root = figma.createFrame();
		root.name = plan.screen ?? 'Modal';
		root.resize(W, H);
		root.layoutMode = 'VERTICAL';
		root.primaryAxisSizingMode = 'FIXED';
		root.counterAxisSizingMode = 'FIXED';
		root.primaryAxisAlignItems = 'CENTER'; // vertical center
		root.counterAxisAlignItems = 'CENTER'; // horizontal center
		root.clipsContent = true;
		root.fills = [];
		page.appendChild(root);
		if (reusePos && typeof reusePos.x === 'number') {
			root.x = reusePos.x;
			root.y = reusePos.y;
		} else {
			let maxRight = 0,
				has = false;
			for (const n of page.children) {
				if (
					n !== root &&
					typeof n.x === 'number' &&
					typeof n.width === 'number'
				) {
					maxRight = Math.max(maxRight, n.x + n.width);
					has = true;
				}
			}
			const gutter =
				typeof plan.screenGap === 'number' && plan.screenGap >= 0
					? plan.screenGap
					: 200;
			root.x = has ? maxRight + gutter : 0;
			root.y = 0;
		}
		// Backdrop: an absolute, screen-filling layer behind the dialog.
		try {
			const bd = await createLibraryInstance('Backdrop', {});
			root.appendChild(bd);
			try {
				bd.layoutPositioning = 'ABSOLUTE';
			} catch {}
			try {
				bd.constraints = { horizontal: 'STRETCH', vertical: 'STRETCH' };
			} catch {}
			try {
				bd.x = 0;
				bd.y = 0;
				bd.resize(W, H);
			} catch {}
		} catch {}
		// Dialog surface: centered auto-layout child at a fixed card width (hug height).
		let surface = null;
		for (const node of plan.layout) surface = await renderNode(node, root);
		if (surface)
			try {
				surface.layoutSizingHorizontal = 'FIXED';
				surface.resize(CW, surface.height);
			} catch {}
		const auditO = await auditTree(root, { module: true });
		return { root, rootId: root.id, audit: auditO };
	}

	// MODULE mode: render a single reusable block/section on its own (no Header, no page
	// zebra) — e.g. a search module, a card, one section — for building a component/module
	// library instead of a whole screen. Default width is the medium content column (1024)
	// rather than a full 1440 page, so a module frame is sized like the block it holds.
	const isModule = !!plan.module;
	const root = createScreenRoot(
		plan.screen ?? (isModule ? 'Module' : 'Screen'),
		plan.width ?? (isModule ? 1024 : undefined),
		reusePos,
		plan.screenGap
	);
	for (const node of plan.layout) await renderNode(node, root);
	hugHeight(root); // final: root hugs total content height

	const audit = await auditTree(root, { module: isModule });
	return { root, rootId: root.id, audit };
}

/* -----------------------------------------------------------------------------
 * auditTree — live self-check for the classes of defect the standalone linter
 * can't see at render time (content overflow, collapsed layout, fixed section),
 * plus header/zebra. Returns { valid, violations }. Run it, fix, re-render.
 * -------------------------------------------------------------------------- */
