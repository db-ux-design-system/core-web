let _fontsLoaded = false;
async function ensureFonts() {
	if (_fontsLoaded) return;
	const fonts = [
		{ family: 'DB Neo Screen Head', style: 'Black' },
		{ family: 'DB Neo Screen Head', style: 'Regular' },
		{ family: 'DB Neo Screen Head', style: 'Bold' },
		{ family: 'DB Neo Screen Sans', style: 'Regular' },
		{ family: 'DB Neo Screen Sans', style: 'Bold' },
		{ family: 'DB Neo Screen Sans', style: 'Italic' },
		{ family: 'DB Neo Screen Sans', style: 'Bold Italic' }
	];
	for (const f of fonts) {
		try {
			await figma.loadFontAsync(f);
		} catch {}
	}
	_fontsLoaded = true;
}
/* GOTCHA 6: Some library component instances (e.g. Select, Switch) embed text nodes
 * using font styles (Italic, etc.) that are NOT in the static ensureFonts() list. Any
 * later appendChild of such an instance throws `in appendChild: unloaded font "..."`.
 * RULE: before appending a freshly-created component instance whose text you may touch,
 * load every font actually present in its text descendants. This is robust to any
 * component regardless of which styles it uses internally. */
async function loadInstanceFonts(instance) {
	const seen = new Set();
	let texts = [];
	try {
		texts = instance.findAllWithCriteria
			? instance.findAllWithCriteria({ types: ['TEXT'] })
			: instance.findAll((n) => n.type === 'TEXT');
	} catch {
		try {
			texts = instance.findAll((n) => n.type === 'TEXT');
		} catch {
			texts = [];
		}
	}
	for (const t of texts) {
		let fn = null;
		try {
			fn = t.fontName;
		} catch {}
		if (!fn || fn === figma.mixed) {
			let segs = [];
			try {
				segs = t.getStyledTextSegments(['fontName']);
			} catch {}
			for (const s of segs) {
				const key = s.fontName.family + '|' + s.fontName.style;
				if (!seen.has(key)) {
					seen.add(key);
					try {
						await figma.loadFontAsync(s.fontName);
					} catch {}
				}
			}
			continue;
		}
		const key = fn.family + '|' + fn.style;
		if (!seen.has(key)) {
			seen.add(key);
			try {
				await figma.loadFontAsync(fn);
			} catch {}
		}
	}
}
/* Set a VARIANT property by axis name (normalized, exact match), e.g. setVariant(i,"As","h1"). */
function setVariant(inst, axis, value) {
	const cp = inst.componentProperties || {};
	const key = Object.keys(cp).find(
		(k) =>
			cp[k] && cp[k].type === 'VARIANT' && normName(k) === normName(axis)
	);
	if (key) {
		try {
			inst.setProperties({ [key]: value });
		} catch {}
	}
}
/* Bind the inner text node's fill of a component instance to a color token (color is bound
 * separately from typography). Run AFTER any setProperties (which regenerate node ids). */
