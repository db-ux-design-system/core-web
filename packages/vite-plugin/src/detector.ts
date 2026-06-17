import fg from 'fast-glob';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

/**
 * Walk up the directory tree from `root` to locate a package path inside node_modules.
 * Handles monorepo hoisting where dependencies may live in a parent node_modules.
 * Returns the resolved absolute path or null if not found.
 */
export function resolvePackagePath(
	root: string,
	packagePath: string
): string | null {
	let currentDir = root;
	for (let i = 0; i < 10; i++) {
		const resolved = resolve(currentDir, 'node_modules', packagePath);
		try {
			readdirSync(resolved);
			return resolved;
		} catch {
			// Try parent directory
		}

		const parentDir = resolve(currentDir, '..');
		if (parentDir === currentDir) break;
		currentDir = parentDir;
	}

	return null;
}

/** Return subdirectory names (folders only) from the given path. */
function readDirNames(dirPath: string): string[] {
	try {
		return readdirSync(dirPath, { withFileTypes: true })
			.filter((e) => e.isDirectory())
			.map((e) => e.name);
	} catch {
		return [];
	}
}

/** Return CSS file stems (without .css extension) from the given path, excluding "all.css". */
function readCssNames(dirPath: string): string[] {
	try {
		return readdirSync(dirPath)
			.filter((f) => f.endsWith('.css') && f !== 'all.css')
			.map((f) => f.replace('.css', ''));
	} catch {
		return [];
	}
}

/** Cache of discovered design system values, keyed by project root. */
const cache = new Map<
	string,
	{
		components: Set<string>;
		colors: string[];
		densities: string[];
		fontSizes: string[];
	}
>();

/**
 * Discover all available components, colors, densities, and font sizes
 * by reading the installed @db-ux packages from the filesystem.
 * Results are cached per project root.
 */
function discover(root: string) {
	if (cache.has(root)) return cache.get(root)!;

	// Components
	const compDir = resolvePackagePath(
		root,
		'@db-ux/core-components/build/components'
	);
	const components = new Set<string>(compDir ? readDirNames(compDir) : []);

	// Colors
	const colorDir = resolvePackagePath(
		root,
		'@db-ux/core-foundations/build/styles/colors/classes'
	);
	const colors = colorDir ? readCssNames(colorDir) : [];

	// Densities
	const densityDir = resolvePackagePath(
		root,
		'@db-ux/core-foundations/build/styles/density/classes'
	);
	const densities = densityDir ? readCssNames(densityDir) : [];

	// Font sizes: body/<size>.css + headline/<size>.css → "body-sm", "headline-lg"
	const fontDir = resolvePackagePath(
		root,
		'@db-ux/core-foundations/build/styles/fonts/classes'
	);
	const fontSizes: string[] = [];
	if (fontDir) {
		for (const category of readDirNames(fontDir)) {
			for (const size of readCssNames(resolve(fontDir, category))) {
				fontSizes.push(`${category}-${size}`);
			}
		}
	}

	const result = { components, colors, densities, fontSizes };
	cache.set(root, result);
	return result;
}

/** Public accessor for the discovery cache. */
export function discoverAll(root: string) {
	return discover(root);
}

/**
 * Scan detected component CSS files for referenced colors, densities, and font sizes
 * so the optimizer doesn't strip variables that components depend on.
 */
export function scanComponentDependencies(
	root: string,
	components: Set<string>,
	colors: Set<string>,
	densities: Set<string>,
	fontSizes: Set<string>
): void {
	const compDir = resolvePackagePath(
		root,
		'@db-ux/core-components/build/components'
	);
	if (!compDir) return;

	const {
		colors: validColors,
		densities: validDensities,
		fontSizes: validFontSizes
	} = discover(root);
	const validFontSizeSet = new Set(validFontSizes);

	for (const component of components) {
		const css = readSource(resolve(compDir, component, `${component}.css`));
		if (!css) continue;

		for (const color of validColors) {
			if (css.includes(`--db-${color}-`)) colors.add(color);
		}

		for (const density of validDensities) {
			if (css.includes(`-${density}-`)) densities.add(density);
		}

		for (const m of css.matchAll(/--db-type-(body|headline)-(\w+)/g)) {
			const fs = `${m[1]}-${m[2]}`;
			if (validFontSizeSet.has(fs)) fontSizes.add(fs);
		}
	}
}

/** Convert PascalCase to kebab-case: "NavigationItem" → "navigation-item". */
function toKebabCase(str: string): string {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Build an array of regex patterns to detect usage of design system values.
 * Covers CSS classes (e.g. db-color-cyan), data attributes (e.g. data-color="cyan"),
 * HTML attributes, and JS object notation.
 */
function buildPatterns(
	classPrefix: string,
	dataAttr: string,
	values: string
): RegExp[] {
	return [
		new RegExp(`${classPrefix}(${values})`, 'g'),
		new RegExp(`\\[${dataAttr}=["']?(${values})["']?\\]`, 'g'),
		new RegExp(`${dataAttr}=["'](${values})["']`, 'g'),
		new RegExp(`["']${dataAttr}["']:\\s*["'](${values})["']`, 'g')
	];
}

/** Matches JSX/TSX component usage: <DBButton>, <DBNavigationItem> */
const JSX_COMPONENT_PATTERN = /<DB(\w+)[\s>/]/g;
/** Matches Angular/HTML kebab-case usage: <db-button>, <db-navigation-item> */
const KEBAB_COMPONENT_PATTERN = /<db-([\w-]+)[\s>/]/g;
/** Matches CSS class-based usage: class="db-button ...", className="db-card" */
const CLASS_COMPONENT_PATTERN =
	/(?:class|className)=(?:"[^"]*|'[^']*|\{[^}]*)db-([\w-]+)/g;
