import { globSync } from 'glob';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path
	.join(__dirname, '../../output')
	.replaceAll('\\', '/');
const documentsDirectory = path
	.join(outputDirectory, 'docs')
	.replaceAll('\\', '/');

// Replace the hardcoded includeComponents array with a dynamic glob search
const componentsDirectory = path
	.join(__dirname, '../../packages/components/src/components')
	.replaceAll('\\', '/');

const includeComponents = globSync(
	path.join(componentsDirectory, '*/agent/*').replaceAll('\\', '/')
).map(
	(file) => path.dirname(file).replaceAll('\\', '/').split('/').at(-2) ?? ''
);

const includeSet = new Set(
	includeComponents.map((n) => n?.trim().toLowerCase()).filter(Boolean)
);

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

	// Add components from includeSet if they don't have a file
	for (const component of includeSet) {
		groupedFiles[component] ||= [];
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

const targets = [
	{ name: 'react', lib: 'react' },
	{ name: 'vue', lib: 'v' },
	{ name: 'angular', lib: 'ngx' },
	{ name: 'stencil', lib: 'wc' }
];

// Process each group of files
for (const [prefix, fileGroup] of Object.entries(groupedFiles)) {
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

	for (const { name, lib } of targets) {
		const snippetPath = path.join(
			outputDirectory,
			name,
			'src',
			'components',
			prefix,
			'agent',
			`${prefix}.agent.md`
		);
		try {
			let snippet = '';
			if (existsSync(snippetPath)) {
				snippet = readFileSync(snippetPath, 'utf8');
			}

			const targetDocumentationDirectory = path.join(
				outputDirectory,
				name,
				'agent'
			);
			mkdirSync(targetDocumentationDirectory, { recursive: true });
			const finalContent = `${mergedContent}\n\n${snippet}`.replaceAll(
				'core-components',
				`${lib}-core-components`
			);
			writeFileSync(
				path.join(
					targetDocumentationDirectory,
					`${toPascalCase(prefix)}.md`
				),
				finalContent,
				'utf8'
			);
		} catch (error: any) {
			console.error(error);
		}
	}
}

for (const { name, lib } of targets) {
	const instructionsFilePath = path.join(
		outputDirectory,
		name,
		'agent',
		'_instructions.md'
	);

	let instructionsContent = `- Use "@db-ux/${lib}-core-components" as import for components:`;
	for (const key of Object.keys(groupedFiles)) {
		const componentName = toPascalCase(key);
		instructionsContent += `
  - use for \`DB${componentName}\` or \`${componentName}\` the file __agent-path__/agent/${componentName}.md`;
	}

	writeFileSync(instructionsFilePath, instructionsContent, 'utf8');
}
