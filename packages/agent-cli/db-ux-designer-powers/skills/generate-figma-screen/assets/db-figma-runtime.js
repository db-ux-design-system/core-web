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
  "color.background.canvas":   "539324f386b2150504d789cfbad9126c14cbdad1",
  "color.background.surface":  "e4c25c81df8e51185f22570c6d6317238cddfa4d",
  "color.background.elevated": "5510a95229c069c0448a76361b0967b4ac96276d",
  "color.text.strong":         "497497bca9694f6004d1667de59f1a903b3cd3ef",
  "color.text.default":        "497497bca9694f6004d1667de59f1a903b3cd3ef",
  "color.text.weak":           "4b6fa889078d2d2be01885affe2ccf9b6fe00bca",
  "color.text.muted":          "de14758ec6fb33b47e9cb67eb4587d01d4f38828",
  "color.icon":                "1a1b9dd754ea56f8a4579ff1396ab560b98c018d",
  "color.border.subtle":       "bb22fcc29f4e0e01a03649f1dc2bb37e58a0dd38",
  "color.brand.origin":        "998998d67d3ebef6f2692db932bce69431b3d0cc",
  "color.brand.bgInverted":    "de9d33135d82cee05cc2835cb08df6ed6dc40e78",
  "color.brand.onOrigin":      "68475ba28d00cabd01c8310e6da5bd41158e6f0d",
  "color.brand.onBgInverted":  "9d68adbef048ba6c831b470b070542479bb929eb",
  "space.xs":  "7bf011be28799b8941bfdc8d3e4bdef53a98bfee",
  "space.sm":  "d2f8d2d9ce6aead856cc0a0451064e7e58dd1540",
  "space.md":  "783a93db6d2cc787ac709aadc1062ad083568515",
  "space.lg":  "3145886d20a1dc171e1d96d282fde398bd40c832",
  "space.xl":  "e78d8e26882571f30187cbf2ba64506c139f5c8a",
  "space.2xl": "71b85a42d436c917ac405692ef86ed99597d789a",
  "space.3xl": "597c7e6603cc8c02ff0d932044f0960a350a4360",
};

// Tokens that MUST NOT back a surface (accent-only). Fail fast if misused as a fill.
const SURFACE_FORBIDDEN = new Set(["color.brand.origin"]);
// Basic background levels allowed on large surfaces / sections.
const LEVEL_BG = new Set(["color.background.canvas", "color.background.surface", "color.background.elevated"]);

// DB border-radius tokens (Core Foundation "Density" collection, scope CORNER_RADIUS).
const RADIUS_KEYS = {
  "radius.3xs": "7cd85813ec89a8fad9aed6c82fe440f761405349",
  "radius.2xs": "3dc45106a521db00a2b23292aa19e013266588b7",
  "radius.xs":  "10a4e20ba00d09707255e11dd87fd40c30b7c0bf",
  "radius.sm":  "ba8ec50fe3e04cc92e7ba8574e5339ceb9863175",
  "radius.md":  "beaeebe2274cd3190390b0b629f5426afeeffcc4",
  "radius.lg":  "8d600d76091a8a73e48d36bddae38e9e201f8163",
  "radius.xl":  "83e33a634dd69c671519fc0d005628c1c79d2f63",
  "radius.2xl": "a4e818c581fec0f258af7893ed398a9989c542d1",
  "radius.3xl": "78ca1156d0d07dcad464bddf545dc794ebd8e1a0",
};

const TEXT_STYLE_KEYS = {
  "display":      "3d925e1ab760c23797ab3f9718f79a4b2c82cfdd",
  "headline.lg":  "310b9874b227f598d4ca8d054eb06be9d6987329",
  "headline":     "e168a9ca99270c06aa87b9375b11d3859d910ba1",
  "headline.md":  "b26b0a63301d81cd7a68409c4b6275c6adb8dec9",
  "headline.sm":  "5204e21f676d68ad7f3ab0b1861ed560b85e2092",
  "body":         "60f7eab567f48478d55bbed9e4c556265e1fd5c0",
  "body.bold":    "c253285cf17de376e41ba2e78f2e9abba4e342b3",
  "body.sm":      "c055d5e1e0644bb46159862577fe90390cbf820d",
  "body.sm.bold": "9af856205f2d030f9e367ab4e774b445e132d3f5",
};

