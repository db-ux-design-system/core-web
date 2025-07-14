import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const GITHUB_DIR = '../../../.github';
const MARKER_START =
	'<!-- START:: @db-ux/core-components - Copilot-Instructions -->';
const MARKER_END =
	'<!-- END:: @db-ux/core-components - Copilot-Instructions -->';

/**
 * Check if a file exists at the given path.
 * @param filePath {string} - The path to the file.
 * @returns {Promise<boolean>} - Resolves to true if the file exists, false otherwise.
 */
async function checkFileExists(filePath) {
	try {
		await fs.access(filePath);
		return true;
	} catch {
		return false;
	}
}

/**
 * Read the content of a file at the given path.
 * @param filePath {string} - The path to the file.
 * @returns {Promise<string>} - Resolves to the content of the file as a string.
 */
async function readFileContent(filePath) {
	try {
		return await fs.readFile(filePath, 'utf8');
	} catch (error) {
		throw new Error(`❌ Failed to read file: ${error.message}`);
	}
}

/**
 * Write or replace a block of text in a file.
 * @param destFile {string} - The destination file path.
 * @param block {string} - The block of text to write.
 * @returns {Promise<void>} - Resolves when the operation is complete.
 */
async function writeOrReplaceBlock(destFile, block) {
	try {
		const existing = await fs.readFile(destFile, 'utf8');

		const startIdx = existing.indexOf(MARKER_START);
		const endIdx = existing.indexOf(MARKER_END);

		if (startIdx !== -1 && endIdx > startIdx) {
			const before = existing.slice(0, startIdx);
			const after = existing.slice(endIdx + MARKER_END.length);
			const updated = before + block + after;
			await fs.writeFile(destFile, updated, 'utf8');
			console.info(`✅  Replaced existing instructions in ${destFile}`);
			return;
		}

		if (startIdx !== -1 || endIdx >= 0) {
			console.error(
				'❌  Found only one marker, please fix .github/copilot-instructions.md'
			);
			return;
		}

		await fs.appendFile(destFile, block, 'utf8');
		console.info(`✅  Appended instructions to existing ${destFile}`);
	} catch (error) {
		if (error.code === 'ENOENT') {
			await fs.writeFile(destFile, block, 'utf8');
			console.info(`✅  Created new instructions file at ${destFile}`);
		} else {
			throw new Error(
				`❌  Error writing to ${destFile}: ${error.message}`
			);
		}
	}
}

/**
 * Copy instructions from the source file to the destination file.
 * @returns {Promise<void>} - Resolves when the copy operation is complete.
 */
async function copyCopilotInstructions() {
	const rootDir = path.resolve(__dirname, '..');
	const srcFile = path.join(rootDir, '../.github', 'copilot-instructions.md');
	const destDir = path.resolve(process.cwd(), GITHUB_DIR);
	const destFile = path.join(destDir, 'copilot-instructions.md');

	console.log(`📂  destDir: ${destDir}`);

	if (!(await checkFileExists(srcFile))) {
		console.warn(`⚠️  Source not found: ${srcFile}. Skipping.`);
		return;
	}

	try {
		await fs.mkdir(destDir, { recursive: true });
	} catch (error) {
		throw new Error(
			`❌  Could not create directory ${destDir}: ${error.message}`
		);
	}

	const content = await readFileContent(srcFile);
	const block = `\n\n${MARKER_START}\n\n${content}\n\n${MARKER_END}\n`;
	await writeOrReplaceBlock(destFile, block);
}

/**
 * Main function to execute the script.
 */
try {
	await copyCopilotInstructions();
} catch (error) {
	console.error(`❌  Error: ${error.message}`);
}
