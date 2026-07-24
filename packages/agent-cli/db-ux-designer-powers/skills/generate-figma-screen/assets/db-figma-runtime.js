/* =============================================================================
 * DB UX Figma Render Runtime — SELF-CONTAINED, PASTE-VERBATIM into use_figma.
 * -----------------------------------------------------------------------------
 * WHY THIS EXISTS
 *   The render step used to be hand-written imperative Figma code inside every
 *   use_figma call. Strong models recovered from the Figma Plugin API's sharp
 *   edges by trial-and-error; weaker ("auto") models did not and produced the
 *   same failures over and over:
 *     1. setBoundVariable("fills", v)            -> WRONG. Must bind on the paint.
 *     2. cached SLOT ref used after setProperties -> "Node with id ... not found".
 *     3. resize() after primaryAxisSizingMode=AUTO -> silently resets to FIXED
 *        (screen root collapses to height 1).
 *     4. card set to FILL against a collapsed grid row -> content overflows.
 *     5. grid rows collapse when their cells stay FILL.
 *
 *   This runtime encapsulates EVERY one of those. The model's only job is to
 *   produce a declarative Composition Plan (JSON) and call renderPlan(PLAN).
 *   No ad-hoc node code. That is what makes the output model-independent.
 *
 * USAGE (inside a single use_figma call):
 *   // 1) paste this whole file
 *   // 2) const PLAN = { screen, targetNodeId, layout:[...], variables:[...] };
 *   // 3) const res = await renderPlan(PLAN);
 *   // 4) return JSON.stringify(res.audit);   // {valid, violations}
 *
 * The plan schema is documented at the bottom (see PLAN SCHEMA).
 * Key maps are a faithful mirror of the registries in ../registries.
 * If a registry key changes, regenerate the corresponding entry here.
 * ========================================================================== */

/* -----------------------------------------------------------------------------
 * RESOLVED KEY MAPS (mirror of the registries — single source of truth here)
 * -------------------------------------------------------------------------- */
const VAR_KEYS = {
	'color.background.canvas': '539324f386b2150504d789cfbad9126c14cbdad1',
	'color.background.surface': 'e4c25c81df8e51185f22570c6d6317238cddfa4d',
	'color.background.elevated': '5510a95229c069c0448a76361b0967b4ac96276d',
	'color.text.strong': '497497bca9694f6004d1667de59f1a903b3cd3ef',
	'color.text.default': '497497bca9694f6004d1667de59f1a903b3cd3ef',
	'color.text.weak': '4b6fa889078d2d2be01885affe2ccf9b6fe00bca',
	'color.text.muted': 'de14758ec6fb33b47e9cb67eb4587d01d4f38828',
	'color.icon': '1a1b9dd754ea56f8a4579ff1396ab560b98c018d',
	'color.border.subtle': 'bb22fcc29f4e0e01a03649f1dc2bb37e58a0dd38',
	'color.brand.origin': '998998d67d3ebef6f2692db932bce69431b3d0cc',
	'color.brand.bgInverted': 'de9d33135d82cee05cc2835cb08df6ed6dc40e78',
	'color.brand.onOrigin': '68475ba28d00cabd01c8310e6da5bd41158e6f0d',
	'color.brand.onBgInverted': '9d68adbef048ba6c831b470b070542479bb929eb',
	'space.xs': '7bf011be28799b8941bfdc8d3e4bdef53a98bfee',
	'space.sm': 'd2f8d2d9ce6aead856cc0a0451064e7e58dd1540',
	'space.md': '783a93db6d2cc787ac709aadc1062ad083568515',
	'space.lg': '3145886d20a1dc171e1d96d282fde398bd40c832',
	'space.xl': 'e78d8e26882571f30187cbf2ba64506c139f5c8a',
	'space.2xl': '71b85a42d436c917ac405692ef86ed99597d789a',
	'space.3xl': '597c7e6603cc8c02ff0d932044f0960a350a4360'
};

// Tokens that MUST NOT back a surface (accent-only). Fail fast if misused as a fill.
const SURFACE_FORBIDDEN = new Set(['color.brand.origin']);
// Basic background levels allowed on large surfaces / sections.
const LEVEL_BG = new Set([
	'color.background.canvas',
	'color.background.surface',
	'color.background.elevated'
]);

