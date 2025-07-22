import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { globSync } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path
	.join(__dirname, '../../output')
	.replaceAll('\\', '/');
const documentsDirectory = path
	.join(outputDirectory, 'docs')
	.replaceAll('\\', '/');

// TODO: Remove this when all components are documented correctly
const includeComponents = ['button', 'drawer']; // Button has JSDoc, drawer has SassDoc
const includeSet = new Set(
	includeComponents.map((n) => n.trim().toLowerCase()).filter(Boolean)
);

function shouldProcessComponent(name: string) {
	return includeSet.size === 0 || includeSet.has(name.toLowerCase());
}

/**
 * Converts a string to PascalCase.
 * @param {string} string_ - The string to convert.
 * @returns {string} - The converted PascalCase string.
 */
function toPascalCase(string_: string): string {
	return string_
		.replaceAll(/[-_]+/g, ' ')
		.replaceAll(/[^\w\s]/g, '')
		.replaceAll(
			/\s+(.)(\w*)/g,
			(_, firstChar: string, rest: string) =>
				firstChar.toUpperCase() + rest.toLowerCase()
		)
		.replace(/^\w/, (char: string) => char.toUpperCase());
}

/**
 * Groups files by their directory names.
 * @param {string[]} files - An array of file paths to group.
 * @returns {Object} - An object where keys are directory names and values are arrays of file paths.
 */
function getGroupedFiles(files: string[]): Record<string, string[]> {
	const groupedFiles: Record<string, string[]> = {};
	for (const file of files) {
		let directoryName: string =
			path.dirname(file).split(path.sep).pop() ?? '';
		if (documentsDirectory === directoryName) {
			continue;
		}

		directoryName = directoryName.replace(`${documentsDirectory}/`, '');

		groupedFiles[directoryName] ||= [];
		groupedFiles[directoryName].push(file);
	}

	return groupedFiles;
}

// Find all matching files and group them by directory

const files: string[] = globSync(
	path.join(documentsDirectory, '**', '*.md').replaceAll('\\', '/'),
	{
		nodir: true
	}
).map((path: string) => path.replaceAll('\\', '/'));
const groupedFiles = getGroupedFiles(files);

// Process each group of files
for (const [prefix, fileGroup] of Object.entries(groupedFiles)) {
	if (!prefix) {
		continue;
	}

	if (!shouldProcessComponent(prefix)) {
		continue;
	}

	let mergedContent = '';
	try {
		// Read and merge the content of all files in the group
		const fileContents = fileGroup
			.sort((a, b) => a.localeCompare(b))
			.map((file) => readFileSync(file, 'utf8'));
		mergedContent = fileContents.join('\n\n');
	} catch (error) {
		console.error(`❌  Error reading files for ${prefix}:`, error);
		continue;
	}

	const targets = ['react', 'angular', 'vue', 'stencil'];

	for (const target of targets) {
		const snippetPath = path.join(
			outputDirectory,
			target,
			'src',
			'components',
			prefix,
			'docs',
			`${prefix}.docs.md`
		);
		try {
			let snippet = '';
			if (existsSync(snippetPath)) {
				snippet = readFileSync(snippetPath, 'utf8');
			}

			const targetDocumentationDirectory = path.join(
				outputDirectory,
				target,
				'docs'
			);
			mkdirSync(targetDocumentationDirectory, { recursive: true });
			writeFileSync(
				path.join(
					targetDocumentationDirectory,
					`${toPascalCase(prefix)}.md`
				),
				mergedContent + '\n\n' + snippet,
				'utf8'
			);
		} catch (error: any) {
			console.error(error);
		}
	}
}

console.log('✅  All operations successfully completed.');
