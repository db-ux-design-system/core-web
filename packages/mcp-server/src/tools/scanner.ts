import { existsSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { migrationData } from '../data/db-ui-migration-map';
import { type ToolResult, err, MAX_JSON_OUTPUT, truncate } from '../utils';

/** Maximum file size the scanner will read (5 MB). */
const MAX_SCAN_SIZE = 5 * 1024 * 1024;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ScanFinding = {
	line: number;
	type: 'component' | 'color' | 'icon' | 'import';
	found: string;
	context: string;
	suggestion?: string;
};

// ---------------------------------------------------------------------------
// Regex Patterns
//
// ⚠️ These regexps use the /g flag and MUST only be used with
// String.prototype.matchAll() — NEVER with regex.exec() or regex.test().
// matchAll() internally clones the regex, so shared lastIndex state is safe.
// Using .exec() or .test() on module-level /g regexps causes subtle bugs
// because lastIndex persists across calls.
// ---------------------------------------------------------------------------

/** Matches v2 CSS classes: cmp-xxx, elm-xxx, rea-xxx (in class attributes, SCSS, etc.) */
const RE_V2_CSS_CLASS = /\b((?:cmp|elm|rea)-[\w-]+)\b/g;

/** Matches v2 Web Components: <db-xxx (HTML/JSX custom element tags) */
const RE_V2_WEB_COMPONENT = /<(db-[\w-]+)\b/g;

/** Matches v2 color tokens: db-color-xxx-nnn */
const RE_V2_COLOR = /\b(db-color-[\w-]+)/g;

/** Matches icon references: icon="xxx" or icon='xxx' or data-icon="xxx" */
const RE_ICON_ATTR =
	/(?:icon|data-icon|data-icon-leading|data-icon-trailing|iconName)\s*=\s*["'](\w+)["']/g;

/** Matches v2 npm package imports: @db-ui/react-components, @db-ui/ngx-components, @db-ui/v-components, @db-ui/elements */
const RE_V2_IMPORT =
	/['"](@db-ui\/(?:react-components|ngx-components|v-components|elements))['"]/g;

/** Maps v2 package names to their v3 equivalents */
const V2_PACKAGE_MAP: Record<string, string> = {
	'@db-ui/react-components': '@db-ux/react-core-components',
	'@db-ui/ngx-components': '@db-ux/ngx-core-components',
	'@db-ui/v-components': '@db-ux/v-core-components',
	'@db-ui/elements': '@db-ux/core-components'
};

// ---------------------------------------------------------------------------
// Core Scanner
// ---------------------------------------------------------------------------

/**
 * Scans a single line for all v2 migration patterns.
 * Returns findings with deterministic suggestions from the migration data.
 */
function scanLine(line: string, lineNumber: number): ScanFinding[] {
	const findings: ScanFinding[] = [];
	const ctx = line.length > 120 ? line.slice(0, 120) + '…' : line;

	// --- V2 CSS classes (cmp-*, elm-*, rea-*) ---
	for (const match of line.matchAll(RE_V2_CSS_CLASS)) {
		const old = match[1];
		const finding: ScanFinding = {
			line: lineNumber,
			type: 'component',
			found: old,
			context: ctx.trim()
		};
		const replacement = migrationData.components[old];
		if (replacement) {
			finding.suggestion = replacement;
		}

		findings.push(finding);
	}

	// --- V2 Web Components (<db-*>) ---
	for (const match of line.matchAll(RE_V2_WEB_COMPONENT)) {
		const old = match[1];
		const finding: ScanFinding = {
			line: lineNumber,
			type: 'component',
			found: `<${old}>`,
			context: ctx.trim(),
			// V2 <db-*> maps to v3 <db-*> — flag for API review
			suggestion: `${old} (v3) — review changed props/API`
		};

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
		const replacement = migrationData.colors[old];
		if (replacement) {
			finding.suggestion = `BG: ${replacement.bg}${replacement.fg ? `, FG: ${replacement.fg}` : ''}`;
		}

		findings.push(finding);
	}

	// --- Icons ---
	for (const match of line.matchAll(RE_ICON_ATTR)) {
		const old = match[1];
		// Only flag if it's actually a known v2 icon name
		const replacement = migrationData.icons[old];
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

	// --- V2 npm package imports (@db-ui/*) ---
	for (const match of line.matchAll(RE_V2_IMPORT)) {
		const old = match[1];
		findings.push({
			line: lineNumber,
			type: 'import',
			found: old,
			context: ctx.trim(),
			suggestion: `Replace with ${V2_PACKAGE_MAP[old] ?? '@db-ux/core-components'}. Update all named imports to v3 component names.`
		});
	}

	return findings;
}

// ---------------------------------------------------------------------------
// Tool Handler
// ---------------------------------------------------------------------------

/**
 * Analyzes a file for DB UI v2 patterns that need migration to DB UX v3.
 *
 * Deterministically scans for:
 * - v2 CSS classes (cmp-*, elm-*, rea-*) and v2 Web Components (<db-*)
 * - v2 color tokens (db-color-*)
 * - v2 icon names (cross-referenced against the icon migration data)
 *
 * Returns a JSON report with line numbers, findings, and migration suggestions
 * resolved from the statically imported db-ui-migration-map.ts — no LLM guessing needed.
 */
export async function handleScanV2Migration({
	filePath
}: {
	filePath: string;
}): Promise<ToolResult> {
	// Resolve path (absolute or relative to cwd)
	const cwd = resolve(process.cwd()).replaceAll('\\', '/');
	const absolutePath = resolve(cwd, filePath).replaceAll('\\', '/');

	// 🔒 Path traversal protection: file must be within cwd()
	if (!absolutePath.startsWith(cwd + '/')) {
		return err(
			`Error: filePath '${filePath}' resolves outside the workspace root. Path traversal is not allowed.`
		);
	}

	if (!existsSync(absolutePath)) {
		return err(
			`Error: File not found: '${absolutePath}'. Provide an absolute path or a path relative to your workspace root.`
		);
	}

	// 🔒 File size guard: reject files larger than 5 MB
	const stats = await stat(absolutePath);
	if (!stats.isFile()) {
		return err(
			`Error: Expected a file, but '${absolutePath}' is a directory.`
		);
	}

	if (stats.size > MAX_SCAN_SIZE) {
		return err(
			`Error: File too large (${stats.size} bytes). Maximum scan size is ${MAX_SCAN_SIZE} bytes.`
		);
	}

	// Read and scan
	const content = await readFile(absolutePath, 'utf-8');

	// 🔒 Binary file guard: reject files containing NUL bytes
	if (content.slice(0, 8192).includes('\0')) {
		return err(
			'Error: File appears to be binary. Only text files can be scanned.'
		);
	}

	const lines = content.split('\n');
	const findings: ScanFinding[] = [];

	for (const [i, line] of lines.entries()) {
		findings.push(...scanLine(line, i + 1));
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
	const importCount = findings.filter((f) => f.type === 'import').length;
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
		`- ${importCount} legacy import(s)`,
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
