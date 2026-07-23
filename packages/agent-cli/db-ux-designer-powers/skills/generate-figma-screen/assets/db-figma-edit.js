/* =============================================================================
 * db-figma-edit.js — COMPACT iteration runtime (edit-only).
 * -----------------------------------------------------------------------------
 * WHY: `db-figma-runtime.js` (the full runtime) is ~43 KB minified because it
 * carries the whole render half (COMPONENTS map, renderNode, every build*).
 * A follow-up EDIT to an already-rendered screen (relabel, recolor, hide, swap
 * a variant, retune a gap, remove a block) does NOT need any of that. This
 * self-contained bundle exposes ONLY `applyEdits` + its finders, so the paste
 * per iteration is a few KB instead of 43 KB — the single biggest cost lever.
 *
 * USE THIS for iterating; use the FULL runtime only for first-time creation
 * (`renderPlan`) or the structural `appendLike` op (which needs `renderNode`).
 *
 * Build: `node build-runtime.cjs` emits `db-figma-edit.min.js` — paste THAT.
 * KEEP IN SYNC: the helpers below are copied 1:1 from db-figma-runtime.js.
 * If you change a shared helper there, mirror it here (the build syntax-checks
 * both, but cannot detect logic drift).
 * ========================================================================== */
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
const SURFACE_FORBIDDEN = new Set(["color.brand.origin"]);
function stop(msg) { throw new Error("[STOP] " + msg); }
const safe = (fn, dflt) => { try { return fn(); } catch { return dflt; } };
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
function hugHeight(node) {
  try { node.layoutSizingVertical = "HUG"; }
  catch { try { node.primaryAxisSizingMode = "AUTO"; } catch {} }
}
let _fontsLoaded = false;
async function ensureFonts() {
  if (_fontsLoaded) return;
  const fonts = [
    { family: "DB Neo Screen Head", style: "Black" },
    { family: "DB Neo Screen Head", style: "Regular" },
    { family: "DB Neo Screen Head", style: "Bold" },
    { family: "DB Neo Screen Sans", style: "Regular" },
    { family: "DB Neo Screen Sans", style: "Bold" },
    { family: "DB Neo Screen Sans", style: "Italic" },
    { family: "DB Neo Screen Sans", style: "Bold Italic" },
  ];
  for (const f of fonts) { try { await figma.loadFontAsync(f); } catch {} }
  _fontsLoaded = true;
}
async function loadInstanceFonts(instance) {
  const seen = new Set();
  let texts = [];
  try {
    texts = instance.findAllWithCriteria
      ? instance.findAllWithCriteria({ types: ["TEXT"] })
      : instance.findAll((n) => n.type === "TEXT");
  } catch {
    try { texts = instance.findAll((n) => n.type === "TEXT"); } catch { texts = []; }
  }
  for (const t of texts) {
    let fn = null;
    try { fn = t.fontName; } catch {}
    if (!fn || fn === figma.mixed) {
      let segs = [];
      try { segs = t.getStyledTextSegments(["fontName"]); } catch {}
      for (const s of segs) {
        const key = s.fontName.family + "|" + s.fontName.style;
        if (!seen.has(key)) { seen.add(key); try { await figma.loadFontAsync(s.fontName); } catch {} }
      }
      continue;
    }
    const key = fn.family + "|" + fn.style;
    if (!seen.has(key)) { seen.add(key); try { await figma.loadFontAsync(fn); } catch {} }
  }
}
async function loadFontForTextNode(t) {
  await ensureFonts();
  let fn = null; try { fn = t.fontName; } catch {}
  if (fn && fn !== figma.mixed) { try { await figma.loadFontAsync(fn); } catch {} return; }
  let segs = []; try { segs = t.getStyledTextSegments(["fontName"]); } catch {}
  for (const s of segs) { try { await figma.loadFontAsync(s.fontName); } catch {} }
}
function setVariant(inst, axis, value) {
  const cp = inst.componentProperties || {};
  const key = Object.keys(cp).find((k) => cp[k] && cp[k].type === "VARIANT" && normName(k) === normName(axis));
  if (key) { try { inst.setProperties({ [key]: value }); } catch {} }
}
function _walkAll(root) {
  const out = [];
  (function rec(n) { out.push(n); for (const c of (safe(() => n.children, []) ?? [])) rec(c); })(root);
  return out;
}
function findTextNode(root, match, mode) {
  const m = String(match ?? "");
  return _walkAll(root).find((n) => {
    if (safe(() => n.type, "") !== "TEXT") return false;
    const c = safe(() => n.characters, "");
    return mode === "contains" ? c.includes(m) : c === m;
  }) || null;
}
function findByName(root, name) {
  const nm = normName(name);
  return _walkAll(root).find((n) => normName(safe(() => n.name, "")).includes(nm)) || null;
}
function nearestAncestor(node, re) {
  let n = node;
  while (n) { if (re.test(safe(() => n.name, ""))) return n; n = n.parent; }
  return null;
}
function nearestInstanceFrom(node) {
  let n = node;
  while (n && safe(() => n.type, "") !== "INSTANCE") n = n.parent;
  return n || null;
}
function findScreenFrame(spec) {
  if (spec.rootId) {
    for (const p of figma.root.children) { const f = safe(() => (p.id === spec.rootId ? p : p.findOne((n) => n.id === spec.rootId)), null); if (f) return f; }
  }
  const name = spec.screen;
  for (const p of figma.root.children) {
    if (safe(() => p.type, "") !== "PAGE") continue;
    for (const c of (safe(() => p.children, []) ?? [])) if (safe(() => c.type, "") === "FRAME" && safe(() => c.name, "") === name) return c;
  }
  stop(`Screen frame "${spec.screen ?? spec.rootId}" not found for editing. Check the exact frame name.`);
}
const CONTAINER_RE = /container ?\/ ?vertical|container ?\/ ?horizontal|containervertical|containerhorizontal/i;
async function applyOneEdit(frame, e) {
  switch (e.op) {
    case "setText": {
      const t = findTextNode(frame, e.find, e.mode);
      if (!t) return { op: e.op, ok: false, error: `text "${e.find}" not found` };
      await loadFontForTextNode(t);
      t.characters = String(e.value ?? "");
      return { op: e.op, ok: true };
    }
    case "setVisible": {
      let node = e.name ? findByName(frame, e.name) : null;
      if (!node && e.find) { const t = findTextNode(frame, e.find, e.mode); node = t ? (e.scope ? nearestAncestor(t, new RegExp(e.scope, "i")) : t) : null; }
      if (!node) return { op: e.op, ok: false, error: "target not found" };
      try { node.visible = e.visible !== false; } catch (err) { return { op: e.op, ok: false, error: String(err) }; }
      return { op: e.op, ok: true };
    }
    case "hideNavItem": {
      const m = String(e.label ?? "");
      const items = _walkAll(frame).filter((n) => safe(() => n.type, "") === "INSTANCE" && /navigation item/i.test(safe(() => n.name, "")));
      const item = items.find((n) => safe(() => {
        const tt = n.findOne((x) => x.type === "TEXT");
        const c = tt ? tt.characters : "";
        return e.mode === "contains" ? c.includes(m) : c === m;
      }, false));
      if (!item) return { op: e.op, ok: false, error: `nav item "${e.label}" not found` };
      try { item.visible = false; } catch (err) { return { op: e.op, ok: false, error: String(err) }; }
      return { op: e.op, ok: true };
    }
    case "setVariant": {
      let inst = e.name ? findByName(frame, e.name) : null;
      if (!inst && e.find) { const t = findTextNode(frame, e.find, e.mode); inst = t ? nearestInstanceFrom(t) : null; }
      if (!inst || safe(() => inst.type, "") !== "INSTANCE") return { op: e.op, ok: false, error: "instance not found" };
      await loadInstanceFonts(inst);
      setVariant(inst, e.axis, e.value);
      return { op: e.op, ok: true };
    }
    case "setContainerGap": {
      const t = findTextNode(frame, e.anchorText, e.mode);
      const cont = t ? nearestAncestor(t, CONTAINER_RE) : (e.name ? findByName(frame, e.name) : null);
      if (!cont) return { op: e.op, ok: false, error: "container not found" };
      const GAP = { "2xs": "2xs", "xs": "xs", "sm": "sm", "md": "(Def) md", "lg": "lg", "xl": "xl", "2xl": "2xl", "3xl": "3xl" };
      setVariant(cont, "Gap", GAP[e.gap] ?? e.gap);
      return { op: e.op, ok: true };
    }
    case "setSectionFill": {
      const t = findTextNode(frame, e.anchorText, e.mode);
      const section = t ? nearestAncestor(t, /Section/i) : (e.name ? findByName(frame, e.name) : null);
      if (!section) return { op: e.op, ok: false, error: "section not found" };
      await bindFill(section, e.token);
      return { op: e.op, ok: true };
    }
    case "setTextFill": {
      const t = findTextNode(frame, e.find, e.mode);
      if (!t) return { op: e.op, ok: false, error: `text "${e.find}" not found` };
      await bindTextFill(t, e.token);
      return { op: e.op, ok: true };
    }
    case "remove": {
      const t = findTextNode(frame, e.find, e.mode);
      const node = t ? (e.scope ? nearestAncestor(t, new RegExp(e.scope, "i")) : nearestAncestor(t, /Card|Container ?\/ ?Horizontal/i)) : (e.name ? findByName(frame, e.name) : null);
      if (!node) return { op: e.op, ok: false, error: "node to remove not found" };
      try { node.remove(); } catch (err) { return { op: e.op, ok: false, error: String(err) }; }
      return { op: e.op, ok: true };
    }
    case "appendLike":
      return { op: e.op, ok: false, error: "appendLike needs the FULL runtime (db-figma-runtime.min.js) because it renders a new block via renderNode. Use the full runtime for structural inserts." };
    default:
      return { op: e.op, ok: false, error: `unknown edit op "${e.op}"` };
  }
}
async function applyEdits(spec) {
  if (!spec || !Array.isArray(spec.edits)) stop("applyEdits needs an `edits` array.");
  await ensureFonts();
  if (spec.targetNodeId) {
    for (const p of figma.root.children) {
      if (p.id === spec.targetNodeId && p.type === "PAGE") { await figma.setCurrentPageAsync(p); break; }
      const f = safe(() => p.findOne((n) => n.id === spec.targetNodeId), null);
      if (f) { let pg = f; while (pg && pg.type !== "PAGE") pg = pg.parent; if (pg) await figma.setCurrentPageAsync(pg); break; }
    }
  }
  const frame = findScreenFrame(spec);
  const results = [];
  for (const e of spec.edits) {
    try { results.push(await applyOneEdit(frame, e)); }
    catch (err) { results.push({ op: e && e.op, ok: false, error: String((err && err.message) || err) }); }
  }
  try { hugHeight(frame); } catch {}
  return { rootId: frame.id, results };
}