async function bindInnerTextFill(inst, token) {
	try {
		const t = inst.findOne((n) => n.type === 'TEXT');
		if (t) await bindTextFill(t, token);
	} catch {}
}
/* Heading (Concept): As=h1..h6 (size via default mapping), Font Weight, Text Align. */
async function buildHeadingComponent(node) {
	const set = await importSet(CONCEPT_KEYS.Heading);
	const inst = (
		set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? set.children[0])
			: set
	).createInstance();
	// No font loading needed: the Concept text is set via the "✏️ Text" component property
	// (setProperties), which does not require the font to be loaded.
	if (node.as) setVariant(inst, 'As', node.as);
	if (node.weight) setVariant(inst, 'Font Weight', node.weight);
	if (node.align)
		setVariant(
			inst,
			'Text Align',
			TEXT_ALIGN_LABELS[String(node.align).toLowerCase()] ?? node.align
		);
	if (node.content != null) setInstanceLabel(inst, node.content);
	if (node.fills) await bindInnerTextFill(inst, node.fills);
	// Semantic coloring via the adaptive MODE (not a fixed color): recolors the bound text
	// fill to the semantic palette (e.g. "Successful" → green). Applied AFTER the fill is
	// bound so the variable resolves in the new mode. See buildBodyComponent for the emphasis
	// caveat (emphasis-100 stays near-black in color modes).
	if (node.semantic) await setSemantic(inst, node.semantic);
	return inst;
}
/* Text (Concept): Size=Small|(Def) Medium|Large|xLarge|2xLarge|3xLarge, Text Align. */
async function buildBodyComponent(node) {
	const set = await importSet(CONCEPT_KEYS.Text);
	const inst = (
		set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? set.children[0])
			: set
	).createInstance();
	// No font loading needed: the Concept text is set via the "✏️ Text" component property.
	if (node.size) setVariant(inst, 'Size', node.size);
	if (node.align)
		setVariant(
			inst,
			'Text Align',
			TEXT_ALIGN_LABELS[String(node.align).toLowerCase()] ?? node.align
		);
	if (node.content != null) setInstanceLabel(inst, node.content);
	// Bold body: the Text (Concept) component has NO weight variant, so a bold body is
	// achieved by applying the registered bold text style (small → body.sm.bold, otherwise
	// body.bold) to the inner text node. This keeps it a registered DB style (no raw font).
	// Used e.g. for a Topline (Small + Bold + emphasis-100).
	if (node.bold || node.weight === 'bold')
		await applyBodyBold(inst, node.size);
	if (node.fills) await bindInnerTextFill(inst, node.fills);
	// Semantic coloring via the adaptive MODE (not a fixed color): recolors the bound text
	// fill to the semantic palette (e.g. "Successful" → green, on-time times). Applied AFTER
	// the fill is bound so the variable resolves in the chosen mode.
	// EMPHASIS CAVEAT: on-bg/basic/emphasis-100 (color.text.strong) resolves near-BLACK even
	// in a color mode. For a VISIBLE colored text use a lower-emphasis fill —
	// color.text.muted (emphasis-80) is the AA-safe choice (e.g. green punctuality times);
	// emphasis-70 (color.icon) is brighter but reserved for icons, not text.
	if (node.semantic) await setSemantic(inst, node.semantic);
	return inst;
}
async function applyBodyBold(inst, size) {
	const key = /small/i.test(String(size || ''))
		? TEXT_STYLE_KEYS['body.sm.bold']
		: TEXT_STYLE_KEYS['body.bold'];
	if (!key) return;
	try {
		const txt = inst.findOne((n) => n.type === 'TEXT');
		if (!txt) return;
		const style = await figma.importStyleByKeyAsync(key);
		await txt.setTextStyleIdAsync(style.id);
	} catch {}
}
/* Transparent placeholder image asset used by the DB example modules — Figma renders it as
 * the checkerboard "no image inserted yet" state. It is a document-global image hash, valid
 * for this file. Override per-node with `imageHash`, or pass a real `src` URL. */
const DB_PLACEHOLDER_IMAGE_HASH = 'ece298d0ec2c16f10310d45724b276a6035cb503';
async function applyImageFill(rect, node) {
	// 1) Real image from a URL.
	if (node.src) {
		try {
			const img = await figma.createImageAsync(node.src);
			rect.fills = [
				{
					type: 'IMAGE',
					scaleMode: node.scaleMode || 'FILL',
					imageHash: img.hash
				}
			];
			return;
		} catch {}
	}
	// 2) Explicit hash or the DB transparent placeholder (the Figma default fallback look).
	try {
		rect.fills = [
			{
				type: 'IMAGE',
				scaleMode: node.scaleMode || 'FILL',
				scalingFactor: 0.5,
				imageHash: node.imageHash || DB_PLACEHOLDER_IMAGE_HASH
			}
		];
		return;
	} catch {}
	// 3) Last resort: neutral gray (hash unresolvable, e.g. a different file).
	rect.fills = [{ type: 'SOLID', color: { r: 0.898, g: 0.906, b: 0.918 } }];
}

