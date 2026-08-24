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
/* EMPTY IMAGE = the intended default for a generated layout.
 * A generated screen ships an EMPTY Figma image; the designer drops the real asset in. A real
 * image is used ONLY when the user explicitly provided one that already lives in the file
 * (`imageHash`). NOTE: `figma.createImageAsync` (load from a URL) is NOT available in this
 * sandbox, so there is no `src` option.
 *
 * Figma refuses an IMAGE paint without a hash, so "empty" needs a real asset — and it must be
 * VISIBLE. A fully transparent asset is NOT: Figma treats the fill as filled and the node renders
 * white, which is indistinguishable from an empty surface. So we paint the DB placeholder pattern:
 *   1) the DB placeholder asset if this file has it (the convention in the DB design files), or
 *   2) a 16x16 checkerboard created here from bytes — portable to any file.
 * The checkerboard is TILEd so the squares keep their size on any node; stretching a 16px pattern
 * with FILL would turn it into four giant blocks. A REAL asset always uses FILL. */
const DB_PLACEHOLDER_IMAGE_HASH = 'ece298d0ec2c16f10310d45724b276a6035cb503';
const CHECKERBOARD_PNG_BASE64 =
	'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAH0lEQVR42mP4jwO8ePUWK2IY1UATDbgkcBk0qoEmGgAybN4fyQQhnwAAAABJRU5ErkJggg==';
let _emptyPaint = null;
function emptyImagePaint() {
	if (_emptyPaint) return _emptyPaint;
	// 1) The DB placeholder asset, when the target file already contains it.
	if (
		safe(
			() => Boolean(figma.getImageByHash(DB_PLACEHOLDER_IMAGE_HASH)),
			false
		)
	) {
		_emptyPaint = {
			type: 'IMAGE',
			scaleMode: 'FILL',
			imageHash: DB_PLACEHOLDER_IMAGE_HASH
		};
		return _emptyPaint;
	}

	// 2) Portable fallback: create the checkerboard in THIS file and tile it.
	const bytes = Uint8Array.from(atob(CHECKERBOARD_PNG_BASE64), (c) =>
		c.charCodeAt(0)
	);
	_emptyPaint = {
		type: 'IMAGE',
		scaleMode: 'TILE',
		scalingFactor: 1,
		imageHash: figma.createImage(bytes).hash
	};
	return _emptyPaint;
}
async function applyImageFill(rect, node) {
	try {
		rect.fills = [
			node.imageHash
				? {
						type: 'IMAGE',
						scaleMode: node.scaleMode || 'FILL',
						imageHash: node.imageHash
					}
				: emptyImagePaint()
		];
	} catch (err) {
		stop(
			`Image fill failed (${(err && err.message) || err}). Provide an "imageHash" of an asset that exists in this file.`
		);
	}
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
	// A component's "primary line" is called Label on a form control but Headline on a
	// Notification, and a plan legitimately says `label` for both. Without the headline
	// fallback the field matched nothing on a Notification and the write was skipped, which
	// left the library default "Headline" on canvas.
	label: /label|headline|title/i,
	title: /label|title|headline/i,
	headline: /headline|title|label/i,
	description: /description|text|body/i
};
/* Set multiple named TEXT properties on an instance, e.g. { headline:"…", description:"…" }
 * or { label:"…", value:"…" } for form controls. Each field matches a TEXT component-property
 * first by normalized-name substring, then by a friendly alias regex; each prop is used once.
 *
 * A field that matches NOTHING is a hard STOP, never a silent skip. Skipping looks harmless
 * (the props write still succeeds) but is not: every DB component ships its slots pre-filled
 * with the library's own copy, so an unmapped field does not render empty — it renders
 * "Headline" / "Text" / "Label". Failing here reports the wrong field name while the plan can
 * still be fixed, instead of shipping placeholder copy that reads as real content. */
