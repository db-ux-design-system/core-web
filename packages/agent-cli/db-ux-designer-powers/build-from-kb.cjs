#!/usr/bin/env node
// build-from-kb.cjs - Generate Power registries & context from the Knowledge Database.
//
// SINGLE SOURCE OF TRUTH: packages/agent-cli/knowledge-database/
// Files in this Power are DERIVED — never edit them directly.
// Always edit the Knowledge Database, then re-run this script.
//
// This is the SINGLE transform: knowledge-database/ -> Power-consumable artifacts.
// Outputs are copies (required for npm publish), NOT the source.
//
// Produces:
//   1. context/design-system/component-guidelines/*.md  (from KB components/*/guidelines.md)
//   2. registries/tokens.json         (from KB foundations/*/tokens.json, merged)
//   3. registries/icons.json          (from KB icons/ - names only; keys stay hand-curated)
//   4. registries/components.json     (FULL generation from KB figma.json + properties.json)
//
// Components registry: KB provides keys, properties and figma sets. Hand-curated fields
// (note, required, forbiddenFallback, deprecated sets, conceptComponents)
// are preserved from the existing registry when not present in KB.
//
// USAGE:
//   node build-from-kb.cjs                         # default: KB at ../knowledge-database
//   node build-from-kb.cjs --kb-path <path>        # custom KB location
//   node build-from-kb.cjs --dry-run               # print what would change, don't write
const fs = require('node:fs');
const path = require('node:path');

// --- CLI args ----------------------------------------------------------------
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const kbIdx = args.indexOf('--kb-path');
const KB_PATH =
	kbIdx !== -1 && args[kbIdx + 1]
		? path.resolve(args[kbIdx + 1])
		: path.resolve(__dirname, '..', 'knowledge-database');

const POWER_ROOT = __dirname;
const REGISTRIES = path.join(
	POWER_ROOT,
	'skills',
	'generate-figma-screen',
	'assets',
	'registries'
);
const GUIDELINES_DIR = path.join(
	POWER_ROOT,
	'context',
	'design-system',
	'component-guidelines'
);

// --- Helpers -----------------------------------------------------------------
function loadJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeOutput(filePath, content) {
	if (dryRun) {
		console.log(
			`  [dry-run] would write: ${path.relative(POWER_ROOT, filePath)}`
		);
		return;
	}
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, content);
}

function listDirs(dir) {
	if (!fs.existsSync(dir)) return [];
	return fs
		.readdirSync(dir)
		.filter((f) => fs.statSync(path.join(dir, f)).isDirectory());
}

// --- 1. Component Guidelines -------------------------------------------------
function buildComponentGuidelines() {
	console.log('\n=== Component Guidelines ===');
	const componentsDir = path.join(KB_PATH, 'components');
	if (!fs.existsSync(componentsDir)) {
		console.log('  SKIP: no components/ in KB');
		return;
	}

	const components = listDirs(componentsDir);
	let count = 0;

	for (const comp of components) {
		const guidelinesPath = path.join(componentsDir, comp, 'guidelines.md');
		if (!fs.existsSync(guidelinesPath)) continue;

		const content = fs.readFileSync(guidelinesPath, 'utf8');
		const header = `<!-- GENERATED — DO NOT EDIT. SSoT: knowledge-database/components/${comp}/guidelines.md -->\n\n`;
		const outPath = path.join(GUIDELINES_DIR, `${comp}.md`);
		writeOutput(outPath, header + content);
		count++;
	}

	console.log(`  Generated ${count} component guideline files.`);
}

