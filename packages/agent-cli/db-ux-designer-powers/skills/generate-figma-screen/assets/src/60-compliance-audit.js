async function auditTree(root, opts) {
	// opts.module = true → audit a STANDALONE MODULE (a single block/section rendered on
	// its own, not a full page). Structural checks (collapsed layout, fixed section, content
	// overflow) still run; the SCREEN-level checks (must start with a Header, zebra level-1
	// on the topmost section) are skipped — a module is not a page and owns neither.
	const module = !!(opts && opts.module);
	const violations = [];
	const LAYOUT_RE = /Section|Grid|Container/i;
	const push = (node, type, message) =>
		violations.push({ node, type, message });
	// Every property read is guarded: some instance-internal nodes have ids that
	// regenerate on layout and throw "Node not found" mid-traversal. A throwing node
	// is skipped, never fatal — the audit must always return a result.
	const safe = (fn, dflt) => {
		try {
			return fn();
		} catch {
			return dflt;
		}
	};

	// Outermost instances (not nested inside another instance) — checked below against the
	// library-only rule. Nested instances belong to their parent component, so testing the
	// outer ones is both sufficient and cheap.
	const rootInstances = [];

	// CASING — DB UX sets no product copy in ALL CAPS. A Topline/category/label is
	// differentiated by size, weight and color emphasis, never by capitalisation. Both causes
	// of the same on-canvas defect are caught:
	//   1. the PLAN wrote the content in caps ("ORIENTIERUNG" instead of "Orientierung"), and
	//   2. a forced Figma text case (UPPER / SMALL CAPS) on the text node or its style.
	// A text is flagged only when EVERY letter it carries is uppercase AND it has at least 5
	// letters, so established acronyms (DB, ICE, AGB, PDF, WCAG) and mixed-case copy that
	// merely mentions one stay valid. Fix the PLAN content, never the rendered text node.
	const auditCasing = (node, name) => {
		if (safe(() => node.type, '') !== 'TEXT') return;
		if (!safe(() => node.visible, true)) return;

		const chars = safe(() => node.characters, '') ?? '';
		if (!chars.trim()) return;

		const textCase = String(safe(() => node.textCase, 'ORIGINAL'));
		const forced =
			textCase === 'UPPER' ||
			textCase === 'SMALL_CAPS' ||
			textCase === 'SMALL_CAPS_FORCED';
		const letters = chars.replaceAll(/[^\p{L}]/gu, '');
		const allCaps =
			letters.length >= 5 && letters === letters.toUpperCase();
		if (!forced && !allCaps) return;

		const cause = forced ? ` (forced Text Case "${textCase}")` : '';
		push(
			name,
			'uppercase-text',
			`"${chars.slice(0, 40)}" is set in ALL CAPS${cause}. DB UX writes Toplines, labels and component text (Tag/Badge/Button/Link included) in normal case — differentiate them by size, weight and color emphasis instead. Fix the plan content (e.g. "Orientierung"), do not patch the rendered text node.`
		);
	};

	// PLACEHOLDER COPY — every DB component ships its text slots pre-filled with the LIBRARY's
	// own copy ("Headline", "Text", "Label", …). So a plan field that never reaches its TEXT
	// property does not render an empty line, it renders that default — which reads as real
	// product copy and passes every other check: the props write succeeded, the layout is valid,
	// only the CONTENT belongs to the component instead of the screen. That is how a
	// Notification shipped its headline as literally "Headline" (the plan said `label` while the
	// component exposes "✏️ Headline"). The rendered characters are therefore measured directly,
	// which catches the whole class — a wrong field name, a field forgotten entirely, or a later
	// hand-edit — rather than one known cause. Fix the PLAN field, never the rendered text node.
	const PLACEHOLDER_COPY = new Set([
		'headline',
		'text',
		'label',
		'link',
		'placeholder',
		'title',
		'description',
		'caption',
		'button',
		'lorem ipsum'
	]);
	// Hidden regions legitimately keep their defaults (a Notification's optional Link, a
	// switched-off slot), so only text that actually PAINTS counts — self and every ancestor.
	const isRendered = (node) => {
		let current = node;
		for (let depth = 0; current && depth < 100; depth++) {
			if (!safe(() => current.visible, true)) return false;
			if (current === root) return true;
			current = safe(() => current.parent, null);
		}
		return true;
	};
	const auditPlaceholderText = (node, name, type) => {
		if (type !== 'TEXT') return;

		const chars = String(safe(() => node.characters, '') ?? '').trim();
		if (!PLACEHOLDER_COPY.has(chars.toLowerCase())) return;
		if (!isRendered(node)) return;

		push(
			name,
			'placeholder-text',
			`This text still carries the library's default copy "${chars}", so the component shipped with placeholder text where product copy belongs. It means a plan field never reached the component's TEXT property (e.g. \`text: { label, value }\` on a Notification, whose properties are "Headline" and "Text") or the field was omitted. Set the component's own field on the plan node and re-render — do not type over the rendered text node.`
		);
	};

	// BENTO — a dashboard is ONE working Section holding a grid of self-titled panels, not a stack
	// of titled zebra sections (that composition reads as a content page). The canonical DB
	// dashboards are exactly [Header, Section]. Only a dashboard is checked, because a contentpage
	// legitimately alternates several sections; it therefore needs plan.pageType to be set.
	const auditBento = (sectionList) => {
		if (String((opts && opts.pageType) || '') !== 'dashboard') return;
		if (module || sectionList.length <= 1) return;

		push(
			safe(() => root.name, 'screen'),
			'dashboard-multi-section',
			`A dashboard must be ONE Section (the bento work area) but has ${sectionList.length}. Put the header row, the KPI row and the panel rows into a single Section as stacked rows (a ContainerVertical), so the panels form one bento grid on one canvas background.`
		);
	};

	// PROCESS — a step frame is carried by two full-width rows: the stepper and the Back/Next
	// navigation. Both span the content column and push their ends apart (SPACE_BETWEEN); the
	// catalog fragments express that as `spread: true`. When it is lost they collapse into a
	// left-packed cluster with dead space to the right, and the frame stops reading as a step of
	// a process. Scoped to pageType "process" on purpose: a form's action row may legitimately
	// sit right-aligned and a dashboard has no step navigation at all.
	//
	// The same pass collects what decides whether a step actually ASKS the user something. A
	// step frame with a heading and a Back/Next row but no input control is an empty shell — the
	// defect that ships when a `process.step` pattern is filled with its title only and its
	// content column is never populated from the form blocks.
	const processNavRows = [];
	const processItemRows = [];
	let processHasField = false;
	const FIELD_RE =
		/^(Input|Textarea|Checkbox|Radio|Select|Switch|Datepicker|Timepicker|Fileupload)/i;
	const auditProcessCollect = (node, name, type) => {
		if (String((opts && opts.pageType) || '') !== 'process') return;
		if (type === 'INSTANCE' && FIELD_RE.test(String(name).trim()))
			processHasField = true;
		if (type !== 'SLOT') return;
		if (safe(() => node.layoutMode, '') !== 'HORIZONTAL') return;

		const kids = safe(() => node.children, []) ?? [];
		const spread =
			safe(() => node.primaryAxisAlignItems, '') === 'SPACE_BETWEEN';
		const named = (n) => safe(() => n.name, '');
		const isInstance = (n) => safe(() => n.type, '') === 'INSTANCE';
		// The Back/Next row: the one action row that pairs a ghost with a brand Button. The
		// confirmation frame carries a SINGLE brand action, so it never matches — which is
		// exactly right, it has no navigation row and no fields to check either.
		const buttons = kids.filter(
			(c) => isInstance(c) && /^Button/i.test(named(c))
		);
		if (
			buttons.length >= 2 &&
			buttons.some((b) => /ghost/i.test(named(b))) &&
			buttons.some((b) => /brand/i.test(named(b)))
		)
			processNavRows.push({ name, spread });
		// The stepper: three or more step items side by side, each a Container of icon + label.
		// A vertical progress bar section (the registered alternative) has no horizontal row of
		// containers, so it is not matched.
		else if (
			kids.length >= 3 &&
			kids.every((c) => isInstance(c) && /Container/i.test(named(c)))
		)
			processItemRows.push({ name, spread });
	};

	const auditProcess = () => {
		if (String((opts && opts.pageType) || '') !== 'process') return;

		for (const row of processNavRows)
			if (!row.spread)
				push(
					row.name,
					'nav-not-spread',
					'The Back/Next row is packed to the left instead of spanning the content column. Give the navigation ContainerHorizontal `spread: true` so "Zurück" sits flush left and the Brand action flush right.'
				);
		for (const row of processItemRows)
			if (!row.spread)
				push(
					row.name,
					'stepper-not-spread',
					'The stepper items are packed to the left instead of being distributed across the content column. Give the stepper ContainerHorizontal `spread: true` — the steps mark progress along the full width, so a fixed gap leaves the later steps floating in dead space.'
				);
		// A step frame is identified by its navigation row; the confirmation frame has none.
		if (!module && processNavRows.length && !processHasField)
			push(
				safe(() => root.name, 'screen'),
				'process-step-without-content',
				'This step has a heading and a Back/Next row but no input control, so it asks the user for nothing. Fill the step content column from the form page-type blocks (form.field-row, form.text-field, form.checkbox-field …). If the step is deliberately a pure review step, give it the summary content it reviews.'
			);
	};

	// UNRESOLVED ICON — the DB Theme icon slots ship a placeholder component literally named
	// "<Icon>". A successful swap replaces it with the real glyph ("<IconFunnel>",
	// "<IconArrowRight>"), so a node still called "<Icon>" means the swap never happened and the
	// screen ships a visibly empty ✕ box. This is how an icon-only Button lost its icon: it has
	// no "Show Icon Leading" boolean and its slot is "Icon <size>", so a side-specific lookup
	// silently found nothing. Rendering an icon-less icon Button is never valid output.
	const auditIconPlaceholder = (node, name, type) => {
		if (type !== 'INSTANCE') return;
		if (!/^<icon>$/i.test(String(name).trim())) return;
		if (!safe(() => node.visible, true)) return;

		push(
			name,
			'unresolved-icon',
			'An icon slot still holds the unresolved "<Icon>" placeholder, so it renders as an empty ✕ box. Pass a verified DB Theme icon name (iconLeading/iconTrailing for a Button, `name` for an Icon node) — or, if the action has no icon, do not use the icon-only variant.'
		);
	};

	// CHART WIDTH — a graph always spans the width available to it. A bar left at a FIXED width
	// leaves the panel half empty and reads as a broken visual rather than a data display, so a
	// ChartBar must be fill-width (its column container fills too, which is what distributes the
	// bars across the panel).
	const chartBars = [];
	const auditChartWidth = (node, name, type) => {
		if (type !== 'RECTANGLE') return;
		if (!/chart bar/i.test(String(name))) return;
		chartBars.push(node);
		if (safe(() => node.layoutSizingHorizontal, '') !== 'FIXED') return;

		push(
			name,
			'chart-fixed-width',
			'A chart bar has a FIXED width, so the graph does not use the full width of its panel. Give every ChartBar `fillWidth: true` inside fill-width column containers — graphs always span the available width.'
		);
	};

	// CHART BASELINE — a bar graph is read by comparing bar BOTTOMS, so the bars of one row must
	// share a single bottom edge; staggered bottoms encode the value in the wrong direction. And
	// inside a self-titled panel that baseline belongs on the CARD FLOOR: a chart block that hugs
	// its content while its card is stretched to the tallest panel of the bento row leaves dead
	// space under the graph and reads as a broken visual. The runtime repairs both in
	// anchorChartsToCardBottom, so a violation here means the block was hand-edited afterwards or
	// the pass could not reach the card — never something to leave in the output.
	const auditChartBaseline = () => {
		if (!chartBars.length) return;

		const typeOf = (n) => safe(() => n.type, '');
		const bottomOf = (n) => {
			const box = safe(() => n.absoluteBoundingBox, null);
			return box && Number.isFinite(box.y) && Number.isFinite(box.height)
				? box.y + box.height
				: null;
		};
		const lowestEdge = (node) => {
			let low = null;
			(function rec(n) {
				if (!safe(() => n.visible, true)) return;
				const edge = bottomOf(n);
				if (edge !== null && (low === null || edge > low)) low = edge;
				for (const c of safe(() => n.children, []) ?? []) rec(c);
			})(node);
			return low;
		};

		// Group the bars by the row they belong to (the column's parent Slot, or the bar's own
		// parent when a bar was placed straight into the row).
		const rows = new Map();
		for (const bar of chartBars) {
			const slot = safe(() => bar.parent, null);
			const owner = slot && safe(() => slot.parent, null);
			const above = owner && safe(() => owner.parent, null);
			const row =
				typeOf(owner) === 'INSTANCE' && typeOf(above) === 'SLOT'
					? above
					: slot;
			if (!row) continue;
			if (!rows.has(row)) rows.set(row, []);
			rows.get(row).push(bar);
		}

		for (const [row, group] of rows) {
			const rowName = safe(() => row.name, 'chart row');
			const bottoms = group
				.map((b) => bottomOf(b))
				.filter((v) => v !== null);
			if (bottoms.length > 1) {
				const offset = Math.max(...bottoms) - Math.min(...bottoms);
				if (offset > 1)
					push(
						rowName,
						'chart-baseline',
						`The bars of this graph sit on bottom edges up to ${Math.round(offset)}px apart. A bar chart is read against ONE baseline — bottom-align the row ("bottom-left") and its columns ("bottom-center") so only the bar HEIGHT encodes the value, and never fake the offset with paddingTop.`
					);
			}

			// Does the block reach the floor of its card? Only checked when the graph is the LAST
			// content of that card — anything after it legitimately owns the bottom instead.
			let n = safe(() => row.parent, null);
			let card = null;
			let lastInCard = true;
			while (n && n !== root) {
				const t = typeOf(n);
				if (
					t === 'INSTANCE' &&
					/(^|\W)card(\W|$)/i.test(safe(() => n.name, ''))
				) {
					card = n;
					break;
				}
				if (t !== 'SLOT') {
					const parent = safe(() => n.parent, null);
					const kids = (
						safe(() => parent && parent.children, []) ?? []
					).filter((c) => safe(() => c.visible, true));
					if (kids.length && kids[kids.length - 1] !== n) {
						lastInCard = false;
						break;
					}
				}
				n = safe(() => n.parent, null);
			}
			if (!card || !lastInCard) continue;

			const cardBox = safe(() => card.absoluteBoundingBox, null);
			const blockBottom = lowestEdge(row);
			if (!cardBox || blockBottom === null) continue;
			const floor =
				cardBox.y +
				cardBox.height -
				(safe(() => card.paddingBottom, 0) ?? 0);
			const gap = floor - blockBottom;
			if (gap > 4)
				push(
					rowName,
					'chart-not-bottom-anchored',
					`The graph ends ${Math.round(gap)}px above the floor of "${safe(() => card.name, 'Card')}", leaving dead space under the bars. A chart block must GROW into the height its card actually has (the card is stretched to the tallest panel of its bento row): give the chart row and its columns \`fillHeight: true\` so the baseline sits on the card floor.`
				);
		}
	};

	// GAP vs CARD PADDING — a card's inner content gap must never exceed the card's own padding.
	// A 16px (`md`) gap inside a 12px (`(Def) Small`, 12px padding) card makes the rows sit
	// further apart than they do from the card edge, which visually breaks the card apart. The
	// canonical DB catalog cards use 12px padding WITH a 12px content gap. The gap lives on the
	// Container's inner Slot, so that is the node measured here, against the nearest enclosing
	// Card.
	const auditGapVsPadding = (node, name) => {
		const gap = safe(() => node.itemSpacing, 0);
		if (!Number.isFinite(gap) || gap <= 0) return;
		if (!safe(() => node.layoutMode, '')) return;

		let card = safe(() => node.parent, null);
		while (
			card &&
			safe(() => card.type, '') !== 'PAGE' &&
			!(
				safe(() => card.type, '') === 'INSTANCE' &&
				/(^|\W)card(\W|$)/i.test(safe(() => card.name, ''))
			)
		)
			card = safe(() => card.parent, null);
		if (!card || safe(() => card.type, '') !== 'INSTANCE') return;

		const padding = safe(() => card.paddingTop, null);
		// A `spacing: "none"` card is deliberately full-bleed: it delegates padding to its rows
		// (that is how a divider runs edge to edge), so there is no padding to measure against.
		if (!Number.isFinite(padding) || padding === 0) return;
		if (gap <= padding) return;

		push(
			name,
			'gap-exceeds-card-padding',
			`Content gap ${Math.round(gap)}px is larger than the ${Math.round(padding)}px padding of the enclosing "${safe(() => card.name, 'Card')}". Inside a card the content gap must be at most the card padding — pair Card spacing "small" (12px) with gap "sm", "medium" (16px) with gap "md".`
		);
	};

	// COLLAPSED FILL — Figma does NOT reject `layoutSizingVertical = "FILL"` on the MAIN axis of
	// a HUGGING vertical parent: the child simply gets no height (~0px) while the parent keeps
	// hugging its other children. Its content is then painted OUTSIDE that box, across whatever
	// sits above it — the exact failure mode where a bar graph was drawn over its own card title.
	// The renderer now refuses such a write (canFillVertical), so a hit here comes from a manual
	// edit (applyEdits / the `api` fallback) and is always a visible defect.
	const auditCollapsedFill = (node, name) => {
		if (safe(() => node.layoutSizingVertical, '') !== 'FILL') return;
		const parent = safe(() => node.parent, null);
		if (!parent) return;
		if (String(safe(() => parent.layoutMode, '')) !== 'VERTICAL') return;
		if (safe(() => parent.primaryAxisSizingMode, '') !== 'AUTO') return;

		push(
			name,
			'collapsed-fill-height',
			`"${name}" fills the height of a parent ("${safe(() => parent.name, '(unnamed)')}") that HUGS its content, so it collapses to ~${Math.round(safe(() => node.height, 0))}px and its content overflows onto the elements above. Stretch to a parent that owns a height (FIXED/FILL) or let this node hug its content.`
		);
	};

	/* CONTENT OVERFLOW — the catch-all for "the box is smaller than what is in it".
	 * -----------------------------------------------------------------------------
	 * Every sizing defect this runtime has produced ends the same way: a layout box is too small
	 * and its content is painted OUTSIDE it, over whatever sits above. A collapsed main-axis FILL,
	 * a row whose every child was stretched so nothing contributed a height, a stale FIXED size —
	 * different causes, one symptom. So instead of only naming causes, MEASURE the symptom: does a
	 * visible in-flow child stick out of its auto-layout parent? That catches the next variant of
	 * this bug class too, including ones introduced by a hand edit.
	 * Scoped to the layout nodes this runtime OWNS (Slots and Container/Grid/Card/Section
	 * instances plus the screen frames) — a library component's internals legitimately overflow
	 * (focus rings, decorative helpers) and are not ours to police. Absolutely positioned children
	 * are exempt by definition, and a 1px tolerance absorbs layout rounding. */
	const OUR_LAYOUT_RE = /Container|Grid|Card|Section/i;
	const auditContentOverflow = (node, name, type) => {
		const ours =
			type === 'SLOT' ||
			type === 'FRAME' ||
			(type === 'INSTANCE' && OUR_LAYOUT_RE.test(String(name)));
		if (!ours) return;
		if (!safe(() => node.visible, true)) return;
		if (String(safe(() => node.layoutMode, 'NONE')) === 'NONE') return;
		const self = safe(() => node.absoluteBoundingBox, null);
		if (!self) return;

		let worst = 0;
		let culprit = '';
		for (const child of safe(() => node.children, []) ?? []) {
			if (!safe(() => child.visible, true)) continue;
			if (safe(() => child.layoutPositioning, 'AUTO') === 'ABSOLUTE')
				continue;
			const b = safe(() => child.absoluteBoundingBox, null);
			if (!b) continue;
			const out = Math.max(
				self.y - b.y,
				b.y + b.height - (self.y + self.height),
				self.x - b.x,
				b.x + b.width - (self.x + self.width)
			);
			if (out > worst) {
				worst = out;
				culprit = safe(() => child.name, '(unnamed)');
			}
		}
		if (worst <= 1) return;

		push(
			name,
			'content-overflow',
			`"${culprit}" sticks ${Math.round(worst)}px out of "${name}" (${Math.round(self.width)}x${Math.round(self.height)}), so it is drawn over whatever sits next to that box. The box is too small for its content — let it HUG, or give the parent a real height instead of forcing the child to FILL one it does not have.`
		);
	};

	/* EMPTY GRID CELL — an unused component slot is NOT invisible: Figma paints it as a magenta
	 * placeholder that ships in the render. Leaving a column empty is legitimate (that is how a
	 * row keeps its content at two thirds, and how the short last row of a wrapped grid stays
	 * aligned), so the fix is to HIDE the cell, which fillGridRow does. A visible empty one means
	 * the grid was built or edited outside that path. */
	const auditEmptyGridCell = (node, name, type) => {
		if (type !== 'SLOT') return;
		if (!/^slot-\d+$/i.test(String(name).trim())) return;
		if (!safe(() => node.visible, true)) return;
		if ((safe(() => node.children, []) ?? []).length > 0) return;

		push(
			name,
			'empty-grid-cell',
			`Grid cell "${name}" is empty AND visible, so Figma renders it as a magenta placeholder box. Keep the column (the geometry is often deliberate) but hide the cell.`
		);
	};

	/* FILTER TAG EMPHASIS — a removable Tag is an ACTIVE FILTER: it reports the current state of
	 * the data set. Strong emphasis makes a row of them read like a set of buttons and lets them
	 * compete with the page actions, so the catalog ships them WEAK. Emphasis is baked into the
	 * Tag's component identity (a separate set per emphasis/behavior), so the variant is readable
	 * straight off the instance name. */
	const auditFilterTagEmphasis = (node, name, type) => {
		if (type !== 'INSTANCE') return;
		if (!/tag/i.test(String(name))) return;
		if (!/removable/i.test(String(name))) return;
		if (!/strong/i.test(String(name))) return;

		push(
			name,
			'filter-tag-emphasis',
			'An active-filter Tag uses STRONG emphasis. Removable filter tags report state, they are not actions — use `emphasis: "weak"` so they do not compete with the page actions.'
		);
	};

	/* TABLE COLUMNS — a table only reads as a table while every value sits UNDER its own header.
	 * Rows are collected by their content slot; two rows belong to the same table when they have
	 * the same cell count inside the same Card. If the cells' left edges differ, the columns
	 * drift — which is what happens when one cell hugs (a leading Checkbox keeping its label
	 * width) while the others fill. Measured, so it catches the defect regardless of which plan
	 * or edit produced it. */
	const rowSlots = [];
	const auditTableColumns = () => {
		const cellsOf = (slot) =>
			(safe(() => slot.children, []) ?? []).filter((c) =>
				safe(() => c.visible, true)
			);
		// Group the rows by their enclosing Card, keeping document order.
		const byCard = new Map();
		for (const slot of rowSlots) {
			let card = safe(() => slot.parent, null);
			while (
				card &&
				!(
					safe(() => card.type, '') === 'INSTANCE' &&
					/(^|\W)card(\W|$)/i.test(safe(() => card.name, ''))
				)
			)
				card = safe(() => card.parent, null);
			if (!card) continue;
			if (!byCard.has(card)) byCard.set(card, []);
			byCard.get(card).push(slot);
		}
		for (const [card, slots] of byCard) {
			// A table needs at least a header row and one data row with the same cell count.
			const groups = new Map();
			for (const slot of slots) {
				const cells = cellsOf(slot);
				if (cells.length < 3) continue;
				if (!groups.has(cells.length)) groups.set(cells.length, []);
				groups.get(cells.length).push(cells);
			}
			for (const [count, rows] of groups) {
				if (rows.length < 2) continue;
				const lefts = rows.map((cells) =>
					cells.map((c) => {
						const box = safe(() => c.absoluteBoundingBox, null);
						return box ? box.x : null;
					})
				);
				let worst = 0;
				let column = 0;
				for (let i = 0; i < count; i++) {
					const xs = lefts
						.map((row) => row[i])
						.filter((v) => v !== null);
					if (xs.length < 2) continue;
					const drift = Math.max(...xs) - Math.min(...xs);
					if (drift > worst) {
						worst = drift;
						column = i + 1;
					}
				}
				if (worst > 1)
					push(
						safe(() => card.name, 'Card'),
						'table-columns-misaligned',
						`Column ${column} of this ${count}-column table starts up to ${Math.round(worst)}px apart across its rows, so the values no longer sit under their header. Every cell of every row — the header row and the leading Checkbox cell included — must be one equal FILL column; a single hugging cell shifts everything behind it by its own label length.`
					);
			}
		}
	};

	function walk(node, insideInstance) {
		const name = safe(() => node.name, '(unnamed)');
		const type = safe(() => node.type, '');
		if (type === 'INSTANCE' && !insideInstance) rootInstances.push(node);
		if (type === 'INSTANCE' && LAYOUT_RE.test(name)) {
			const w = safe(() => node.width, 999),
				h = safe(() => node.height, 999);
			// Only Sections/Grids are expected to be wide (w<200 = truly collapsed). Containers
			// may legitimately be narrow (a trailing action column, a Tag+Badge row), so for
			// Containers only flag a collapsed HEIGHT, not a narrow width.
			const wideExpected = /Section|Grid/i.test(name);
			if (typeof w === 'number' && ((wideExpected && w < 200) || h < 8))
				push(
					name,
					'collapsed-layout',
					`${Math.round(w)}x${Math.round(h)}`
				);
		}
		if (
			type === 'INSTANCE' &&
			/Section/i.test(name) &&
			safe(() => node.primaryAxisSizingMode, '') === 'FIXED'
		)
			push(
				name,
				'fixed-height-section',
				`Section "${name}" has a fixed height; must hug.`
			);
		if (
			type === 'SLOT' &&
			slotMatches(name) &&
			safe(() => node.layoutMode, '') === 'VERTICAL' &&
			safe(() => node.primaryAxisSizingMode, '') === 'FIXED'
		) {
			const kids = safe(() => node.children, []) ?? [];
			let contentH =
				safe(
					() => (node.paddingTop ?? 0) + (node.paddingBottom ?? 0),
					0
				) +
				safe(() => node.itemSpacing ?? 0, 0) *
					Math.max(0, kids.length - 1);
			for (const c of kids)
				contentH += safe(
					() => (typeof c.height === 'number' ? c.height : 0),
					0
				);
			const slotH = safe(() => node.height, 0);
			if (typeof slotH === 'number' && contentH - slotH > 1)
				push(
					name,
					'fixed-content-slot',
					`Slot "${name}" content ~${Math.round(contentH)}px overflows ${Math.round(slotH)}px.`
				);
		}
		auditCasing(node, name);
		auditPlaceholderText(node, name, type);
		auditIconPlaceholder(node, name, type);
		auditChartWidth(node, name, type);
		auditGapVsPadding(node, name);
		auditCollapsedFill(node, name);
		auditContentOverflow(node, name, type);
		auditEmptyGridCell(node, name, type);
		auditFilterTagEmphasis(node, name, type);
		auditProcessCollect(node, name, type);
		// Collect the horizontal content slots — candidate table rows for auditTableColumns.
		if (
			type === 'SLOT' &&
			safe(() => node.layoutMode, '') === 'HORIZONTAL' &&
			safe(() => node.primaryAxisAlignItems, '') !== 'SPACE_BETWEEN'
		)
			rowSlots.push(node);

		for (const c of safe(() => node.children, []) ?? [])
			walk(c, insideInstance || type === 'INSTANCE');
	}
	walk(root, false);
	auditChartBaseline(); // needs the collected bars, so it runs after the traversal
	auditTableColumns(); // needs the collected row slots, likewise
	auditProcess(); // needs the collected step rows and field flag, likewise

	// HARD RULE — library components only. Every instance must originate from a published DB UX
	// library (Core Components, Core Lab, DB Theme Icons). A LOCAL component from the working
	// file is never valid output: it is invisible to anyone else, drifts from the design system,
	// and used to sneak in through the retired local layout primitives (Grid / Container).
	for (const inst of rootInstances) {
		let main = null;
		try {
			main = await inst.getMainComponentAsync();
		} catch {
			continue; // unreadable main component — never fail the audit on a guarded read
		}
		if (!main) continue;
		const remote =
			safe(() => main.remote, true) === true ||
			safe(() => main.parent && main.parent.remote, false) === true;
		if (!remote)
			push(
				safe(() => inst.name, '(unnamed)'),
				'local-component',
				`"${safe(() => inst.name, '(unnamed)')}" is an instance of a LOCAL component in this file. Only published DB UX library components (Core / Core Lab) are allowed.`
			);
	}

	const kids = safe(() => root.children, []) ?? [];
	const sections = kids.filter(
		(n) =>
			safe(() => n.type, '') === 'INSTANCE' &&
			/Section/i.test(safe(() => n.name, ''))
	);
	auditBento(sections);
	if (sections.length && !module) {
		const firstIsHeader =
			kids[0] &&
			safe(() => kids[0].type, '') === 'INSTANCE' &&
			/Header/i.test(safe(() => kids[0].name, ''));
		if (!firstIsHeader)
			push(
				safe(() => root.name, 'screen'),
				'missing-header',
				'Screen must start with the DB Header as the first child.'
			);
		const fills = safe(() => sections[0].boundVariables?.fills, null);
		let level1 = false;
		if (fills?.length) {
			try {
				const v = await figma.variables.getVariableByIdAsync(
					fills[0].id
				);
				level1 = v ? /bg\/basic\/level-1/i.test(v.name) : false;
			} catch {}
		}
		if (!level1)
			push(
				safe(() => sections[0].name, 'section'),
				'zebra-start',
				'Topmost section must use color.background.canvas (level-1).'
			);
	}
	return { valid: violations.length === 0, violations };
}

