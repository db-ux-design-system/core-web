#!/usr/bin/env node
/* =============================================================================
 * registry-maps.cjs — generate the runtime's data maps FROM the registries.
 * -----------------------------------------------------------------------------
 * WHY: the runtime cannot read files in the Figma sandbox, so the key maps must
 * be embedded as literals. But hand-copying them from the registries (the old
 * approach) drifts. This module is the SINGLE transform: registries JSON -> the
 * exact map objects the runtime needs. `build-runtime.cjs` calls `emitMapsSource()`
 * and injects the result before minifying, so the registries are the source of
 * truth and the embedded literals can never drift.
 *
 * Policy (agreed):
 *   - COMPONENTS includes ALL non-deprecated figmaSets per component (a set flagged
 *     `deprecated:true` is skipped; a component with only deprecated sets is dropped).
 *   - `slot` comes from a component's `contentSlot`.
 *   - Semantic colors are NOT tokens here — they are delegated to component variants.
 *   - Radius lives in tokens.json under `variables` (name `radius.`-prefixed), split
 *     out to RADIUS_KEYS; all other variables (color / space) go to VAR_KEYS.
 * ========================================================================== */
const fs = require('node:fs');
const path = require('node:path');

function loadJson(dir, name) {
	return JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8'));
}

/** Build the map OBJECTS from the registries (used for generation AND verification). */
function buildMaps(registriesDir) {
	const tokens = loadJson(registriesDir, 'tokens.json');
	const components = loadJson(registriesDir, 'components.json');
	const icons = loadJson(registriesDir, 'icons.json');

	const VAR_KEYS = {};
	const RADIUS_KEYS = {};
	for (const [name, def] of Object.entries(tokens.variables || {})) {
		if (name.startsWith('radius.'))
			RADIUS_KEYS[name] = def.figmaVariableKey;
		else VAR_KEYS[name] = def.figmaVariableKey;
	}

	const TEXT_STYLE_KEYS = {};
	for (const [name, def] of Object.entries(tokens.textStyles || {})) {
		TEXT_STYLE_KEYS[name] = def.figmaStyleKey;
	}

	const IMAGE_RATIOS = {};
	for (const [k, v] of Object.entries(tokens.imageRatios || {})) {
		if (k.startsWith('_')) continue;
		IMAGE_RATIOS[k] = v.heightPerWidth;
	}

	const CONCEPT_KEYS = {};
	for (const [name, def] of Object.entries(
		components.conceptComponents || {}
	)) {
		if (name.startsWith('_')) continue;
		CONCEPT_KEYS[name] = def.setKey;
	}

	const ICON_KEYS = { ...icons.icons };
	const ICON_KEY = icons._meta && icons._meta.placeholderKey;

	const COMPONENTS = {};
	for (const [name, def] of Object.entries(components.components || {})) {
		const variants = [];
		for (const set of Object.values(def.figmaSets || {})) {
			if (set.deprecated) continue;
			variants.push({ axes: set.axes || {}, key: set.key });
		}
		if (variants.length === 0) continue; // e.g. Popover (deprecated-only)
		const entry = { variants };
		if (def.contentSlot) entry.slot = def.contentSlot;
		COMPONENTS[name] = entry;
	}

	return {
		VAR_KEYS,
		RADIUS_KEYS,
		TEXT_STYLE_KEYS,
		IMAGE_RATIOS,
		CONCEPT_KEYS,
		ICON_KEYS,
		ICON_KEY,
		COMPONENTS
	};
}

/** Emit the generated map declarations as a plain-script source string. */
function emitMapsSource(registriesDir) {
	const m = buildMaps(registriesDir);
	const j = (v) => JSON.stringify(v, null, '\t');
	return (
		'/* AUTO-GENERATED from assets/registries/*.json by registry-maps.cjs — DO NOT EDIT. */\n' +
		`const VAR_KEYS = ${j(m.VAR_KEYS)};\n` +
		`const RADIUS_KEYS = ${j(m.RADIUS_KEYS)};\n` +
		`const TEXT_STYLE_KEYS = ${j(m.TEXT_STYLE_KEYS)};\n` +
		`const CONCEPT_KEYS = ${j(m.CONCEPT_KEYS)};\n` +
		`const ICON_KEY = ${j(m.ICON_KEY)};\n` +
		`const ICON_KEYS = ${j(m.ICON_KEYS)};\n` +
		`const IMAGE_RATIOS = ${j(m.IMAGE_RATIOS)};\n` +
		`const COMPONENTS = ${j(m.COMPONENTS)};\n`
	);
}