// --- 2. Tokens Registry ------------------------------------------------------
function buildTokensRegistry() {
	console.log('\n=== Tokens Registry ===');
	const foundationsDir = path.join(KB_PATH, 'foundations');
	if (!fs.existsSync(foundationsDir)) {
		console.log('  SKIP: no foundations/ in KB');
		return;
	}

	// Load current registry to preserve entries we cannot generate (e.g. imageRatios, textStyles)
	const currentTokensPath = path.join(REGISTRIES, 'tokens.json');
	const current = fs.existsSync(currentTokensPath)
		? loadJson(currentTokensPath)
		: {};

	const variables = {};
	let variableCount = 0;

	// --- Colors ---
	const colorsPath = path.join(foundationsDir, 'colors', 'tokens.json');
	if (fs.existsSync(colorsPath)) {
		const colors = loadJson(colorsPath);
		const adaptive = colors.tokens?.adaptive || {};

		// Token name mapping: KB name → Power semantic name
		const colorNameMap = {
			'bg-basic-level-1': {
				name: 'color.background.canvas',
				allowedFor: ['fills'],
				largeSurface: true
			},
			'bg-basic-level-2': {
				name: 'color.background.surface',
				allowedFor: ['fills'],
				largeSurface: true
			},
			'bg-basic-level-3': {
				name: 'color.background.elevated',
				allowedFor: ['fills'],
				largeSurface: true
			},
			'on-bg-basic-emphasis-100': {
				name: 'color.text.strong',
				allowedFor: ['fills', 'text.fills'],
				note: 'Primary/standard text. emphasis-100 is the DEFAULT for content text (headings + body).'
			},
			'on-bg-basic-emphasis-90': {
				name: 'color.text.weak',
				allowedFor: ['fills', 'text.fills'],
				note: 'Slightly de-emphasized text (90).'
			},
			'on-bg-basic-emphasis-80': {
				name: 'color.text.muted',
				allowedFor: ['fills', 'text.fills'],
				note: 'Most de-emphasized text (80) — captions/meta.'
			},
			'on-bg-basic-emphasis-70': {
				name: 'color.icon',
				allowedFor: ['fills', 'strokes'],
				note: 'Icon color (emphasis-70). 70 meets a11y contrast for icons/graphics only — never use 70 for text.'
			},
			'on-bg-basic-emphasis-50': {
				name: 'color.border.subtle',
				allowedFor: ['fills', 'strokes']
			}
		};

		for (const [kbName, mapping] of Object.entries(colorNameMap)) {
			const token = adaptive[kbName];
			if (!token || !token.figmaKeys?.default) continue;

			variables[mapping.name] = {
				dbName: token.figma.replace('{state}', 'default'),
				figmaVariableKey: token.figmaKeys.default,
				allowedFor: mapping.allowedFor,
				...(mapping.largeSurface && { largeSurface: true }),
				...(mapping.note && { note: mapping.note })
			};
			variableCount++;
		}

		// Brand colors (if present)
		const brand = colors.tokens?.brand || colors.tokens?.palette || {};
		// (brand tokens need a different structure — handle if present in KB)
	}

	// --- Spacing ---
	const spacingPath = path.join(foundationsDir, 'spacing', 'tokens.json');
	if (fs.existsSync(spacingPath)) {
		const spacing = loadJson(spacingPath);
		const fixed = spacing.tokens?.fixed || {};

		for (const [size, token] of Object.entries(fixed)) {
			if (!token.figmaKey || token.figmaOnly) continue;
			variables[`space.${size}`] = {
				dbName: token.figma,
				figmaVariableKey: token.figmaKey,
				allowedFor: ['itemSpacing', 'padding']
			};
			variableCount++;
		}
	}

	// --- Border Radius ---
	const radiusPath = path.join(
		foundationsDir,
		'border-radius',
		'tokens.json'
	);
	if (fs.existsSync(radiusPath)) {
		const radius = loadJson(radiusPath);
		const tokens = radius.tokens || {};

		for (const [size, token] of Object.entries(tokens)) {
			if (!token.figmaKey) continue;
			variables[`radius.${size}`] = {
				dbName: token.figma,
				figmaVariableKey: token.figmaKey,
				allowedFor: ['cornerRadius']
			};
			variableCount++;
		}
	}

	// --- Typography (text styles) ---
	const typoPath = path.join(foundationsDir, 'typography', 'tokens.json');
	const textStyles = { ...(current.textStyles || {}) };
	let styleCount = 0;

	if (fs.existsSync(typoPath)) {
		const typo = loadJson(typoPath);

		// The KB has body.{size}.figmaStyles.{weight} and headline.{size}.figmaStyles.{weight}
		// The Power uses curated semantic names that map to specific size+weight combos via
		// "Code Mapping" paths in Figma. These are complementary, not duplicates.

		const bodyTokens = typo.tokens?.body || {};
		const headlineTokens = typo.tokens?.headline || {};

		const kbStyleKeys = new Set();
		for (const sizeTokens of Object.values(bodyTokens)) {
			for (const key of Object.values(sizeTokens.figmaStyles || {})) {
				kbStyleKeys.add(key);
			}
		}
		for (const sizeTokens of Object.values(headlineTokens)) {
			for (const key of Object.values(sizeTokens.figmaStyles || {})) {
				kbStyleKeys.add(key);
			}
		}

		console.log(
			`  \u2139 KB has ${kbStyleKeys.size} raw typography style keys (body+headline x size x weight).`
		);
		console.log(
			`  \u2139 Power textStyles use ${Object.keys(current.textStyles || {}).length} "Code Mapping" styles (different layer).`
		);
		styleCount = Object.keys(current.textStyles || {}).length;
	}

	// Build output: KB wins for any duplicate key, preserve non-KB entries as supplement
	const mergedVariables = { ...variables }; // KB is the base (always wins)
	let preserved = 0;
	for (const [name, def] of Object.entries(current.variables || {})) {
		if (!mergedVariables[name]) {
			mergedVariables[name] = def;
			preserved++;
		}
	}
	if (preserved > 0) {
		console.log(
			`  Preserved ${preserved} non-KB variables from existing registry.`
		);
	}

	const tokensOut = {
		_meta: {
			schema: 'db-ux/tokens/v1',
			purpose:
				current._meta?.purpose ||
				'Registered DB UX design tokens bound to Figma Variables/Styles.',
			generatedFrom: 'knowledge-database',
			generatedAt: new Date().toISOString().slice(0, 10),
			sourceMeta: current._meta?.sourceMeta || {}
		},
		variables: mergedVariables,
		textStyles,
		imageRatios: current.imageRatios || {}
	};

	writeOutput(
		path.join(REGISTRIES, 'tokens.json'),
		JSON.stringify(tokensOut, null, '\t') + '\n'
	);

	console.log(
		`  Generated tokens.json: ${Object.keys(mergedVariables).length} variables (${variableCount} from KB, ${preserved} preserved), ${styleCount} textStyles.`
	);
}

