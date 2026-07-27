function findTextNode(root, match, mode) {
	const m = String(match ?? '');
	return (
		_walkAll(root).find((n) => {
			if (safe(() => n.type, '') !== 'TEXT') return false;
			const c = safe(() => n.characters, '');
			return mode === 'contains' ? c.includes(m) : c === m;
		}) || null
	);
}
function findByName(root, name) {
	const nm = normName(name);
	return (
		_walkAll(root).find((n) =>
			normName(safe(() => n.name, '')).includes(nm)
		) || null
	);
}
function nearestAncestor(node, re) {
	let n = node;
	while (n) {
		if (re.test(safe(() => n.name, ''))) return n;
		n = n.parent;
	}
	return null;
}
function nearestInstanceFrom(node) {
	let n = node;
	while (n && safe(() => n.type, '') !== 'INSTANCE') n = n.parent;
	return n || null;
}
async function loadFontForTextNode(t) {
	await ensureFonts();
	let fn = null;
	try {
		fn = t.fontName;
	} catch {}
	if (fn && fn !== figma.mixed) {
		try {
			await figma.loadFontAsync(fn);
		} catch {}
		return;
	}
	let segs = [];
	try {
		segs = t.getStyledTextSegments(['fontName']);
	} catch {}
	for (const s of segs) {
		try {
			await figma.loadFontAsync(s.fontName);
		} catch {}
	}
}
function findScreenFrame(spec) {
	if (spec.rootId) {
		for (const p of figma.root.children) {
			const f = safe(
				() =>
					p.id === spec.rootId
						? p
						: p.findOne((n) => n.id === spec.rootId),
				null
			);
			if (f) return f;
		}
	}
	const name = spec.screen;
	for (const p of figma.root.children) {
		if (safe(() => p.type, '') !== 'PAGE') continue;
		for (const c of safe(() => p.children, []) ?? [])
			if (
				safe(() => c.type, '') === 'FRAME' &&
				safe(() => c.name, '') === name
			)
				return c;
	}
	stop(
		`Screen frame "${spec.screen ?? spec.rootId}" not found for editing. Check the exact frame name.`
	);
}
const CONTAINER_RE =
	/container ?\/ ?vertical|container ?\/ ?horizontal|containervertical|containerhorizontal/i;
