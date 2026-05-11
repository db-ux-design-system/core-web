/**
 * Generates assets/tokens/tokens.json from compiled CSS/SCSS sources.
 *
 * Parses CSS custom properties from the DB theme variables and density
 * overrides into a categorised JSON object so the MCP tools can do simple
 * key lookups instead of regex-filtering raw SCSS/CSS at runtime.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../../..');
const TOKENS_DIR = resolve(__dirname, '..', 'assets/tokens');

/**
 * Extracts `--db-*` custom property declarations from CSS/SCSS content.
 * Returns an array of `{ property, value }` objects.
 */
function extractCustomProperties(
	content: string
): Array<{ property: string; value: string }> {
	const results: Array<{ property: string; value: string }> = [];
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
	const rest = property.slice(5);
	if (rest.startsWith('spacing')) return 'spacing';
	if (rest.startsWith('sizing')) return 'spacing';
	if (rest.startsWith('elevation')) return 'elevation';
	if (rest.startsWith('transition')) return 'transitions';
	if (
		rest.startsWith('typography') ||
		rest.startsWith('type-') ||
		rest.startsWith('font')
	)
		return 'typography';
	// Base tokens are internal primitives — never expose them to LLMs.
	if (rest.startsWith('base-')) return '__skip__';
	if (rest.startsWith('border')) return 'border';
	if (rest.startsWith('opacity')) return 'opacity';
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

interface TokenEntry {
	property: string;
	value: string;
	source: 'theme' | 'density';
}
type TokensJson = Record<string, Record<string, TokenEntry[]>>;

interface FlatTokensCategory {
	[property: string]: string;
}
interface FlatTokens {
	[category: string]: FlatTokensCategory & {
		_density?: Record<string, string>;
	};
}

/**
 * Builds the categorised tokens JSON from theme variables and density
 * overrides, writing the result to assets/tokens/tokens.json.
 */
export async function buildTokens(): Promise<void> {
	mkdirSync(TOKENS_DIR, { recursive: true });

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
	const tokensJson: TokensJson = {};

	function addToken(entry: TokenEntry) {
		const cat = categorise(entry.property);
		if (cat === '__skip__') return;
		if (!tokensJson[cat]) tokensJson[cat] = {};
		if (!tokensJson[cat][entry.property])
			tokensJson[cat][entry.property] = [];
		tokensJson[cat][entry.property].push(entry);
	}

	for (const p of defaultProps) {
		addToken({ ...p, source: 'theme' });
	}
	for (const p of densityProps) {
		addToken({ ...p, source: 'density' });
	}

	// Flatten for simpler consumption
	const flatTokens: FlatTokens = {};
	for (const [cat, props] of Object.entries(tokensJson)) {
		flatTokens[cat] = {};
		const densityOverrides: Record<string, string> = {};
		for (const [prop, entries] of Object.entries(props)) {
			const themeEntry = entries.find((e) => e.source === 'theme');
			if (themeEntry) {
				flatTokens[cat][prop] = themeEntry.value;
			}
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
}
