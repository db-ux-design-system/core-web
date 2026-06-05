import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ignoreFilePath = fileURLToPath(
	new URL('../.config/cspellignorewords.txt', import.meta.url)
);
type ExecFileError = Error & { stdout?: string; stderr?: string };

const runCodespell = async (): Promise<void> => {
	await new Promise<void>((resolve, reject) => {
		// Security: Using execFile instead of exec to eliminate shell injection risks
		// execFile directly executes the binary without involving a shell
		execFile(
			process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
			['run', 'lint:codespell'],
			(error, stdout, stderr) => {
				if (error) {
					const execError = error as ExecFileError;
					execError.stdout = stdout;
					execError.stderr = stderr;
					reject(execError);
					return;
				}

				resolve();
			}
		);
	});
};

const normalizeIgnoreWord = (line: string): string => {
	const commentIndex = line.indexOf('#');

	if (commentIndex !== -1) {
		line = line.slice(0, commentIndex);
	}

	return line.trim();
};

const hasComment = (line: string): boolean => {
	return line.includes('#');
};

export function extractUnknownWords(output: string): string[] {
	return [
		...new Set(
			[...output.matchAll(/Unknown word\s+\(([^)]+)\)/g)]
				.map((match) => match[1]?.trim())
				.filter(Boolean)
		)
	];
}

export function mergeIgnoreWords(content: string, words: string[]): string {
	const entries = new Map<string, string>();

	for (const line of content.split(/\r?\n/)) {
		const normalizedWord = normalizeIgnoreWord(line);

		if (!normalizedWord) {
			continue;
		}

		const storedLine = hasComment(line) ? line.trimEnd() : normalizedWord;

		entries.set(normalizedWord, storedLine);
	}

	for (const word of words) {
		const normalizedWord = word.trim();

		if (!normalizedWord || entries.has(normalizedWord)) {
			continue;
		}

		entries.set(normalizedWord, normalizedWord);
	}

	return (
		[...entries.entries()]
			.toSorted(([a], [b]) =>
				a.toLowerCase().localeCompare(b.toLowerCase())
			)
			.map(([, line]) => line)
			.join('\n') + '\n'
	);
}

export async function addWords(
	words: string[],
	ignoreFile = ignoreFilePath
): Promise<void> {
	const content = await readFile(ignoreFile, 'utf8');
	await writeFile(ignoreFile, mergeIgnoreWords(content, words));
}

export async function main(): Promise<void> {
	try {
		await runCodespell();

		console.log('No spelling issues found.');
	} catch (error: unknown) {
		const execError = error as ExecFileError;
		const output = `${execError.stdout ?? ''}\n${execError.stderr ?? ''}`;
		const words = extractUnknownWords(output);

		if (words.length === 0) {
			throw error;
		}

		await addWords(words);

		console.log(
			`Ensured ${words.length} word(s) are listed in ${ignoreFilePath}.`
		);
	}
}

const selfPath = fileURLToPath(import.meta.url);
const isDirectExecution =
	process.argv[1] !== undefined && path.resolve(process.argv[1]) === selfPath;

if (isDirectExecution) {
	await main();
}