// Library component sets: name -> { variants:[{axes,key}], slot }.
// Resolution: match a plan node's props against a variant's axes.
const COMPONENTS = {
  Button: { variants: [
    { axes: { variant: "brand",    iconOnly: false }, key: "bcd676a2ab5beb47eef54a9f36d74d91f2aa4a20" },
    { axes: { variant: "filled",   iconOnly: false }, key: "324c20d16cf7f1a285279547f4d9ca1407df39ed" },
    { axes: { variant: "outlined", iconOnly: false }, key: "8c488eae78e6f082da0be2571ba7a0dd26caf962" },
    { axes: { variant: "ghost",    iconOnly: false }, key: "46f934fb9da2c1bcfc1d357cf04694b888400c19" },
    { axes: { variant: "brand",    iconOnly: true  }, key: "d3d9596ab2f065b22e89fbfbc0163f51967d5eff" },
    { axes: { variant: "filled",   iconOnly: true  }, key: "890bbab6c64b4357b781cfee90ac524c7337c0f3" },
    { axes: { variant: "outlined", iconOnly: true  }, key: "92bbe193756813cbe30f9b8448043016318ff097" },
    { axes: { variant: "ghost",    iconOnly: true  }, key: "647b29562542c1141dd918ce1f0095157db64459" },
  ]},
  Card: { slot: "Children", variants: [
    { axes: { elevationLevel: "1" }, key: "ac60c14fe38796f4d53e293d9b8cc813a9079193" },
    { axes: { elevationLevel: "2" }, key: "245f3f9d7c51155844b58acfd939a21a473aefce" },
    { axes: { elevationLevel: "3" }, key: "f5ac595ff7bbc6ae121b29dbc5f45246fcc8d3c9" },
  ]},
  Tag: { variants: [
    { axes: { icon: false, emphasis: "weak",   behavior: "static" },      key: "d0ad401dcfc5665cc2d10f920c71f30007caafe5" },
    { axes: { icon: false, emphasis: "strong", behavior: "static" },      key: "d572ddecf60d3a16a72c799af2c97a72932df0af" },
    { axes: { icon: false, emphasis: "weak",   behavior: "removable" },   key: "eda7e0b0091a5e9210befc179f3e45013e9aa519" },
    { axes: { icon: false, emphasis: "weak",   behavior: "interactive" }, key: "34fa98d8e15e9b0aa8a34295d362ebce154818bb" },
    { axes: { icon: false, emphasis: "strong", behavior: "removable" },   key: "38b63c37cbdb5c8c693fbb1143190e69c0fd9c2a" },
    { axes: { icon: false, emphasis: "strong", behavior: "interactive" }, key: "4e0a4801ff8321e83b5117ad744a2e0f86c4a10e" },
    { axes: { icon: true,  emphasis: "weak",   behavior: "static" },      key: "d2deb712823dc6af00070c3f330c5c5f800be169" },
    { axes: { icon: true,  emphasis: "strong", behavior: "static" },      key: "1bcb38ae4812c6fd3212a8a09aa420f7034fce9a" },
  ]},
  Badge: { variants: [
    { axes: { content: "text" }, key: "022c804cdaa04f2468bfa0ce0cdff649abe3ac57" },
    { axes: { content: "dot"  }, key: "6f45aa090ea8728319522ea7c916d150dde2ad71" },
    { axes: { content: "icon" }, key: "85c9797ce5f015696239c6fd7e267a1b61005dea" },
  ]},
  Link: { variants: [
    { axes: { target: "internal", brand: false }, key: "d516c148ca0b438df205de010c206584b4a3a8be" },
    { axes: { target: "external", brand: false }, key: "392ec8286886c8ceb051b689c3ed8e68f35c1c3a" },
    { axes: { target: "internal", brand: true  }, key: "991b35aca7658dc3837705718549e95501c5812f" },
    { axes: { target: "external", brand: true  }, key: "be74885f007bdaaacbd026592725f8ce8b6cc715" },
  ]},
  Header: { variants: [
    { axes: { device: "desktop" }, key: "df5e3e03d7d2814f87f867bb632348b4af673e59" },
    { axes: { device: "mobile"  }, key: "16733f0cd068c631552b3820614d80ccb66631b3" },
  ]},
  Divider: { variants: [ { axes: {}, key: "401c3242f2e720f68b8c4255bb60670481e29451" } ] },
  Section: { slot: "Children", variants: [ { axes: {}, key: "55ce6d2d8deba893cfdfdd49e826a52673cf06da" } ] },
  Input: { variants: [
    { axes: { label: "above", state: "empty" },     key: "08ffb65e50921a3c1cd9a9bf7fa48135fc97430a" },
    { axes: { label: "above", state: "filled" },    key: "01229bdc8f305c4cc10adfce424481364463e3a0" },
    { axes: { label: "above", state: "active" },    key: "8696ab641dc40085ae634633ab47463d17b06f99" },
    { axes: { label: "floating", state: "empty" },  key: "db70f90473d860893d4378ca27a65b65918e3894" },
    { axes: { label: "floating", state: "filled" }, key: "6c3b2901a87c442c36d2faf0521ea23f82db7bd9" },
    { axes: { label: "floating", state: "active" }, key: "4a7e873a8a2215584cd595fbd9b3eda9c38d8c94" },
  ]},
  Textarea: { variants: [ { axes: { label: "above", state: "filled" }, key: "9e875608630b9479ae55561311b9f000e2ae9a87" } ] },
  Checkbox: { variants: [
    { axes: { size: "medium", width: "auto" }, key: "f55dbce9bf3ba1650ca8ac5b44c76b84378d15ca" },
    { axes: { size: "small",  width: "auto" }, key: "08080b223a829e943bbe42682d249ccfaeda252a" },
    { axes: { size: "medium", width: "full" }, key: "04364aeaaf01abe73f7286b1a4ea2b024f79f7fb" },
    { axes: { size: "small",  width: "full" }, key: "b206fe4be942442945b40ac8d6f9e82c8afc7f1e" },
  ]},
  Radio: { variants: [
    { axes: { size: "medium", width: "auto" }, key: "06d45155016e374aee5782a33c994922c87ede24" },
    { axes: { size: "small",  width: "auto" }, key: "096d5459aed351b10f24079134ebf443cf03da19" },
    { axes: { size: "medium", width: "full" }, key: "2cc01a4da359b8d324080ad78c155e7d2e869874" },
    { axes: { size: "small",  width: "full" }, key: "b8c8cc9190b2de7c12ff3130506d51f046cbd7c9" },
  ]},
  Switch: { variants: [
    { axes: { labelPosition: "trailing", width: "full", size: "small" },  key: "bb9ad253da472dd8c821acf8f1ff7f8a82d14e32" },
    { axes: { labelPosition: "leading",  width: "full", size: "medium" }, key: "641334e04985ebd35e4db6cd4c993dd70137d81b" },
  ]},
  Select: { variants: [
    { axes: { label: "above", state: "empty" },       key: "c68719e1c018e149324b1b99f70085305b1e1eb8" },
    { axes: { label: "above", state: "selected" },    key: "6dc8c2e6686d7b90e6c3db8fd49d63b182b4ee46" },
    { axes: { label: "floating", state: "empty" },    key: "aff8a7d7435948ef3b312f198ed8f2130caebab0" },
    { axes: { label: "floating", state: "selected" }, key: "a017ac6759ac04fcf3b0103766ea823ad6220f67" },
  ]},
  Infotext: { variants: [
    { axes: { width: "auto" }, key: "072e65767d05b99f91d63f489ef0c28620b002ca" },
    { axes: { width: "full" }, key: "af81be60e9498309b5fcf195fa6731d6381b82f0" },
  ]},
  Notification: { slot: "Children", variants: [
    { axes: { placement: "docked", media: "icon" },      key: "0b8195110baab8ec2bde79769a21728fe5fe0ace" },
    { axes: { placement: "docked", media: "image" },     key: "e1162439b4fcea78e74f0fab350556ea64a40806" },
    { axes: { placement: "standalone", media: "icon" },  key: "21d0406331e71a91bdea08bc2ff312290748be5a" },
    { axes: { placement: "standalone", media: "image" }, key: "04ffed0aab92a88eb3ece16f40ce499df2d705b4" },
    { axes: { placement: "overlay", media: "icon" },     key: "106477a728f386c6266693059f0b8cecc960042d" },
    { axes: { placement: "overlay", media: "image" },    key: "abb0a0df1e439b23dcffe568851b4e4fa1ea95c0" },
  ]},
  Accordion: { slot: "Children", variants: [ { axes: {}, key: "c842298934e02a0332e36c451ad8e1d3f0cc8955" } ] },
  Tooltip: { variants: [
    { axes: { position: "left" }, key: "313242eddbd58b864208a63edaad666ecdb7e17f" },
    { axes: { position: "top" },  key: "b9ee3b09d239c9820e55808401291abfce4801bf" },
  ]},
};