const INJECT_MARKER =
	'/* @db-maps-inject — build-runtime.cjs replaces this with emitMapsSource() */';

/* Remove a top-level `const NAME = …;` declaration (object / array / new Set(…) / string)
 * plus any comment lines immediately preceding it. Balanced over (){}[] with string
 * awareness. Returns the source unchanged if NAME is not found. */
function stripTopLevelConst(src, name) {
	const declRe = new RegExp(`(^|\\n)const ${name}\\s*=`, '');
	const m = declRe.exec(src);
	if (!m) return src;
	const declStart = m.index + (m[1] ? 1 : 0); // start of the `const` line
	// Walk from `=` to the terminating `;` at brace/paren/bracket depth 0.
	let i = src.indexOf('=', declStart) + 1;
	let depth = 0;
	let str = null;
	for (; i < src.length; i++) {
		const c = src[i];
		if (str) {
			if (c === '\\') i++;
			else if (c === str) str = null;
			continue;
		}
		if (c === "'" || c === '"' || c === '`') str = c;
		else if (c === '{' || c === '(' || c === '[') depth++;
		else if (c === '}' || c === ')' || c === ']') depth--;
		else if (c === ';' && depth === 0) {
			i++;
			break;
		}
	}
	let end = i; // just past the `;`
	// Absorb comment lines immediately above the declaration.
	let s = declStart;
	const lineStart = (idx) => src.lastIndexOf('\n', idx - 1) + 1;
	let ls = lineStart(s);
	for (;;) {
		if (ls === 0) break;
		const prevLineStart = lineStart(ls - 1);
		const prevLine = src.slice(prevLineStart, ls - 1).trim();
		if (
			prevLine.startsWith('//') ||
			prevLine.startsWith('/*') ||
			prevLine.startsWith('*') ||
			prevLine.endsWith('*/')
		) {
			s = prevLineStart;
			ls = prevLineStart;
		} else break;
	}
	// Trim a trailing newline so we don't leave a blank gap.
	if (src[end] === '\n') end++;
	return src.slice(0, s) + src.slice(end);
}

/* Rewrite db-figma-runtime.js into "stub" form: strip the generator-covered maps and the
 * dead consts, and drop the inject marker where the maps used to lead. The build injects the
 * generated maps at the marker before minifying, so the registries are the single source. */
function stubRuntime(runtimePath) {
	let src = fs.readFileSync(runtimePath, 'utf8');
	const covered = [
		'VAR_KEYS',
		'RADIUS_KEYS',
		'TEXT_STYLE_KEYS',
		'CONCEPT_KEYS',
		'ICON_KEY',
		'ICON_KEYS',
		'IMAGE_RATIOS',
		'COMPONENTS'
	];
	const dead = ['LEVEL_BG', 'LAYOUT_TYPES'];
	// Strip covered + dead consts FIRST (comment-absorption would otherwise eat the marker).
	for (const n of [...covered, ...dead]) src = stripTopLevelConst(src, n);
	// Then anchor the inject marker before the first surviving static const.
	if (!src.includes(INJECT_MARKER)) {
		src = src.replace(
			/(^|\n)const SURFACE_FORBIDDEN\s*=/,
			`\n${INJECT_MARKER}\nconst SURFACE_FORBIDDEN =`
		);
	}
	fs.writeFileSync(runtimePath, src);
	return src;
}

/* Inject the generated maps into a runtime source string (in memory, at build time). */
function injectMaps(runtimeSrc, registriesDir) {
	if (!runtimeSrc.includes(INJECT_MARKER))
		throw new Error(
			`[STOP] inject marker not found in runtime source — run \`node registry-maps.cjs --stub\` first.`
		);
	return runtimeSrc.replace(INJECT_MARKER, emitMapsSource(registriesDir));
}

module.exports = {
	buildMaps,
	emitMapsSource,
	injectMaps,
	stubRuntime,
	INJECT_MARKER
};

if (require.main === module && process.argv.includes('--stub')) {
	const p = path.join(__dirname, 'db-figma-runtime.js');
	stubRuntime(p);
	console.log('Stubbed', p, '(maps now injected by build-runtime.cjs).');
}