/** Matches named imports from @db-ux framework packages: import { DBButton, DBCard } from '...' */
const IMPORT_PATTERN =
	/import\s+\{([^}]+)}\s+from\s+['"]@db-ux\/(?:react|ngx|v|wc)-core-components['"]/g;

/** Glob all source files from the project root, excluding node_modules/dist/build. */
async function scanFiles(root: string): Promise<string[]> {
	return fg(['**/*.{vue,jsx,tsx,ts,html}'], {
		cwd: root,
		absolute: true,
		ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
	});
}

/** Safely read a file's contents, returning null on failure. */
function readSource(filePath: string): string | null {
	try {
		return readFileSync(filePath, 'utf-8');
	} catch {
		return null;
	}
}

/**
 * Scan all project source files to detect which DB UX components are used.
 * Supports JSX (<DBButton>), kebab-case (<db-button>), CSS classes (class="db-button"),
 * and named imports (import { DBButton } from '...').
 */
export async function detectComponents(
	root: string,
	forceInclude: string[]
): Promise<Set<string>> {
	const components = new Set<string>(forceInclude);
	const { components: validComponents } = discover(root);
	const files = await scanFiles(root);

	for (const file of files) {
		const code = readSource(file);
		if (!code) continue;

		// Detect JSX usage: <DBButton>, <DBNavigationItem>
		for (const match of code.matchAll(JSX_COMPONENT_PATTERN)) {
			const name = toKebabCase(match[1]);
			if (validComponents.has(name)) {
				components.add(name);
			}
		}

		// Detect kebab-case usage: <db-button>, <db-navigation-item>
		for (const match of code.matchAll(KEBAB_COMPONENT_PATTERN)) {
			if (validComponents.has(match[1])) {
				components.add(match[1]);
			}
		}

		// Detect class-based usage: class="db-button ..."
		for (const match of code.matchAll(CLASS_COMPONENT_PATTERN)) {
			// Extract all db-* names from the matched attribute value
			const fragment = match[0];
			for (const inner of fragment.matchAll(/db-([\w-]+)/g)) {
				if (validComponents.has(inner[1])) {
					components.add(inner[1]);
				}
			}
		}

		// Detect from imports: import { DBButton, DBCard } from '...'
		for (const match of code.matchAll(IMPORT_PATTERN)) {
			const importList = match[1];
			for (const nameMatch of importList.matchAll(/\bDB(\w+)\b/g)) {
				const name = toKebabCase(nameMatch[1]);
				if (validComponents.has(name)) {
					components.add(name);
				}
			}
		}
	}

	return components;
}

/**
 * Shared detection logic for colors, densities, and font sizes.
 * Scans all project source files for class names and data attributes
 * matching the given patterns, returning the set of detected values.
 */
async function detectByPatterns(
	root: string,
	forceInclude: string[],
	classPrefix: string,
	dataAttr: string,
	validValues: string[],
	mapMatch?: (match: RegExpMatchArray) => string | null
): Promise<Set<string>> {
	const result = new Set<string>(forceInclude);
	if (validValues.length === 0) return result;

	const patterns = buildPatterns(
		classPrefix,
		dataAttr,
		validValues.join('|')
	);
	const files = await scanFiles(root);

	for (const file of files) {
		const code = readSource(file);
		if (!code) continue;

		for (const pattern of patterns) {
			for (const match of code.matchAll(pattern)) {
				const value = mapMatch ? mapMatch(match) : match[1];
				if (value) result.add(value);
			}
		}
	}

	return result;
}

/** Detect which color schemes are used in the project (e.g. "cyan", "brand"). */
export async function detectColors(
	root: string,
	forceInclude: string[]
): Promise<Set<string>> {
	const { colors } = discover(root);
	return detectByPatterns(
		root,
		forceInclude,
		'db-color-',
		'data-color',
		colors
	);
}

/** Detect which density variants are used in the project (e.g. "functional", "expressive"). */
export async function detectDensities(
	root: string,
	forceInclude: string[]
): Promise<Set<string>> {
	const { densities } = discover(root);
	return detectByPatterns(
		root,
		forceInclude,
		'db-density-',
		'data-density',
		densities
	);
}

/** Detect which font size combinations are used in the project (e.g. "body-md", "headline-lg"). */
export async function detectFontSizes(
	root: string,
	forceInclude: string[]
): Promise<Set<string>> {
	const { fontSizes: validFontSizes } = discover(root);
	if (validFontSizes.length === 0) return new Set<string>(forceInclude);

	const categories = [...new Set(validFontSizes.map((f) => f.split('-')[0]))];
	const sizes = [...new Set(validFontSizes.map((f) => f.split('-')[1]))];
	const validSet = new Set(validFontSizes);

	return detectByPatterns(
		root,
		forceInclude,
		'db-font-size-',
		'data-font-size',
		[`(${categories.join('|')})-(${sizes.join('|')})`],
		(match) => {
			const value = `${match[1]}-${match[2]}`;
			return validSet.has(value) ? value : null;
		}
	);
}
