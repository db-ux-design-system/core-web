/* DB UX store-once loader — reconstructs the runtime from the Figma
 * document (bootstrapped once). AFTER this snippet, append e.g.:
 *   const PLAN = { screen, targetNodeId, layout, variables };
 *   const res = await renderPlan(PLAN); return JSON.stringify(res.audit);
 * For edits: const res = await applyEdits({ ... }); return JSON.stringify(res);
 */
const _m = JSON.parse(figma.root.getSharedPluginData("dbuxRuntime", "meta") || "{}");
if (!_m.count) throw new Error("[STOP] runtime not bootstrapped in this file — run bootstrap/store-*.js then store-meta.js first");
let _src = "";
for (let i = 0; i < _m.count; i++) _src += figma.root.getSharedPluginData("dbuxRuntime", "c" + i);
const _api = new Function(_src + ";return {renderPlan,applyEdits,renderNode};")();
const renderPlan = _api.renderPlan, applyEdits = _api.applyEdits;