async function applyOneEdit(frame, e) {
	switch (e.op) {
		case 'setText': {
			const t = findTextNode(frame, e.find, e.mode);
			if (!t)
				return {
					op: e.op,
					ok: false,
					error: `text "${e.find}" not found`
				};
			await loadFontForTextNode(t);
			t.characters = String(e.value ?? '');
			return { op: e.op, ok: true };
		}
		case 'setVisible': {
			let node = e.name ? findByName(frame, e.name) : null;
			if (!node && e.find) {
				const t = findTextNode(frame, e.find, e.mode);
				node = t
					? e.scope
						? nearestAncestor(t, new RegExp(e.scope, 'i'))
						: t
					: null;
			}
			if (!node)
				return { op: e.op, ok: false, error: 'target not found' };
			try {
				node.visible = e.visible !== false;
			} catch (err) {
				return { op: e.op, ok: false, error: String(err) };
			}
			return { op: e.op, ok: true };
		}
		case 'hideNavItem': {
			// Search the WHOLE frame for navigation-item instances (do NOT scope by a
			// findByName("navigation") — that matches "Meta Navigation" first). Match by the
			// item's own visible label text, exact or (with mode:"contains") substring.
			const m = String(e.label ?? '');
			const items = _walkAll(frame).filter(
				(n) =>
					safe(() => n.type, '') === 'INSTANCE' &&
					/navigation item/i.test(safe(() => n.name, ''))
			);
			const item = items.find((n) =>
				safe(() => {
					const tt = n.findOne((x) => x.type === 'TEXT');
					const c = tt ? tt.characters : '';
					return e.mode === 'contains' ? c.includes(m) : c === m;
				}, false)
			);
			if (!item)
				return {
					op: e.op,
					ok: false,
					error: `nav item "${e.label}" not found`
				};
			try {
				item.visible = false;
			} catch (err) {
				return { op: e.op, ok: false, error: String(err) };
			}
			return { op: e.op, ok: true };
		}
		case 'setVariant': {
			let inst = e.name ? findByName(frame, e.name) : null;
			if (!inst && e.find) {
				const t = findTextNode(frame, e.find, e.mode);
				inst = t ? nearestInstanceFrom(t) : null;
			}
			if (!inst || safe(() => inst.type, '') !== 'INSTANCE')
				return { op: e.op, ok: false, error: 'instance not found' };
			await loadInstanceFonts(inst);
			setVariant(inst, e.axis, e.value);
			return { op: e.op, ok: true };
		}
		case 'setContainerGap': {
			const t = findTextNode(frame, e.anchorText, e.mode);
			const cont = t
				? nearestAncestor(t, CONTAINER_RE)
				: e.name
					? findByName(frame, e.name)
					: null;
			if (!cont)
				return { op: e.op, ok: false, error: 'container not found' };
			const GAP = {
				'2xs': '2xs',
				xs: 'xs',
				sm: 'sm',
				md: '(Def) md',
				lg: 'lg',
				xl: 'xl',
				'2xl': '2xl',
				'3xl': '3xl'
			};
			setVariant(cont, 'Gap', GAP[e.gap] ?? e.gap);
			return { op: e.op, ok: true };
		}
		case 'setSectionFill': {
			const t = findTextNode(frame, e.anchorText, e.mode);
			const section = t
				? nearestAncestor(t, /Section/i)
				: e.name
					? findByName(frame, e.name)
					: null;
			if (!section)
				return { op: e.op, ok: false, error: 'section not found' };
			await bindFill(section, e.token);
			return { op: e.op, ok: true };
		}
		case 'setTextFill': {
			const t = findTextNode(frame, e.find, e.mode);
			if (!t)
				return {
					op: e.op,
					ok: false,
					error: `text "${e.find}" not found`
				};
			await bindTextFill(t, e.token);
			return { op: e.op, ok: true };
		}
		case 'remove': {
			const t = findTextNode(frame, e.find, e.mode);
			const node = t
				? e.scope
					? nearestAncestor(t, new RegExp(e.scope, 'i'))
					: nearestAncestor(t, /Card|Container ?\/ ?Horizontal/i)
				: e.name
					? findByName(frame, e.name)
					: null;
			if (!node)
				return {
					op: e.op,
					ok: false,
					error: 'node to remove not found'
				};
			try {
				node.remove();
			} catch (err) {
				return { op: e.op, ok: false, error: String(err) };
			}
			return { op: e.op, ok: true };
		}
		case 'appendLike': {
			// Render a new sibling by locating an existing sibling (anchored by text),
			// walking up to the block it belongs to, and rendering into that block's SLOT.
			const t = findTextNode(frame, e.find, e.mode);
			if (!t)
				return {
					op: e.op,
					ok: false,
					error: `anchor "${e.find}" not found`
				};
			const sibling = e.scope
				? nearestAncestor(t, new RegExp(e.scope, 'i'))
				: nearestAncestor(t, /Card|Container ?\/ ?Horizontal/i);
			if (!sibling || !sibling.parent)
				return {
					op: e.op,
					ok: false,
					error: 'sibling/parent not found'
				};
			const slot = sibling.parent; // the SLOT that holds the sibling
			await renderNode(e.node, slot);
			return { op: e.op, ok: true };
		}
		case 'custom': {
			// ESCAPE HATCH — for edits no prepared op covers. Resolves a target the same way
			// the other ops do, then hands it to a caller-supplied `apply(node, api, frame)`
			// with the runtime's HARDENED helpers (EDIT_API): bind-on-paint fills, variant
			// setters, stale-slot-safe slot access, styled text, compliant renderNode, etc.
			// It STILL runs inside applyEdits, so the post-edit auditTree() re-validates the
			// result — a guarded fallback, not raw guesswork. `apply` may be async.
			if (typeof e.apply !== 'function')
				return {
					op: e.op,
					ok: false,
					error: 'custom edit needs an `apply(node, api, frame)` function'
				};
			let node = e.name ? findByName(frame, e.name) : null;
			if (!node && e.find) {
				const t = findTextNode(frame, e.find, e.mode);
				node = t
					? e.scope
						? nearestAncestor(t, new RegExp(e.scope, 'i'))
						: t
					: null;
			}
			if (!node && (e.name || e.find))
				return { op: e.op, ok: false, error: 'target not found' };
			node = node || frame; // no selector → operate on the whole frame
			try {
				await e.apply(node, EDIT_API, frame);
			} catch (err) {
				return {
					op: e.op,
					ok: false,
					error: String((err && err.message) || err)
				};
			}
			return { op: e.op, ok: true };
		}
		default:
			return { op: e.op, ok: false, error: `unknown edit op "${e.op}"` };
	}
}

