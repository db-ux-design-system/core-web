import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import {
	type ToolResult,
	err,
	MAX_JSON_OUTPUT,
	TOKEN_COMPILED_FILES,
	truncate
} from '../utils';
import { getManifest } from '../utils/manifest';

/**
 * Categories whose SCSS sources use @each loops or mixins, making the raw
 * SCSS useless for an LLM. For these we read the compiled CSS/SCSS files
 * that contain concrete primitive values (rem, px, box-shadow strings).
 */
const COMPILED_CATEGORIES = new Set(['spacing', 'elevation', 'density']);

/**
 * Regex filters applied per category when reading from compiled files.
 * Only lines matching the pattern are returned, keeping the output focused.
 */
const CATEGORY_LINE_FILTERS: Record<string, RegExp> = {
	spacing: /--db-spacing/,
	elevation: /--db-elevation/,
	density: /--db-(?:spacing|sizing|density)/
};

/**
 * Resolves a compiled token file path with monorepo → standalone fallback.
 * Returns the first path that exists, or null if neither is available.
 */
function resolveTokenFile(paths: {
	monorepo: string;
	standalone: string;
}): string | null {
	if (existsSync(paths.monorepo)) return paths.monorepo;
	if (existsSync(paths.standalone)) return paths.standalone;
	return null;
}

/**
 * Reads a file and extracts lines matching the filter plus any continuation
 * lines (values on the next line for multiline CSS declarations like elevation).
 */
async function readFilteredLines(
	filePath: string,
	filter: RegExp
): Promise<string> {
	let content: string;
	try {
		content = await readFile(filePath, 'utf-8');
	} catch {
		// Graceful degradation: if file is unreadable (permissions, race condition),
		// skip this source instead of crashing the server.
		return '';
	}

	const allLines = content.split('\n');
	const result: string[] = [];

	for (let i = 0; i < allLines.length; i++) {
		if (filter.test(allLines[i])) {
			// Include the matching line
			result.push(allLines[i]);
			// If the line ends with a colon (no value on same line), include
			// subsequent indented continuation lines (multiline values)
			if (allLines[i].trimEnd().endsWith(':')) {
				while (
					i + 1 < allLines.length &&
					/^\s/.test(allLines[i + 1]) &&
					!allLines[i + 1].trim().startsWith('--')
				) {
					i++;
					result.push(allLines[i]);
				}
			}
		}
	}

	return result.join('\n');
}

/**
 * Reads compiled token sources for spacing, elevation, or density.
 * Returns filtered, concrete CSS custom property declarations.
 */
async function readCompiledTokens(category: string): Promise<string | null> {
	const filter = CATEGORY_LINE_FILTERS[category];
	if (!filter) return null;

	const sections: string[] = [];

	// 1. Primitive values from DB theme (db-variables.scss)
	const defaultsPath = resolveTokenFile(
		TOKEN_COMPILED_FILES.defaultVariables
	);
	if (defaultsPath) {
		const lines = await readFilteredLines(defaultsPath, filter);
		if (lines) {
			sections.push(
				`/* --- Primitive token values (db-variables.scss) --- */\n${lines}`
			);
		}
	}

	// 2. Density class overrides (only for density and spacing)
	if (category === 'density' || category === 'spacing') {
		const densityPath = resolveTokenFile(
			TOKEN_COMPILED_FILES.densityClasses
		);
		if (densityPath) {
			const lines = await readFilteredLines(densityPath, filter);
			if (lines) {
				sections.push(
					`/* --- Density class overrides (all.css) --- */\n${lines}`
				);
			}
		}
	}

	return sections.length > 0 ? sections.join('\n\n') : null;
}

/** Returns all available design token categories, filtered to those with existing SCSS files. */
export async function handleListDesignTokenCategories(): Promise<ToolResult> {
	const manifest = await getManifest();
	const categories = [
		...new Set([
			...Object.keys(manifest.tokens),
			'elevation' // available via compiled files even if not in manifest
		])
	];
	return {
		content: [{ type: 'text', text: JSON.stringify(categories, null, 2) }]
	};
}

/**
 * Returns CSS custom properties (--db-*) and SCSS variables ($db-*) for a given category.
 *
 * For spacing, elevation, and density: reads compiled CSS/SCSS files that
 * contain the concrete primitive values (e.g. 0.75rem, box-shadow strings).
 *
 * For all other categories (colors, typography, animation, transitions):
 * reads raw SCSS from the manifest as before.
 */
export async function handleGetDesignTokens({
	category
}: {
	category: string;
}): Promise<ToolResult> {
	// --- Compiled path for categories with @each / mixin problems ---
	if (COMPILED_CATEGORIES.has(category)) {
		const result = await readCompiledTokens(category);
		if (result) {
			return {
				content: [
					{ type: 'text', text: truncate(result, MAX_JSON_OUTPUT) }
				]
			};
		}
		// Fall through to manifest if compiled files are unavailable
	}

	// --- Manifest path for simple categories ---
	const manifest = await getManifest();
	const source = manifest.tokens[category];
	if (!source) {
		return err(
			`Error: unknown category '${category}'. Available: ${Object.keys(manifest.tokens).join(', ')}, elevation`
		);
	}
	const lines = source
		.split('\n')
		.filter((line) => /--db-|^\$db-/.test(line));
	return {
		content: [
			{
				type: 'text',
				text: truncate(
					lines.length > 0 ? lines.join('\n') : source,
					MAX_JSON_OUTPUT
				)
			}
		]
	};
}
