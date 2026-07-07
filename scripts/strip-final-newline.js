#!/usr/bin/env node
/**
 * Strips a trailing newline from files passed as arguments.
 *
 * Playwright's toMatchSnapshot() compares the in-memory string byte-for-byte
 * against the snapshot file on disk. The string never has a trailing newline,
 * so the file must not have one either.
 *
 * Usage (lint-staged): node scripts/strip-final-newline.js <file…>
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { argv } from 'node:process';

const files = argv.slice(2);

for (const file of files) {
	const content = readFileSync(file);
	if (content.length > 0 && content.at(-1) === 0x0a) {
		writeFileSync(file, content.subarray(0, -1));
	}
}
