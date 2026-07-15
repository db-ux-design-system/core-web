import fs from 'node:fs';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createTempDir, removeTempDir, writeFileIn } from '../test-utils';
import { describeBuildPostPlugin } from './augmentation-test-utils';

// The plugin is CommonJS; import its named exports for unit testing.
const {
	appendFocusgroupAugmentation
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./focusgroup.cjs');

// The factory default export is the Mitosis plugin itself.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const focusgroupPlugin = require('./focusgroup.cjs');

let tmpDir: string;

const writeFile = (relativePath: string, content = '') =>
	writeFileIn(tmpDir, relativePath, content);

beforeEach(() => {
	tmpDir = createTempDir('focusgroup');
});

afterEach(() => {
	removeTempDir(tmpDir);
	vi.restoreAllMocks();
});

describe('appendFocusgroupAugmentation', () => {
	it('appends the augmentation to an entrypoint', () => {
		const from = writeFile(
			'index.ts',
			"export * from './components/tab-list';\n"
		);

		const written = appendFocusgroupAugmentation(from);

		const result = fs.readFileSync(from, 'utf-8');
		expect(written).toBe(true);
		expect(result).toContain('declare module "react"');
		expect(result).toContain('focusgroup?: string | undefined;');
		// Original exports must be preserved.
		expect(result).toContain("export * from './components/tab-list';");
	});

	it('normalizes trailing whitespace to a single blank line before the augmentation', () => {
		const from = writeFile(
			'index.ts',
			"export * from './components/tab-list'"
		);

		appendFocusgroupAugmentation(from);

		const result = fs.readFileSync(from, 'utf-8');
		expect(result).toContain(
			"export * from './components/tab-list'\n\n/**"
		);
	});

	it('warns and is a no-op for a non-existent file', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

		const written = appendFocusgroupAugmentation(
			path.join(tmpDir, 'missing.ts')
		);

		expect(written).toBe(false);
		expect(warn).toHaveBeenCalledOnce();
	});
});

describeBuildPostPlugin({
	pluginFactory: focusgroupPlugin,
	getTmpDir: () => tmpDir,
	writeFile,
	indexContent: "export * from './components/tab-list';\n",
	expectedMarker: 'declare module "react"'
});
