#!/usr/bin/env node
/* =============================================================================
 * verify-registry-keys.cjs — drift check for the Figma registries.
 * -----------------------------------------------------------------------------
 * WHY: Figma component/variable/style keys can drift WITHIN a library version on
 * re-publish (the version string in the library name is NOT a reliable freshness
 * signal). The core build stays PINNED to the committed registry keys (deterministic,
 * no Figma access at build time). This tool is the explicit, on-demand refresh check:
 * it reads every key from the registries and EMITS a self-contained `use_figma`
 * snippet that import-tests them against the live library. An agent (which has the
 * Figma MCP) pastes the snippet, and any key that fails to import is stale → refresh
 * it from the canonical library and update the registry.
 *
 * USAGE:
 *   node verify-registry-keys.cjs --emit   # prints the use_figma snippet to stdout
 *   node verify-registry-keys.cjs          # prints how-to
 *
 * The snippet returns { ok, failCount, fails:["set:…","var:…","style:…"] }.
 * ========================================================================== */
const fs = require('node:fs');
const path = require('node:path');

const REG = path.join(__dirname, 'registries');
const load = (n) => JSON.parse(fs.readFileSync(path.join(REG, n), 'utf8'));

function collectKeys() {
	const components = load('components.json');
	const tokens = load('tokens.json');
	const icons = load('icons.json');

	// Component_set keys (figma.importComponentSetByKeyAsync).
	const sets = {};
	for (const [name, def] of Object.entries(components.components || {})) {
		for (const [setName, set] of Object.entries(def.figmaSets || {})) {
			if (set.deprecated) continue;
			sets[`${name}/${setName}`] = set.key;
		}
	}

	for (const [name, def] of Object.entries(
		components.conceptComponents || {}
	)) {
		if (name.startsWith('_') || !def.setKey) continue;
		sets[`concept/${name}`] = def.setKey;
	}

	for (const [name, key] of Object.entries(icons.icons || {}))
		sets[`icon/${name}`] = key;
	if (icons._meta && icons._meta.placeholderKey)
		sets['icon/__placeholder__'] = icons._meta.placeholderKey;

	// Variable keys (figma.variables.importVariableByKeyAsync).
	const vars = {};
	for (const [name, def] of Object.entries(tokens.variables || {}))
		if (def.figmaVariableKey) vars[name] = def.figmaVariableKey;

	// Text-style keys (figma.importStyleByKeyAsync).
	const styles = {};
	for (const [name, def] of Object.entries(tokens.textStyles || {}))
		if (def.figmaStyleKey) styles[name] = def.figmaStyleKey;

	return { sets, vars, styles };
}

function emitSnippet() {
	const { sets, vars, styles } = collectKeys();
	const j = (o) => JSON.stringify(o);
	return `/* DB UX registry drift check — paste into use_figma against a file that has the
 * DB UX libraries added. Returns any keys that no longer resolve (stale → refresh). */
const SETS = ${j(sets)};
const VARS = ${j(vars)};
const STYLES = ${j(styles)};
const fails = []; let ok = 0;
for (const [l, k] of Object.entries(SETS)) { try { await figma.importComponentSetByKeyAsync(k); ok++; } catch (e) { fails.push("set:" + l); } }
for (const [l, k] of Object.entries(VARS)) { try { await figma.variables.importVariableByKeyAsync(k); ok++; } catch (e) { fails.push("var:" + l); } }
for (const [l, k] of Object.entries(STYLES)) { try { await figma.importStyleByKeyAsync(k); ok++; } catch (e) { fails.push("style:" + l); } }
return JSON.stringify({ ok, failCount: fails.length, fails }, null, 1);
`;
}

if (require.main === module) {
	if (process.argv.includes('--emit')) {
		process.stdout.write(emitSnippet());
	} else {
		const { sets, vars, styles } = collectKeys();
		console.log(
			`Registry keys: ${Object.keys(sets).length} component sets, ${Object.keys(vars).length} variables, ${Object.keys(styles).length} text styles.\n\n` +
				`Run \`node verify-registry-keys.cjs --emit\` and paste the printed snippet into use_figma\n` +
				`(against a file with the DB UX libraries added). Any returned key is STALE — refresh it\n` +
				`from the canonical library and update the registry, then re-run the build.`
		);
	}
}

module.exports = { collectKeys, emitSnippet };