// DB border-radius tokens (Core Foundation "Density" collection, scope CORNER_RADIUS).
const RADIUS_KEYS = {
	'radius.3xs': '7cd85813ec89a8fad9aed6c82fe440f761405349',
	'radius.2xs': '3dc45106a521db00a2b23292aa19e013266588b7',
	'radius.xs': '10a4e20ba00d09707255e11dd87fd40c30b7c0bf',
	'radius.sm': 'ba8ec50fe3e04cc92e7ba8574e5339ceb9863175',
	'radius.md': 'beaeebe2274cd3190390b0b629f5426afeeffcc4',
	'radius.lg': '8d600d76091a8a73e48d36bddae38e9e201f8163',
	'radius.xl': '83e33a634dd69c671519fc0d005628c1c79d2f63',
	'radius.2xl': 'a4e818c581fec0f258af7893ed398a9989c542d1',
	'radius.3xl': '78ca1156d0d07dcad464bddf545dc794ebd8e1a0'
};

const TEXT_STYLE_KEYS = {
	display: '3d925e1ab760c23797ab3f9718f79a4b2c82cfdd',
	'headline.lg': '310b9874b227f598d4ca8d054eb06be9d6987329',
	headline: 'e168a9ca99270c06aa87b9375b11d3859d910ba1',
	'headline.md': 'b26b0a63301d81cd7a68409c4b6275c6adb8dec9',
	'headline.sm': '5204e21f676d68ad7f3ab0b1861ed560b85e2092',
	body: '60f7eab567f48478d55bbed9e4c556265e1fd5c0',
	'body.bold': 'c253285cf17de376e41ba2e78f2e9abba4e342b3',
	'body.sm': 'c055d5e1e0644bb46159862577fe90390cbf820d',
	'body.sm.bold': '9af856205f2d030f9e367ab4e774b445e132d3f5'
};

// Concept (Core Lab) typography components. Prefer these over raw styled text so headings
// and body copy are real DB instances (this is how the DB UX examples are authored).
// They REQUIRE Concept opt-in (see SKILL.md `concept_components`). `As=h1..h6` picks the
// heading level (size via default mapping); Text `Size` = Small|(Def) Medium|Large|xLarge|
// 2xLarge|3xLarge. Both expose a `✏️ Text` prop and a `Text Align` variant.
const CONCEPT_KEYS = {
	Heading: '016cad8991d12925c1364c07b90aa58559225743',
	Text: 'c1ad46c72344cc70ea88a9fca7da7da8f0915feb'
};
// Functional icon placeholder (DB Theme Icons). Rendered as a real DB Theme Icon component
// instance for `visual: "icon"` — NEVER a recolored image rectangle. The icon's dimensions
// are INTRINSIC to its `Size` variant; the instance hugs both axes (never force-resized).
const ICON_KEY = 'ebafa2ba125b7d891d26741eb8989581360d3a95';
// Comfort layer: resolve a functional icon by NAME (e.g. { type:"Icon", name:"arrow_right" })
// to its DB Theme Icons component_set key, so plans don't need raw keys. Mirrors
// assets/registries/icons.json — extend BOTH when adding icons (see that file's _meta).
// Lookup is normalized: _, -, spaces are equivalent and case-insensitive. An explicit
// node.key always wins; an unknown name falls back to the generic ICON_KEY placeholder.
const ICON_KEYS = {
	arrow_right: '22c98058cb5cf55ae3c65380fc1f5a300a47ebbd',
	arrow_up_right: '816c8cc7c14dc6bc4dd8afd3896d0260302e3691',
	chevron_right: '43be99bb7ad7fde8b308cf5db3a5e8932cb58de7',
	double_chevron_right: '54e86bb68e75a34fd1adb2e1334ca091ed6f184e',
	check: '1fa18e489d6f4ca39a260cc6b0c3a85fb6c64814',
	check_circle: 'a2b00e107d95dc22282cb43182e5ba0f890c3025',
	magnifying_glass: 'ddc16c3a7602673fc41359399002744a739cae4c',
	funnel: 'f0b86c216082d38aa48d5e345e8ff44b8926d232',
	calendar: 'e7ae6334b04b51ad2de527d056a6a99255dfe177',
	shield_check: '8ac3f6c5e837ec79dd3ea3a258a38df92518e87a',
	information_circle: '14bcaf471daf970f0da7ba9535b0cb8cb262bc93',
	clock: '10fe0413ea8b23091b7dbb207983402f94fe4397',
	map_pin: '0b5410dcb5112a34defc38455fd1eee4de903a13',
	star: '3239a77a84015a226cf69ea90ba4dcf74ba65842',
	moon: 'd59d11019467c5a5c9b57ef6e39878b59cc7c53c',
	ticket_horizontal: '4f569422bebfc42b3e52be3df4be1a9efffe74d6',
	seat_window: '9ab1c7eea15bdaadc8752282c4750d5560c7400d',
	train: 'f6626ec977d9191b3556118c0d46a5650e60c4ca',
	train_station: 'cb42c815de9f55a669ca1837bb2770f077ab2906',
	local_train: 'e9b31b9807d5e764b76ac5fe7c0dbf6bbe3119cb',
	tram: 'c970c9b46b13d15bd197b161628b287ae88f777a',
	bus: '143c8c8555460bc5b46e6db6ce63e39534c1a722',
	bike: 'd4327a3717c2f797247b35dbd9dc9ae544fb7b01'
};
// name -> key with normalization (_, -, space equivalent, case-insensitive).
const iconKeyByName = (name) => {
	if (!name || typeof name !== 'string') return null;
	const norm = (s) => s.toLowerCase().replace(/[\s-]+/g, '_');
	const target = norm(name);
	if (ICON_KEYS[target]) return ICON_KEYS[target];
	for (const k in ICON_KEYS) if (norm(k) === target) return ICON_KEYS[k];
	return null;
};
// Image aspect ratios allowed by the design system. `Image` nodes MUST use one of these
// (width fills the container, height derives from the ratio) — never a free pixel height.
const IMAGE_RATIOS = { '1:1': 1, '3:4': 4 / 3, '16:9': 9 / 16 };
const TEXT_ALIGN_LABELS = {
	left: '(Def) Left',
	center: 'Center',
	right: 'Right'
};

