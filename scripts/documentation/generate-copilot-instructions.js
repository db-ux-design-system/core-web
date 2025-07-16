import path from 'node:path';
import { promises as fs } from 'node:fs';
import { fileURLToPath } from 'node:url';
import fg from 'fast-glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Convert folder name to PascalCase.
 * @param name {string} - The folder name.
 * @returns {string} - The converted PascalCase name.
 */
function toPascalCase(name) {
	return name
		.split(/[-_]/)
		.filter(Boolean)
		.map(
			(part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
		)
		.join('');
}

/**
 * Find all Markdown files under the components directory.
 * @param componentsDir {string} - The path to the components directory.
 * @returns {Promise<string[]>} - Resolves to an array of file paths.
 */
async function findComponentFiles(componentsDir) {
	const pattern = path.join(componentsDir, '**', '*.md');
	const allMdFiles = await fg(pattern, { absolute: true });

	return allMdFiles.filter((filePath) => {
		const dirName = path.basename(path.dirname(filePath));
		const baseName = path.basename(filePath, '.md');
		return toPascalCase(dirName) === baseName;
	});
}

/**
 * Sort file paths alphabetically by their base name.
 * @param files {string[]} - Array of file paths.
 * @returns {string[]} - Sorted array of file paths.
 */
function sortFilesByName(files) {
	return files.sort((a, b) => {
		const nameA = path.basename(a).toLowerCase();
		const nameB = path.basename(b).toLowerCase();
		return nameA.localeCompare(nameB);
	});
}

/**
 * Prepare the destination directory and file.
 * @param destDir {string} - The destination directory path.
 * @param destFile {string} - The destination file path.
 * @returns {Promise<void>} - Resolves when preparation is complete.
 */
async function prepareDestination(destDir, destFile) {
	await fs.mkdir(destDir, { recursive: true });

	try {
		await fs.access(destFile);
		console.info(
			`ℹ️  ${path.relative(destDir, destFile)} exists, skipping clear.`
		);
	} catch {
		await fs.writeFile(destFile, '', 'utf8');
		console.log(`✅  Created ${path.relative(destDir, destFile)}`);
	}
}

/**
 * Append content from each component file to the destination file.
 * @param componentFiles {string[]} - Array of component file paths.
 * @param destFile {string} - The destination file path.
 * @returns {Promise<void>} - Resolves when all content is appended.
 */
async function appendComponentContent(componentFiles, destFile) {
	await Promise.all(
		componentFiles.map(async (file) => {
			const componentName = path.basename(file, '.md');
			const content = await fs.readFile(file, 'utf8');

			const separator = `\n\n======== ${componentName} ========\n\n`;
			await fs.appendFile(
				destFile,
				separator + content.trim() + '\n',
				'utf8'
			);
			console.log(`✅  Merged ${componentName}.md`);
		})
	);
}

/**
 * Main function to generate Copilot instructions.
 */
async function generateCopilotInstructions() {
	try {
		const rootDir = path.resolve(__dirname, '..');
		const componentsDir = path.join(
			rootDir,
			'../packages/components/src/components'
		);
		const destDir = path.join(rootDir, '../.github');
		const destFile = path.join(destDir, 'copilot-instructions.md');

		const componentFiles = await findComponentFiles(componentsDir);

		if (componentFiles.length === 0) {
			console.warn('⚠️  No matching component MD files found.');
			return;
		}

		const sortedFiles = sortFilesByName(componentFiles);

		await prepareDestination(destDir, destFile);
		await appendComponentContent(sortedFiles, destFile);

		console.log(
			'\n✅ .github/copilot-instructions.md generated successfully.'
		);
	} catch (error) {
		console.error(
			`❌ Error generating Copilot instructions: ${error.message}`
		);
		throw new Error(
			`❌ Error generating Copilot instructions: ${error.message}`
		);
	}
}

/**
 * Main function to execute the script.
 */
try {
	await generateCopilotInstructions();
} catch (error) {
	console.error(`❌  Error: ${error.message}`);
}
