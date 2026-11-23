import { existsSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { migrationData } from '../data/db-ui-migration-map';
import {
	type ToolResult,
	error,
	MAX_JSON_OUTPUT,
	resolveSafePath
} from '../utils';

/** Maximum file size the scanner will read (5 MB). */
const MAX_SCAN_SIZE = 5 * 1024 * 1024;

/**
 Characters reserved in the report budget for everything that is not a finding:
 the "## Findings" heading, the fenced block markers and the
 omitted-findings note.
 */
const REPORT_OVERHEAD = 500;

/**
 Characters the rendered list of unique component names may occupy in the
 header.

 The header has to be bounded, not just the findings: a large legacy stylesheet
 can hold more distinct `cmp-*` / `elm-*` / `rea-*` names than
 {@link MAX_JSON_OUTPUT} has room for, and an unbounded header would both blow
 the response limit and eat the entire findings budget.
 */
const MAX_COMPONENT_LIST = 2000;

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
// These regexps use the /g flag and MUST only be used with
// String.prototype.matchAll() - NEVER with regex.exec() or regex.test().
// matchAll() internally clones the regex, so shared lastIndex state is safe.
// Using .exec() or .test() on module-level /g regexps causes subtle bugs
// because lastIndex persists across calls.
// ---------------------------------------------------------------------------

/** Matches Generation 2 CSS classes: cmp-xxx, elm-xxx, rea-xxx (in class attributes, SCSS, etc.) */
const RE_GENERATION_2_CSS_CLASS = /\b((?:cmp|elm|rea)-[\w-]+)\b/g;

/**
 Matches custom element tags: <db-xxx (HTML, Angular and Vue templates, JSX).

 Generation 3 uses the same tag prefix in Angular, Vue and Web Components, so a
 match alone is not evidence of Generation 2 - see
 {@link GENERATION_2_ELEMENTS}.
 */
const RE_DB_CUSTOM_ELEMENT = /<(db-[\w-]+)\b/g;

/**
 Matches the React and Vue wrappers of `@db-ui/elements`: <DbButton, <DbCard.
 Generation 3 spells them `DBButton`, so the lowercase `b` is unambiguous.
 */
const RE_GENERATION_2_WRAPPER = /<(Db[A-Z]\w*)\b/g;

/** Matches Generation 2 color tokens: db-color-xxx-nnn */
const RE_GENERATION_2_COLOR = /\b(db-color-[\w-]+)/g;

/** Matches icon references: icon="xxx" or icon='xxx' or data-icon="xxx" */
const RE_ICON_ATTR =
	/(?:icon|data-icon|data-icon-leading|data-icon-trailing|iconName)\s*=\s*["'](\w+)["']/g;

/**
 Matches any `@db-ui/*` package reference and captures the package name:
 quoted imports, subpaths (`@db-ui/core/dist/css/...`), SCSS `~@db-ui/...`,
 `node_modules/@db-ui/...` and CDN URLs (`unpkg.com/@db-ui/core@3.3.7/...`).
 */
const RE_DB_UI_PACKAGE = /(?<![\w-])(@db-ui\/[a-z][\w-]*)/g;

/**
 Non-global check for markers that only occur in Generation 2 code. Used once
 per file to decide whether ambiguous `<db-*>` tags are reported.
 */
const RE_GENERATION_2_MARKER =
	/(?<![\w-])@db-ui\/(?:core|base|elements|react-elements|ngx-elements|v-elements)\b|\b(?:cmp|elm|rea)-[\w-]+|<Db[A-Z]|\bdb-color-/;

/**
 Generation 2 (aka DB UI) packages and their Generation 3 successors.
 `@db-ui/core` and `@db-ui/base` are the CSS framework, `@db-ui/elements` the
 Web Components built on it, `*-elements` the framework wrappers.
 */
const GENERATION_2_PACKAGE_MAP: Record<string, string> = {
	'@db-ui/core': '@db-ux/core-foundations and @db-ux/core-components',
	'@db-ui/base': '@db-ux/core-foundations',
	'@db-ui/elements': '@db-ux/core-components',
	'@db-ui/react-elements': '@db-ux/react-core-components',
	'@db-ui/ngx-elements': '@db-ux/ngx-core-components',
	'@db-ui/v-elements': '@db-ux/v-core-components'
};

/**
 Pre-releases of Generation 3, published under the former `@db-ui` scope
 (repository `db-ui/mono`) and deprecated on npm. They are not Generation 2:
 the components already follow the Generation 3 API, only the package names
 changed.
 */
const GENERATION_3_PRE_RELEASE_PACKAGE_MAP: Record<string, string> = {
	'@db-ui/foundations': '@db-ux/core-foundations',
	'@db-ui/components': '@db-ux/core-components',
	'@db-ui/react-components': '@db-ux/react-core-components',
	'@db-ui/ngx-components': '@db-ux/ngx-core-components',
	'@db-ui/v-components': '@db-ux/v-core-components',
	'@db-ui/web-components': '@db-ux/wc-core-components'
};

// cspell:ignore metanavigation

/**
 Custom elements of `@db-ui/elements` 0.33 (the last Generation 2 release).

 - `replacement`: Generation 3 counterpart, if one is documented.
 - `sharedName`: a Generation 3 component with the same tag exists. These tags
   are only reported when the file contains other Generation 2 markers, as
   they are valid Generation 3 markup in Angular, Vue and Web Components.
 */
const GENERATION_2_ELEMENTS: Record<
	string,
	{ readonly replacement?: string; readonly sharedName: boolean }
> = {
	'db-accordion': { replacement: 'db-accordion-item', sharedName: true },
	'db-brand': { replacement: 'db-brand', sharedName: true },
	'db-breadcrumb': { sharedName: false },
	'db-button': { replacement: 'db-button', sharedName: true },
	'db-card': { replacement: 'db-card', sharedName: true },
	'db-cards': { sharedName: false },
	'db-checkbox': { replacement: 'db-checkbox', sharedName: true },
	'db-chip': { replacement: 'db-tag', sharedName: false },
	'db-dropdown': { sharedName: false },
	'db-footer': { replacement: 'db-footer', sharedName: true },
	'db-header': { replacement: 'db-header', sharedName: true },
	'db-headline': { sharedName: false },
	'db-icon': { replacement: 'db-icon', sharedName: true },
	'db-image': { sharedName: false },
	'db-input': { replacement: 'db-input', sharedName: true },
	'db-language-switcher': { sharedName: false },
	'db-link': { replacement: 'db-link', sharedName: true },
	'db-linklist': { sharedName: false },
	'db-logo': { sharedName: false },
	'db-mainnavigation': { replacement: 'db-navigation', sharedName: false },
	'db-meta': { sharedName: false },
	'db-metanavigation': { sharedName: false },
	'db-notification': { replacement: 'db-notification', sharedName: true },
	'db-notifications': { sharedName: false },
	'db-overflow-menu': { sharedName: false },
	'db-page': { replacement: 'db-page', sharedName: true },
	'db-pagination': { replacement: 'db-pagination', sharedName: true },
	'db-progress': { sharedName: false },
	'db-radio': { replacement: 'db-radio', sharedName: true },
	'db-select': { replacement: 'db-select', sharedName: true },
	'db-sidenavi': {
		replacement: 'db-drawer with db-navigation',
		sharedName: false
	},
	'db-tab': { replacement: 'db-tab-item', sharedName: false },
	'db-tab-bar': { replacement: 'db-tabs', sharedName: false },
	'db-table': { replacement: 'db-table', sharedName: true },
	'db-tag': { replacement: 'db-tag', sharedName: true },
	'db-textarea': { replacement: 'db-textarea', sharedName: true },
	'db-toggle': { replacement: 'db-switch', sharedName: false }
};

/** Options derived once per file and passed to every {@link scanLine} call. */
type ScanContext = {
	/** The file contains markers that only occur in Generation 2 code. */
	readonly hasGeneration2Markers: boolean;
	/** Counts `<db-*>` tags that were skipped as valid Generation 3 markup. */
	skippedSharedTags: number;
};

/** Converts a custom element tag to its wrapper name: db-tab-bar -> TabBar. */
function toPascalCase(tag: string): string {
	return tag
		.replace(/^db-/, '')
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

/** Converts a wrapper name to its custom element tag: DbTabBar -> db-tab-bar. */
function toKebabTag(wrapper: string): string {
	return `db-${wrapper
		.slice(2)
		.replaceAll(/([a-z\d])([A-Z])/g, '$1-$2')
		.toLowerCase()}`;
}

/** Suggestion for a Generation 2 element, rendered for tags or wrappers. */
function elementSuggestion(tag: string, isWrapper: boolean): string {
	const replacement = GENERATION_2_ELEMENTS[tag]?.replacement;
	if (!replacement) {
		return 'No direct Generation 3 equivalent - see the component-migration guide';
	}

	// "db-drawer with db-navigation" -> "DBDrawer with DBNavigation"
	const rendered = isWrapper
		? replacement.replaceAll(
				/db-[\w-]+/g,
				(name) => `DB${toPascalCase(name)}`
			)
		: replacement;

	return `${rendered} (Generation 3) - review changed props/API`;
}

/** Suggestion for an `@db-ui/*` package reference. */
function packageSuggestion(name: string): string {
	const generation2 = GENERATION_2_PACKAGE_MAP[name];
	if (generation2) {
		return `Generation 2 package. Replace with ${generation2}. Update all named imports to Generation 3 component names.`;
	}

	const preRelease = GENERATION_3_PRE_RELEASE_PACKAGE_MAP[name];
	if (preRelease) {
		return `Generation 3 pre-release under the former @db-ui scope, not Generation 2. Replace with ${preRelease} and check the migration guides of each major version since then.`;
	}

	return 'Unknown @db-ui package. Check whether it belongs to Generation 2 or to a Generation 3 pre-release before migrating.';
}

// ---------------------------------------------------------------------------
// Core Scanner
// ---------------------------------------------------------------------------

/**
 Scans a single line for all Generation 2 migration patterns.
 Returns findings with deterministic suggestions from the migration data.
 */
function scanLine(
	line: string,
	lineNumber: number,
	context: ScanContext
): ScanFinding[] {
	const findings: ScanFinding[] = [];
	const ctx = line.length > 120 ? line.slice(0, 120) + '...' : line;

	// --- Generation 2 CSS classes (cmp-*, elm-*, rea-*) ---
	for (const match of line.matchAll(RE_GENERATION_2_CSS_CLASS)) {
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

	// --- Generation 2 Web Components (<db-*>) ---
	for (const match of line.matchAll(RE_DB_CUSTOM_ELEMENT)) {
		const old = match[1];
		const element = GENERATION_2_ELEMENTS[old];
		// Not part of @db-ui/elements (e.g. <db-stack>, <db-shell>): Generation 3 only.
		if (!element) {
			continue;
		}

		// Same tag exists in Generation 3 - only report it with other evidence.
		if (element.sharedName && !context.hasGeneration2Markers) {
			context.skippedSharedTags++;
			continue;
		}

		findings.push({
			line: lineNumber,
			type: 'component',
			found: `<${old}>`,
			context: ctx.trim(),
			suggestion: elementSuggestion(old, false)
		});
	}

	// --- Generation 2 React / Vue wrappers (<Db*>) ---
	for (const match of line.matchAll(RE_GENERATION_2_WRAPPER)) {
		const old = match[1];
		const tag = toKebabTag(old);
		findings.push({
			line: lineNumber,
			type: 'component',
			found: `<${old}>`,
			context: ctx.trim(),
			suggestion: GENERATION_2_ELEMENTS[tag]
				? elementSuggestion(tag, true)
				: `DB${old.slice(2)} (Generation 3) - verify that the component exists`
		});
	}

	// --- Colors ---
	for (const match of line.matchAll(RE_GENERATION_2_COLOR)) {
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
		// Only flag if it's actually a known Generation 2 icon name
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

	// --- Legacy npm packages (@db-ui/*) ---
	for (const match of line.matchAll(RE_DB_UI_PACKAGE)) {
		const old = match[1];
		findings.push({
			line: lineNumber,
			type: 'import',
			found: old,
			context: ctx.trim(),
			suggestion: packageSuggestion(old)
		});
	}

	return findings;
}

// ---------------------------------------------------------------------------
// Tool Handler
// ---------------------------------------------------------------------------

/**
 @public

 Analyzes a file for Generation 2 patterns that need migration to Generation 3.

 Deterministically scans for:
 - Generation 2 CSS classes (cmp-*, elm-*, rea-*)
 - Generation 2 Web Components (<db-*> from @db-ui/elements) and their React /
   Vue wrappers (<Db*>). Tags that also exist in Generation 3 are only reported
   when the file contains other Generation 2 markers.
 - Generation 2 color tokens (db-color-*)
 - Generation 2 icon names (cross-referenced against the icon migration data)
 - @db-ui/* packages, distinguishing Generation 2 from Generation 3 pre-releases

 Returns a JSON report with line numbers, findings, and migration suggestions
 resolved from the statically imported db-ui-migration-map.ts - no LLM guessing needed.
 */
export async function handleScanGeneration2Migration({
	filePath
}: {
	filePath: string;
}): Promise<ToolResult> {
	// Path traversal protection via the shared helper, which also collapses
	// single and double percent-encoding before resolving. Accepts an absolute
	// path as well, as long as it stays inside the workspace root.
	let absolutePath: string;
	try {
		absolutePath = resolveSafePath(process.cwd(), filePath);
	} catch {
		return error(
			`Error: filePath '${filePath}' resolves outside the workspace root. Path traversal is not allowed.`
		);
	}

	if (!existsSync(absolutePath)) {
		return error(
			`Error: File not found: '${absolutePath}'. Provide an absolute path or a path relative to your workspace root.`
		);
	}

	// File size guard: reject files larger than 5 MB
	const stats = await stat(absolutePath);
	if (!stats.isFile()) {
		return error(
			`Error: Expected a file, but '${absolutePath}' is a directory.`
		);
	}

	if (stats.size > MAX_SCAN_SIZE) {
		return error(
			`Error: File too large (${stats.size} bytes). Maximum scan size is ${MAX_SCAN_SIZE} bytes.`
		);
	}

	// Read and scan
	const content = await readFile(absolutePath, 'utf-8');

	// Binary file guard: reject files containing NUL bytes
	if (content.slice(0, 8192).includes('\0')) {
		return error(
			'Error: File appears to be binary. Only text files can be scanned.'
		);
	}

	const lines = content.split('\n');
	const findings: ScanFinding[] = [];
	const context: ScanContext = {
		hasGeneration2Markers: RE_GENERATION_2_MARKER.test(content),
		skippedSharedTags: 0
	};

	for (const [i, line] of lines.entries()) {
		findings.push(...scanLine(line, i + 1, context));
	}

	const skippedNote =
		context.skippedSharedTags > 0
			? `\n\n> Skipped ${context.skippedSharedTags} <db-*> tag(s) that are valid Generation 3 markup (Angular, Vue, Web Components). They are only reported as Generation 2 when the file also contains @db-ui/* packages, cmp-*/elm-*/rea-* classes, <Db*> wrappers or db-color-* tokens.`
			: '';

	if (findings.length === 0) {
		return {
			content: [
				{
					type: 'text',
					text: `No Generation 2 patterns found in ${absolutePath}. The file may already be migrated or does not contain any legacy code.${skippedNote}`
				}
			]
		};
	}

	// The note goes into the header, so the findings budget accounts for it.
	return buildReport(
		absolutePath,
		findings,
		lines.length,
		skippedNote.trim()
	);
}

/**
 Size a single finding contributes to the pretty-printed findings array.
 */
function serializedSize(finding: ScanFinding): number {
	const json = JSON.stringify(finding, null, 2);
	// Inside an array every line carries two extra spaces of indentation,
	// plus the ",\n" that separates two items.
	const indent = json.split('\n').length * 2;
	const separator = 2;

	return json.length + indent + separator;
}

/**
 Returns as many leading findings as fit into `budget` characters of
 pretty-printed JSON. Returns an empty array when even the first does not fit,
 which still yields a parsable (empty) findings array.
 */
function findingsWithinBudget(
	findings: ScanFinding[],
	budget: number
): ScanFinding[] {
	// The enclosing "[\n" and "\n]" of the array.
	let size = 4;
	for (const [index, finding] of findings.entries()) {
		size += serializedSize(finding);
		if (size > budget) {
			return findings.slice(0, index);
		}
	}

	return findings;
}

/**
 Renders the note that explains why the findings array is shorter than the
 count in the header.

 `reported === 0` gets its own wording: telling the caller to "migrate the
 first 0 findings" would be advice it cannot act on.
 */
function renderOmittedNote(reported: number, omitted: number): string {
	if (reported === 0) {
		return `> The report is too large to include a single finding; all ${omitted} were omitted. Split the file or migrate it manually, then scan again.`;
	}

	return `> Listing the first ${reported} findings (sorted by line number); ${omitted} more were omitted to stay within the response limit. Migrate these first, then scan the file again.`;
}

/**
 Renders the unique component names for the header, bounded to
 {@link MAX_COMPONENT_LIST} characters.

 The full count stays in the header regardless, so a truncated list never
 misrepresents how much the file contains.
 */
function renderComponentList(names: string[]): string {
	if (names.length === 0) {
		return 'none';
	}

	const rendered: string[] = [];
	let size = 0;
	for (const name of names) {
		// ", " between two entries.
		const next = size + name.length + (rendered.length > 0 ? 2 : 0);
		if (next > MAX_COMPONENT_LIST) {
			break;
		}

		rendered.push(name);
		size = next;
	}

	const omitted = names.length - rendered.length;
	if (omitted === 0) {
		return rendered.join(', ');
	}

	// Every single name already exceeds the cap - report the count only rather
	// than emitting a list that would have to be cut mid-identifier.
	if (rendered.length === 0) {
		return `${names.length} distinct names, too long to list`;
	}

	return `${rendered.join(', ')}, ... (+${omitted} more)`;
}

/**
 Renders the scan report: a summary header plus the findings as JSON.
 */
function buildReport(
	absolutePath: string,
	findings: ScanFinding[],
	lineCount: number,
	note = ''
): ToolResult {
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

	const header = [
		`## Migration Scan: ${absolutePath}`,
		`**${findings.length} findings** in ${lineCount} lines:`,
		`- ${componentCount} component(s): ${renderComponentList(uniqueComponents)}`,
		`- ${colorCount} color token(s)`,
		`- ${iconCount} icon(s)`,
		`- ${importCount} legacy package reference(s)`,
		...(note ? ['', note] : [])
	];

	// Cap the findings themselves rather than the rendered report: truncating
	// the text would cut the JSON mid-object and leave the fenced block
	// unterminated, so the caller could not parse a single finding while the
	// header still claimed the full count.
	//
	// Clamped at 0: the header is bounded but not tiny, so a budget computed
	// from it can still come out negative, and a negative budget must mean
	// "no room" rather than wrap into nonsense.
	const reported = findingsWithinBudget(
		findings,
		Math.max(
			0,
			MAX_JSON_OUTPUT - header.join('\n').length - REPORT_OVERHEAD
		)
	);
	const omitted = findings.length - reported.length;

	const summary = [
		...header,
		...(omitted > 0
			? ['', renderOmittedNote(reported.length, omitted)]
			: []),
		'',
		'## Findings',
		'```json',
		JSON.stringify(reported, null, 2),
		'```'
	].join('\n');

	return {
		content: [
			{
				type: 'text',
				text: summary
			}
		]
	};
}
