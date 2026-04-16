import { existsSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';

/**
 * Walks up from `startDir` looking for a directory that contains a
 * `package.json` with a `"workspaces"` field — the conventional marker
 * for a monorepo root.  Falls back to a relative offset from the MCP
 * server source directory so standalone (npx) installs still work.
 */
function findRepoRoot(startDir: string): string {
	let dir = resolve(startDir);
	const { root } = { root: resolve(dir, '/') };
	while (dir !== root) {
		const pkgPath = join(dir, 'package.json');
		if (existsSync(pkgPath)) {
			try {
				// Dynamic import is not needed – a synchronous JSON parse is fine
				// during module initialization.
				// eslint-disable-next-line @typescript-eslint/no-require-imports
				const pkg = JSON.parse(
					// eslint-disable-next-line no-restricted-syntax
					require('node:fs').readFileSync(pkgPath, 'utf8')
				);
				if (pkg.workspaces) {
					return dir;
				}
			} catch {
				// ignore parse errors and keep walking
			}
		}
		dir = resolve(dir, '..');
	}
	// Fallback: relative offset (packages/mcp-server/src/utils → ../../../../)
	return resolve(startDir, '../../../..');
}

const SERVER_DIR = import.meta.dirname;
/** Absolute path to the monorepo root (core-web/). */
export const REPO_ROOT = findRepoRoot(SERVER_DIR);
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
/** Absolute path to the migration guides in the monorepo (single source of truth). */
export const MIGRATION_DIR = join(REPO_ROOT, 'docs/migration/db-ui');
/**
 * Fallback path for standalone installations (e.g. npx @db-ux/mcp-server)
 * where the monorepo root is not available. The prebuild step copies the
 * guides into this directory so they ship with the published package.
 */
export const MIGRATION_ASSETS_DIR = join(
	import.meta.dirname,
	'../../assets/migration'
);
/** Absolute path to curated visual reference images shipped with the MCP server. */
export const VISUALS_DIR = join(
	REPO_ROOT,
	'packages/mcp-server/assets/visuals'
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
 * Compiled token files that contain the actual primitive values
 * (rem, px, box-shadow strings) instead of raw SCSS with @each loops.
 *
 * Primary: monorepo source paths (packages/foundations/...).
 * Fallback: assets/tokens/ shipped with the published npm package.
 */
const ASSETS_DIR = join(import.meta.dirname, '../../assets/tokens');

export const TOKEN_COMPILED_FILES = {
	/** All primitive --db-* custom properties with concrete values. */
	defaultVariables: {
		monorepo: join(FOUNDATIONS_DIR, 'scss/defaults/default-variables.scss'),
		standalone: join(ASSETS_DIR, 'default-variables.scss')
	},
	/** Density-class overrides (expressive / regular / functional). */
	densityClasses: {
		monorepo: join(FOUNDATIONS_DIR, 'build/styles/density/classes/all.css'),
		standalone: join(ASSETS_DIR, 'density-all.css')
	}
} as const;

/**
 * Resolves a user-supplied path relative to a base directory and ensures the
 * result stays strictly within that base (path traversal protection).
 *
 * Decodes URL-encoded sequences repeatedly until stable to defeat double-encoding
 * bypass attempts (e.g. %252F → %2F → /).
 *
 * @throws {Error} When the resolved path escapes the base directory.
 */
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
