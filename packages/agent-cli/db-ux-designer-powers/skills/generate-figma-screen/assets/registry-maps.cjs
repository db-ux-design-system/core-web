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

/* Flatten each component's non-deprecated figmaSets into the runtime COMPONENTS shape
 * ({ variants:[{axes,key}], slot? }). A component with only deprecated sets is dropped. */
function buildComponentsMap(components) {
	const out = {};

	for (const [name, def] of Object.entries(components)) {
		const variants = [];

		for (const set of Object.values(def.figmaSets || {})) {
			if (set.deprecated) continue;
			variants.push({ axes: set.axes || {}, key: set.key });
		}

		// Drop components with no usable (non-deprecated) set, e.g. Popover.
		if (variants.length === 0) continue;

		const entry = { variants };

		if (def.contentSlot) entry.slot = def.contentSlot;
		out[name] = entry;
	}

	return out;
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

	const COMPONENTS = buildComponentsMap(components.components || {});

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

// The maps are injected at this marker, which lives in src/10-figma-helpers.js.
const INJECT_MARKER =
	'/* @db-maps-inject — build-runtime.cjs replaces this with emitMapsSource() */';

/* Inject the generated maps into the concatenated runtime source (in memory, at build time). */
function injectMaps(runtimeSrc, registriesDir) {
	if (!runtimeSrc.includes(INJECT_MARKER))
		throw new Error(
			`[STOP] inject marker not found — src/10-figma-helpers.js must contain ${INJECT_MARKER}`
		);
	return runtimeSrc.replace(INJECT_MARKER, emitMapsSource(registriesDir));
}

module.exports = { buildMaps, emitMapsSource, injectMaps, INJECT_MARKER };

if (require.main === module) {
	const { sets } = {
		sets: buildMaps(path.join(__dirname, 'registries')).COMPONENTS
	};
	console.log(
		`registry-maps.cjs — generates the runtime maps from registries (${Object.keys(sets).length} components). Used by build-runtime.cjs.`
	);
}
