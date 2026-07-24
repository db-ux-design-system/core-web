async function auditTree(root) {
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

	function walk(node) {
		const name = safe(() => node.name, '(unnamed)');
		const type = safe(() => node.type, '');
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
		for (const c of safe(() => node.children, []) ?? []) walk(c);
	}
	walk(root);

	const kids = safe(() => root.children, []) ?? [];
	const sections = kids.filter(
		(n) =>
			safe(() => n.type, '') === 'INSTANCE' &&
			/Section/i.test(safe(() => n.name, ''))
	);
	if (sections.length) {
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
 *       { op: "appendLike", find: "Servicezeiten", node: {  // render a new sibling block
 *           type: "Card", props: { elevationLevel: "1" }, spacing: "medium", children: [ ... ] } }
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
