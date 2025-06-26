import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, '../packages/components/docs/api');
const componentsDir = path.join(
	__dirname,
	'../packages/components/src/components'
);

try {
	await fs.promises.stat(docsDir);
} catch (error) {
	throw new Error(
		`❌  Error checking directory ${docsDir}: ${error.message}`
	);
}

/**
 * Recursively retrieves all files from a directory.
 * @param {string} dir - The directory path to read files from.
 * @returns {Promise<string[]>} - A promise that resolves to an array of file paths.
 */
async function getAllFiles(dir) {
	try {
		const entries = await fs.promises.readdir(dir, {
			withFileTypes: true
		});
		const files = entries
			.filter((file) => !file.isDirectory())
			.map((file) => path.join(dir, file.name));
		const folders = entries.filter((folder) => folder.isDirectory());

		const folderPromises = folders.map((folder) =>
			getAllFiles(path.join(dir, folder.name))
		);
		const folderFiles = await Promise.all(folderPromises);
		for (const fileGroup of folderFiles) files.push(...fileGroup);
		return files;
	} catch (error) {
		console.error(`❌  Error reading directory ${dir}:`, error);
		return [];
	}
}

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

const allFiles = await getAllFiles(docsDir);
const files = allFiles.map((file) => path.relative(docsDir, file));

/**
 * Groups files by their directory name, filtering for specific file types.
 * @param {string[]} files - An array of file paths to group.
 * @returns {Object} - An object where keys are directory names and values are arrays of file paths.
 */
function getGroupedFiles(files) {
	const groupedFiles = {};
	for (const file of files) {
		const dirName = path.dirname(file).split(path.sep).pop();
		if (file.endsWith('.lite.md') || file.endsWith('model.md')) {
			groupedFiles[dirName] ||= [];
			groupedFiles[dirName].push(file);
		}
	}

	return groupedFiles;
}

const groupedFiles = getGroupedFiles(files);

/**
 * Recursively removes empty directories.
 * @param {string} dir - The directory path to process.
 * @returns {Promise<void>} - Resolves when all empty directories are removed.
 */
async function removeEmptyDirs(dir) {
	try {
		const files = await fs.promises.readdir(dir);
		const dirPromises = files.map(async (file) => {
			const fullPath = path.join(dir, file);
			const stats = await fs.promises.lstat(fullPath);
			if (stats.isDirectory()) {
				await removeEmptyDirs(fullPath);
			}
		});

		await Promise.all(dirPromises);

		const remainingFiles = await fs.promises.readdir(dir);
		if (remainingFiles.length === 0) {
			await fs.promises.rmdir(dir);
		}
	} catch (error) {
		console.error(`❌  Error deleting directory ${dir}:`, error);
	}
}

const operations = Object.entries(groupedFiles).map(
	async ([prefix, fileGroup]) => {
		if (!prefix) return;

		let mergedContent = '';
		try {
			const fileContents = await Promise.all(
				fileGroup.map(async (file) => {
					const filePath = path.join(docsDir, file);
					return fs.promises.readFile(filePath, 'utf8');
				})
			);
			mergedContent = fileContents.join('\n\n');
		} catch (error) {
			console.error(`❌  Error reading files for ${prefix}:`, error);
			return;
		}

		const componentDir = path.join(componentsDir, prefix);
		const outputFile = path.join(
			componentDir,
			`${toPascalCase(prefix)}.md`
		);

		try {
			await fs.promises.mkdir(componentDir, { recursive: true });
			await fs.promises.writeFile(outputFile, mergedContent, 'utf8');
		} catch (error) {
			console.error(`❌  Error writing file ${outputFile}:`, error);
			return;
		}

		const deletePromises = fileGroup.map((file) => {
			const filePath = path.join(docsDir, file);
			return fs.promises.unlink(filePath).catch((error) => {
				console.error(`❌  Error deleting file ${filePath}:`, error);
			});
		});

		await Promise.all(deletePromises);
	}
);

await Promise.all(operations);

await removeEmptyDirs(docsDir);

console.log('✅  All operations successfully completed.');
