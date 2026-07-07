import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { beforeEach, describe, expect, test } from 'vitest';

const scriptPath = join(import.meta.dirname, '..', 'strip-final-newline.js');

describe('strip-final-newline', () => {
	let temporaryDir: string;

	beforeEach(() => {
		temporaryDir = mkdtempSync(join(tmpdir(), 'strip-newline-'));
	});

	test('removes trailing LF from a file', () => {
		const file = join(temporaryDir, 'with-lf.txt');
		writeFileSync(file, 'content\n');

		execFileSync('node', [scriptPath, file]);

		expect(readFileSync(file, 'utf8')).toBe('content');
	});

	test('does not modify a file without trailing newline', () => {
		const file = join(temporaryDir, 'no-newline.txt');
		writeFileSync(file, 'content');

		execFileSync('node', [scriptPath, file]);

		expect(readFileSync(file, 'utf8')).toBe('content');
	});

	test('handles empty files without error', () => {
		const file = join(temporaryDir, 'empty.txt');
		writeFileSync(file, '');

		execFileSync('node', [scriptPath, file]);

		expect(readFileSync(file, 'utf8')).toBe('');
	});

	test('removes only a single trailing newline', () => {
		const file = join(temporaryDir, 'double-lf.txt');
		writeFileSync(file, 'content\n\n');

		execFileSync('node', [scriptPath, file]);

		expect(readFileSync(file, 'utf8')).toBe('content\n');
	});

	test('processes multiple files in one invocation', () => {
		const file1 = join(temporaryDir, 'file1.txt');
		const file2 = join(temporaryDir, 'file2.txt');
		writeFileSync(file1, 'first\n');
		writeFileSync(file2, 'second\n');

		execFileSync('node', [scriptPath, file1, file2]);

		expect(readFileSync(file1, 'utf8')).toBe('first');
		expect(readFileSync(file2, 'utf8')).toBe('second');
	});

	test('preserves binary content before trailing newline', () => {
		const file = join(temporaryDir, 'snapshot.txt');
		const content = '["Label, edit, required","T","e","s","t"]\n';
		writeFileSync(file, content);

		execFileSync('node', [scriptPath, file]);

		expect(readFileSync(file, 'utf8')).toBe(
			'["Label, edit, required","T","e","s","t"]'
		);
	});
});