// Library component sets: name -> { variants:[{axes,key}], slot }.
// Resolution: match a plan node's props against a variant's axes.
const COMPONENTS = {
	Button: {
		variants: [
			{
				axes: { variant: 'brand', iconOnly: false },
				key: 'bcd676a2ab5beb47eef54a9f36d74d91f2aa4a20'
			},
			{
				axes: { variant: 'filled', iconOnly: false },
				key: '324c20d16cf7f1a285279547f4d9ca1407df39ed'
			},
			{
				axes: { variant: 'outlined', iconOnly: false },
				key: '8c488eae78e6f082da0be2571ba7a0dd26caf962'
			},
			{
				axes: { variant: 'ghost', iconOnly: false },
				key: '46f934fb9da2c1bcfc1d357cf04694b888400c19'
			},
			{
				axes: { variant: 'brand', iconOnly: true },
				key: 'd3d9596ab2f065b22e89fbfbc0163f51967d5eff'
			},
			{
				axes: { variant: 'filled', iconOnly: true },
				key: '890bbab6c64b4357b781cfee90ac524c7337c0f3'
			},
			{
				axes: { variant: 'outlined', iconOnly: true },
				key: '92bbe193756813cbe30f9b8448043016318ff097'
			},
			{
				axes: { variant: 'ghost', iconOnly: true },
				key: '647b29562542c1141dd918ce1f0095157db64459'
			}
		]
	},
	Card: {
		slot: 'Children',
		variants: [
			{
				axes: { elevationLevel: '1' },
				key: 'ac60c14fe38796f4d53e293d9b8cc813a9079193'
			},
			{
				axes: { elevationLevel: '2' },
				key: '245f3f9d7c51155844b58acfd939a21a473aefce'
			},
			{
				axes: { elevationLevel: '3' },
				key: 'f5ac595ff7bbc6ae121b29dbc5f45246fcc8d3c9'
			}
		]
	},
	Tag: {
		variants: [
			{
				axes: { icon: false, emphasis: 'weak', behavior: 'static' },
				key: 'd0ad401dcfc5665cc2d10f920c71f30007caafe5'
			},
			{
				axes: { icon: false, emphasis: 'strong', behavior: 'static' },
				key: 'd572ddecf60d3a16a72c799af2c97a72932df0af'
			},
			{
				axes: { icon: false, emphasis: 'weak', behavior: 'removable' },
				key: 'eda7e0b0091a5e9210befc179f3e45013e9aa519'
			},
			{
				axes: {
					icon: false,
					emphasis: 'weak',
					behavior: 'interactive'
				},
				key: '34fa98d8e15e9b0aa8a34295d362ebce154818bb'
			},
			{
				axes: {
					icon: false,
					emphasis: 'strong',
					behavior: 'removable'
				},
				key: '38b63c37cbdb5c8c693fbb1143190e69c0fd9c2a'
			},
			{
				axes: {
					icon: false,
					emphasis: 'strong',
					behavior: 'interactive'
				},
				key: '4e0a4801ff8321e83b5117ad744a2e0f86c4a10e'
			},
			{
				axes: { icon: true, emphasis: 'weak', behavior: 'static' },
				key: 'd2deb712823dc6af00070c3f330c5c5f800be169'
			},
			{
				axes: { icon: true, emphasis: 'strong', behavior: 'static' },
				key: '1bcb38ae4812c6fd3212a8a09aa420f7034fce9a'
			}
		]
	},
	Badge: {
		variants: [
			{
				axes: { content: 'text' },
				key: '022c804cdaa04f2468bfa0ce0cdff649abe3ac57'
			},
			{
				axes: { content: 'dot' },
				key: '6f45aa090ea8728319522ea7c916d150dde2ad71'
			},
			{
				axes: { content: 'icon' },
				key: '85c9797ce5f015696239c6fd7e267a1b61005dea'
			}
		]
	},
	Link: {
		variants: [
			{
				axes: { target: 'internal', brand: false },
				key: 'd516c148ca0b438df205de010c206584b4a3a8be'
			},
			{
				axes: { target: 'external', brand: false },
				key: '392ec8286886c8ceb051b689c3ed8e68f35c1c3a'
			},
			{
				axes: { target: 'internal', brand: true },
				key: '991b35aca7658dc3837705718549e95501c5812f'
			},
			{
				axes: { target: 'external', brand: true },
				key: 'be74885f007bdaaacbd026592725f8ce8b6cc715'
			}
		]
	},
	Header: {
		variants: [
			{
				axes: { device: 'desktop' },
				key: 'df5e3e03d7d2814f87f867bb632348b4af673e59'
			},
			{
				axes: { device: 'mobile' },
				key: '16733f0cd068c631552b3820614d80ccb66631b3'
			}
		]
	},
	Divider: {
		variants: [
			{ axes: {}, key: '401c3242f2e720f68b8c4255bb60670481e29451' }
		]
	},
	Section: {
		slot: 'Children',
		variants: [
			{ axes: {}, key: '55ce6d2d8deba893cfdfdd49e826a52673cf06da' }
		]
	},
	Input: {
		variants: [
			{
				axes: { label: 'above', state: 'empty' },
				key: '08ffb65e50921a3c1cd9a9bf7fa48135fc97430a'
			},
			{
				axes: { label: 'above', state: 'filled' },
				key: '01229bdc8f305c4cc10adfce424481364463e3a0'
			},
			{
				axes: { label: 'above', state: 'active' },
				key: '8696ab641dc40085ae634633ab47463d17b06f99'
			},
			{
				axes: { label: 'floating', state: 'empty' },
				key: 'db70f90473d860893d4378ca27a65b65918e3894'
			},
			{
				axes: { label: 'floating', state: 'filled' },
				key: '6c3b2901a87c442c36d2faf0521ea23f82db7bd9'
			},
			{
				axes: { label: 'floating', state: 'active' },
				key: '4a7e873a8a2215584cd595fbd9b3eda9c38d8c94'
			}
		]
	},
	Textarea: {
		variants: [
			{
				axes: { label: 'above', state: 'filled' },
				key: '9e875608630b9479ae55561311b9f000e2ae9a87'
			}
		]
	},
	Checkbox: {
		variants: [
			{
				axes: { size: 'medium', width: 'auto' },
				key: 'f55dbce9bf3ba1650ca8ac5b44c76b84378d15ca'
			},
			{
				axes: { size: 'small', width: 'auto' },
				key: '08080b223a829e943bbe42682d249ccfaeda252a'
			},
			{
				axes: { size: 'medium', width: 'full' },
				key: '04364aeaaf01abe73f7286b1a4ea2b024f79f7fb'
			},
			{
				axes: { size: 'small', width: 'full' },
				key: 'b206fe4be942442945b40ac8d6f9e82c8afc7f1e'
			}
		]
	},
	Radio: {
		variants: [
			{
				axes: { size: 'medium', width: 'auto' },
				key: '06d45155016e374aee5782a33c994922c87ede24'
			},
			{
				axes: { size: 'small', width: 'auto' },
				key: '096d5459aed351b10f24079134ebf443cf03da19'
			},
			{
				axes: { size: 'medium', width: 'full' },
				key: '2cc01a4da359b8d324080ad78c155e7d2e869874'
			},
			{
				axes: { size: 'small', width: 'full' },
				key: 'b8c8cc9190b2de7c12ff3130506d51f046cbd7c9'
			}
		]
	},
	Switch: {
		variants: [
			{
				axes: {
					labelPosition: 'trailing',
					width: 'full',
					size: 'small'
				},
				key: 'bb9ad253da472dd8c821acf8f1ff7f8a82d14e32'
			},
			{
				axes: {
					labelPosition: 'leading',
					width: 'full',
					size: 'medium'
				},
				key: '641334e04985ebd35e4db6cd4c993dd70137d81b'
			}
		]
	},
	Select: {
		variants: [
			{
				axes: { label: 'above', state: 'empty' },
				key: 'c68719e1c018e149324b1b99f70085305b1e1eb8'
			},
			{
				axes: { label: 'above', state: 'selected' },
				key: '6dc8c2e6686d7b90e6c3db8fd49d63b182b4ee46'
			},
			{
				axes: { label: 'floating', state: 'empty' },
				key: 'aff8a7d7435948ef3b312f198ed8f2130caebab0'
			},
			{
				axes: { label: 'floating', state: 'selected' },
				key: 'a017ac6759ac04fcf3b0103766ea823ad6220f67'
			}
		]
	},
	Infotext: {
		variants: [
			{
				axes: { width: 'auto' },
				key: '072e65767d05b99f91d63f489ef0c28620b002ca'
			},
			{
				axes: { width: 'full' },
				key: 'af81be60e9498309b5fcf195fa6731d6381b82f0'
			}
		]
	},
	Notification: {
		slot: 'Children',
		variants: [
			{
				axes: { placement: 'docked', media: 'icon' },
				key: '0b8195110baab8ec2bde79769a21728fe5fe0ace'
			},
			{
				axes: { placement: 'docked', media: 'image' },
				key: 'e1162439b4fcea78e74f0fab350556ea64a40806'
			},
			{
				axes: { placement: 'standalone', media: 'icon' },
				key: '21d0406331e71a91bdea08bc2ff312290748be5a'
			},
			{
				axes: { placement: 'standalone', media: 'image' },
				key: '04ffed0aab92a88eb3ece16f40ce499df2d705b4'
			},
			{
				axes: { placement: 'overlay', media: 'icon' },
				key: '106477a728f386c6266693059f0b8cecc960042d'
			},
			{
				axes: { placement: 'overlay', media: 'image' },
				key: 'abb0a0df1e439b23dcffe568851b4e4fa1ea95c0'
			}
		]
	},
	Accordion: {
		slot: 'Children',
		variants: [
			{ axes: {}, key: 'c842298934e02a0332e36c451ad8e1d3f0cc8955' }
		]
	},
	Tooltip: {
		variants: [
			{
				axes: { position: 'left' },
				key: '313242eddbd58b864208a63edaad666ecdb7e17f'
			},
			{
				axes: { position: 'top' },
				key: 'b9ee3b09d239c9820e55808401291abfce4801bf'
			}
		]
	}
};

