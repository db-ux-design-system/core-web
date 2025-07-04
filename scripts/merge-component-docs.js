import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fg from 'fast-glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, '../packages/components/docs/api');
const componentsDir = path.join(
	__dirname,
	'../packages/components/src/components'
);
const outputDir = path.join(__dirname, '../packages/components/output');
const cssPath = path.join(outputDir, 'css');

/**
 * Converts a string to PascalCase.
 * @param {string} str - The string to convert.
 * @returns {string} - The converted PascalCase string.
 */
function toPascalCase(str) {
	return str
		.replaceAll(/[-_]+/g, ' ')
		.replaceAll(/[^\w\s]/g, '')
		.replaceAll(
			/\s+(.)(\w*)/g,
			(_, firstChar, rest) => firstChar.toUpperCase() + rest.toLowerCase()
		)
		.replace(/^\w/, (char) => char.toUpperCase());
}

/**
 * Groups files by their directory names.
 * @param {string[]} files - An array of file paths to group.
 * @returns {Object} - An object where keys are directory names and values are arrays of file paths.
 */
function getGroupedFiles(files) {
	const groupedFiles = {};
	for (const file of files) {
		const dirName = path.dirname(file).split(path.sep).pop();
		groupedFiles[dirName] ||= [];
		groupedFiles[dirName].push(file);
	}

	return groupedFiles;
}

try {
	// Check if the documentation directory exists
	await fs.stat(docsDir);
} catch (error) {
	throw new Error(
		`❌  Error checking directory ${docsDir}: ${error.message}`
	);
}

const patterns = [
	path.posix.join(docsDir, '**', '*.lite.md'),
	path.posix.join(docsDir, '**', 'model.md')
];

// Find all matching files and group them by directory
const allFiles = await fg(patterns, { absolute: true });
const files = allFiles.map((file) => path.relative(docsDir, file));
const groupedFiles = getGroupedFiles(files);

// Process each group of files
const operations = Object.entries(groupedFiles).map(
	async ([prefix, fileGroup]) => {
		if (!prefix) return;

		let mergedContent = '';
		try {
			// Read and merge the content of all files in the group
			const fileContents = await Promise.all(
				fileGroup
					.sort((a, b) => a.localeCompare(b))
					.map(async (file) => {
						const filePath = path.join(docsDir, file);
						return fs.readFile(filePath, 'utf8');
					})
			);
			mergedContent = fileContents.join('\n\n');
		} catch (error) {
			console.error(`❌  Error reading files for ${prefix}:`, error);
			return;
		}

		// Append example snippets for react, angular and vue
		const snippetTargets = ['react', 'angular', 'vue'];
		const snippets = await Promise.all(
			snippetTargets.map(async (target) => {
				const snippetPath = path.join(
					outputDir,
					target,
					'src',
					'components',
					prefix,
					'docs',
					`${prefix}.docs.md`
				);
				try {
					return await fs.readFile(snippetPath, 'utf8');
				} catch {
					console.warn(
						`⚠️ Snippet for ${prefix} (${target}) not found: ${snippetPath}`
					);
					return '';
				}
			})
		);
		mergedContent += snippets
			.filter(Boolean)
			.map((s) => `\n\n${s}`)
			.join('');

		const cssFilePath = path.join(cssPath, `${prefix}.md`);
		if (await fs.stat(cssPath).catch(() => false)) {
			try {
				let cssDoc = await fs.readFile(cssFilePath, 'utf8');
				// Remove HTML anchor tags inserted by SassDoc
				cssDoc = cssDoc
					.toString()
					.replaceAll(/^[ \t]*<a id="[^"]+"><\/a>[ \t]*\r?\n/gm, '');
				mergedContent += `\n\n## CSS Variables\n\n${cssDoc}`;
			} catch (error) {
				console.warn(
					`⚠️  Failed to read or clean CSS doc for ${prefix}:`,
					error
				);
			}
		}

		// Define the output directory and file path
		const componentDir = path.join(componentsDir, prefix);
		const outputFile = path.join(
			componentDir,
			`${toPascalCase(prefix)}.md`
		);

		try {
			// Create the output directory and write the merged content
			await fs.mkdir(componentDir, { recursive: true });
			await fs.writeFile(outputFile, mergedContent, 'utf8');
		} catch (error) {
			console.error(`❌  Error writing file ${outputFile}:`, error);
			return;
		}

		// Delete the original files after processing
		const deletePromises = fileGroup.map((file) => {
			const filePath = path.join(docsDir, file);
			return fs.unlink(filePath).catch((error) => {
				console.error(`❌  Error deleting file ${filePath}:`, error);
			});
		});

		await Promise.all(deletePromises);
	}
);

await Promise.all(operations);

// Remove the original documentation directory
await fs.rm(docsDir, { recursive: true, force: true });

console.log('✅  All operations successfully completed.');
