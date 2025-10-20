/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractChangelogForVersion, findChangelogFiles } from './utils.js';

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
		'../../../packages/foundations/package.json'
	);
	const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
	return pkg.version;
}

function getFirstHeadline(changelog: string): string {
	// Match first line starting with # or ## (allow whitespace)
	const match = /^\s*#+\s+(.+)$/m.exec(changelog);
	return match ? match[1].trim() : '';
}

function getReleaseNotes(): string {
	const repoRoot = path.resolve(__dirname, '../../../');
	const changelogFiles = findChangelogFiles(repoRoot, ['output/**']);
	const notes: string[] = [];
	for (const file of changelogFiles) {
		const changelog = fs.readFileSync(file, 'utf8');
		const section = extractChangelogForVersion(changelog);
		if (section) {
			const headline =
				getFirstHeadline(changelog) || path.relative(repoRoot, file);
			const entry = `# ${headline}\n${section}`;
			// Ensure a logical sequence, packages with Release notes first, packages that are only getting version bumped last
			const isVersionBump = /^\s*[-*+]?\s*_version bump_\s*$/m.test(section);
			if (isVersionBump) {
				notes.push(entry);
			} else {
				notes.unshift(entry);
			}
		}
	}

	return notes.join('\n\n---\n\n').trim();
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

	if (releaseExists(tag)) {
		console.log(
			`Release ${tag} already exists. Skipping release creation.`
		);
		return;
	}

	// Write notes to a temporary file for safe shell usage
	const temporaryFile = path.join(os.tmpdir(), `dbux-release-notes.md`);
	fs.writeFileSync(temporaryFile, notes, 'utf8');
	try {
		const releaseCommand = `gh release create "${tag}" --target main --title "${tag}" --notes-file "${temporaryFile}"`;

		if (process.env.CI) {
			run(releaseCommand);
			console.log(`Created release ${tag}`);
		} else {
			console.log(
				'process.env.CI not set would run command:\n',
				releaseCommand,
				'\n\nContent for changelog:\n',
				notes
			);
		}
	} finally {
		// Clean up the temporary file
		fs.unlinkSync(temporaryFile);
	}
}

main();