// --- 3. Icons Registry -------------------------------------------------------
function buildIconsRegistry() {
	console.log('\n=== Icons Registry ===');
	const iconsDir = path.join(KB_PATH, 'icons');
	if (!fs.existsSync(iconsDir)) {
		console.log('  SKIP: no icons/ in KB');
		return;
	}

	// The KB has all icon names but NO Figma keys.
	// The current registry has a curated subset WITH keys.
	// Strategy: keep current keys, report which names from KB are missing.
	const currentIconsPath = path.join(REGISTRIES, 'icons.json');
	const current = fs.existsSync(currentIconsPath)
		? loadJson(currentIconsPath)
		: { _meta: {}, icons: {} };

	const namesPath = path.join(iconsDir, 'icon-names.json');
	if (!fs.existsSync(namesPath)) {
		console.log('  SKIP: no icon-names.json');
		return;
	}

	const kbIcons = loadJson(namesPath);
	const allNames = kbIcons.icons || [];
	const registeredNames = new Set(Object.keys(current.icons || {}));
	const missing = allNames.filter((name) => !registeredNames.has(name));

	console.log(
		`  KB has ${allNames.length} icons, registry has ${registeredNames.size} with keys.`
	);
	console.log(
		`  ${missing.length} icons in KB without Figma keys (resolve on demand via MCP).`
	);

	// Write a companion file listing all available icon names (for the MCP server / agent)
	const allNamesOut = {
		_meta: {
			source: 'knowledge-database/icons/icon-names.json',
			generatedAt: new Date().toISOString().slice(0, 10),
			note: 'Complete icon name list. Icons without a key in icons.json are resolved on demand via the Figma MCP (search_design_system).'
		},
		registered: Object.keys(current.icons || {}),
		all: allNames,
		unresolved: missing
	};

	writeOutput(
		path.join(REGISTRIES, 'icon-names-full.json'),
		JSON.stringify(allNamesOut, null, '\t') + '\n'
	);

	// Don't overwrite icons.json — it has curated keys that can't be generated without Figma MCP
	console.log(
		`  Wrote icon-names-full.json (complete catalog for on-demand resolution).`
	);
}