function setInstanceFields(inst, fields) {
	if (!fields) return;
	/* `fields` is a MAP of TEXT property -> value. A STRING here is a plan bug
	 * (`text: "…"` instead of `text: { headline: "…" }`), and without this guard
	 * Object.entries() below enumerated the string CHARACTER BY CHARACTER: the
	 * error then listed the character indices "0", "4", "5", … as field names and
	 * hid the actual mistake. Name the real cause instead. */
	if (typeof fields !== 'object' || Array.isArray(fields))
		stop(
			`\`text\` must be a field map like text: { headline: "…", text: "…" }, got ${
				Array.isArray(fields) ? 'an array' : typeof fields
			} on "${safe(() => inst.name, '?')}". For a single visible label use \`label\`.`
		);
	const cp = inst.componentProperties ?? {};
	const textKeys = Object.keys(cp).filter((k) => cp[k]?.type === 'TEXT');
	const props = {};
	const used = new Set();
	const unmatched = [];
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
		} else unmatched.push(want);
	}
	if (unmatched.length)
		stop(
			`Text field${unmatched.length > 1 ? 's' : ''} ${unmatched
				.map((f) => `"${f}"`)
				.join(', ')} did not match any TEXT property on "${safe(
				() => inst.name,
				'?'
			)}". Available: ${
				textKeys.length
					? textKeys.map((k) => `"${k}"`).join(', ')
					: 'none'
			}. Rename the field in the plan to the component's own property (e.g. a Notification carries "Headline" + "Text", not "label"/"value") — an unmatched field would leave the library's default placeholder copy on canvas.`
		);
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
		if (type === 'TEXT') {
			textVarProps[key] = String(val);
		} else if (type === 'VARIANT') {
			// A VARIANT takes an exact LABEL, and the DB components spell their toggles
			// "True"/"False" and prefix a default with "(Def) ". A raw `String(val)` therefore
			// produces "true" or "small", `setProperties` rejects the whole batch, and the
			// silent catch below drops every OTHER prop with it — that is how a search Input
			// kept "Show Icon Leading = False" despite the plan asking for the icon. Resolve
			// booleans and loose casing to the component's own option list first.
			const want =
				typeof val === 'boolean'
					? val
						? 'True'
						: 'False'
					: String(val);
			textVarProps[key] = resolveVariantLabel(cp[key], want);
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
/* findIconSwapSlot — locate the child instance a button's icon swap property drives.
 * A TEXT button names its slots "Icon Leading <size>" / "Icon Trailing <size>", so the
 * side-specific match is the normal path. An ICON-ONLY button has no sides and no "Show Icon"
 * boolean at all — its single slot is just "Icon <size>" (e.g. "🔄 Icon Medium#491:241"). Without
 * the second lookup the side regex found nothing, the swap was skipped, and the button shipped
 * the library's unresolved "<Icon>" placeholder: a visibly empty ✕ box. Excluding
 * leading/trailing keeps a text button from matching the wrong side. */
function findIconSwapSlot(inst, side) {
	const refOf = (n) =>
		safe(() => n.componentPropertyReferences?.mainComponent, '') || '';
	const slotFor = (test) =>
		safe(
			() =>
				inst.findOne(
					(n) => n.type === 'INSTANCE' && n.visible && test(refOf(n))
				),
			null
		);
	const sideRe = new RegExp('icon ' + side, 'i');
	return (
		slotFor((r) => sideRe.test(r)) ||
		slotFor((r) => /icon/i.test(r) && !/leading|trailing/i.test(r))
	);
}

/* resolveIconTarget — import the COMPONENT to swap an icon slot to. `key` may be a single
 * component key or a component_set key; for a set we pick the size variant matching the icon
 * currently in the slot, so a "Medium" button keeps its icon size (and a "Small" button its
 * smaller one). Returns null when nothing could be imported — the caller then leaves the slot
 * untouched rather than breaking the instance. */
async function resolveIconTarget(key, child) {
	let set = null;
	try {
		set = await figma.importComponentSetByKeyAsync(key);
	} catch {}
	if (!set) {
		try {
			return await figma.importComponentByKeyAsync(key);
		} catch {
			return null;
		}
	}

	const cur = await safe(() => child.getMainComponentAsync(), null);
	const curName = cur ? cur.name : '';
	const kids = set.children || [];
	const pick =
		kids.find((c) => c.name === curName) ||
		kids.find((c) => /size=24/i.test(c.name)) ||
		set.defaultVariant ||
		kids[0];
	if (!pick) return null;
	try {
		return await figma.importComponentByKeyAsync(pick.key);
	} catch {
		return null;
	}
}

/* setComponentIcon — first-class leading/trailing icon for ANY component that has an icon slot
 * (`side` = 'leading' | 'trailing'): Button, but equally Input (the magnifier of a search field),
 * Select, Link, Tag. Turns the "Show Icon <side>" toggle on — a BOOLEAN on a Button, a VARIANT
 * on a form field, both handled — then swaps the ACTIVE (visible, size-correct) icon child to the
 * requested DB Theme icon, resolved by NAME via ICON_KEYS (e.g. "magnifying_glass") or a raw
 * component/set key. Auto-targets whichever swap slot matches the component's current Size
 * (Medium vs Small), so callers never guess "Icon Leading Medium" vs "…Small". Call AFTER
 * applyProps so the Size variant is already applied. */
async function setComponentIcon(inst, ref, side) {
	if (!ref) return;
	const cp = inst.componentProperties || {};
	const showKey = Object.keys(cp).find((k) =>
		new RegExp('show icon ' + side, 'i').test(k)
	);
	if (showKey) {
		// The toggle is a BOOLEAN on a Button but a VARIANT ("True"/"False") on a form field
		// like Input — passing `true` to the variant throws and the icon never appears.
		const value =
			cp[showKey].type === 'VARIANT'
				? resolveVariantLabel(cp[showKey], 'True')
				: true;
		try {
			inst.setProperties({ [showKey]: value });
		} catch {}
	}
	const key = iconKeyByName(String(ref)) || String(ref);
	const child = findIconSwapSlot(inst, side);
	if (!child) return;
	const target = await resolveIconTarget(key, child);
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
