/**
 * Prebuild asset copy script for @db-ux/mcp-server node package.
 *
 * Copies migration guides and compiled token files from the monorepo into the
 * local assets/ directories so they are available for standalone npx usage.
 */

import {
	cpSync,
	existsSync,
	mkdirSync,
	readFileSync,
	writeFileSync
} from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

/**
 * Copies src → dest.
 * Throws a hard error when src does not exist to prevent publishing
 * an incomplete package.
 */
function copyAsset(
	src: string,
	dest: string,
	opts: { recursive?: boolean } = {}
): void {
	const srcAbs = resolve(ROOT, src);
	const destAbs = resolve(
		dirname(fileURLToPath(import.meta.url)),
		'..',
		dest
	);

	if (!existsSync(srcAbs)) {
		throw new Error(`[prebuild] FATAL: required source not found: ${src}`);
	}

	mkdirSync(dirname(destAbs), { recursive: true });
	cpSync(srcAbs, destAbs, {
		recursive: opts.recursive ?? false,
		force: true
	});
	console.log(`[prebuild] copied: ${src} → ${dest}`);
}

// ---------------------------------------------------------------------------
// Migration guides (Single Source of Truth: docs/migration/db-ui/)
// ---------------------------------------------------------------------------
copyAsset('docs/migration/db-ui', 'assets/migration', { recursive: true });

// ---------------------------------------------------------------------------
// Structured tokens JSON (assets/tokens/tokens.json)
//
// Parses CSS custom properties from compiled sources into a categorised
// JSON object so the MCP tools can do simple key lookups instead of
// regex-filtering raw SCSS/CSS at runtime.
// ---------------------------------------------------------------------------

const TOKENS_DIR = resolve(
	dirname(fileURLToPath(import.meta.url)),
	'..',
	'assets/tokens'
);
mkdirSync(TOKENS_DIR, { recursive: true });

/**
 * Extracts `--db-*` custom property declarations from CSS/SCSS content.
 * Returns an array of `{ property, value }` objects.
 */
function extractCustomProperties(
	content: string
): Array<{ property: string; value: string }> {
	const results: Array<{ property: string; value: string }> = [];
	// Match lines like: --db-spacing-fixed-md: 0.75rem;
	const re = /^\s*(--db-[\w-]+)\s*:\s*(.+?)\s*;?\s*$/gm;
	let m: RegExpExecArray | null;
	while ((m = re.exec(content)) !== null) {
		results.push({ property: m[1], value: m[2] });
	}
	return results;
}

/**
 * Categorises a `--db-<prefix>-*` property into a token category.
 */
function categorise(property: string): string {
	// Strip leading `--db-`
	const rest = property.slice(5); // e.g. "spacing-fixed-md"
	if (rest.startsWith('spacing')) return 'spacing';
	if (rest.startsWith('sizing')) return 'spacing'; // sizing lives with spacing
	if (rest.startsWith('elevation')) return 'elevation';
	if (rest.startsWith('transition')) return 'transitions';
	if (
		rest.startsWith('typography') ||
		rest.startsWith('type-') ||
		rest.startsWith('font')
	)
		return 'typography';
	if (rest.startsWith('base-')) return 'base';
	if (rest.startsWith('border')) return 'border';
	if (rest.startsWith('opacity')) return 'opacity';
	// Colour-related prefixes
	const colorPrefixes = [
		'brand',
		'neutral',
		'informational',
		'successful',
		'warning',
		'critical',
		'yellow',
		'orange',
		'red',
		'pink',
		'violet',
		'blue',
		'cyan',
		'turquoise',
		'green',
		'light',
		'burgundy'
	];
	for (const prefix of colorPrefixes) {
		if (rest.startsWith(prefix)) return 'colors';
	}
	return 'other';
}

// --- Source 1: Primitive theme variables ---
const defaultVarsSrc = resolve(
	ROOT,
	'node_modules/@db-ux/db-theme/build/styles/_default_variables.scss'
);
if (!existsSync(defaultVarsSrc)) {
	throw new Error(
		`[prebuild] FATAL: required source not found: ${defaultVarsSrc}`
	);
}
const defaultVarsContent = readFileSync(defaultVarsSrc, 'utf-8');
const defaultProps = extractCustomProperties(defaultVarsContent);

// --- Source 2: Density class overrides (build artifact, optional) ---
const densitySrcPath = resolve(
	ROOT,
	'packages/foundations/build/styles/density/classes/all.css'
);
let densityProps: Array<{ property: string; value: string }> = [];
if (!existsSync(densitySrcPath)) {
	console.warn(
		`[prebuild] SKIP (build artifact): density/classes/all.css not found — density tokens will be incomplete`
	);
} else {
	const densityContent = readFileSync(densitySrcPath, 'utf-8');
	densityProps = extractCustomProperties(densityContent);
}

// --- Build categorised token map ---
interface TokenEntry {
	property: string;
	value: string;
	source: 'theme' | 'density';
}
type TokensJson = Record<string, Record<string, TokenEntry[]>>;

const tokensJson: TokensJson = {};

function addToken(entry: TokenEntry) {
	const cat = categorise(entry.property);
	if (!tokensJson[cat]) tokensJson[cat] = {};
	// Group by property name (density may override the same property per selector)
	if (!tokensJson[cat][entry.property]) tokensJson[cat][entry.property] = [];
	tokensJson[cat][entry.property].push(entry);
}

for (const p of defaultProps) {
	addToken({ ...p, source: 'theme' });
}
for (const p of densityProps) {
	addToken({ ...p, source: 'density' });
}

// Flatten for simpler consumption: category → { property: value } for theme,
// plus a `_density` sub-key with density overrides.
interface FlatTokensCategory {
	/** Theme default values: property → value */
	[property: string]: string;
}
interface FlatTokens {
	[category: string]: FlatTokensCategory & {
		_density?: Record<string, string>;
	};
}

const flatTokens: FlatTokens = {};
for (const [cat, props] of Object.entries(tokensJson)) {
	flatTokens[cat] = {};
	const densityOverrides: Record<string, string> = {};
	for (const [prop, entries] of Object.entries(props)) {
		// Use the first theme entry as default
		const themeEntry = entries.find((e) => e.source === 'theme');
		if (themeEntry) {
			flatTokens[cat][prop] = themeEntry.value;
		}
		// Collect density overrides
		for (const e of entries.filter((e) => e.source === 'density')) {
			densityOverrides[prop] = densityOverrides[prop]
				? `${densityOverrides[prop]} | ${e.value}`
				: e.value;
		}
	}
	if (Object.keys(densityOverrides).length > 0) {
		flatTokens[cat]._density = densityOverrides;
	}
}

const tokensJsonPath = resolve(TOKENS_DIR, 'tokens.json');
writeFileSync(tokensJsonPath, JSON.stringify(flatTokens, null, 2), 'utf-8');
console.log(
	`[prebuild] generated: assets/tokens/tokens.json (${Object.keys(flatTokens).length} categories, ${defaultProps.length} theme + ${densityProps.length} density tokens)`
);

// ---------------------------------------------------------------------------
// Visual reference images (build-time downsampling via sharp)
// ---------------------------------------------------------------------------
import { buildVisuals } from './build-visuals.ts';
await buildVisuals();