/* =============================================================================
 * ITERATION: applyEdits — surgically patch an ALREADY-rendered screen.
 * -----------------------------------------------------------------------------
 * Iterating no longer means re-authoring the whole plan and re-rendering from
 * scratch. Locate nodes in an existing frame (by visible TEXT or by node name)
 * and mutate / insert / remove ONLY what changed. Node ids, positions and any
 * manual designer tweaks are preserved. Small change = tiny edit list.
 *
 * NOTE: the runtime source must still be pasted each `use_figma` call (Figma's
 * sandbox has no `fetch` to load it from a URL, and globalThis does not persist
 * between calls) — but the EDIT SPEC you author is small, and the screen is
 * patched, not rebuilt.
 *
 * USAGE (inside a single use_figma call, after pasting this file):
 *   const res = await applyEdits({
 *     screen: "My Screen",            // frame name (or rootId: "123:45")
 *     targetNodeId: "700:4960",        // optional page to switch to
 *     edits: [
 *       { op: "setText", find: "Old label", value: "New label" },
 *       { op: "setVisible", name: "Primary Action", visible: false },
 *       { op: "hideNavItem", label: "Startseite" },
 *       { op: "setVariant", find: "Reiseinfos in Echtzeit", axis: "As", value: "h3" },
 *       { op: "setContainerGap", anchorText: "Schnellzugriff", gap: "xs" },
 *       { op: "setSectionFill", anchorText: "Schnellzugriff", token: "color.background.elevated" },
 *       { op: "remove", find: "Fundservice" },              // removes the nearest Card
 *       { op: "appendLike", find: "Servicezeiten", node: { …a plan node; its shape follows
 *           the PLAN SCHEMA NODE FIELDS, structure/spacing come from the registries } }
 *     ]
 *   });
 *   return JSON.stringify(res);
 *
 * SELECTORS
 *   find / anchorText  match a visible TEXT node (exact, or set mode:"contains")
 *   name               match a node by name (normalized substring)
 * Every edit returns { op, ok, error? }; applyEdits also returns the re-audit.
 * ========================================================================== */
function _walkAll(root) {
	const out = [];
	(function rec(n) {
		out.push(n);
		for (const c of safe(() => n.children, []) ?? []) rec(c);
	})(root);
	return out;
}
