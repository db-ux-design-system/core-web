import { globSync } from 'glob';

/**
 * Find all CHANGELOG.md files in the repo, excluding node_modules, using glob.
 */
export function findChangelogFiles(
	repoRoot: string,
	ignores?: string[]
): string[] {
	const ignore = ignores ?? [];
	ignore.push('**/node_modules/**');

	return globSync('**/CHANGELOG.md', {
		cwd: repoRoot,
		ignore,
		absolute: true
	});
}

/**
 * Extracts the first changelog section (from the first '##' header to the next '##' or end of file).
 * This is useful for extracting the latest release notes, regardless of version string.
 */
export function extractChangelogForVersion(changelog: string): string {
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
