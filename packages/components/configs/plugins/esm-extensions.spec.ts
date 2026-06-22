import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// The plugin is CommonJS; import its named exports for unit testing.
const {
	resolveEsmPath,
	fixFileImports
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./esm-extensions.cjs');

let tmpDir: string;

const writeFile = (relativePath: string, content = '') => {
	const absolute = path.join(tmpDir, relativePath);
	fs.mkdirSync(path.dirname(absolute), { recursive: true });
	fs.writeFileSync(absolute, content, 'utf-8');
	return absolute;
};

beforeEach(() => {
	tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'esm-extensions-'));
});

afterEach(() => {
	fs.rmSync(tmpDir, { recursive: true, force: true });
	vi.restoreAllMocks();
});

describe('resolveEsmPath', () => {
	it('leaves non-relative (bare) specifiers untouched', () => {
		const from = writeFile('src/component.ts');
		expect(resolveEsmPath('react', from)).toBe('react');
		expect(resolveEsmPath('@db-ux/core-foundations', from)).toBe(
			'@db-ux/core-foundations'
		);
	});

	it('leaves specifiers that already have an explicit extension', () => {
		const from = writeFile('src/component.ts');
		for (const specifier of [
			'./styles.css',
			'./styles.scss',
			'./data.json',
			'./already.js',
			'./module.mjs',
			'./module.cjs',
			'./sibling.vue'
		]) {
			expect(resolveEsmPath(specifier, from)).toBe(specifier);
		}
	});

	it('appends .js to a relative file import (.ts source)', () => {
		const from = writeFile('src/component.ts');
		writeFile('src/model.ts');
		expect(resolveEsmPath('./model', from)).toBe('./model.js');
	});

	it('appends .js to a relative file import (.tsx source)', () => {
		const from = writeFile('src/components/tabs/tabs.ts');
		writeFile('src/components/button/button.tsx');
		expect(resolveEsmPath('../button/button', from)).toBe(
			'../button/button.js'
		);
	});

	it('appends /index.js for a directory import with an index file', () => {
		const from = writeFile('src/index.ts');
		writeFile('src/components/accordion/index.ts');
		expect(resolveEsmPath('./components/accordion', from)).toBe(
			'./components/accordion/index.js'
		);
	});

	it('appends .vue to a barrel re-export pointing at a .vue file without warning', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const from = writeFile('src/components/accordion/index.ts');
		writeFile('src/components/accordion/accordion.vue');
		expect(resolveEsmPath('./accordion', from)).toBe('./accordion.vue');
		expect(warn).not.toHaveBeenCalled();
	});

	it('warns and returns the path unchanged when nothing resolves', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const from = writeFile('src/component.ts');
		expect(resolveEsmPath('./does-not-exist', from)).toBe(
			'./does-not-exist'
		);
		expect(warn).toHaveBeenCalledOnce();
	});
});

describe('fixFileImports', () => {
	it('rewrites import, re-export and side-effect specifiers', () => {
		writeFile('src/model.ts');
		writeFile('src/utils/index.ts');
		writeFile('src/side-effect.ts');
		const from = writeFile(
			'src/component.ts',
			[
				'import { Model } from "./model";',
				'export * from "./utils";',
				'import "./side-effect";',
				'import React from "react";'
			].join('\n')
		);

		fixFileImports(from);

		expect(fs.readFileSync(from, 'utf-8')).toBe(
			[
				'import { Model } from "./model.js";',
				'export * from "./utils/index.js";',
				'import "./side-effect.js";',
				'import React from "react";'
			].join('\n')
		);
	});

	it('does not rewrite when there is nothing to change', () => {
		const from = writeFile(
			'src/component.ts',
			'import React from "react";\n'
		);
		const before = fs.readFileSync(from, 'utf-8');
		fixFileImports(from);
		expect(fs.readFileSync(from, 'utf-8')).toBe(before);
	});

	it('is a no-op for a non-existent file', () => {
		expect(() =>
			fixFileImports(path.join(tmpDir, 'missing.ts'))
		).not.toThrow();
	});
});