/* EDIT_API — the runtime's hardened helper toolkit, exposed to:
 *   1) the `custom` edit op (above), via apply(node, api, frame); and
 *   2) direct `use_figma` fallbacks, via the store-once loader's returned `api` (render.js)
 *      or directly by name in the verbatim-paste path.
 * These are the SAME primitives renderPlan/applyEdits use internally, so a fallback edit
 * keeps every Figma-API gotcha solved (fills bound on the paint, slots re-fetched fresh,
 * tokens/styles validated against the registry) and stays DB-compliant. End a free-form
 * fallback with `await api.auditTree(frame)` to re-validate. */
const EDIT_API = {
	// color / tokens (bind on the paint — never node.setBoundVariable('fills'))
	bindFill,
	bindTextFill,
	bindRadius,
	importVar,
	// variants / component props / labels
	setVariant,
	setInstanceLabel,
	setInstanceFields,
	applyProps,
	setSemantic,
	// slots (always re-resolved — never cached across a mutation)
	freshSlot,
	appendToSlot,
	// sizing helpers
	fillWidth,
	hugWidth,
	fillHeight,
	hugHeight,
	hugVertical,
	// build compliant content (Heading/Body via renderNode — raw styled text is not allowed)
	renderNode,
	importSet,
	createLibraryInstance,
	createLocalInstance,
	// selectors / traversal
	findByName,
	findTextNode,
	nearestAncestor,
	nearestInstanceFrom,
	loadFontForTextNode,
	// validation + utils
	auditTree,
	normName,
	stop,
	safe
};
async function applyEdits(spec) {
	if (!spec || !Array.isArray(spec.edits))
		stop('applyEdits needs an `edits` array.');
	await ensureFonts();
	if (spec.targetNodeId) {
		for (const p of figma.root.children) {
			if (p.id === spec.targetNodeId && p.type === 'PAGE') {
				await figma.setCurrentPageAsync(p);
				break;
			}
			const f = safe(
				() => p.findOne((n) => n.id === spec.targetNodeId),
				null
			);
			if (f) {
				let pg = f;
				while (pg && pg.type !== 'PAGE') pg = pg.parent;
				if (pg) await figma.setCurrentPageAsync(pg);
				break;
			}
		}
	}
	const frame = findScreenFrame(spec);
	const results = [];
	for (const e of spec.edits) {
		try {
			results.push(await applyOneEdit(frame, e));
		} catch (err) {
			results.push({
				op: e && e.op,
				ok: false,
				error: String((err && err.message) || err)
			});
		}
	}
	try {
		hugHeight(frame);
	} catch {}
	const audit = await auditTree(frame);
	return { rootId: frame.id, results, audit };
}