/* -----------------------------------------------------------------------------
 * COMPONENT LABELS + SEMANTIC STATE
 * -------------------------------------------------------------------------- */
function setInstanceLabel(inst, label) {
	const cp = inst.componentProperties ?? {};
	const textKey = Object.keys(cp).find((k) => cp[k]?.type === 'TEXT');
	if (textKey) {
		inst.setProperties({ [textKey]: label });
		return;
	}
	const t = inst.findOne((n) => n.type === 'TEXT');
	if (t) t.characters = label;
}
/* Friendly field aliases → regex over the real (emoji-prefixed) TEXT property name.
 * Lets a plan use intuitive keys for form controls whose Figma props are opaque, e.g.
 * Select exposes "✏️ Label" (the label) and "✏️ Text" (the selected value); a plan can pass
 * `text: { label:"Zeitraum", value:"Letzte 7 Tage" }` and `value`/`input`/`placeholder`
 * resolve to the "Text" prop. */
const FIELD_ALIASES = {
	value: /text|value|input/i,
	input: /text|value|input/i,
	placeholder: /text|value|input/i,
	label: /label/i,
	title: /label|title|headline/i
};
/* Set multiple named TEXT properties on an instance, e.g. { headline:"…", description:"…" }
 * or { label:"…", value:"…" } for form controls. Each field matches a TEXT component-property
 * first by normalized-name substring, then by a friendly alias regex; each prop is used once. */
function setInstanceFields(inst, fields) {
	if (!fields) return;
	const cp = inst.componentProperties ?? {};
	const textKeys = Object.keys(cp).filter((k) => cp[k]?.type === 'TEXT');
	const props = {};
	const used = new Set();
	for (const [want, val] of Object.entries(fields)) {
		let k = textKeys.find(
			(k) => !used.has(k) && normName(k).includes(normName(want))
		);
		if (!k) {
			const re = FIELD_ALIASES[String(want).toLowerCase()];
			if (re) k = textKeys.find((k) => !used.has(k) && re.test(k));
		}
		if (k) {
			props[k] = String(val);
			used.add(k);
		}
	}
	if (Object.keys(props).length) {
		try {
			inst.setProperties(props);
		} catch {}
	}
}
/* applyProps — set ANY component property by plan-level { key: value } dict.
 *
 * Covers ALL four property types the Figma Plugin API exposes on instances:
 *   TEXT          → string value, matched by normalized-name substring
 *   VARIANT       → string value (variant option name), matched by normalized-name substring
 *   BOOLEAN       → boolean value (true/false or "true"/"false"), matched by normalized-name
 *   INSTANCE_SWAP → component key string, resolved via importComponentSetByKeyAsync,
 *                   matched by normalized-name substring
 *
 * Usage in a plan node:
 *   {
 *     "type": "Input",
 *     "props": { "label": "above", "state": "filled" },   // variant axes → instance selection
 *     "applyProps": {                                       // set on the live instance
 *       "Label": "E-Mail",                                 // TEXT
 *       "Show Required Asterisk": true,                    // BOOLEAN
 *       "Interaction State": "Error",                      // VARIANT (not an axis)
 *       "Icon Trailing": "some-component-key"              // INSTANCE_SWAP
 *     }
 *   }
 *
 * Keys are matched case-insensitively by normalized substring, so short aliases work:
 *   "label" matches "✏️ Label#552:45", "required" matches "Show Required Asterisk#…".
 */