// Library components rendered as leaf instances that should FILL their container width
// by default (form fields, notifications, etc.). Buttons/Tags/Badges hug and are excluded.
const FILL_DEFAULT = new Set(["Input", "Textarea", "Select", "Notification", "Infotext", "Accordion"]);

// Local layout primitives. Resolved PORTABLY: matched by NAME (normalized, so emoji /
// slashes / spacing don't matter), with the original file's node id only as a fast hint.
// `idHint` makes it instant in the source file; `match` makes it work in ANY file that
// has the DB UX layout primitives — so the runtime is not bound to one Figma file.
const LOCAL = {
  Grid:                { idHint: "23:4017", match: "grid",                slots: ["Slot-1", "Slot-2", "Slot-3", "Slot-4"] },
  ContainerVertical:   { idHint: "29:3988", match: "containervertical",   slot: "Slot" },
  ContainerHorizontal: { idHint: "29:3989", match: "containerhorizontal", slot: "Slot" },
};

const LAYOUT_TYPES = new Set(["Section", "Grid", "ContainerVertical", "ContainerHorizontal"]);

/* -----------------------------------------------------------------------------
 * LOW-LEVEL HELPERS — each encapsulates a specific Figma API gotcha.
 * -------------------------------------------------------------------------- */

/** STOP with a clear, actionable message (fail fast instead of silent bad render). */
function stop(msg) { throw new Error("[STOP] " + msg); }

/** Guarded read: some instance-internal node ids regenerate on layout and throw on access. */
const safe = (fn, dflt) => { try { return fn(); } catch { return dflt; } };

/** Normalize a component name for portable matching ("Container / Vertical" -> "containervertical"). */
const normName = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");

const _varCache = {};
async function importVar(tokenName) {
  const key = VAR_KEYS[tokenName];
  if (!key) stop(`Unknown color/spacing token "${tokenName}". Not in the variable registry.`);
  if (_varCache[tokenName]) return _varCache[tokenName];
  const v = await figma.variables.importVariableByKeyAsync(key);
  _varCache[tokenName] = v;
  return v;
}

/* GOTCHA 1: fills/strokes variables must be bound ON THE PAINT, not the node.
 * node.setBoundVariable("fills", v) throws. Always build a bound paint. */
async function bindFill(node, tokenName) {
  if (SURFACE_FORBIDDEN.has(tokenName))
    stop(`Token "${tokenName}" is accent-only and must not back a surface. Use a bg level token.`);
  const v = await importVar(tokenName);
  const paint = figma.util.solidPaint("#000000");
  const bound = figma.variables.setBoundVariableForPaint(paint, "color", v);
  node.fills = [bound];
}
async function bindTextFill(textNode, tokenName) {
  const v = await importVar(tokenName);
  const paint = figma.util.solidPaint("#000000");
  const bound = figma.variables.setBoundVariableForPaint(paint, "color", v);
  textNode.fills = [bound];
}
/* Bind all four corner radii of a node to a DB border-radius token (never a raw number). */
async function bindRadius(node, tokenName) {
  const key = RADIUS_KEYS[tokenName];
  if (!key) stop(`Unknown radius token "${tokenName}". Use one of: ${Object.keys(RADIUS_KEYS).join(", ")}.`);
  const v = await figma.variables.importVariableByKeyAsync(key);
  for (const field of ["topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius"]) {
    try { node.setBoundVariable(field, v); } catch {}
  }
}

