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

	describe('--fix mode', () => {
		test('removes trailing LF from a file', () => {
			const file = join(temporaryDir, 'with-lf.txt');
			writeFileSync(file, 'content\n');

			execFileSync('node', [scriptPath, '--fix', file]);

			expect(readFileSync(file, 'utf8')).toBe('content');
		});

		test('does not modify a file without trailing newline', () => {
			const file = join(temporaryDir, 'no-newline.txt');
			writeFileSync(file, 'content');

			execFileSync('node', [scriptPath, '--fix', file]);

			expect(readFileSync(file, 'utf8')).toBe('content');
		});

		test('handles empty files without error', () => {
			const file = join(temporaryDir, 'empty.txt');
			writeFileSync(file, '');

			execFileSync('node', [scriptPath, '--fix', file]);

			expect(readFileSync(file, 'utf8')).toBe('');
		});

		test('removes all trailing newlines', () => {
			const file = join(temporaryDir, 'double-lf.txt');
			writeFileSync(file, 'content\n\n');

			execFileSync('node', [scriptPath, '--fix', file]);

			expect(readFileSync(file, 'utf8')).toBe('content');
		});

		test('processes multiple files in one invocation', () => {
			const file1 = join(temporaryDir, 'file1.txt');
			const file2 = join(temporaryDir, 'file2.txt');
			writeFileSync(file1, 'first\n');
			writeFileSync(file2, 'second\n');

			execFileSync('node', [scriptPath, '--fix', file1, file2]);

			expect(readFileSync(file1, 'utf8')).toBe('first');
			expect(readFileSync(file2, 'utf8')).toBe('second');
		});

		test('preserves content before trailing newline', () => {
			const file = join(temporaryDir, 'snapshot.txt');
			const content = '["Label, edit, required","T","e","s","t"]\n';
			writeFileSync(file, content);

			execFileSync('node', [scriptPath, '--fix', file]);

			expect(readFileSync(file, 'utf8')).toBe(
				'["Label, edit, required","T","e","s","t"]'
			);
		});

		test('strips trailing CRLF', () => {
			const file = join(temporaryDir, 'crlf.txt');
			writeFileSync(file, 'content\r\n');

			execFileSync('node', [scriptPath, '--fix', file]);

			expect(readFileSync(file, 'utf8')).toBe('content');
		});

		test('strips multiple trailing CRLF', () => {
			const file = join(temporaryDir, 'multi-crlf.txt');
			writeFileSync(file, 'content\r\n\r\n');

			execFileSync('node', [scriptPath, '--fix', file]);

			expect(readFileSync(file, 'utf8')).toBe('content');
		});
	});

	describe('lint mode (no --fix)', () => {
		test('exits with code 0 when no trailing newline', () => {
			const file = join(temporaryDir, 'clean.txt');
			writeFileSync(file, 'content');

			// Should not throw (exit code 0)
			execFileSync('node', [scriptPath, file]);
		});

		test('exits with code 1 when trailing newline found', () => {
			const file = join(temporaryDir, 'dirty.txt');
			writeFileSync(file, 'content\n');

			const result = (() => {
				try {
					execFileSync('node', [scriptPath, file], {
						encoding: 'utf8'
					});
					return { exitCode: 0, stderr: '' };
				} catch (error: unknown) {
					const execError = error as {
						status: number;
						stderr: string;
					};
					return {
						exitCode: execError.status,
						stderr: execError.stderr
					};
				}
			})();

			expect(result.exitCode).toBe(1);
			expect(result.stderr).toContain('has trailing newline');
		});

		test('does not modify the file', () => {
			const file = join(temporaryDir, 'untouched.txt');
			writeFileSync(file, 'content\n');

			try {
				execFileSync('node', [scriptPath, file]);
			} catch {
				// Expected to fail
			}

			expect(readFileSync(file, 'utf8')).toBe('content\n');
		});

		test('reports all offending files', () => {
			const file1 = join(temporaryDir, 'bad1.txt');
			const file2 = join(temporaryDir, 'bad2.txt');
			writeFileSync(file1, 'first\n');
			writeFileSync(file2, 'second\n');

			const result = (() => {
				try {
					execFileSync('node', [scriptPath, file1, file2], {
						encoding: 'utf8'
					});
					return { exitCode: 0, stderr: '' };
				} catch (error: unknown) {
					const execError = error as {
						status: number;
						stderr: string;
					};
					return {
						exitCode: execError.status,
						stderr: execError.stderr
					};
				}
			})();

			expect(result.exitCode).toBe(1);
			expect(result.stderr).toContain('bad1.txt');
			expect(result.stderr).toContain('bad2.txt');
		});
	});
});