// Library components rendered as leaf instances that should FILL their container width
// by default (form fields, notifications, etc.). Buttons/Tags/Badges hug and are excluded.
const FILL_DEFAULT = new Set([
	'Input',
	'Textarea',
	'Select',
	'Notification',
	'Infotext',
	'Accordion'
]);

// Local layout primitives. Resolved PORTABLY: matched by NAME (normalized, so emoji /
// slashes / spacing don't matter), with the original file's node id only as a fast hint.
// `idHint` makes it instant in the source file; `match` makes it work in ANY file that
// has the DB UX layout primitives — so the runtime is not bound to one Figma file.
const LOCAL = {
	Grid: {
		idHint: '23:4017',
		match: 'grid',
		slots: ['Slot-1', 'Slot-2', 'Slot-3', 'Slot-4']
	},
	ContainerVertical: {
		idHint: '29:3988',
		match: 'containervertical',
		slot: 'Slot'
	},
	ContainerHorizontal: {
		idHint: '29:3989',
		match: 'containerhorizontal',
		slot: 'Slot'
	}
};

const LAYOUT_TYPES = new Set([
	'Section',
	'Grid',
	'ContainerVertical',
	'ContainerHorizontal'
]);

/* -----------------------------------------------------------------------------
 * LOW-LEVEL HELPERS — each encapsulates a specific Figma API gotcha.
 * -------------------------------------------------------------------------- */