/* =============================================================================
 * PLAN SCHEMA (what the model produces — JSON only)
 * -----------------------------------------------------------------------------
 * {
 *   "screen": "DS KPI Dashboard",
 *   "targetNodeId": "177:1091",          // optional: page/frame to render on
 *   "width": 1440,                        // optional (default 1440)
 *   "screenGap": 200,                     // optional (default 200). Horizontal gutter (px) to
 *                                         // the rightmost existing frame when this screen is
 *                                         // an ADDITIONAL screen on the same page.
 *   "replace": false,                     // optional. A screen with the SAME `screen` name
 *                                         // already on the page → renderPlan REFUSES (use
 *                                         // applyEdits to edit in place). A DIFFERENTLY-named
 *                                         // screen is allowed and placed to the RIGHT of the
 *                                         // existing frames (multi-screen site on one page).
 *                                         // replace:true removes the matching/only frame first
 *                                         // for a deliberate rebuild (no duplicate pile-up).
 *   "layout": [                           // ordered top-level children of the root
 *     { "type": "Header", "appName": "Design System KPIs" },
 *     { "type": "Section", "fills": "color.background.canvas", "children": [
 *         { "type": "ContainerVertical", "gap": "sm", "children": [
 *             { "type": "Heading", "as": "h2", "content": "…", "fills": "color.text.strong" }
 *         ]}
 *     ]},
 *     { "type": "Section", "fills": "color.background.surface", "children": [
 *         { "type": "Grid", "children": [ { "type": "Card", "props": {"elevationLevel":"1"},
 *             "children": [ { "type": "ContainerVertical", "gap": "(Def) md", "children": [
 *                 { "type": "Tag", "props": {"icon":false,"emphasis":"weak","behavior":"static"},
 *                   "label": "48 Stable", "semantic": "Successful" },
 *                 { "type": "ContainerVertical", "gap": "2xs", "children": [
 *                     { "type": "Heading", "as": "h5", "content": "Komponenten", "fills": "color.text.strong" },
 *                     { "type": "Heading", "as": "h3", "content": "89%",         "fills": "color.text.strong" },
 *                     { "type": "Body",    "size": "Small", "content": "Adoption Rate","fills": "color.text.weak" }
 *                 ]}
 *             ]}]
 *         }]}
 *     ]}
 *   ],
 *   "variables": ["color.background.canvas", "color.text.strong", "space.md"]
 * }
 *
 * NODE FIELDS
 *   type      Layout/base: Header|Section|Grid|ContainerVertical|ContainerHorizontal|
 *             Card|Divider|Image|Icon. Typography is ALWAYS a Concept COMPONENT — there is NO
 *             raw text node: Heading (headings) | Body (body/caption). Library components
 *             (rendered as leaf instances): Button|Tag|Badge|Link|Input|Textarea|Select|Checkbox|
 *             Radio|Switch|Infotext|Notification|Accordion|Tooltip. Any name in the
 *             COMPONENTS map works via the generic path — add more there to extend coverage.
 *   Heading   Concept Heading component. as = h1..h6 (level→size default mapping);
 *             weight = "(Def) Black"|"Light"; align = left|center|right; content = text;
 *             fills = color token (bound on the inner text). Requires Concept opt-in.
 *   Body      Concept Text component. size = "Small"|"(Def) Medium"|"Large"|"xLarge"|
 *             "2xLarge"|"3xLarge"; align, content, fills as Heading. Requires Concept opt-in.
 *             Section `title`/`description` auto-build a Heading (titleAs, default h2) +
 *             Body (descriptionSize, default "(Def) Medium").
 *   Header    DB Header (first child of every screen). appName = brand app name.
 *             navItems = string[] of navigation labels for a MULTI-PAGE site: the runtime
 *             names the first N of the Header's up-to-5 nav items and hides the rest, so the
 *             nav shows exactly those pages. Providing navItems implies the Navigation is
 *             shown. Cap: 5 items. The DB LOGO / app name IS the "home" link, so do NOT add
 *             a "Startseite"/"Home"/"Start" nav item — list only the OTHER pages (e.g.
 *             ["Abfahrten","Wegeleitung","Service"]). showNav = true also shows the nav.
 *             metaNav (default false) shows the top meta-navigation row; actions (default
 *             false) shows the Primary/Secondary action icon buttons. Leave both OFF unless
 *             there is a REAL, defined action — otherwise the Header renders empty ✕
 *             placeholder icons and a stray "External Link".
 *   props     variant axes (matched against the registry, e.g. {variant:"brand"})
 *   text      { fieldName: value } — sets multiple named TEXT props (e.g. Notification
 *             { headline, description }). label sets the single primary TEXT prop.
 *   applyProps { "Property Name": value } — set ANY component property on the live instance.
 *             TEXT → string, VARIANT → string, BOOLEAN → boolean, INSTANCE_SWAP → key string.
 *             Keys matched by normalized-name substring (case-insensitive, emoji stripped).
 *             Example: { "Label": "E-Mail", "Show Required Asterisk": true, "Size": "small" }
 *   fillWidth force the instance to FILL its container width (default on for form fields)
 *   fillHeight Container: FILL the grid row height and vertically center its content
 *             (Align "left"/"center") — use for the text block beside an Image.
 *             Card: stretch the card to the grid row height instead of hugging (used
 *             outside grids). Inside a Cards-only Grid you do NOT need this — the runtime
 *             AUTO-EQUALIZES card heights (see `equalHeights`).
 *   justify   ContainerVertical + fillHeight: where content sits on the vertical axis —
 *             "start" (top) | "center" (default) | "end" (bottom). Use `fillHeight:true`
 *             + `justify:"end"` for a content card's trailing action column so the action
 *             (Link/Button) sits at the BOTTOM (pair with `align:"top-right"` for bottom-right).
 *   equalHeights Grid: default TRUE for a grid whose children are ALL Cards — the runtime
 *             measures the rendered cards and stretches the shorter ones to the tallest so
 *             they share one height. Set `equalHeights: false` to opt out.
 *   spread    ContainerHorizontal: use the FULL parent width and push children to both
 *             ends (SPACE_BETWEEN). Use for list/timeline rows so long text gets the full
 *             width (single line, no cramping) and the status/action sits flush right,
 *             instead of everything packed left with dead whitespace. Pair the trailing
 *             child (badge/tag column) with `hugWidth: true` so only the leading block grows.
 *   hugWidth  Text/Container: opt out of the default horizontal FILL and only take the
 *             width the content needs (e.g. the trailing badge column in a `spread` row).
 *   Icon      A real DB Theme Icon component instance (functional icon). Use for
 *             `visual: "icon"`. NEVER an image rectangle. The size is INTRINSIC to the
 *             component's `Size` variant — the instance HUGS both width and height and is
 *             never force-resized. Optional `size` selects the `Size` variant (e.g. 16/20/
 *             24/32); omit it to use the component's default size.
 *   Image     Rectangle carrying an IMAGE paint (a real Figma image), NOT a solid
 *             gray box. The width fills its container and the height derives from a
 *             design-system aspect RATIO — never a free pixel height.
 *             ratio      "1:1" | "3:4" | "16:9" (default "16:9")
 *             imageWidth OPTIONAL fixed pixel width for a small thumbnail (e.g. beside text
 *                        in a ContainerHorizontal). Height derives from the ratio. Omit to
 *                        FILL the container width (the default, e.g. inside a Grid cell).
 *             src        real image URL (optional; loaded via createImageAsync)
 *             imageHash  explicit Figma image hash (optional)
 *             scaleMode  "FILL" (default) | "FIT" | "TILE" | "CROP"
 *             radius     DB radius TOKEN name ("radius.md" | "radius.lg" | ...,
 *                        default "radius.lg") or "none". NEVER a raw pixel number.
 *             Fill precedence: src → imageHash → DB transparent placeholder
 *             (checkerboard, the designer default) → neutral gray as a last resort.
 *   gridGap   Grid gap token: "(Def) md" (default) | "xl" | "2xl" etc.
 *             Media/Text rows on landing pages use "xl".
 *   gridLayout Grid column split: defaults to the child count (2->"50-50",
 *             3->"(Def) 33-33-33", 4->"25-25-25-25"); override with a real Grid layout,
 *             e.g. "50-50" | "33-66" | "66-33" | "320-auto" (NOT "25-75" — no such variant).
 *   title       Section: heading text (auto-styled headline + color.text.strong)
 *   description Section: sub text under the title (body + color.text.weak)
 *   titleStyle / descriptionStyle  Section: override the heading/description text style
 *               (e.g. titleStyle "headline.lg" for the top/hero section)
 *   label     visible label for Tag/Button/Badge (set via TEXT component property)
 *   semantic  Tag/Badge state: Successful|Informational|Warning|Critical|Neutral|…
 *   style     Text: a registered text-style name (headline.lg, body, …)
 *   content   Text content
 *   fills     color token name (Section bg / Text color)
 *   align,gap,padding   Container variant axes (gap uses "(Def) md" for md)
 *   spacing   Card: inner padding VARIANT ("small"|"medium"|"large"|"none" or the exact
 *             Figma label). Keep it in sync with the content block's gap (a block with a
 *             uniform `lg` gap sits in a Card with `spacing: "large"`).
 *
 * SECTION STRUCTURE: a content Section should have a `title` (and optional
 * `description`); never render a bare Grid/Card group without a heading. The runtime
 * builds the title↔description header with a small "xs" gap (never "2xs").
 * HEADING HIERARCHY: the section `title` is the SECTION heading (h2). Content headings
 * INSIDE the section (card titles, media-text titles) MUST be a LOWER level (h3/h4/h5) —
 * never a second h2. Do NOT place two same-size headlines in one section. If a single
 * media/text row already has its own headline, let the SECTION title be that headline
 * (one Heading), don't duplicate it as both a section title and an inner h2.
 * SINGLE-BLOCK SECTIONS: only self-contained modules justify a one-block section
 * (hero, closing CTA, one media-text row). Do NOT wrap a lone heading/text/card in its
 * own section otherwise — merge it into an adjacent section.
 * CARD CONTENT ALIGNMENT: a card's content stack is TOP-aligned (align "top-left"), never
 * vertically centered, so cards in a row stay visually consistent. Only a trailing ACTION
 * may sit bottom-right (its own fillHeight + justify:"end" column).
 * ZEBRA: first Section = color.background.canvas, then alternate surface/canvas.
 *
 * SECTION EXTRAS
 *   contentWidth  Section content max-width VARIANT: "(Def) Full" | "Medium (1024)" |
 *                 "Large (1440)" | "Small (768)". LANDING PAGES use "Small (768)".
 *   spacing       Section inner spacing VARIANT: "small" | "medium" | "large" | "none"
 *                 (or the exact Figma label). DASHBOARDS / operational B2B screens use
 *                 "small" (denser, scannable); marketing / landing pages keep the default
 *                 "medium".
 *   align         Section: "center" centers the heading (title/description) and the
 *                 hugging content (e.g. a CTA Button). Use for the hero and the
 *                 closing CTA section of a landing page.
 * ========================================================================== */
