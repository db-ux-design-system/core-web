/**
 * Build-time path constants for the MCP server build scripts.
 *
 * These paths resolve into the monorepo source tree and are ONLY used at
 * build time (by build-manifest.ts). The runtime server reads exclusively
 * from its own assets/ directory — see src/utils/path.ts.
 */
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Absolute path to the monorepo root (core-web/). */
export const REPO_ROOT = resolve(__dirname, '../../..');

/** Absolute path to the component source directory. */
export const COMPONENTS_DIR = join(
	REPO_ROOT,
	'packages/components/src/components'
);

/** Absolute path to the framework output directory. */
export const OUTPUT_DIR = join(REPO_ROOT, 'output');

/** Absolute path to the foundations package root. */
export const FOUNDATIONS_DIR = join(REPO_ROOT, 'packages/foundations');

/** Absolute path to the migration guides in the monorepo (single source of truth). */
export const MIGRATION_DIR = join(REPO_ROOT, 'docs/migration/db-ui');

/** Maps each design token category name to its corresponding SCSS source file. */
export const TOKEN_FILES: Record<string, string> = {
	colors: join(FOUNDATIONS_DIR, 'scss/colors/_variables.scss'),
	typography: join(FOUNDATIONS_DIR, 'scss/fonts/_variables.scss'),
	spacing: join(FOUNDATIONS_DIR, 'scss/_variables.scss'),
	density: join(FOUNDATIONS_DIR, 'scss/density/_variables.scss'),
	animation: join(FOUNDATIONS_DIR, 'scss/animation/_animations.scss'),
	transitions: join(FOUNDATIONS_DIR, 'scss/animation/_transitions.scss')
};