// --- 4. Components Registry (full generation) --------------------------------
function buildComponentsRegistry() {
	console.log('\n=== Components Registry ===');
	const componentsDir = path.join(KB_PATH, 'components');
	if (!fs.existsSync(componentsDir)) {
		console.log('  SKIP: no components/ in KB');
		return;
	}

	const currentComponentsPath = path.join(REGISTRIES, 'components.json');
	const current = fs.existsSync(currentComponentsPath)
		? loadJson(currentComponentsPath)
		: {
				_meta: {},
				components: {},
				conceptComponents: {},
				unresolved: {}
			};

	const components = {};
	const kbComponents = listDirs(componentsDir);
	let built = 0;

	for (const kbName of kbComponents) {
		const pascalName = kbName
			.split('-')
			.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
			.join('');

		const metaPath = path.join(componentsDir, kbName, 'meta.json');
		const figmaPath = path.join(componentsDir, kbName, 'figma.json');
		const propsPath = path.join(componentsDir, kbName, 'properties.json');

		if (!fs.existsSync(figmaPath)) continue;

		const figma = loadJson(figmaPath);
		const meta = fs.existsSync(metaPath) ? loadJson(metaPath) : {};
		const props = fs.existsSync(propsPath) ? loadJson(propsPath) : {};
		const properties = props.properties || [];

		// Derive maturity from meta.status
		const maturity =
			meta.status === 'stable'
				? 'Stable'
				: meta.status === 'beta'
					? 'Beta'
					: meta.status === 'concept'
						? 'Concept'
						: 'Stable';

		// Build figmaSets from KB figma.json componentSets
		const figmaSets = {};
		const codeConnectProps = properties.filter(
			(p) =>
				p.design?.codeConnect &&
				p.design?.name?.startsWith('\u2699\uFE0F')
		);

		for (const set of figma.componentSets || []) {
			if (!set.key) continue;
			const axes = deriveAxes(set.name, codeConnectProps, properties);
			figmaSets[set.name] = { key: set.key, axes };
		}

		// Determine content slot
		const slotProp = properties.find(
			(p) =>
				p.type === 'slot' &&
				(p.name === 'children' || p.name === 'Children')
		);
		const contentSlot =
			slotProp?.design?.name || (slotProp ? 'Children' : undefined);

		// Preserve hand-curated fields from existing registry (note, required, labelNodePath, forbiddenFallback, deprecated sets)
		const existing = current.components?.[pascalName] || {};

		const entry = {
			codeName: kbName,
			maturity,
			...(existing.required !== undefined && {
				required: existing.required
			}),
			...(contentSlot && { contentSlot }),
			...(existing.labelNodePath && {
				labelNodePath: existing.labelNodePath
			}),
			...(existing.note && { note: existing.note }),
			figmaSets: { ...figmaSets },
			...(existing.forbiddenFallback && {
				forbiddenFallback: existing.forbiddenFallback
			})
		};

		// Merge deprecated sets and preserve hand-curated axes from existing registry
		for (const [setName, setDef] of Object.entries(
			existing.figmaSets || {}
		)) {
			if (setDef.deprecated && !entry.figmaSets[setName]) {
				entry.figmaSets[setName] = setDef;
			}
			// Preserve hand-curated axes when auto-derivation yields empty
			if (
				!setDef.deprecated &&
				entry.figmaSets[setName] &&
				Object.keys(entry.figmaSets[setName].axes).length === 0 &&
				Object.keys(setDef.axes || {}).length > 0
			) {
				entry.figmaSets[setName].axes = setDef.axes;
			}
		}

		components[pascalName] = entry;
		built++;
	}

	// Preserve components from existing registry that are NOT in the KB (e.g. manually added)
	let preserved = 0;
	for (const [name, def] of Object.entries(current.components || {})) {
		if (!components[name]) {
			components[name] = def;
			preserved++;
		}
	}

	const output = {
		_meta: {
			...(current._meta || {}),
			generatedFrom: 'knowledge-database',
			generatedAt: new Date().toISOString().slice(0, 10)
		},
		components,
		conceptComponents: current.conceptComponents || {},
		unresolved: current.unresolved || {}
	};

	writeOutput(
		currentComponentsPath,
		JSON.stringify(output, null, '\t') + '\n'
	);

	console.log(
		`  Generated components.json: ${built} from KB, ${preserved} preserved from existing.`
	);
}