/** STOP with a clear, actionable message (fail fast instead of silent bad render). */
function stop(msg) {
	throw new Error('[STOP] ' + msg);
}

/** Guarded read: some instance-internal node ids regenerate on layout and throw on access. */
const safe = (fn, dflt) => {
	try {
		return fn();
	} catch {
		return dflt;
	}
};

/** Normalize a component name for portable matching ("Container / Vertical" -> "containervertical"). */
const normName = (s) =>
	String(s || '')
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '');

/* Resolve a friendly spacing/size value ("small"|"medium"|"large"|"none") to the actual
 * VARIANT option available on a property — tolerant of the "(Def)" prefix, which differs
 * per component (Section's default Spacing is "(Def) Medium", Card's is "(Def) Small").
 * A hardcoded label map is wrong for one of them; matching the real variantOptions is not.
 * Falls back to the raw value if nothing matches. */
function resolveVariantLabel(prop, want) {
	const opts = (prop && prop.variantOptions) || [];
	const target = normName(want);
	const strip = (s) => normName(s).replace(/^def/, '');
	return (
		opts.find((o) => strip(o) === target) ||
		opts.find((o) => normName(o) === target) ||
		want
	);
}

const _varCache = {};
async function importVar(tokenName) {
	const key = VAR_KEYS[tokenName];
	if (!key)
		stop(
			`Unknown color/spacing token "${tokenName}". Not in the variable registry.`
		);
	if (_varCache[tokenName]) return _varCache[tokenName];
	const v = await figma.variables.importVariableByKeyAsync(key);
	_varCache[tokenName] = v;
	return v;
}

