import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const IGNORE_FILE = '.config/cspellignorewords.txt';

// Security: Using execFile instead of exec to eliminate shell injection risks
// execFile directly executes the binary without involving a shell
const execFileAsync = promisify(execFile);

const normalizeIgnoreWord = (line) => {
	const commentIndex = line.indexOf('#');

	if (commentIndex !== -1) {
		line = line.slice(0, commentIndex);
	}

	return line.trim();
};

export function extractUnknownWords(output) {
	return [
		...new Set(
			[...output.matchAll(/Unknown word\s+\(([^)]+)\)/g)]
				.map((match) => match[1]?.trim())
				.filter(Boolean)
		)
	];
}

export function mergeIgnoreWords(content, words) {
	const existing = new Set(
		content
			.split(/\r?\n/)
			.map((word) => normalizeIgnoreWord(word))
			.filter(Boolean)
	);

	for (const word of words) {
		const normalizedWord = word.trim();

		if (normalizedWord) {
			existing.add(normalizedWord);
		}
	}

	return [...existing].toSorted().join('\n') + '\n';
}

export async function addWords(words, ignoreFile = IGNORE_FILE) {
	const content = await readFile(ignoreFile, 'utf8');
	await writeFile(ignoreFile, mergeIgnoreWords(content, words));
}

export async function main() {
	try {
		await execFileAsync(
			process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
			['run', 'lint:codespell']
		);
	} catch (error) {
		const output = `${error.stdout ?? ''}\n${error.stderr ?? ''}`;
		const words = extractUnknownWords(output);

		if (words.length === 0) {
			throw error;
		}

		await addWords(words);

		console.log(
			`Ensured ${words.length} word(s) are listed in ${IGNORE_FILE}.`
		);
	}
}

const selfPath = fileURLToPath(import.meta.url);
const isDirectExecution = process.argv.some(
	(arg) => arg !== undefined && path.resolve(arg) === selfPath
);

if (isDirectExecution) {
	await main();
}