async function applyProps(inst, map) {
	if (!map || typeof map !== 'object') return;
	const cp = inst.componentProperties ?? {};
	const cpKeys = Object.keys(cp);
	// Match on the property's NAME PART (before the "#id" suffix), preferring an EXACT
	// normalized match, then a name-prefix, then the legacy full-key substring. This stops
	// "Label" from greedily matching "Show Label" (both contain "label") — a real DB form
	// field has BOTH "✏️ Label" (TEXT) and "👁️ Show Label" (BOOLEAN), so a substring match
	// would set the wrong one and leave the visible label untouched.
	const namePart = (k) => normName(String(k).split('#')[0]);
	const textVarProps = {};
	const swaps = []; // [propKey, componentOrSetKeyString] — applied AFTER the batch
	for (const [want, val] of Object.entries(map)) {
		const norm = normName(want);
		const key =
			cpKeys.find((k) => namePart(k) === norm) ||
			cpKeys.find((k) => namePart(k).startsWith(norm)) ||
			cpKeys.find((k) => normName(k).includes(norm));
		if (!key) continue; // unknown key — skip silently (never throw for optional overrides)
		const type = cp[key]?.type;
		if (type === 'TEXT' || type === 'VARIANT') {
			textVarProps[key] = String(val);
		} else if (type === 'BOOLEAN') {
			textVarProps[key] = val === true || val === 'true';
		} else if (type === 'INSTANCE_SWAP') {
			// Defer instance swaps: batching them into setProperties can throw and
			// drop the OTHER props (e.g. a "Show Icon" boolean) with them. Apply
			// them separately below via applyInstanceSwap (robust: string-key route
			// with a size-matched swapComponent fallback). `val` may be a raw
			// component/component_set key OR a DB Theme icon name (resolved here).
			swaps.push([key, iconKeyByName(String(val)) || String(val)]);
		}
	}
	if (Object.keys(textVarProps).length) {
		try {
			inst.setProperties(textVarProps); // boolean/text/variant first (e.g. Show Icon Leading)
		} catch {}
	}
	for (const [propKey, keyVal] of swaps) {
		await applyInstanceSwap(inst, propKey, keyVal);
	}
}
/* applyInstanceSwap — set ONE instance-swap property robustly.
 *
 * The Figma API's setProperties route for INSTANCE_SWAP is brittle: passing an
 * object ({type:'COMPONENT',key}) is rejected, and even a bare component-key
 * string is refused for library icon component_sets ("incompatible with component
 * property type"). The reliable path is to locate the CHILD instance node the
 * swap property drives (via componentPropertyReferences.mainComponent) and call
 * swapComponent() on it. `keyVal` may be a COMPONENT key or a COMPONENT_SET key;
 * for a set we pick the size variant matching the icon currently in that slot so
 * a "Medium" button keeps its icon size (and a "Small" button its smaller one). */
async function applyInstanceSwap(inst, propKey, keyVal) {
	// The child instance whose main component is bound to this swap property AND is
	// currently visible (the active size variant — e.g. "Icon Leading Medium" when
	// the button Size is Medium; the hidden "Small" one is skipped).
	const child = safe(
		() =>
			inst.findOne(
				(n) =>
					n.type === 'INSTANCE' &&
					n.visible &&
					safe(
						() => n.componentPropertyReferences?.mainComponent,
						null
					) === propKey
			),
		null
	);
	// Resolve the target: a component directly, else a set → size-matched variant.
	let target = null;
	try {
		target = await figma.importComponentByKeyAsync(keyVal);
	} catch {}
	if (!target) {
		let set = null;
		try {
			set = await figma.importComponentSetByKeyAsync(keyVal);
		} catch {}
		if (set) {
			let curName = '';
			if (child) {
				const cur = await safe(
					() => child.getMainComponentAsync(),
					null
				);
				curName = cur ? cur.name : '';
			}
			const pick =
				(set.children || []).find((c) => c.name === curName) ||
				(set.children || []).find((c) => /size=24/i.test(c.name)) ||
				set.defaultVariant ||
				(set.children || [])[0];
			if (pick) {
				try {
					target = await figma.importComponentByKeyAsync(pick.key);
				} catch {}
			}
		}
	}
	if (!target) return;
	// Route 1: property key string (works for most non-icon swaps).
	try {
		inst.setProperties({ [propKey]: target.key });
		return;
	} catch {}
	// Route 2: swap the child instance node directly (library icons need this).
	if (child) {
		try {
			child.swapComponent(target);
		} catch {}
	}
}
/* setButtonIcon — first-class leading/trailing icon for a Button (`side` =
 * 'leading' | 'trailing'). Enables the "Show Icon <side>" boolean, then swaps the
 * ACTIVE (visible, size-correct) icon child to the requested DB Theme icon —
 * resolved by NAME via ICON_KEYS (e.g. "calendar") or a raw component/set key.
 * Auto-targets whichever swap slot matches the button's current Size (Medium vs
 * Small), so callers never guess "Icon Leading Medium" vs "…Small". Call AFTER
 * applyProps so the Size variant is already applied. */