/* GOTCHA 1: fills/strokes variables must be bound ON THE PAINT, not the node.
 * node.setBoundVariable("fills", v) throws. Always build a bound paint. */
async function bindFill(node, tokenName) {
	if (SURFACE_FORBIDDEN.has(tokenName))
		stop(
			`Token "${tokenName}" is accent-only and must not back a surface. Use a bg level token.`
		);
	const v = await importVar(tokenName);
	const paint = figma.util.solidPaint('#000000');
	const bound = figma.variables.setBoundVariableForPaint(paint, 'color', v);
	node.fills = [bound];
}
async function bindTextFill(textNode, tokenName) {
	const v = await importVar(tokenName);
	const paint = figma.util.solidPaint('#000000');
	const bound = figma.variables.setBoundVariableForPaint(paint, 'color', v);
	textNode.fills = [bound];
}
/* Bind all four corner radii of a node to a DB border-radius token (never a raw number). */
async function bindRadius(node, tokenName) {
	const key = RADIUS_KEYS[tokenName];
	if (!key)
		stop(
			`Unknown radius token "${tokenName}". Use one of: ${Object.keys(RADIUS_KEYS).join(', ')}.`
		);
	const v = await figma.variables.importVariableByKeyAsync(key);
	for (const field of [
		'topLeftRadius',
		'topRightRadius',
		'bottomLeftRadius',
		'bottomRightRadius'
	]) {
		try {
			node.setBoundVariable(field, v);
		} catch {}
	}
}

/* GOTCHA 2: NEVER cache a SLOT reference across a mutation of its owner instance.
 * setProperties(...) / node.fills = ... regenerate the instance's internal node ids,
 * so a previously fetched slot throws "Node with id ... not found" on appendChild.
 * RULE: fully configure the owner (props/fills/gap) FIRST, THEN fetch the slot fresh
 * right before appending — and re-fetch per child. These helpers do exactly that. */
/* Match a slot by normalized name (reuses normName). The DB library prefixes content-slot
 * names with a "📦 " decoration (e.g. "📦 Children"), so exact-string matching breaks;
 * match on the normalized token instead. */
function slotMatches(nodeName, slotName) {
	const nm = normName(nodeName);
	if (slotName) return nm.includes(normName(slotName));
	return nm.includes('children') || nm === 'slot';
}
function freshSlot(ownerInstance, slotName) {
	const slot = ownerInstance.findOne(
		(n) => n.type === 'SLOT' && slotMatches(n.name, slotName)
	);
	if (!slot)
		stop(
			`No SLOT "${slotName || 'Children/Slot'}" found on "${ownerInstance.name}".`
		);
	return slot;
}
/** Append a child into a named slot, always re-resolving the slot first. */
function appendToSlot(ownerInstance, slotName, child) {
	freshSlot(ownerInstance, slotName).appendChild(child);
}

