import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
import type { Framework } from './types.js';

const SERVER_DIR = import.meta.dirname;
const REPO_ROOT = resolve(SERVER_DIR, '../../..');

export const IS_MONOREPO = existsSync(
	join(REPO_ROOT, 'packages/components/src/components')
);

export const COMPONENTS_DIR = join(REPO_ROOT, 'packages/components/src/components');
export const OUTPUT_DIR = join(REPO_ROOT, 'output');
export const ALL_ICONS_FILE = join(REPO_ROOT, 'packages/foundations/src/all-icons.ts');
export const FOUNDATIONS_DIR = join(REPO_ROOT, 'packages/foundations');
export const DOCS_DIR = join(REPO_ROOT, 'docs');
export const REPO_ROOT_PATH = REPO_ROOT;

export const MAX_FILE_CONTENT = 20_000;
export const MAX_JSON_OUTPUT = 20_000;
export const TOOL_TIMEOUT_MS = 10000;

export function truncate(text: string, limit: number, label = 'TRUNCATED DUE TO SIZE'): string {
	return text.length > limit ? text.substring(0, limit) + `\n... [${label}]` : text;
}

export async function withTimeout<T>(
	operation: Promise<T>,
	timeoutMessage: string
): Promise<T | { content: { type: 'text'; text: string }[]; isError: boolean }> {
	let timer: ReturnType<typeof setTimeout> | undefined;
	const timeoutPromise = new Promise<any>((resolve) => {
		timer = setTimeout(() => {
			resolve({ content: [{ type: 'text', text: timeoutMessage }], isError: true });
		}, TOOL_TIMEOUT_MS);
	});
	const result = await Promise.race([operation, timeoutPromise]);
	if (timer) clearTimeout(timer);
	return result;
}

export const COMPONENT_NOT_FOUND_MSG = (name: string) =>
	`Error: Component '${name}' is not available in the DB UX Design System. Please check your spelling or use the 'list_components' tool to see all valid components.`;

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

export type Manifest = {
	icons: string[];
	components: Record<
		string,
		{
			props: string | null;
			examples: string[];
			exampleCode: Record<Framework, Record<string, string>>;
		}
	>;
	tokens: Record<string, string>;
	docs: Record<string, string>;
};

let _manifest: Manifest | null = null;

export function resetManifestCache() {
	_manifest = null;
}

export async function getManifest(): Promise<Manifest> {
	if (_manifest) return _manifest;
	const manifestPath = join(SERVER_DIR, 'manifest.json');
	if (!existsSync(manifestPath)) {
		throw new Error(`manifest.json not found at ${manifestPath}`);
	}
	try {
		_manifest = JSON.parse(await readFile(manifestPath, 'utf-8')) as Manifest;
	} catch {
		throw new Error('Failed to parse manifest.json — file may be corrupt or incomplete.');
	}
	return _manifest;
}
