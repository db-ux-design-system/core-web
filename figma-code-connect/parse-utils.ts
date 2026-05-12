import { execSync } from 'node:child_process';

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

	return JSON.stringify(parsed, null, 2);
};
