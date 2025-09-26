/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment */

import { globSync } from 'glob';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run(cmd: string, options = {}): any {
	try {
		return execSync(cmd, {
			stdio: 'pipe',
			encoding: 'utf8',
			...options
		}).trim();
	} catch (error: any) {
		if (error.stdout) {
			return error.stdout.toString();
		}

		throw error;
	}
}

/**
 * Get the current version from package.json - we can use foundations here as it's always in sync with the other packages
 */
function getVersion(): string {
	const pkgPath = path.resolve(
		__dirname,
		'../../packages/foundations/package.json'
	);
	const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
	return pkg.version;
}

function tagExists(tag: string): boolean {
	const tags = run(`git tag --list "${tag}"`);
	return tags.split('\n').includes(tag);
}

/**
 * Find all CHANGELOG.md files in the repo, excluding node_modules, using glob.
 */
function findChangelogFiles(repoRoot: string): string[] {
	return globSync('**/CHANGELOG.md', {
		cwd: repoRoot,
		ignore: ['**/node_modules/**'],
		absolute: true
	});
}

/**
 * Extracts the first changelog section (from the first '##' header to the next '##' or end of file).
 * This is useful for extracting the latest release notes, regardless of version string.
 */
function extractChangelogForVersion(changelog: string): string {
	// Find the index of the first '##' header
	const firstHeader = /^##\s.*$/m.exec(changelog);
	if (!firstHeader) {
		// No '##' header found, return empty string
		return '';
	}

	const startIdx = firstHeader.index;

	// Find the index of the second '##' header after the first
	const rest = changelog.slice(startIdx + firstHeader[0].length);
	const secondHeader = /^##\s.*$/m.exec(rest);
	if (secondHeader) {
		// Second '##' found: return content from first to second header
		const endIdx = startIdx + firstHeader[0].length + secondHeader.index;
		return changelog.slice(startIdx, endIdx).trim();
	}

	// Only one '##' header: return from first header to end of file
	return changelog.slice(startIdx).trim();
}

function getFirstHeadline(changelog: string): string {
	// Match first line starting with # or ## (allow whitespace)
	const match = /^\s*#+\s+(.+)$/m.exec(changelog);
	return match ? match[1].trim() : '';
}

function getReleaseNotes(): string {
	const version = getVersion();
	const repoRoot = path.resolve(__dirname, '../../');
	const changelogFiles = findChangelogFiles(repoRoot);
	const notes: string[] = [];
	for (const file of changelogFiles) {
		const changelog = fs.readFileSync(file, 'utf8');
		const section = extractChangelogForVersion(changelog);
		if (section) {
			const headline =
				getFirstHeadline(changelog) || path.relative(repoRoot, file);
			notes.push(`# ${headline}\n${section}`);
		}
	}

	return notes
		.map((log) =>
			log
				.split('\n')
				.map((line) => line.replace('#', '##'))
				.join('\n')
		)
		.join('\n\n---\n\n')
		.trim();
}

function releaseExists(tag: string): boolean {
	try {
		run(`gh release view "${tag}"`);
		return true;
	} catch {
		return false;
	}
}

function main() {
	const version = getVersion();
	const tag = `v${version}`;
	console.log(`Version: ${version}`);
	console.log(`Tag: ${tag}`);

	// Extract release notes
	const notes = getReleaseNotes();

	if (tagExists(tag)) {
		console.log(`Tag ${tag} already exists. Skipping publish creation.`);
		return;
	}

	// Create tag
	run(`gh tag create "${tag}" --notes "Release ${tag}"`);
	console.log(`Created tag ${tag}`);

	if (releaseExists(tag)) {
		console.log(
			`Release ${tag} already exists. Skipping release creation.`
		);
		return;
	}

	run(`gh release create "${tag}" --notes "${notes.replaceAll('"', '"')}"`);
	console.log(`Created release ${tag}`);
}

main();