/* GOTCHA 2: NEVER cache a SLOT reference across a mutation of its owner instance.
 * setProperties(...) / node.fills = ... regenerate the instance's internal node ids,
 * so a previously fetched slot throws "Node with id ... not found" on appendChild.
 * RULE: fully configure the owner (props/fills/gap) FIRST, THEN fetch the slot fresh
 * right before appending — and re-fetch per child. These helpers do exactly that. */
function freshSlot(ownerInstance, slotName) {
  const slot = ownerInstance.findOne(
    (n) => n.type === "SLOT" && (slotName ? n.name === slotName : (n.name === "Children" || n.name === "Slot"))
  );
  if (!slot) stop(`No SLOT "${slotName || "Children/Slot"}" found on "${ownerInstance.name}".`);
  return slot;
}
/** Append a child into a named slot, always re-resolving the slot first. */
function appendToSlot(ownerInstance, slotName, child) {
  freshSlot(ownerInstance, slotName).appendChild(child);
}

/* GOTCHA 3+4: sizing order. Auto-layout FILL can only be set on a child of an
 * auto-layout parent, and only AFTER appendChild. And NEVER resize() after
 * setting primaryAxisSizingMode = AUTO (it resets to FIXED). */
function fillWidth(node) { try { node.layoutSizingHorizontal = "FILL"; } catch {} }
function fillHeight(node) { try { node.layoutSizingVertical = "FILL"; } catch {} }
function hugHeight(node) {
  try { node.layoutSizingVertical = "HUG"; }
  catch { try { node.primaryAxisSizingMode = "AUTO"; } catch {} }
}

/* GOTCHA 4+5: layout primitives + cards ship with FIXED content slots and FILL
 * cells that pin stale heights. Release the instance AND its content slot(s) to hug. */
function hugVertical(inst) {
  hugHeight(inst);
  for (const c of inst.children ?? []) {
    if (c.type === "SLOT" && (c.name === "Children" || c.name === "Slot")) {
      try { c.layoutSizingVertical = "HUG"; } catch { try { c.primaryAxisSizingMode = "AUTO"; } catch {} }
    }
  }
}

/* -----------------------------------------------------------------------------
 * COMPONENT RESOLUTION
 * -------------------------------------------------------------------------- */
function resolveKey(componentName, props = {}) {
  const entry = COMPONENTS[componentName];
  if (!entry) stop(`Component "${componentName}" is not in the runtime component map.`);
  const keys = Object.keys(props);
  const match = keys.length === 0
    ? entry.variants[0]
    : entry.variants.find((vv) => keys.every((k) => String(vv.axes[k]) === String(props[k])));
  if (!match)
    stop(`No ${componentName} variant matches props ${JSON.stringify(props)}. Report as missing-variant; never approximate.`);
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
  const variant = set.type === "COMPONENT_SET" ? (set.defaultVariant ?? set.children[0]) : set;
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
      const byId = safe(() => page.findOne((n) => n.id === spec.idHint), null);
      if (byId) { _localCache[name] = byId; return byId; }
    }
  }

  // 2) Portable path: match a local component set/component by name.
  const candidates = [];
  for (const page of figma.root.children) {
    const found = safe(() => page.findAll((n) =>
      (n.type === "COMPONENT_SET" || n.type === "COMPONENT") && normName(n.name).includes(spec.match)
    ), []);
    for (const f of found) candidates.push(f);
  }
  if (!candidates.length)
    stop(`Local primitive "${name}" not found (id ${spec.idHint} or name ~"${spec.match}"). ` +
         `Ensure the DB UX local layout primitives exist in this file.`);

  // Prefer a COMPONENT_SET, then a local (non-remote) one, then the shortest name.
  candidates.sort((a, b) => {
    const set = (b.type === "COMPONENT_SET") - (a.type === "COMPONENT_SET");
    if (set) return set;
    const remote = (safe(() => a.remote, false) ? 1 : 0) - (safe(() => b.remote, false) ? 1 : 0);
    if (remote) return remote;
    return normName(a.name).length - normName(b.name).length;
  });
  _localCache[name] = candidates[0];
  return candidates[0];
}

/** Create a local layout primitive; optionally pick a variant by axis substrings. */
function createLocalInstance(name, variantMatch = {}) {
  const set = findLocalComponent(name);
  const children = set.type === "COMPONENT_SET" ? set.children : [set];
  const entries = Object.entries(variantMatch);
  let variant = entries.length
    ? (children.find((c) => entries.every(([k, v]) => c.name.includes(`${k}=${v}`))) ?? children[0])
    : (set.type === "COMPONENT_SET" ? (set.defaultVariant ?? children[0]) : set);
  return variant.createInstance();
}

/* -----------------------------------------------------------------------------
 * FONTS + TEXT
 * -------------------------------------------------------------------------- */