/* GOTCHA 3+4: sizing order. Auto-layout FILL can only be set on a child of an
 * auto-layout parent, and only AFTER appendChild. And NEVER resize() after
 * setting primaryAxisSizingMode = AUTO (it resets to FIXED). */
function fillWidth(node) {
	try {
		node.layoutSizingHorizontal = 'FILL';
	} catch {}
}
/* Opt-out of the default horizontal FILL so an element only takes the width it needs
 * (e.g. a trailing Badge/Tag column in a spread row that should sit flush right). */
function hugWidth(node) {
	try {
		node.layoutSizingHorizontal = 'HUG';
	} catch {}
}
function fillHeight(node) {
	try {
		node.layoutSizingVertical = 'FILL';
	} catch {}
}
function hugHeight(node) {
	try {
		node.layoutSizingVertical = 'HUG';
	} catch {
		try {
			node.primaryAxisSizingMode = 'AUTO';
		} catch {}
	}
}

/* A DB Card's root auto-layout ships with `primaryAxisAlignItems = SPACE_BETWEEN`
 * ("Gap: Auto" in the UI) so an optional bottom action can stick to the bottom. When a
 * shorter card is STRETCHED to fill the row height (equal-height grid), that space-between
 * pushes the content to the vertical MIDDLE — cards must stay TOP-aligned. Force the card
 * root back to MIN so the content starts top-left regardless of the extra height. */
function topAlignFilled(inst) {
	try {
		inst.primaryAxisAlignItems = 'MIN';
	} catch {}
}

/* GOTCHA 4+5: layout primitives + cards ship with FIXED content slots and FILL
 * cells that pin stale heights. Release the instance AND its content slot(s) to hug. */
function hugVertical(inst) {
	hugHeight(inst);
	for (const c of inst.children ?? []) {
		if (c.type === 'SLOT' && slotMatches(c.name)) {
			try {
				c.layoutSizingVertical = 'HUG';
			} catch {
				try {
					c.primaryAxisSizingMode = 'AUTO';
				} catch {}
			}
		}
	}
}

/* -----------------------------------------------------------------------------
 * COMPONENT RESOLUTION
 * -------------------------------------------------------------------------- */
function resolveKey(componentName, props = {}) {
	const entry = COMPONENTS[componentName];
	if (!entry)
		stop(
			`Component "${componentName}" is not in the runtime component map.`
		);
	const keys = Object.keys(props);
	const match =
		keys.length === 0
			? entry.variants[0]
			: entry.variants.find((vv) =>
					keys.every((k) => String(vv.axes[k]) === String(props[k]))
				);
	if (!match)
		stop(
			`No ${componentName} variant matches props ${JSON.stringify(props)}. Report as missing-variant; never approximate.`
		);
	return match.key;
}

const _setCache = {};
async function importSet(key) {
	if (_setCache[key]) return _setCache[key];
	const set = await figma.importComponentSetByKeyAsync(key);
	_setCache[key] = set;
	return set;
}

async function createLibraryInstance(componentName, props = {}) {
	const set = await importSet(resolveKey(componentName, props));
	const variant =
		set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? set.children[0])
			: set;
	return variant.createInstance();
}

/** Resolve a local layout primitive PORTABLY: id hint first (instant in the source file),
 *  then match a LOCAL COMPONENT_SET/COMPONENT by normalized NAME (works in any file). */
const _localCache = {};
function findLocalComponent(name) {
	if (_localCache[name]) return _localCache[name];
	const spec = LOCAL[name];
	if (!spec) stop(`Local primitive "${name}" unknown.`);

	// 1) Fast path: the original file's node id.
	if (spec.idHint) {
		for (const page of figma.root.children) {
			const byId = safe(
				() => page.findOne((n) => n.id === spec.idHint),
				null
			);
			if (byId) {
				_localCache[name] = byId;
				return byId;
			}
		}
	}

	// 2) Portable path: match a local component set/component by name.
	const candidates = [];
	for (const page of figma.root.children) {
		const found = safe(
			() =>
				page.findAll(
					(n) =>
						(n.type === 'COMPONENT_SET' ||
							n.type === 'COMPONENT') &&
						normName(n.name).includes(spec.match)
				),
			[]
		);
		for (const f of found) candidates.push(f);
	}
	if (!candidates.length)
		stop(
			`Local primitive "${name}" not found (id ${spec.idHint} or name ~"${spec.match}"). ` +
				`Ensure the DB UX local layout primitives exist in this file.`
		);

	// Prefer a COMPONENT_SET, then a local (non-remote) one, then the shortest name.
	candidates.sort((a, b) => {
		const set = (b.type === 'COMPONENT_SET') - (a.type === 'COMPONENT_SET');
		if (set) return set;
		const remote =
			(safe(() => a.remote, false) ? 1 : 0) -
			(safe(() => b.remote, false) ? 1 : 0);
		if (remote) return remote;
		return normName(a.name).length - normName(b.name).length;
	});
	_localCache[name] = candidates[0];
	return candidates[0];
}

