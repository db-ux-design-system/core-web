import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import type { Framework } from '../types.js';

const SERVER_DIR = resolve(import.meta.dirname, '..');

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
