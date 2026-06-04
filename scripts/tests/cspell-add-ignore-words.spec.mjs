import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import {
	addWords,
	extractUnknownWords,
	mergeIgnoreWords
} from '../cspell-add-ignore-words.mjs';

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
	test('extracts and deduplicates unknown words from cspell output', () => {
		const output = `
Unknown word (Foobar)
Unknown word (  Foobar  )
Unknown word (Baz)
Random unrelated output
`;

		expect(extractUnknownWords(output)).toEqual(['Foobar', 'Baz']);
	});
});

describe('mergeIgnoreWords', () => {
	test('trims and merges words into sorted unique output', () => {
		const existing = '  Zebra\nAlpha\n\nBeta  \n';
		const merged = mergeIgnoreWords(existing, ['Beta', 'Gamma', '  Delta']);

		expect(merged).toBe('Alpha\nBeta\nDelta\nGamma\nZebra\n');
	});
});

describe('addWords', () => {
	test('updates ignore file with normalized, deduplicated words', async () => {
		const temporaryPath = await mkdtemp(
			path.join(tmpdir(), 'cspell-ignore-test-')
		);
		temporaryPaths.push(temporaryPath);

		const ignoreFile = path.join(temporaryPath, 'cspellignorewords.txt');
		await writeFile(ignoreFile, 'Alpha\n  Beta \n');

		await addWords(['Beta', 'Gamma', 'Alpha'], ignoreFile);

		const updated = await readFile(ignoreFile, 'utf8');
		expect(updated).toBe('Alpha\nBeta\nGamma\n');
	});
});
