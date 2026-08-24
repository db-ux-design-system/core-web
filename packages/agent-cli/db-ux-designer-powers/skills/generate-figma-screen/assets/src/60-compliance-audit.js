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

	/* SCOPE — is this layout box one the RUNTIME owns, or a library component's internals?
	 * -----------------------------------------------------------------------------
	 * Our layout is always a SLOT inside a Container/Grid/Card/Section instance, so the NEAREST
	 * enclosing INSTANCE answers the question. A library component's inner rows, gaps and cell
	 * widths are its own design decision and are not ours to police — the measured checks that
	 * forgot this scope reported on perfectly clean screens: a Notification's 16px internal gap
	 * inside a 12px card (`gap-exceeds-card-padding`, 30+ hits on two screens), and a component's
	 * inner three-child row compared against the table it happened to sit in
	 * (`table-columns-misaligned`). A check that fires on correct output is worse than no check:
	 * it teaches people to ignore the audit. */
	const OUR_LAYOUT_RE = /Container|Grid|Card|Section/i;
	const ownedLayout = (node) => {
		let current = safe(() => node.parent, null);
		for (
			let depth = 0;
			current && current !== root && depth < 100;
			depth++
		) {
			if (safe(() => current.type, '') === 'INSTANCE')
				return OUR_LAYOUT_RE.test(String(safe(() => current.name, '')));
			current = safe(() => current.parent, null);
		}
		return true; // no enclosing instance at all — a frame-level box, ours by definition
	};

	/* ROW GEOMETRY — detect a horizontal row and its distribution from MEASURED boxes instead of
	 * from `layoutMode` / `primaryAxisAlignItems`.
	 *
	 * WHY: those properties are not reliably readable on the instance-internal SLOT nodes that
	 * every row actually lives in. A check gated on `layoutMode === 'HORIZONTAL'` therefore
	 * returns early and reports NOTHING — the row is never even considered. That is how a
	 * left-packed stepper, a left-packed Back/Next row and a table whose header had a different
	 * column count than its data rows all shipped with a clean audit. Geometry is always
	 * readable, so the checks below cannot be silently skipped any more. */
	const visibleBoxes = (node) =>
		(safe(() => node.children, []) ?? [])
			.filter((c) => safe(() => c.visible, true))
			.map((c) => ({
				node: c,
				box: safe(() => c.absoluteBoundingBox, null)
			}))
			.filter((c) => c.box && c.box.width > 0.5 && c.box.height > 0.5)
			.sort((a, b) => a.box.x - b.box.x);

	/* A row: the node DECLARES a horizontal layout, or its children measurably form one. The
	 * declared property stays the PRIMARY signal — it is precise wherever it is readable.
	 * Geometry is the ADDITIONAL path, so a node whose layout properties cannot be read is still
	 * considered instead of dropping out of every row check unnoticed. */
	const isRow = (node) => {
		if (safe(() => node.layoutMode, '') === 'HORIZONTAL') return true;
		const kids = visibleBoxes(node);
		if (kids.length < 2) return false;
		const first = kids[0].box;
		const last = kids[kids.length - 1].box;
		if (last.x <= first.x + first.width - 1) return false;
		return kids.every(
			(k) =>
				Math.abs(k.box.y - first.y) <
				Math.max(k.box.height, first.height) + 2
		);
	};

	/* Distribution: a SPREAD row starts flush at its container's left edge, ends flush at the
	 * right edge and carries at least one large inner gap. Measured on the catalog templates —
	 * the stepper's four items sit at 0/310/619/940 of 1024 and the Back/Next buttons at 0 and
	 * 941 — so the same numbers a designer sees are what the audit reads. */
	const rowDistribution = (node) => {
		const declared =
			safe(() => node.primaryAxisAlignItems, '') === 'SPACE_BETWEEN';
		const cb = safe(() => node.absoluteBoundingBox, null);
		const kids = visibleBoxes(node);
		// No measurable geometry: fall back to what the node declares, never to "looks fine".
		if (!cb || kids.length < 2)
			return { measured: false, spread: declared };
		const first = kids[0].box;
		const last = kids[kids.length - 1].box;
		const leftGap = first.x - cb.x;
		const rightGap = cb.x + cb.width - (last.x + last.width);
		let maxGap = 0;
		for (let i = 1; i < kids.length; i++) {
			const gap =
				kids[i].box.x - (kids[i - 1].box.x + kids[i - 1].box.width);
			if (gap > maxGap) maxGap = gap;
		}
		/* FLUSH means "ends exactly at the edge" — the absolute distance, not just "not past it".
		 * A one-sided `gap <= 2` would accept a NEGATIVE gap, i.e. content running BEYOND the
		 * container (an overflowing left-packed row), and mistake it for a distributed one. */
		const flush = (gap) => Math.abs(gap) <= 2;
		return {
			measured: true,
			leftGap,
			rightGap,
			maxGap,
			width: cb.width,
			spread:
				declared || (flush(leftGap) && flush(rightGap) && maxGap > 24)
		};
	};

	// Outermost instances (not nested inside another instance) — checked below against the
	// library-only rule. Nested instances belong to their parent component, so testing the
	// outer ones is both sufficient and cheap.
	const rootInstances = [];

	// CASING — DB UX sets no product copy in ALL CAPS. A Topline/category/label is
	// differentiated by size, weight and color emphasis, never by capitalization. Both causes
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
	let processSummaryRows = 0;
	/* Upload is on this list because it IS the step's control: `🧪 Upload` (Core Lab, Concept) is
	 * the real file-upload component — a drop area with its own label and button — so an upload
	 * step asks the user for exactly one thing and is complete without any Input. It was reported
	 * as an empty shell purely because the name is matched from the START and every Concept
	 * component is prefixed with its maturity emoji, so `^Upload` never matched `🧪 Upload`. The leading
	 * non-letter run is therefore stripped before matching, which fixes the whole class rather
	 * than this one component. */
	const FIELD_RE =
		/^(Input|Textarea|Checkbox|Radio|Select|Switch|Datepicker|Timepicker|Fileupload|Upload)/i;
	const fieldName = (name) =>
		String(name)
			.trim()
			.replace(/^[^\p{L}]+/u, '');
	const hasVisibleText = (node) => {
		let found = false;
		(function rec(n) {
			if (found) return;
			if (!safe(() => n.visible, true)) return;
			if (
				safe(() => n.type, '') === 'TEXT' &&
				String(safe(() => n.characters, '') ?? '').trim()
			) {
				found = true;
				return;
			}
			for (const c of safe(() => n.children, []) ?? []) rec(c);
		})(node);
		return found;
	};
	const CONTROL_RE = /^(Button|Link|Tab|Pagination|Accordion)/i;
	const hasControl = (node) => {
		let found = false;
		(function rec(n) {
			if (found) return;
			const nm = fieldName(safe(() => n.name, ''));
			if (
				safe(() => n.type, '') === 'INSTANCE' &&
				(CONTROL_RE.test(nm) || FIELD_RE.test(nm))
			) {
				found = true;
				return;
			}
			for (const c of safe(() => n.children, []) ?? []) rec(c);
		})(node);
		return found;
	};
	const auditProcessCollect = (node, name, type) => {
		if (String((opts && opts.pageType) || '') !== 'process') return;
		if (type === 'INSTANCE' && FIELD_RE.test(fieldName(name)))
			processHasField = true;
		if (type !== 'SLOT') return;
		if (!isRow(node)) return;

		/* A pure REVIEW step asks for nothing BY DESIGN — it shows the summary it reviews, and
		 * demanding an input control there is a false alarm. That summary is label/value rows
		 * inside a panel: two or more of them, each carrying text in every cell and no control.
		 * Scoped to rows inside a Card so the stepper (Containers in a Section) and the Back/Next
		 * row can never be mistaken for it, and two rows are required so a single stray text row
		 * does not excuse a genuinely empty step. */
		if (ownedLayout(node)) {
			let card = safe(() => node.parent, null);
			while (
				card &&
				card !== root &&
				!(
					safe(() => card.type, '') === 'INSTANCE' &&
					/(^|\W)card(\W|$)/i.test(safe(() => card.name, ''))
				)
			)
				card = safe(() => card.parent, null);
			const cells = (safe(() => node.children, []) ?? []).filter((c) =>
				safe(() => c.visible, true)
			);
			if (
				card &&
				card !== root &&
				cells.length >= 2 &&
				cells.every((c) => hasVisibleText(c)) &&
				!cells.some((c) => hasControl(c))
			)
				processSummaryRows++;
		}

		const kids = (safe(() => node.children, []) ?? []).filter((c) =>
			safe(() => c.visible, true)
		);
		const spread = rowDistribution(node).spread;
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
		/* The stepper: three or more step items side by side, each a Container.
		 *
		 * It used to additionally require every item to be an "icon + label" pair — but per the
		 * catalog template (1716:21928) only the DONE and the ACTIVE step carry an icon, and the
		 * PENDING steps are a numbered label alone. On the first step of a flow that means AT
		 * MOST ONE item has an icon, so the old condition could essentially never match and the
		 * spread violation was never reported. Container siblings plus the row geometry are
		 * enough; a vertical progress-bar section has no horizontal row and is not matched. */ else if (
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
		// A pure review step has no control but shows the summary it reviews (processSummaryRows),
		// which counts as content just like an input does.
		if (
			!module &&
			processNavRows.length &&
			!processHasField &&
			processSummaryRows < 2
		)
			push(
				safe(() => root.name, 'screen'),
				'process-step-without-content',
				'This step has a heading and a Back/Next row but neither an input control nor a summary, so it asks the user for nothing and shows nothing. Fill the step content column from the form page-type blocks (form.field-row, form.text-field, form.checkbox-field, form.upload-field …). If the step is deliberately a pure review step, give it the label/value summary rows it reviews.'
			);
	};

	// UNRESOLVED ICON — the DB Theme icon slots ship a placeholder component literally named
	// "<Icon>". A successful swap replaces it with the real glyph ("<IconFunnel>",
	// "<IconArrowRight>"), so a node still called "<Icon>" means the swap never happened and the
	// screen ships a visibly empty ✕ box. This is how an icon-only Button lost its icon: it has
	// no "Show Icon Leading" boolean and its slot is "Icon <size>", so a side-specific lookup
	// silently found nothing. Rendering an icon-less icon Button is never valid output.
	//
	// EXEMPTION — a RESOLVED icon carries the placeholder in its own internals. The DB Theme icon
	// components are themselves built around an "<Icon>" node, so "<IconClose>" (the close action
	// the Notification component ships with) legitimately nests a blank "<Icon>" below itself.
	// That node is library-internal: nothing in a plan can set it, and reporting it made three
	// correct screens read as invalid. A resolved icon is recognizable by its name — it carries a
	// glyph, so it is "<Icon…>" and never bare "<Icon>". Only a placeholder with NO resolved icon
	// above it is the real unset slot.
	const RESOLVED_ICON_RE = /^<icon[^>]+>$/i;
	const insideResolvedIcon = (node) => {
		let current = safe(() => node.parent, null);
		for (
			let depth = 0;
			current && current !== root && depth < 100;
			depth++
		) {
			if (
				RESOLVED_ICON_RE.test(
					String(safe(() => current.name, '')).trim()
				)
			)
				return true;
			current = safe(() => current.parent, null);
		}
		return false;
	};
	const auditIconPlaceholder = (node, name, type) => {
		if (type !== 'INSTANCE') return;
		if (!/^<icon>$/i.test(String(name).trim())) return;
		if (!safe(() => node.visible, true)) return;
		if (insideResolvedIcon(node)) return;

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
		// Only OUR layout boxes. A library component's internal gap is its own business — see
		// ownedLayout(); measuring those turned every Notification/Tag/Tab inside a 12px card
		// into a violation.
		if (!ownedLayout(node)) return;

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

	/* HUG PARENT WITH A FILLING CHILD — the DECLARED cause behind a whole overflow class.
	 * -----------------------------------------------------------------------------
	 * WHY THIS EXISTS NEXT TO auditContentOverflow: that check measures the SYMPTOM, and geometry
	 * is not reliable at render time. A stepper shipped `valid: true` while its five items summed
	 * to 2 588px inside a 1 024px column — at audit time the row still hugged its content, so
	 * nothing stuck out yet; the column width settled only afterwards. Re-running the same audit
	 * on the delivered frame reported the overflow immediately. A geometric net therefore cannot
	 * be the only one: this check reads what the nodes DECLARE, which is stable during the run.
	 *
	 * The contradiction: a parent that HUGS asks its child for a width, while a child set to FILL
	 * asks its parent — so Figma falls back to the child's intrinsic size. For a Concept
	 * Heading/Text that intrinsic size is its ~500px `Max Width`, NOT its glyphs. The hugging box
	 * then reports HUG at 512px and looks correct on the node while breaking the row it sits in.
	 * A text in a hugging container must hug its glyphs (see hugContainerTextIndices). */
	const auditHugParentFillingChild = (node, name, type) => {
		const ours =
			type === 'SLOT' ||
			(type === 'INSTANCE' && OUR_LAYOUT_RE.test(String(name)));
		if (!ours) return;
		if (!safe(() => node.visible, true)) return;
		if (safe(() => node.layoutSizingHorizontal, '') !== 'HUG') return;
		for (const child of safe(() => node.children, []) ?? []) {
			if (!safe(() => child.visible, true)) continue;
			if (safe(() => child.layoutPositioning, 'AUTO') === 'ABSOLUTE')
				continue;
			if (safe(() => child.layoutSizingHorizontal, '') !== 'FILL')
				continue;
			push(
				name,
				'hug-parent-filling-child',
				`"${safe(() => child.name, '(unnamed)')}" is set to FILL inside "${name}", which HUGS — so Figma uses the child's intrinsic width instead. For a Heading/Body that is its ~500px max width, not its glyphs, so the hugging box silently becomes ~512px wide and breaks the row around it. Let the child hug (a text in a hugging container hugs its glyphs), or make this container fill.`
			);
			return; // one finding per container is enough to act on
		}
	};

	/* A GRAPH THAT DOES NOT USE ITS HEIGHT — the counterpart to chart-not-bottom-anchored.
	 * -----------------------------------------------------------------------------
	 * Bottom-anchoring only guarantees WHERE the graph sits, not that it uses the panel. Bar
	 * heights come from the plan as pixels, and the plan cannot know how tall a bento card ends
	 * up — so a stretched card turned its extra height into dead space ABOVE the bars while they
	 * stayed at their authored 56/72/88px, using well under half the panel. The runtime now
	 * rescales the bars of a row onto the available height (ratios preserved); this reports what
	 * is left. Measured, so — like every geometric check — it is most reliable when re-run on a
	 * delivered frame. */
	const auditChartHeightUsage = (node, name, type) => {
		if (type !== 'SLOT') return;
		if (safe(() => node.layoutMode, '') !== 'HORIZONTAL') return;
		const rowBox = safe(() => node.absoluteBoundingBox, null);
		if (!rowBox || !(rowBox.height > 0)) return;
		let tallest = 0;
		let found = false;
		(function scan(n, depth) {
			if (depth > 3) return;
			for (const c of safe(() => n.children, []) ?? []) {
				if (!safe(() => c.visible, true)) continue;
				if (
					safe(() => c.type, '') === 'RECTANGLE' &&
					/chart bar/i.test(safe(() => c.name, ''))
				) {
					found = true;
					const h = safe(
						() =>
							c.absoluteBoundingBox &&
							c.absoluteBoundingBox.height,
						0
					);
					if (h > tallest) tallest = h;
				}
				scan(c, depth + 1);
			}
		})(node, 0);
		if (!found || !(tallest > 0)) return;
		// The captions under the bars legitimately take space; only a large remainder is a defect.
		const unused = rowBox.height - tallest;
		if (unused <= 48) return;
		push(
			name,
			'chart-height-unused',
			`The tallest bar is ${Math.round(tallest)}px in a ${Math.round(rowBox.height)}px row, so the graph leaves ~${Math.round(unused)}px unused above it and reads as a small chart in a large panel. Bar heights are RELATIVE: the runtime scales them onto the available height (see scaleChartBarsToAvailableHeight) — if this fires, the row did not own a height to distribute (a hugging card) or the bars could not be resized.`
		);
	};

	/* A FIXED WIDTH ON A TEXT-BEARING INSTANCE — the third member of this defect family.
	 * -----------------------------------------------------------------------------
	 * There are no free pixel widths: a width comes from the chain of hug/fill modes
	 * (layout-guidelines.md -> Breiten-Sizing). But an instance dropped into an auto-layout parent
	 * keeps Figma's default FIXED unless something sizes it, and a FIXED box does not grow with its
	 * label — the text wraps inside it. Measured: a `Radio` kept the library's 84px and rendered
	 * its label as six one-word lines, 144px tall.
	 *
	 * Why it is scoped this way:
	 *   - only PLAN-created instances (not nested inside another instance): a library component's
	 *     internals use fixed boxes legitimately and are not ours to police.
	 *   - only instances that CONTAIN TEXT: that is where a fixed width does the damage. An Icon is
	 *     intrinsically sized and carries no text, so it is exempt without needing a name list.
	 * Declared state, so — unlike the measured overflow check — it is reliable during a render. */
	const auditFixedWidthInstance = (node, name, type, insideInstance) => {
		if (type !== 'INSTANCE' || insideInstance) return;
		if (!safe(() => node.visible, true)) return;
		if (safe(() => node.layoutSizingHorizontal, '') !== 'FIXED') return;
		const hasText = safe(
			() => !!node.findOne((n) => n.type === 'TEXT'),
			false
		);
		if (!hasText) return;
		push(
			name,
			'fixed-width-instance',
			`"${name}" has a FIXED width (${Math.round(safe(() => node.width, 0))}px) instead of hug or fill, so its label cannot grow with the text and wraps INSIDE the box — typically into one word per line. Size it from the chain: give the plan node \`fillWidth: true\` / \`hugWidth: true\`, or pick the variant whose \`width\` axis says it ("full" fills, "auto" hugs). There are no free pixel widths.`
		);
	};

	/* A SINGLE ACTION IN A SPREAD ROW — declared, not measured.
	 * -----------------------------------------------------------------------------
	 * SPACE_BETWEEN needs two ends. With one child Figma parks it at the START, so a step frame
	 * whose `Zurück` was dropped renders its only action flush LEFT with the whole content column
	 * empty to its right (measured: Slot FILL + SPACE_BETWEEN 1 024px, one Brand Button at x = 0).
	 * A single action is right-aligned — see screen-guidelines.md -> Aktionen. */
	const auditSingleActionRow = (node, name, type) => {
		if (type !== 'SLOT') return;
		if (!safe(() => node.visible, true)) return;
		if (safe(() => node.layoutMode, '') !== 'HORIZONTAL') return;
		if (safe(() => node.primaryAxisAlignItems, '') !== 'SPACE_BETWEEN')
			return;
		const kids = (safe(() => node.children, []) ?? []).filter((c) =>
			safe(() => c.visible, true)
		);
		if (kids.length !== 1) return;
		const only = kids[0];
		if (safe(() => only.type, '') !== 'INSTANCE') return;
		if (!/^Button/i.test(String(safe(() => only.name, '')))) return;
		push(
			name,
			'single-action-not-right',
			`"${name}" distributes its children (SPACE_BETWEEN) but holds a SINGLE action, so Figma places it flush LEFT with the rest of the row empty. One action is right-aligned: give the row \`align: "right"\` instead of \`spread: true\` (e.g. the first step of a process, where "Zurück" is dropped and only "Weiter" remains).`
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

	/* NESTED CARD — a panel is ONE elevated surface. Wrapping Cards in another Card doubles the
	 * border and the elevation and reads as a frame inside a frame; the bento model says a group
	 * of KPI cards gets a TITLED AREA above them, not a card around them. Only the outermost card
	 * of a chain is reported, so one violation per defect. */
	const auditNestedCard = (node, name, type) => {
		if (type !== 'INSTANCE') return;
		if (!/(^|\W)card(\W|$)/i.test(String(name))) return;
		let p = safe(() => node.parent, null);
		while (p && p !== root) {
			if (
				safe(() => p.type, '') === 'INSTANCE' &&
				/(^|\W)card(\W|$)/i.test(safe(() => p.name, ''))
			) {
				push(
					name,
					'nested-card',
					`"${name}" is a Card inside the Card "${safe(() => p.name, 'Card')}" — two elevated surfaces stacked, so the panel gets a doubled border and elevation. Give the inner cards a titled AREA instead: a ContainerVertical with the h4 title above the cards, no outer Card.`
				);
				return;
			}
			p = safe(() => p.parent, null);
		}
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

			/* HEADER ARITY — the drift check below only ever compares rows that already have the
			 * SAME cell count, so the worst table defect of all slipped through: a header row
			 * with a different number of columns than its data rows. Grouped by count, such a
			 * header lands alone in its own group and is skipped, and the data rows align neatly
			 * among themselves — clean audit, unusable table (a 5-column header over 3-cell rows
			 * left "Standort" and "Nächste Wartung" without any values beneath them).
			 *
			 * So compare the FIRST row of the panel against the dominant shape of the rows below
			 * it. A mismatch means the panel mixes the two patterns: either it is a TABLE and
			 * every value needs its own column, or it is a LIST and must not carry a header. */
			const counted = slots
				.map((slot) => cellsOf(slot).length)
				.filter((n) => n >= 2);
			if (counted.length >= 3) {
				const headerCount = counted[0];
				const bodyCounts = counted.slice(1);
				const tally = new Map();
				for (const n of bodyCounts)
					tally.set(n, (tally.get(n) ?? 0) + 1);
				let dominant = bodyCounts[0];
				let best = 0;
				for (const [n, c] of tally)
					if (c > best) {
						best = c;
						dominant = n;
					}
				if (best >= 2 && dominant !== headerCount)
					push(
						safe(() => card.name, 'Card'),
						'table-header-arity',
						`The header row of this panel has ${headerCount} cells but its ${best} data rows have ${dominant}, so the values do not sit under their headers. Decide which pattern the panel is: a TABLE gives EVERY value its own equal fill column (no stacked name+meta cell) and its header carries exactly as many cells as a data row — a LIST may stack the leading cell and right-align status/action, but then it must NOT show column headers at all.`
					);
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
		// Declared-state nets next to the measured one: geometry is not settled during a render
		// (see auditHugParentFillingChild), so these two catch the cause, not the symptom.
		auditHugParentFillingChild(node, name, type);
		auditSingleActionRow(node, name, type);
		auditFixedWidthInstance(node, name, type, insideInstance);
		auditChartHeightUsage(node, name, type);
		auditEmptyGridCell(node, name, type);
		auditFilterTagEmphasis(node, name, type);
		auditNestedCard(node, name, type);
		auditProcessCollect(node, name, type);
		// Collect the horizontal content slots — candidate table rows for auditTableColumns.
		// Only OUR rows: a library component's internal row is not a table row of ours, and
		// comparing its cell edges against the panel's columns reported drift on correct tables
		// (see ownedLayout()).
		if (type === 'SLOT' && ownedLayout(node) && isRow(node)) {
			// A deliberately spread row (title left / actions right) distributes its children by
			// design, so its cell edges must not be compared against a table's columns.
			if (!rowDistribution(node).spread) rowSlots.push(node);
		}

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