// Derive axes from a component set name by matching properties with codeConnect
function deriveAxes(setName, codeConnectProps, allProperties) {
	const axes = {};

	// Set name pattern: "ComponentName → VariantValue" or "ComponentName → (Def) VariantValue (Beta)"
	// Extract the suffix after " → " (or the full name if no arrow)
	const arrowIdx = setName.indexOf(' \u2192 ');
	const suffix = arrowIdx !== -1 ? setName.slice(arrowIdx + 3) : setName;
	// Clean: strip "(Def) " prefix and trailing "(Beta)"/"(Deprecated)"
	const cleanSuffix = suffix
		.replace(/^\(Def\)\s*/, '')
		.replace(/\s*\((Beta|Deprecated|Concept)\)$/i, '')
		.trim()
		.toLowerCase();

	for (const prop of codeConnectProps) {
		const propValues = prop.design?.values || prop.values || [];
		const codeValues = prop.values || [];

		for (let i = 0; i < propValues.length; i++) {
			const designVal = propValues[i]
				.replace(/^\(Def\)\s*/, '')
				.replace(/\s*\((Beta|Deprecated|Concept)\)$/i, '')
				.trim();

			// Match: exact suffix match OR suffix contains the value (e.g. "Level 1" contains "1")
			// OR value is contained in suffix (e.g. "desktop" in "Desktop")
			const designLower = designVal.toLowerCase();
			const match =
				designLower === cleanSuffix ||
				cleanSuffix === designLower ||
				cleanSuffix.includes(designLower) ||
				(designLower.length > 1 && cleanSuffix.includes(designLower));

			if (match) {
				const codeProp = prop.code?.prop || prop.name;
				// Use the code-level value (lowercase) if available
				const codeVal =
					codeValues.find((v) => v.toLowerCase() === designLower) ||
					designLower;
				axes[codeProp] = codeVal;
				break;
			}
		}
	}

	// Special case: "Icon Button" prefix → iconOnly=true (maps noText codeConnect prop)
	const prefix = arrowIdx !== -1 ? setName.slice(0, arrowIdx) : setName;
	if (prefix.startsWith('Icon Button') || prefix.startsWith('Icon ')) {
		const hasNoTextProp = allProperties.find((p) => p.name === 'noText');
		if (hasNoTextProp) {
			axes['iconOnly'] = true;
		}
	}

	return axes;
}

// --- 5. Lab Components (concept) ---------------------------------------------
function buildLabComponentsCatalog() {
	console.log('\n=== Lab Components Catalog ===');
	const labDir = path.join(KB_PATH, 'lab-components');
	if (!fs.existsSync(labDir)) {
		console.log('  SKIP: no lab-components/ in KB');
		return;
	}

	const labComponents = listDirs(labDir);
	const catalog = {
		_meta: {
			source: 'knowledge-database/lab-components/',
			generatedAt: new Date().toISOString().slice(0, 10),
			note: 'Concept/pre-release components. Use only when concept_components is enabled.'
		},
		components: {}
	};

	for (const comp of labComponents) {
		const metaPath = path.join(labDir, comp, 'meta.json');
		const propsPath = path.join(labDir, comp, 'properties.json');
		const guidelinesPath = path.join(labDir, comp, 'guidelines.md');

		const entry = { name: comp, maturity: 'Concept' };

		if (fs.existsSync(metaPath)) {
			const meta = loadJson(metaPath);
			entry.id = meta.id;
			entry.displayName = meta.name;
			entry.status = meta.status;
			entry.since = meta.since;
		}

		if (fs.existsSync(propsPath)) {
			const props = loadJson(propsPath);
			entry.properties = (props.properties || []).map((p) => ({
				name: p.name,
				type: p.type,
				...(p.values && { values: p.values }),
				...(p.default !== undefined && { default: p.default }),
				...(p.design?.name && { figmaPropName: p.design.name })
			}));
		}

		if (fs.existsSync(guidelinesPath)) {
			entry.hasGuidelines = true;
		}

		// Sub-components
		const subDirs = listDirs(path.join(labDir, comp));
		if (subDirs.length > 0) {
			entry.subComponents = subDirs;
		}

		catalog.components[comp] = entry;
	}

	writeOutput(
		path.join(REGISTRIES, 'lab-components-catalog.json'),
		JSON.stringify(catalog, null, '\t') + '\n'
	);

	console.log(
		`  Generated lab-components-catalog.json with ${Object.keys(catalog.components).length} concept components.`
	);
}

// --- Main --------------------------------------------------------------------
function main() {
	console.log('build-from-kb.cjs — Knowledge Database → Power Registries');
	console.log(`  KB path: ${KB_PATH}`);
	console.log(`  Power:   ${POWER_ROOT}`);
	if (dryRun) console.log('  MODE: dry-run (no files written)');

	if (!fs.existsSync(KB_PATH)) {
		console.error(`\nERROR: Knowledge Database not found at ${KB_PATH}`);
		console.error(
			'  Make sure the knowledge-database branch is checked out or provide --kb-path.'
		);
		process.exit(1);
	}

	buildComponentGuidelines();
	buildTokensRegistry();
	buildIconsRegistry();
	buildComponentsRegistry();
	buildLabComponentsCatalog();

	console.log('\n✓ Done.');
	if (!dryRun) {
		console.log('  Next steps:');
		console.log('    1. Review generated files');
		console.log(
			'    2. Run `node assets/build-runtime.cjs` to update the minified runtime'
		);
		console.log(
			'    3. Run `node assets/verify-registry-keys.cjs --emit` to verify Figma keys'
		);
	}
}

main();
