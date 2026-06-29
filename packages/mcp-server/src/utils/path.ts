import { join, resolve } from 'node:path';

/**
 * Normalizes a path to use forward slashes on all platforms.
 * Used internally so that startsWith checks work cross-platform.
 */
function normalize(p: string): string {
	return p.replaceAll('\\', '/');
}

/**
 * Absolute path to the assets directory shipped with the published package.
 * The prebuild step copies all required assets (tokens, migration guides, etc.)
 * into this directory. The server reads strictly from here — no monorepo fallbacks.
 */
const ASSETS_DIR = join(import.meta.dirname, '../../assets');

/** Absolute path to the migration guide assets. */
export const MIGRATION_ASSETS_DIR = join(ASSETS_DIR, 'migration');

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
	const absoluteBase = normalize(resolve(baseDir));
	let decoded = userPath;
	while (decoded !== decodeURIComponent(decoded)) {
		decoded = decodeURIComponent(decoded);
	}

	const absoluteRequested = normalize(resolve(baseDir, decoded));
	if (
		!absoluteRequested.startsWith(absoluteBase + '/') &&
		absoluteRequested !== absoluteBase
	) {
		throw new Error('Path traversal detected');
	}

	return absoluteRequested;
}