async function setButtonIcon(inst, ref, side) {
	if (!ref) return;
	const cp = inst.componentProperties || {};
	const showKey = Object.keys(cp).find((k) =>
		new RegExp('show icon ' + side, 'i').test(k)
	);
	if (showKey) {
		try {
			inst.setProperties({ [showKey]: true });
		} catch {}
	}
	const key = iconKeyByName(String(ref)) || String(ref);
	const re = new RegExp('icon ' + side, 'i');
	const child = safe(
		() =>
			inst.findOne(
				(n) =>
					n.type === 'INSTANCE' &&
					n.visible &&
					re.test(
						safe(
							() => n.componentPropertyReferences?.mainComponent,
							''
						) || ''
					)
			),
		null
	);
	if (!child) return;
	let target = null;
	let set = null;
	try {
		set = await figma.importComponentSetByKeyAsync(key);
	} catch {}
	if (set) {
		const cur = await safe(() => child.getMainComponentAsync(), null);
		const curName = cur ? cur.name : '';
		const pick =
			(set.children || []).find((c) => c.name === curName) ||
			(set.children || []).find((c) => /size=24/i.test(c.name)) ||
			set.defaultVariant ||
			(set.children || [])[0];
		if (pick) {
			try {
				target = await figma.importComponentByKeyAsync(pick.key);
			} catch {}
		}
	} else {
		try {
			target = await figma.importComponentByKeyAsync(key);
		} catch {}
	}
	if (target) {
		try {
			child.swapComponent(target);
		} catch {}
	}
}
let _colorCollection = null;
async function getColorCollection() {
	if (_colorCollection) return _colorCollection;
	const v = await importVar('color.text.strong');
	_colorCollection = await figma.variables.getVariableCollectionByIdAsync(
		v.variableCollectionId
	);
	return _colorCollection;
}
/* Semantic coloring: prefer the built-in Semantic VARIANT, else set the adaptive mode.
 * NEVER override fills to recolor. */
async function setSemantic(inst, semantic) {
	const props = inst.componentProperties;
	if (props) {
		const key = Object.keys(props).find(
			(k) =>
				k === 'Semantic' ||
				(props[k]?.type === 'VARIANT' && /semantic/i.test(k))
		);
		if (key && props[key]?.type === 'VARIANT') {
			try {
				const col = await getColorCollection();
				inst.clearExplicitVariableModeForCollection(col);
			} catch {}
			inst.setProperties({
				[key]: /^adaptive$/i.test(semantic)
					? '(Def) Adaptive'
					: semantic
			});
			return;
		}
	}
	const col = await getColorCollection();
	const mode = col.modes.find(
		(m) => m.name.toLowerCase() === String(semantic).toLowerCase()
	);
	if (!mode)
		stop(
			`Unknown semantic "${semantic}". Options: ${col.modes.map((m) => m.name).join(', ')}`
		);
	inst.setExplicitVariableModeForCollection(col, mode.modeId);
}

/* -----------------------------------------------------------------------------
 * HIGH-LEVEL BUILDERS (each returns { instance }; hug/sizing already handled)
 * -------------------------------------------------------------------------- */
