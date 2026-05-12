import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

try {
	process.loadEnvFile(join(currentDir, '..', '.env'));
} catch {
	/* File doesn't exist, skip */
}

/**
 * Parses figma connect output and removes fields that vary across environments
 * (_codeConnectFilePath, metadata, figmaNode) to keep snapshots stable in CI.
 */
export const getParsedFigmaConnect = (): string => {
	const result = execSync(
		'npx figma connect parse --exit-on-unreadable-files',
		{ maxBuffer: 50 * 1024 * 1024 }
	).toString();

	const parsed = JSON.parse(result) as Array<Record<string, unknown>>;
	for (const entry of parsed) {
		delete entry._codeConnectFilePath;
		delete entry.metadata;
		delete entry.figmaNode;
		delete entry.url;
		if (typeof entry.template === 'string') {
			entry.template = entry.template.replaceAll('\\u002F', '/');
		}
	}

	const figmaFile = process.env.FIGMA_FILE ?? 'FIGMA_FILE';
	return JSON.stringify(parsed, null, 2).replaceAll(figmaFile, 'FIGMA_FILE');
};
