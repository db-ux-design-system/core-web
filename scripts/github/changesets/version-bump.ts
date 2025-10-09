import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractChangelogForVersion, findChangelogFiles } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Ensures that each changelog file has content after the latest section headline.
 * If not, adds an italicized 'version bump' note after the headline.
 */
export function ensureChangelogHasContent() {
	const repoRoot = path.resolve(__dirname, '../../../');
	const changelogFiles = findChangelogFiles(repoRoot);
	for (const file of changelogFiles) {
		const content = fs.readFileSync(file, 'utf8');
		const latestSection = extractChangelogForVersion(content);
		if (!latestSection) continue; // No section found, skip

		// Find the first '##' header
		const headerMatch = /^##\s.*$/m.exec(latestSection);
		if (!headerMatch) continue;
		const header = headerMatch[0];
		const afterHeader = latestSection.slice(header.length).trim();

		// If no content after header, add italicized 'version bump'
		if (!afterHeader) {
			// Find the position of the first '##' header in the file
			const fileHeaderMatch = /^##\s.*$/m.exec(content);
			if (!fileHeaderMatch) continue;
			const insertPos = fileHeaderMatch.index + fileHeaderMatch[0].length;
			const newContent =
				content.slice(0, insertPos) +
				'\n\n_version bump_\n' +
				content.slice(insertPos);
			fs.writeFileSync(file, newContent, 'utf8');
		}
	}
}

ensureChangelogHasContent();
