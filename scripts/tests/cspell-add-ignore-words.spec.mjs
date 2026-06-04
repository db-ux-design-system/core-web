import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { afterEach, describe, expect, test } from 'vitest';
import {
	addWords,
	extractUnknownWords,
	mergeIgnoreWords
} from '../cspell-add-ignore-words.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixturesDir = path.join(__dirname, 'fixtures');
const fixturesOutDir = path.join(fixturesDir, 'out');

const temporaryPaths = [];

afterEach(async () => {
	await Promise.all(
		temporaryPaths.map(async (temporaryPath) =>
			rm(temporaryPath, { recursive: true, force: true })
		)
	);
	temporaryPaths.length = 0;
});

describe('extractUnknownWords', () => {
	test('extracts and deduplicates unknown words from cspell output', async () => {
		const input = await readFile(
			path.join(fixturesDir, 'cspell-extract-unknown-words.in.txt'),
			'utf8'
		);

		expect(extractUnknownWords(input)).toEqual(['Foobar', 'Baz']);
	});
});

describe('mergeIgnoreWords', () => {
	test('trims and merges words into sorted unique output', async () => {
		const existing = await readFile(
			path.join(fixturesDir, 'cspell-merge-ignore-words.in.txt'),
			'utf8'
		);
		const expected = await readFile(
			path.join(fixturesOutDir, 'cspell-merge-ignore-words.out.txt'),
			'utf8'
		);

		const merged = mergeIgnoreWords(existing, ['Beta', 'Gamma', '  Delta']);

		expect(merged).toBe(expected);
	});
});

describe('addWords', () => {
	test('updates ignore file with normalized, deduplicated words', async () => {
		const temporaryPath = await mkdtemp(
			path.join(tmpdir(), 'cspell-ignore-test-')
		);
		temporaryPaths.push(temporaryPath);

		const input = await readFile(
			path.join(fixturesDir, 'cspell-add-words.in.txt'),
			'utf8'
		);
		const expected = await readFile(
			path.join(fixturesOutDir, 'cspell-add-words.out.txt'),
			'utf8'
		);

		const ignoreFile = path.join(temporaryPath, 'cspellignorewords.txt');
		await writeFile(ignoreFile, input);

		await addWords(['Beta', 'Gamma', 'Alpha'], ignoreFile);

		const updated = await readFile(ignoreFile, 'utf8');
		expect(updated).toBe(expected);
	});
});
