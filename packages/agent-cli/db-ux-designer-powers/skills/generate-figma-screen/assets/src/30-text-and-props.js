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
	if (node.fills) await bindInnerTextFill(inst, node.fills);
	return inst;
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
	const textVarProps = {};
	for (const [want, val] of Object.entries(map)) {
		const norm = normName(want);
		const key = Object.keys(cp).find((k) => normName(k).includes(norm));
		if (!key) continue; // unknown key — skip silently (never throw for optional overrides)
		const type = cp[key]?.type;
		if (type === 'TEXT' || type === 'VARIANT') {
			textVarProps[key] = String(val);
		} else if (type === 'BOOLEAN') {
			textVarProps[key] = val === true || val === 'true';
		} else if (type === 'INSTANCE_SWAP') {
			// val = a component key string; import and swap
			try {
				const set = await figma.importComponentSetByKeyAsync(
					String(val)
				);
				const comp =
					set.type === 'COMPONENT_SET'
						? (set.defaultVariant ?? set.children[0])
						: set;
				textVarProps[key] = { type: 'COMPONENT', key: comp.key };
			} catch {
				// If the key is invalid, skip (don't break the whole render)
			}
		}
	}
	if (Object.keys(textVarProps).length) {
		try {
			inst.setProperties(textVarProps);
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