let _fontsLoaded = false;
async function ensureFonts() {
  if (_fontsLoaded) return;
  const fonts = [
    { family: "DB Neo Screen Head", style: "Black" },
    { family: "DB Neo Screen Sans", style: "Regular" },
    { family: "DB Neo Screen Sans", style: "Bold" },
  ];
  for (const f of fonts) { try { await figma.loadFontAsync(f); } catch {} }
  _fontsLoaded = true;
}
async function createStyledText(content, styleName, fillToken, align) {
  const key = TEXT_STYLE_KEYS[styleName];
  if (!key) stop(`Unknown text style "${styleName}". Use a key from the text-style registry.`);
  await ensureFonts();
  const t = figma.createText();
  t.characters = content ?? "";
  const style = await figma.importStyleByKeyAsync(key);
  await t.setTextStyleIdAsync(style.id);        // typography ONLY — never raw font/size
  if (fillToken) await bindTextFill(t, fillToken); // color bound separately
  if (align) { try { t.textAlignHorizontal = String(align).toUpperCase(); } catch {} }
  return t;
}

/* -----------------------------------------------------------------------------
 * COMPONENT LABELS + SEMANTIC STATE
 * -------------------------------------------------------------------------- */
function setInstanceLabel(inst, label) {
  const cp = inst.componentProperties ?? {};
  const textKey = Object.keys(cp).find((k) => cp[k]?.type === "TEXT");
  if (textKey) { inst.setProperties({ [textKey]: label }); return; }
  const t = inst.findOne((n) => n.type === "TEXT");
  if (t) t.characters = label;
}
/* Set multiple named TEXT properties on an instance, e.g. { headline:"…", description:"…" }.
 * Matches each requested field to a TEXT component-property by normalized-name substring. */
function setInstanceFields(inst, fields) {
  if (!fields) return;
  const cp = inst.componentProperties ?? {};
  const props = {};
  for (const [want, val] of Object.entries(fields)) {
    const k = Object.keys(cp).find((k) => cp[k]?.type === "TEXT" && normName(k).includes(normName(want)));
    if (k) props[k] = String(val);
  }
  if (Object.keys(props).length) { try { inst.setProperties(props); } catch {} }
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
  if (!map || typeof map !== "object") return;
  const cp = inst.componentProperties ?? {};
  const textVarProps = {};
  for (const [want, val] of Object.entries(map)) {
    const norm = normName(want);
    const key = Object.keys(cp).find((k) => normName(k).includes(norm));
    if (!key) continue; // unknown key — skip silently (never throw for optional overrides)
    const type = cp[key]?.type;
    if (type === "TEXT" || type === "VARIANT") {
      textVarProps[key] = String(val);
    } else if (type === "BOOLEAN") {
      textVarProps[key] = val === true || val === "true";
    } else if (type === "INSTANCE_SWAP") {
      // val = a component key string; import and swap
      try {
        const set = await figma.importComponentSetByKeyAsync(String(val));
        const comp = set.type === "COMPONENT_SET" ? (set.defaultVariant ?? set.children[0]) : set;
        textVarProps[key] = { type: "COMPONENT", key: comp.key };
      } catch {
        // If the key is invalid, skip (don't break the whole render)
      }
    }
  }
  if (Object.keys(textVarProps).length) { try { inst.setProperties(textVarProps); } catch {} }
}
let _colorCollection = null;
async function getColorCollection() {
  if (_colorCollection) return _colorCollection;
  const v = await importVar("color.text.strong");
  _colorCollection = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
  return _colorCollection;
}
/* Semantic coloring: prefer the built-in Semantic VARIANT, else set the adaptive mode.
 * NEVER override fills to recolor. */
async function setSemantic(inst, semantic) {
  const props = inst.componentProperties;
  if (props) {
    const key = Object.keys(props).find((k) => k === "Semantic" || (props[k]?.type === "VARIANT" && /semantic/i.test(k)));
    if (key && props[key]?.type === "VARIANT") {
      try { const col = await getColorCollection(); inst.clearExplicitVariableModeForCollection(col); } catch {}
      inst.setProperties({ [key]: /^adaptive$/i.test(semantic) ? "(Def) Adaptive" : semantic });
      return;
    }
  }
  const col = await getColorCollection();
  const mode = col.modes.find((m) => m.name.toLowerCase() === String(semantic).toLowerCase());
  if (!mode) stop(`Unknown semantic "${semantic}". Options: ${col.modes.map((m) => m.name).join(", ")}`);
  inst.setExplicitVariableModeForCollection(col, mode.modeId);
}

/* -----------------------------------------------------------------------------
 * HIGH-LEVEL BUILDERS (each returns { instance }; hug/sizing already handled)
 * -------------------------------------------------------------------------- */
async function buildSection(node) {
  const inst = await createLibraryInstance("Section");     // library Section (Beta)
  hugVertical(inst);                                       // sections ALWAYS hug (binding)
  if (node.fills) await bindFill(inst, node.fills);        // configure BEFORE children
  // Content max-width (e.g. "Small (768)" for landing pages). Set BEFORE the slot is
  // fetched — setProperties regenerates the instance's internal node ids.
  if (node.contentWidth) {
    const cp = inst.componentProperties ?? {};
    const wk = Object.keys(cp).find((k) => k === "Width" || (cp[k]?.type === "VARIANT" && /width/i.test(k)));
    if (wk) { try { inst.setProperties({ [wk]: node.contentWidth }); } catch {} }
  }
  return inst;
}
/* A grid instance carries an internal ".⚙️ Code Connect" helper whose id regenerates on
 * every grid mutation; reading its `.name` right after a mutation throws "Node not found".
 * So we (a) never read children names unguarded, and (b) re-resolve cells fresh each time. */
