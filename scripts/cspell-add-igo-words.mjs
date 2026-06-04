import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';

const IGNORE_FILE = '.config/cspellignorewords.txt';

// Security: Using execFile instead of exec to eliminate shell injection risks
// execFile directly executes the binary without involving a shell
const execFileAsync = promisify(execFile);

async function addWords(words) {
	const content = await readFile(IGNORE_FILE, 'utf8');

	const existing = new Set(content.split(/\r?\n/).filter(Boolean));

	for (const word of words) {
		existing.add(word);
	}

	await writeFile(IGNORE_FILE, [...existing].toSorted().join('\n') + '\n');
}

async function main() {
	try {
		await execFileAsync('pnpm', ['run', 'lint:codespell']);
	} catch (error) {
		const output = `${error.stdout ?? ''}\n${error.stderr ?? ''}`;

		const words = [...output.matchAll(/Unknown word\s+\(([^)]+)\)/g)].map(
			(match) => match[1]
		);

		if (words.length === 0) {
			throw error;
		}

		await addWords(words);

		console.log(`Added ${words.length} words.`);
	}
}

await main();
