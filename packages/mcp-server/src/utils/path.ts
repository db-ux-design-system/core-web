import { join, resolve, sep } from 'node:path';

/**
 * Absolute path to the assets directory shipped with the published package.
 * The prebuild step copies all required assets (tokens, migration guides, etc.)
 * into this directory. The server reads strictly from here — no monorepo fallbacks.
 */
const ASSETS_DIR = join(import.meta.dirname, '../../assets');

/** Absolute path to the migration guide assets. */
export const MIGRATION_ASSETS_DIR = join(ASSETS_DIR, 'migration');

/**
 * Compiled token files that contain the actual primitive values
 * (rem, px, box-shadow strings) instead of raw SCSS with @each loops.
 * Resolved strictly from assets/tokens/ shipped with the published npm package.
 */
const TOKEN_ASSETS_DIR = join(ASSETS_DIR, 'tokens');

export const TOKEN_COMPILED_FILES = {
	/** All primitive --db-* custom properties with concrete DB theme values. */
	defaultVariables: join(TOKEN_ASSETS_DIR, 'db-variables.scss'),
	/** Density-class overrides (expressive / regular / functional). */
	densityClasses: join(TOKEN_ASSETS_DIR, 'density-all.css')
} as const;

/**
 * Finds a migration guide by name, falling back to the legacy `db-ui-`
 * prefixed key for backwards compatibility with older manifest formats.
 */
export function findGuide(
	guides: Record<string, string>,
	name: string
): string | undefined {
	return guides[name] ?? guides[`db-ui-${name}`];
}

/**
 * Resolves a user-supplied path relative to a base directory and ensures the
 * result stays strictly within that base (path traversal protection).
 *
 * Decodes URL-encoded sequences repeatedly until stable to defeat double-encoding
 * bypass attempts (e.g. %252F → %2F → /).
 *
 * @throws {Error} When the resolved path escapes the base directory.
 */
export function resolveSafePath(baseDir: string, userPath: string): string {
	const absoluteBase = resolve(baseDir);
	let decoded = userPath;
	while (decoded !== decodeURIComponent(decoded)) {
		decoded = decodeURIComponent(decoded);
	}
	const absoluteRequested = resolve(baseDir, decoded);
	if (
		!absoluteRequested.startsWith(absoluteBase + sep) &&
		absoluteRequested !== absoluteBase
	) {
		throw new Error('Path traversal detected');
	}
	return absoluteRequested;
}
