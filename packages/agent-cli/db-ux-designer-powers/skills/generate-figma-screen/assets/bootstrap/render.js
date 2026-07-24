/* DB UX store-once loader — reconstructs the runtime from the Figma
 * document (bootstrapped once). AFTER this snippet, append e.g.:
 *   const PLAN = { screen, targetNodeId, layout, variables };
 *   const res = await renderPlan(PLAN); return JSON.stringify(res.audit);
 * For edits: const res = await applyEdits({ ... }); return JSON.stringify(res);
 * FALLBACK (no prepared op fits): use the hardened helper toolkit `api` for a
 * direct edit, then re-validate — e.g.:
 *   const f = figma.currentPage.findOne(n => n.name === "My Screen");
 *   await api.bindFill(f, "color.background.elevated");
 *   return JSON.stringify(await api.auditTree(f));
 * (`api` is the SAME primitives renderPlan/applyEdits use — fills bound on the
 *  paint, slots re-fetched fresh, tokens validated — so fallbacks stay compliant.)
 */
const _m = JSON.parse(figma.root.getSharedPluginData("dbuxRuntime", "meta") || "{}");
if (!_m.count) throw new Error("[STOP] runtime not bootstrapped in this file — run bootstrap/store-*.js then store-meta.js first");
let _src = "";
for (let i = 0; i < _m.count; i++) _src += figma.root.getSharedPluginData("dbuxRuntime", "c" + i);
const _api = new Function(_src + ";return {renderPlan,applyEdits,renderNode,api:EDIT_API};")();
const renderPlan = _api.renderPlan, applyEdits = _api.applyEdits, api = _api.api;
