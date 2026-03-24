import { existsSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';

const SERVER_DIR = import.meta.dirname;
export const REPO_ROOT = resolve(SERVER_DIR, '../../../..');

export const IS_MONOREPO = existsSync(join(REPO_ROOT, 'packages/components/src/components'));

export const COMPONENTS_DIR = join(REPO_ROOT, 'packages/components/src/components');
export const OUTPUT_DIR = join(REPO_ROOT, 'output');
export const ALL_ICONS_FILE = join(REPO_ROOT, 'packages/foundations/src/all-icons.ts');
export const FOUNDATIONS_DIR = join(REPO_ROOT, 'packages/foundations');
export const DOCS_DIR = join(REPO_ROOT, 'docs');

export const TOKEN_FILES: Record<string, string> = {
	colors: join(FOUNDATIONS_DIR, 'scss/colors/_variables.scss'),
	typography: join(FOUNDATIONS_DIR, 'scss/fonts/_variables.scss'),
	spacing: join(FOUNDATIONS_DIR, 'scss/_variables.scss'),
	density: join(FOUNDATIONS_DIR, 'scss/density/_variables.scss'),
	animation: join(FOUNDATIONS_DIR, 'scss/animation/_animations.scss'),
	transitions: join(FOUNDATIONS_DIR, 'scss/animation/_transitions.scss')
};

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