/** Create a local layout primitive; optionally pick a variant by axis substrings. */
function createLocalInstance(name, variantMatch = {}) {
	const set = findLocalComponent(name);
	const children = set.type === 'COMPONENT_SET' ? set.children : [set];
	const entries = Object.entries(variantMatch);
	let variant = entries.length
		? (children.find((c) =>
				entries.every(([k, v]) => c.name.includes(`${k}=${v}`))
			) ?? children[0])
		: set.type === 'COMPONENT_SET'
			? (set.defaultVariant ?? children[0])
			: set;
	return variant.createInstance();
}

/* -----------------------------------------------------------------------------
 * FONTS + TEXT
 * -------------------------------------------------------------------------- */
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
async function createStyledText(content, styleName, fillToken, align) {
	const key = TEXT_STYLE_KEYS[styleName];
	if (!key)
		stop(
			`Unknown text style "${styleName}". Use a key from the text-style registry.`
		);
	await ensureFonts();
	const t = figma.createText();
	t.characters = content ?? '';
	const style = await figma.importStyleByKeyAsync(key);
	await t.setTextStyleIdAsync(style.id); // typography ONLY — never raw font/size
	if (fillToken) await bindTextFill(t, fillToken); // color bound separately
	if (align) {
		try {
			t.textAlignHorizontal = String(align).toUpperCase();
		} catch {}
	}
	return t;
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
	await ensureFonts();
	await loadInstanceFonts(inst);
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
	await ensureFonts();
	await loadInstanceFonts(inst);
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
async function renderNode(node, parent) {
	switch (node.type) {
		case 'Text': {
			const t = await createStyledText(
				node.content,
				node.style,
				node.fills,
				node.align
			);
			parent.appendChild(t);
			if (node.hugWidth) hugWidth(t);
			else fillWidth(t);
			return t;
		}
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
		default:
			return { op: e.op, ok: false, error: `unknown edit op "${e.op}"` };
	}
}
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
 *   "replace": false,                     // optional. renderPlan REFUSES to run if a frame
 *                                         // already exists on the target page (use applyEdits
 *                                         // to edit in place). Pass replace:true ONLY for a
 *                                         // deliberate rebuild — it removes the existing
 *                                         // matching/only frame first (no duplicate pile-up).
 *   "layout": [                           // ordered top-level children of the root
 *     { "type": "Header", "appName": "Design System KPIs" },
 *     { "type": "Section", "fills": "color.background.canvas", "children": [
 *         { "type": "ContainerVertical", "gap": "sm", "children": [
 *             { "type": "Text", "style": "headline.lg", "content": "…", "fills": "color.text.strong" }
 *         ]}
 *     ]},
 *     { "type": "Section", "fills": "color.background.surface", "children": [
 *         { "type": "Grid", "children": [ { "type": "Card", "props": {"elevationLevel":"1"},
 *             "children": [ { "type": "ContainerVertical", "gap": "(Def) md", "children": [
 *                 { "type": "Tag", "props": {"icon":false,"emphasis":"weak","behavior":"static"},
 *                   "label": "48 Stable", "semantic": "Successful" },
 *                 { "type": "ContainerVertical", "gap": "2xs", "children": [
 *                     { "type": "Text", "style": "headline.sm", "content": "Komponenten", "fills": "color.text.strong" },
 *                     { "type": "Text", "style": "headline",    "content": "89%",         "fills": "color.text.strong" },
 *                     { "type": "Text", "style": "body.sm",     "content": "Adoption Rate","fills": "color.text.weak" }
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
 *             Card|Divider|Text|Image|Icon. Typography (Concept components — PREFER these for
 *             headings + body over raw Text): Heading|Body. Library components (rendered
 *             as leaf instances): Button|Tag|Badge|Link|Input|Textarea|Select|Checkbox|
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
