import { move } from 'fs-extra';
import { glob } from 'glob';
import ignore from 'ignore';
import { execSync } from 'node:child_process';
import { existsSync, lstatSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const from = 'page';
const to = 'shell';

// Get the current directory
const __dirname = dirname('.');

// Read .gitignore file
const gitignorePath = join(__dirname, '.gitignore');
const gitignoreContent = readFileSync(gitignorePath, 'utf8');
const ig = ignore().add(gitignoreContent);

const toPascalCase = (string_: string, seperator = ''): string => {
	return string_
		.replaceAll(/[_-]+/g, ' ')
		.replaceAll(/[^\s\w]/g, '')
		.split(' ')
		.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		)
		.join(seperator);
};

const replace = (content: string): string => {
	return content
		.replaceAll(from, to)
		.replaceAll(from.replaceAll('-', ''), to.replaceAll('-', ''))
		.replaceAll(toPascalCase(from), toPascalCase(to))
		.replaceAll(toPascalCase(from, ' '), toPascalCase(to, ' '));
};

// Function to rename directories and files
const renamePaths = async (oldPath: string, newPath: string) => {
	console.log(execSync(`git status "${oldPath}"`).toString());

	if (existsSync(oldPath)) {
		await move(oldPath, newPath, { overwrite: true });

		execSync(`git add "${newPath}"`);
		execSync(`git rm --cached "${oldPath}"`);
	}
};

// Function to replace content in files
const replaceContent = (filePath: string) => {
	const content = readFileSync(filePath, 'utf8');
	const updatedContent = replace(content);
	writeFileSync(filePath, updatedContent, 'utf8');
};

// Get all files and directories
const filesAndDirectories = glob.sync('**/*', {
	nodir: false,
	dot: true,
	ignore: [
		'showcases/**',
		'__snapshots__/**',
		'.git/**',
		'node_modules/**',
		'**/assets/**',
		'scripts/**',
		'docs/**',
		'build-*/**',
		'output/**',
		'.*/**'
	]
});

// Filter out ignored files and directories
const filteredPaths = filesAndDirectories.filter(
	(filePath: string) => !ig.ignores(filePath)
);

// Process each file and directory
for (const filePath of filteredPaths) {
	const oldPath = join(__dirname, filePath);
	const newPath = replace(oldPath);

	// Replace content in files
	if (existsSync(oldPath) && lstatSync(oldPath).isFile()) {
		replaceContent(oldPath);
		// Rename files
		if (oldPath !== newPath) {
			console.log('renamePaths', oldPath, newPath);
			// eslint-disable-next-line no-await-in-loop
			await renamePaths(oldPath, newPath);
		}
	}
}

console.log('Renaming and content replacement completed.');
