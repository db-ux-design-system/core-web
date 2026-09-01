#!/usr/bin/env node
/**
 * Checks or strips trailing newlines (LF and CRLF) from screen-reader snapshot files.
 *
 * Playwright's toMatchSnapshot() compares the in-memory string byte-for-byte
 * against the snapshot file on disk. The string never has a trailing newline,
 * so the file must not have one either.
 *
 * Usage:
 *   node scripts/strip-final-newline.js [--fix] <file|glob…>
 *
 *   --fix    Strip trailing newlines (default: lint-only, exits with code 1 if found)
 *
 * Without --fix, the script reports files with trailing newlines and exits
 * with code 1 if any are found (useful for CI checks).
 * With --fix, the script strips trailing newlines in-place (useful for
 * lint-staged and self-healing).
 *
 * Glob patterns are expanded cross-platform via Node's fs.globSync.
 */
import { globSync, readFileSync, writeFileSync } from 'node:fs';
import { argv, exit } from 'node:process';

const args = argv.slice(2);
const fix = args.includes('--fix');
const patterns = args.filter((arg) => arg !== '--fix');

// Expand globs cross-platform
const files = patterns.flatMap((pattern) =>
	pattern.includes('*') ? globSync(pattern) : [pattern]
);

let hasIssues = false;

for (const file of files) {
	const content = readFileSync(file);
	if (content.length > 0 && content.at(-1) === 0x0a) {
		let end = content.length;
		while (
			end > 0 &&
			(content[end - 1] === 0x0a || content[end - 1] === 0x0d)
		) {
			end--;
		}

		if (fix) {
			writeFileSync(file, content.subarray(0, end));
		} else {
			console.error(`${file}: has trailing newline`);
			hasIssues = true;
		}
	}
}

if (!fix && hasIssues) {
	exit(1);
}
