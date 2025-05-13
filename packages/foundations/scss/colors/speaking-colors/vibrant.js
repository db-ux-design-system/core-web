import { promises as fs } from 'fs';
import path from 'path';

const directoryPath = './';

async function readDirectoryRecursive(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const res = path.resolve(dir, entry.name);
			return entry.isDirectory() ? readDirectoryRecursive(res) : res;
		})
	);
	return Array.prototype.concat(...files);
}

async function appendToFile(filePath, fileName) {
	const namePart = fileName.split('_')[1].split('.')[0];
	const snippet = `// vibrant
$db-${namePart}-vibrant-default: var(--db-${namePart}-vibrant-default);
$db-${namePart}-vibrant-hovered: var(--db-${namePart}-vibrant-hovered);
$db-${namePart}-vibrant-pressed: var(--db-${namePart}-vibrant-pressed);

// on-vibrant
$db-${namePart}-on-vibrant-default: var(--db-${namePart}-on-vibrant-default);
$db-${namePart}-on-vibrant-hovered: var(--db-${namePart}-on-vibrant-hovered);
$db-${namePart}-on-vibrant-pressed: var(--db-${namePart}-on-vibrant-pressed);
`;

	await fs.appendFile(filePath, snippet);
}

async function processFiles() {
	const files = await readDirectoryRecursive(directoryPath);
	const scssFiles = files.filter((file) => file.endsWith('.scss'));

	for (const file of scssFiles) {
		const fileName = path.basename(file);
		await appendToFile(file, fileName);
	}
}

processFiles().catch(console.error);
