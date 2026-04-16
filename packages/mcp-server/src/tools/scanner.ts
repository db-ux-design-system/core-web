import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { type ToolResult, err, MAX_JSON_OUTPUT, truncate } from '../utils';
import { getManifest } from '../utils/manifest';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ScanFinding {
	line: number;
	type: 'component' | 'color' | 'icon';
	found: string;
	context: string;
	suggestion?: string;
}

// ---------------------------------------------------------------------------
// Migration-Map Builders (parsed once, cached)
// ---------------------------------------------------------------------------

let componentMap: Map<string, string> | undefined;
let colorMap: Map<string, { bg: string; fg: string }> | undefined;
let iconMap: Map<string, string> | undefined;

/**
 * Resets the cached migration maps. Used in tests to force re-parsing
 * after switching to a different manifest.
 */
export function resetScannerCache(): void {
	componentMap = undefined;
	colorMap = undefined;
	iconMap = undefined;
}

/**
 * Parses `component-migration.md` into a Map<oldTag, newTag>.
 * Extracts patterns like `cmp-card`->`db-card` or `elm-button`->`db-button`.
 */
function parseComponentMap(content: string): Map<string, string> {
	const map = new Map<string, string>();
	// Match patterns: `old-tag`->`new-tag`
	for (const match of content.matchAll(
		/`((?:cmp|elm|rea)-[\w-]+)`\s*->\s*`(db-[\w-]+)`/g
	)) {
		map.set(match[1], match[2]);
	}
	return map;
}

/**
 * Parses `color-migration.md` into a Map<oldColor, {bg, fg}>.
 * Format: `db-color-xxx-nnn` → BG: `--db-xxx-...`, FG: `--db-xxx-...`
 */
function parseColorMap(
	content: string
): Map<string, { bg: string; fg: string }> {
	const map = new Map<string, { bg: string; fg: string }>();
	for (const match of content.matchAll(
		/`(db-color-[\w-]+)`\s*→\s*BG:\s*`([^`]+)`(?:,\s*FG:\s*`([^`]+)`)?/g
	)) {
		map.set(match[1], { bg: match[2], fg: match[3] ?? '' });
	}
	return map;
}

/**
 * Parses `icon-migration.md` into a Map<oldIcon, newIcon>.
 * Format: `old`→`new`, `old`→`new`, ...
 */
function parseIconMap(content: string): Map<string, string> {
	const map = new Map<string, string>();
	for (const match of content.matchAll(/`(\w+)`→`(\w+)`/g)) {
		map.set(match[1], match[2]);
	}
	return map;
}

/**
 * Lazily builds all migration lookup maps from the manifest.
 * Parsed once, then cached for subsequent calls.
 */
async function ensureMaps(): Promise<void> {
	if (componentMap && colorMap && iconMap) return;

	const manifest = await getManifest();
	const guides = manifest.migrationGuides ?? {};

	/** Finds a guide by trying the new name first, then the legacy db-ui- prefixed name. */
	const findGuide = (name: string): string | undefined =>
		guides[name] ?? guides[`db-ui-${name}`];

	componentMap = parseComponentMap(findGuide('component-migration') ?? '');
	colorMap = parseColorMap(findGuide('color-migration') ?? '');
	iconMap = parseIconMap(findGuide('icon-migration') ?? '');
}

// ---------------------------------------------------------------------------
// Regex Patterns
// ---------------------------------------------------------------------------

/** Matches v2 component tags: <cmp-xxx, <elm-xxx, <rea-xxx (HTML/JSX) */
const RE_V2_COMPONENT = /<((?:cmp|elm|rea)-[\w-]+)/g;

/** Matches v2 color tokens: db-color-xxx-nnn */
const RE_V2_COLOR = /\b(db-color-[\w-]+)/g;