function gridCells(grid) {
  return (grid.children ?? []).filter((c) => {
    try { return c.type === "SLOT" && c.name?.startsWith("Slot"); } catch { return false; }
  });
}
function configureGrid(grid) {
  try { grid.gridRowSizes = [{ type: "HUG" }]; } catch {}   // rows hug tallest cell
  try { grid.primaryAxisSizingMode = "AUTO"; } catch {}
  for (const cell of gridCells(grid)) {
    try { cell.layoutSizingVertical = "HUG"; } catch { try { cell.primaryAxisSizingMode = "AUTO"; } catch {} }
  }
}
function buildContainer(node, direction) {
  const name = direction === "horizontal" ? "ContainerHorizontal" : "ContainerVertical";
  const inst = createLocalInstance(name, {
    Align: node.align ?? "top-left",
    Gap: node.gap ?? "(Def) md",
    Padding: node.padding ?? "(Def) None",
  });
  // Some local container variants ship with a de-emphasized (0.2 opacity) Slot; force
  // the instance and its slots back to fully opaque so content never renders washed out.
  try { inst.opacity = 1; } catch {}
  for (const c of (inst.children ?? [])) { if (c.type === "SLOT") { try { c.opacity = 1; } catch {} } }
  hugVertical(inst);
  return inst;
}
async function buildCard(node) {
  const inst = await createLibraryInstance("Card", node.props ?? { elevationLevel: "1" });
  hugVertical(inst);                                       // card hugs content (no overflow)
  return inst;
}
async function buildHeader(node) {
  const inst = await createLibraryInstance("Header", node.props ?? { device: "desktop" });
  const cp = inst.componentProperties ?? {};
  const bool = {};
  for (const k of Object.keys(cp)) {
    if (cp[k].type !== "BOOLEAN") continue;
    if (/Application Name/i.test(k)) bool[k] = true;
    else if (/Meta Navigation|Navigation|Primary Action|Secondary Action|Divider/i.test(k)) bool[k] = node.showNav ? true : false;
  }
  if (Object.keys(bool).length) inst.setProperties(bool);
  if (node.appName) {
    const cp2 = inst.componentProperties ?? {};
    const tk = Object.keys(cp2).find((k) => cp2[k]?.type === "TEXT" && /application/i.test(k));
    if (tk) inst.setProperties({ [tk]: node.appName });
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
    case "Text": {
      const t = await createStyledText(node.content, node.style, node.fills, node.align);
      parent.appendChild(t);
      fillWidth(t);
      return t;
    }
    case "Header": {
      const h = await buildHeader(node);
      parent.appendChild(h);
      fillWidth(h);
      return h;
    }
    case "Divider": {
      const d = await createLibraryInstance("Divider");
      parent.appendChild(d);
      fillWidth(d);
      return d;
    }
    case "Button": {
      const b = await createLibraryInstance("Button", node.props ?? { variant: "brand", iconOnly: false });
      await ensureFonts();
      if (node.label) setInstanceLabel(b, node.label);
      if (node.applyProps) await applyProps(b, node.applyProps);
      parent.appendChild(b);
      return b;
    }
    case "Tag": {
      const tg = await createLibraryInstance("Tag", node.props ?? { icon: false, emphasis: "weak", behavior: "static" });
      await ensureFonts();
      if (node.label) setInstanceLabel(tg, node.label);
      if (node.semantic) await setSemantic(tg, node.semantic);
      if (node.applyProps) await applyProps(tg, node.applyProps);
      parent.appendChild(tg);
      return tg;
    }
    case "Badge": {
      const bd = await createLibraryInstance("Badge", node.props ?? { content: "text" });
      await ensureFonts();
      if (node.label) setInstanceLabel(bd, node.label);
      if (node.semantic) await setSemantic(bd, node.semantic);
      if (node.applyProps) await applyProps(bd, node.applyProps);
      parent.appendChild(bd);
      return bd;
    }
    case "Section": {
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
        const centered = node.align === "center" || node.align === "top-center";
        const cAlign = centered ? "center" : undefined;
        const tAlign = centered ? "center" : undefined;
        const heading = { type: "ContainerVertical", gap: "2xs", align: cAlign, children: [] };
        if (node.title) heading.children.push({ type: "Text", style: node.titleStyle ?? "headline", content: node.title, fills: "color.text.strong", align: tAlign });
        if (node.description) heading.children.push({ type: "Text", style: node.descriptionStyle ?? "body", content: node.description, fills: "color.text.weak", align: tAlign });
        const outer = { type: "ContainerVertical", gap: node.gap ?? "lg", align: cAlign, children: [heading, ...(node.children ?? [])] };
        const slot = freshSlot(s, "Children");
        await renderNode(outer, slot);
      } else {
        await renderChildrenIntoSlot(s, "Children", node.children);
      }
      return s;
    }
    case "Card": {
      const c = await buildCard(node);
      parent.appendChild(c);
      fillWidth(c);
      await renderChildrenIntoSlot(c, "Children", node.children);
      return c;
    }
    case "ContainerVertical": {
      const c = buildContainer(node, "vertical");
      parent.appendChild(c);
      fillWidth(c);
      if (node.fillHeight) { fillHeight(c); try { c.primaryAxisAlignItems = "CENTER"; } catch {} }
      await renderChildrenIntoSlot(c, "Slot", node.children);
      return c;
    }
    case "ContainerHorizontal": {
      const c = buildContainer(node, "horizontal");
      parent.appendChild(c);
      fillWidth(c);
      if (node.fillHeight) { fillHeight(c); try { c.counterAxisAlignItems = "CENTER"; } catch {} }
      await renderChildrenIntoSlot(c, "Slot", node.children);
      return c;
    }
    case "Grid": {
      // Column layout follows the child count (2 -> 50-50, 3 -> 33-33-33, 4 -> quarters),
      // or an explicit node.gridLayout ("50-50" | "66-33" | "25-75" | ...). Keeps grids
      // evenly split and avoids leaving empty (pink) placeholder slots.
      const kids = node.children ?? [];
      const byCount = { 1: "100", 2: "50-50", 3: "(Def) 33-33-33", 4: "25-25-25-25" };
      const layout = node.gridLayout ?? byCount[kids.length] ?? "(Def) 33-33-33";
      const gap    = node.gridGap   ?? "(Def) md";
      // Append FIRST (settle the tree), configure AFTER, re-resolve cells fresh per child.
      const g = createLocalInstance("Grid", { Layout: layout, Gap: gap });
      parent.appendChild(g);
      fillWidth(g);
      configureGrid(g);
      for (let i = 0; i < kids.length; i++) {
        const cells = gridCells(g);                // fresh every iteration (ids regenerate)
        if (!cells.length) stop("Grid has no Slot cells.");
        const cell = cells[i % cells.length];
        // A child that wants to vertically center against a taller sibling (media/text)
        // fills the row: stretch the cell, then the child fills + centers via its Align.
        if (kids[i] && kids[i].fillHeight) { try { cell.layoutSizingVertical = "FILL"; } catch {} }
        const child = await renderNode(kids[i], cell);
        // cards in a grid cell: content drives height -> HUG (uniform content = equal rows).
        if (!(kids[i] && kids[i].fillHeight)) hugHeight(child);
      }
      return g;
    }
    case "Image": {
      // Neutral image placeholder (declarative; no asset upload). Fills its cell width,
      // fixed height defines the row height in a media/text grid.
      const r = figma.createRectangle();
      r.name = node.label || "Image";
      r.resize(400, node.imageHeight ?? 280);
      r.fills = [{ type: "SOLID", color: { r: 0.898, g: 0.906, b: 0.918 } }];
      // Rounded corners bind to a DB radius token (never a raw number). Default radius.lg;
      // pass radius:"none" to disable, or a token like "radius.md".
      const rad = node.radius === undefined ? "radius.lg" : node.radius;
      if (rad && rad !== "none") {
        if (typeof rad === "number") r.cornerRadius = rad; else await bindRadius(r, rad);
      }
      parent.appendChild(r);
      fillWidth(r);
      return r;
    }
    default: {
      // Generic path: ANY component registered in COMPONENTS is renderable as a leaf
      // instance by using its canonical name as the node type. props -> variant axes,
      // label -> primary TEXT, text {name:value} -> named TEXT props, semantic -> state.
      if (COMPONENTS[node.type]) {
        const inst = await createLibraryInstance(node.type, node.props ?? {});
        await ensureFonts();
        if (node.label) setInstanceLabel(inst, node.label);
        if (node.text) setInstanceFields(inst, node.text);
        if (node.semantic) await setSemantic(inst, node.semantic);
        if (node.applyProps) await applyProps(inst, node.applyProps);
        parent.appendChild(inst);
        if (node.fillWidth ?? FILL_DEFAULT.has(node.type)) fillWidth(inst);
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
    const slot = freshSlot(ownerInstance, slotName);  // fresh every iteration
    await renderNode(childNode, slot);
  }
}

/* -----------------------------------------------------------------------------
 * SCREEN ROOT — placed to the RIGHT of existing frames, never stacked at 0,0.
 * GOTCHA 3: set width via resize FIRST, then primaryAxisSizingMode = AUTO LAST.
 * -------------------------------------------------------------------------- */
function createScreenRoot(name, width, reuse) {
  const page = figma.currentPage;
  let maxRight = 0, has = false;
  for (const n of page.children) {
    if (typeof n.x === "number" && typeof n.width === "number") { maxRight = Math.max(maxRight, n.x + n.width); has = true; }
  }
  const root = figma.createFrame();
  root.name = name;
  root.layoutMode = "VERTICAL";
  root.counterAxisSizingMode = "FIXED";
  root.itemSpacing = 0;
  root.fills = [];
  root.resize(width || 1440, 1);      // width first
  page.appendChild(root);
  if (reuse && typeof reuse.x === "number") { root.x = reuse.x; root.y = reuse.y; }
  else { root.x = has ? maxRight + 200 : 0; root.y = 0; }
  root.primaryAxisSizingMode = "AUTO"; // AUTO LAST (do not resize after this)
  return root;
}

/* -----------------------------------------------------------------------------
 * renderPlan — the ONE entry point. Model calls this and returns res.audit.
 * -------------------------------------------------------------------------- */
async function renderPlan(plan) {
  if (!plan || !Array.isArray(plan.layout)) stop("Plan must have a `layout` array.");
  await ensureFonts();

  // Navigate to the target node's page if provided.
  if (plan.targetNodeId) {
    let target = null;
    for (const p of figma.root.children) {
      if (p.id === plan.targetNodeId) { target = p; break; }
      const f = p.findOne((n) => n.id === plan.targetNodeId);
      if (f) { target = p; break; }
    }
    if (target && target.type === "PAGE") await figma.setCurrentPageAsync(target);
    else if (target && target.parent) {
      let pg = target; while (pg && pg.type !== "PAGE") pg = pg.parent;
      if (pg) await figma.setCurrentPageAsync(pg);
    }
  }

  const root = createScreenRoot(plan.screen ?? "Screen", plan.width, plan.reuse);
  for (const node of plan.layout) await renderNode(node, root);
  hugHeight(root);                    // final: root hugs total content height

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
  const push = (node, type, message) => violations.push({ node, type, message });
  // Every property read is guarded: some instance-internal nodes have ids that
  // regenerate on layout and throw "Node not found" mid-traversal. A throwing node
  // is skipped, never fatal — the audit must always return a result.
  const safe = (fn, dflt) => { try { return fn(); } catch { return dflt; } };

  function walk(node) {
    const name = safe(() => node.name, "(unnamed)");
    const type = safe(() => node.type, "");
    if (type === "INSTANCE" && LAYOUT_RE.test(name)) {
      const w = safe(() => node.width, 999), h = safe(() => node.height, 999);
      if (typeof w === "number" && (w < 200 || h < 8)) push(name, "collapsed-layout", `${Math.round(w)}x${Math.round(h)}`);
    }
    if (type === "INSTANCE" && /Section/i.test(name) && safe(() => node.primaryAxisSizingMode, "") === "FIXED")
      push(name, "fixed-height-section", `Section "${name}" has a fixed height; must hug.`);
    if (type === "SLOT" && (name === "Children" || name === "Slot") &&
        safe(() => node.layoutMode, "") === "VERTICAL" && safe(() => node.primaryAxisSizingMode, "") === "FIXED") {
      const kids = safe(() => node.children, []) ?? [];
      let contentH = safe(() => (node.paddingTop ?? 0) + (node.paddingBottom ?? 0), 0) +
        safe(() => (node.itemSpacing ?? 0), 0) * Math.max(0, kids.length - 1);
      for (const c of kids) contentH += safe(() => (typeof c.height === "number" ? c.height : 0), 0);
      const slotH = safe(() => node.height, 0);
      if (typeof slotH === "number" && contentH - slotH > 1)
        push(name, "fixed-content-slot", `Slot "${name}" content ~${Math.round(contentH)}px overflows ${Math.round(slotH)}px.`);
    }
    for (const c of (safe(() => node.children, []) ?? [])) walk(c);
  }
  walk(root);

  const kids = safe(() => root.children, []) ?? [];
  const sections = kids.filter((n) => safe(() => n.type, "") === "INSTANCE" && /Section/i.test(safe(() => n.name, "")));
  if (sections.length) {
    const firstIsHeader = kids[0] && safe(() => kids[0].type, "") === "INSTANCE" && /Header/i.test(safe(() => kids[0].name, ""));
    if (!firstIsHeader) push(safe(() => root.name, "screen"), "missing-header", "Screen must start with the DB Header as the first child.");
    const fills = safe(() => sections[0].boundVariables?.fills, null);
    let level1 = false;
    if (fills?.length) {
      try { const v = await figma.variables.getVariableByIdAsync(fills[0].id); level1 = v ? /bg\/basic\/level-1/i.test(v.name) : false; } catch {}
    }
    if (!level1) push(safe(() => sections[0].name, "section"), "zebra-start", "Topmost section must use color.background.canvas (level-1).");
  }
  return { valid: violations.length === 0, violations };
}

/* =============================================================================
 * PLAN SCHEMA (what the model produces — JSON only)
 * -----------------------------------------------------------------------------
 * {
 *   "screen": "DS KPI Dashboard",
 *   "targetNodeId": "177:1091",          // optional: page/frame to render on
 *   "width": 1440,                        // optional (default 1440)
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
 *             Card|Divider|Text|Image. Library components (rendered as leaf instances):
 *             Button|Tag|Badge|Link|Input|Textarea|Select|Checkbox|Radio|Switch|
 *             Infotext|Notification|Accordion|Tooltip. Any name in the COMPONENTS map
 *             works via the generic path — add more there to extend coverage.
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
 *   Image     imageHeight (px, default 280); radius = DB radius TOKEN name
 *             ("radius.md" | "radius.lg" | ... , default "radius.lg") or "none".
 *             NEVER a raw pixel number.
 *   gridGap   Grid gap token: "(Def) md" (default) | "xl" | "2xl" etc.
 *             Media/Text rows on landing pages use "xl".
 *   gridLayout Grid column split: defaults to the child count (2->"50-50",
 *             3->"(Def) 33-33-33", 4->"25-25-25-25"); override e.g. "66-33" | "25-75".
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
 *
 * SECTION STRUCTURE: a content Section should have a `title` (and optional
 * `description`); never render a bare Grid/Card group without a heading.
 * gap ("(Def) md") and keep tight sub-groups ("2xs"/"xs") in nested containers.
 * ZEBRA: first Section = color.background.canvas, then alternate surface/canvas.
 *
 * SECTION EXTRAS
 *   contentWidth  Section content max-width VARIANT: "(Def) Full" | "Medium (1024)" |
 *                 "Large (1440)" | "Small (768)". LANDING PAGES use "Small (768)".
 *   align         Section: "center" centers the heading (title/description) and the
 *                 hugging content (e.g. a CTA Button). Use for the hero and the
 *                 closing CTA section of a landing page.
 * ========================================================================== */
