import { join, resolve, sep } from 'node:path';

const SERVER_DIR = import.meta.dirname;
/** Absolute path to the monorepo root (core-web/). */
export const REPO_ROOT = resolve(SERVER_DIR, '../../../..');
/** Absolute path to the component source directory. */
export const COMPONENTS_DIR = join(
	REPO_ROOT,
	'packages/components/src/components'
);
/** Absolute path to the framework output directory. */
export const OUTPUT_DIR = join(REPO_ROOT, 'output');
/** Absolute path to the foundations package root. */
export const FOUNDATIONS_DIR = join(REPO_ROOT, 'packages/foundations');
/** Absolute path to the top-level docs directory. */
export const DOCS_DIR = join(REPO_ROOT, 'docs');
/** Absolute path to the migration guides directory. */
export const MIGRATION_DIR = join(
	REPO_ROOT,
	'packages/mcp-server/docs/migration'
);
/** Maps each design token category name to its corresponding SCSS source file. */
export const TOKEN_FILES: Record<string, string> = {
	colors: join(FOUNDATIONS_DIR, 'scss/colors/_variables.scss'),
	typography: join(FOUNDATIONS_DIR, 'scss/fonts/_variables.scss'),
	spacing: join(FOUNDATIONS_DIR, 'scss/_variables.scss'),
	density: join(FOUNDATIONS_DIR, 'scss/density/_variables.scss'),
	animation: join(FOUNDATIONS_DIR, 'scss/animation/_animations.scss'),
	transitions: join(FOUNDATIONS_DIR, 'scss/animation/_transitions.scss')
};

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