/** Matches icon references: icon="xxx" or icon='xxx' or data-icon="xxx" */
const RE_ICON_ATTR =
	/(?:icon|data-icon|data-icon-leading|data-icon-trailing|iconName)\s*=\s*["'](\w+)["']/g;

// ---------------------------------------------------------------------------
// Core Scanner
// ---------------------------------------------------------------------------

/**
 * Scans a single line for all v2 migration patterns.
 * Returns findings with deterministic suggestions from the migration guides.
 */
function scanLine(line: string, lineNumber: number): ScanFinding[] {
	const findings: ScanFinding[] = [];
	const ctx = line.length > 120 ? line.substring(0, 120) + '…' : line;

	// --- Components ---
	for (const match of line.matchAll(RE_V2_COMPONENT)) {
		const old = match[1];
		const finding: ScanFinding = {
			line: lineNumber,
			type: 'component',
			found: old,
			context: ctx.trim()
		};
		const replacement = componentMap?.get(old);
		if (replacement) {
			finding.suggestion = replacement;
		}
		findings.push(finding);
	}

	// --- Colors ---
	for (const match of line.matchAll(RE_V2_COLOR)) {
		const old = match[1];
		const finding: ScanFinding = {
			line: lineNumber,
			type: 'color',
			found: old,
			context: ctx.trim()
		};
		const replacement = colorMap?.get(old);
		if (replacement) {
			finding.suggestion = `BG: ${replacement.bg}${replacement.fg ? `, FG: ${replacement.fg}` : ''}`;
		}
		findings.push(finding);
	}

	// --- Icons ---
	for (const match of line.matchAll(RE_ICON_ATTR)) {
		const old = match[1];
		// Only flag if it's actually a known v2 icon name
		const replacement = iconMap?.get(old);
		if (replacement && replacement !== old) {
			findings.push({
				line: lineNumber,
				type: 'icon',
				found: old,
				context: ctx.trim(),
				suggestion: replacement
			});
		}
	}

	return findings;
}

// ---------------------------------------------------------------------------
// Tool Handler
// ---------------------------------------------------------------------------

/**
 * Analyzes a file for DB UI v2 patterns that need migration to DB UX v4.
 *
 * Deterministically scans for:
 * - v2 component tags (<cmp-*, <elm-*, <rea-*)
 * - v2 color tokens (db-color-*)
 * - v2 icon names (cross-referenced against the icon migration guide)
 *
 * Returns a JSON report with line numbers, findings, and migration suggestions
 * resolved from docs/migration/db-ui/*.md — no LLM guessing needed.
 */
export async function handleAnalyzeV2Migration({
	filePath
}: {
	filePath: string;
}): Promise<ToolResult> {
	// Resolve path (absolute or relative to cwd)
	const absolutePath = resolve(filePath);

	if (!existsSync(absolutePath)) {
		return err(
			`Error: File not found: '${absolutePath}'. Provide an absolute path or a path relative to your workspace root.`
		);
	}

	// Build migration maps (lazy, cached)
	await ensureMaps();

	// Read and scan
	const content = await readFile(absolutePath, 'utf-8');
	const lines = content.split('\n');
	const findings: ScanFinding[] = [];

	for (let i = 0; i < lines.length; i++) {
		findings.push(...scanLine(lines[i], i + 1));
	}

	if (findings.length === 0) {
		return {
			content: [
				{
					type: 'text',
					text: `No DB UI v2 patterns found in ${absolutePath}. The file may already be migrated or does not contain any legacy code.`
				}
			]
		};
	}

	// Build summary header
	const componentCount = findings.filter(
		(f) => f.type === 'component'
	).length;
	const colorCount = findings.filter((f) => f.type === 'color').length;
	const iconCount = findings.filter((f) => f.type === 'icon').length;
	const uniqueComponents = [
		...new Set(
			findings.filter((f) => f.type === 'component').map((f) => f.found)
		)
	];

	const summary = [
		`## Migration Scan: ${absolutePath}`,
		`**${findings.length} findings** in ${lines.length} lines:`,
		`- ${componentCount} component(s): ${uniqueComponents.join(', ') || 'none'}`,
		`- ${colorCount} color token(s)`,
		`- ${iconCount} icon(s)`,
		'',
		'## Findings',
		'```json',
		JSON.stringify(findings, null, 2),
		'```'
	].join('\n');

	return {
		content: [
			{
				type: 'text',
				text: truncate(summary, MAX_JSON_OUTPUT)
			}
		]
	};
}
