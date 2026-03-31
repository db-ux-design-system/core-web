import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import {
	COMPONENTS_DIR,
	DOCS_DIR,
	IS_MONOREPO,
	REPO_ROOT,
	getManifest,
	resolveSafePath,
	withTimeout
} from '../utils';

type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

/**
 * Builds a ToolResult from a list of matched document snippets.
 * Returns at most 3 results and appends a truncation notice when more were found.
 */
function buildResults(results: string[], query: string): ToolResult {
	if (results.length === 0) {
		return {
			content: [
				{
					type: 'text',
					text: `No documentation found matching query: '${query}'`
				}
			]
		};
	}
	const content: { type: 'text'; text: string }[] = [
		{ type: 'text', text: results.slice(0, 3).join('\n\n') }
	];
	if (results.length > 3) {
		content.push({
			type: 'text',
			text: 'Note: More than 3 results were found. Some results were truncated. Please refine your search query for more specific results.'
		});
	}
	return { content };
}

/**
 * Searches DB UX documentation for a given query string.
 * Supports two scopes:
 * - "global": searches the top-level docs/ directory recursively.
 * - "component": searches the docs/ folder of a specific component.
 *
 * Falls back to the embedded manifest when running outside the monorepo.
 * Applies a 10-second timeout to prevent hanging on large directory trees.
 *
 * @param query - Space-separated search terms (tokens shorter than 3 chars are ignored).
 * @param category - Search scope: "global" or "component".
 * @param componentName - Required when category is "component".
 * @param docType - Optional filename filter (e.g. "Migration", "Accessibility").
 */
export async function handleDocsSearch({
	query,
	category,
	componentName,
	docType
}: {
	query: string;
	category: 'global' | 'component';
	componentName?: string;
	docType?: string;
}): Promise<ToolResult> {
	if (!IS_MONOREPO) {
		return withTimeout(
			(async () => {
				const manifest = await getManifest();
				const searchTerms = query
					.toLowerCase()
					.split(' ')
					.filter((t) => t.trim().length > 2);
				const results: string[] = [];
				for (const [path, content] of Object.entries(manifest.docs)) {
					if (results.length >= 3) break;
					const haystack = (path + '\n' + content).toLowerCase();
					const isMatch =
						searchTerms.length === 0 ||
						searchTerms.every((term) => haystack.includes(term));
					if (isMatch) {
						const snippet =
							content.length > 3000
								? content.substring(0, 3000) +
									'\n... [TRUNCATED]'
								: content;
						results.push(`--- ${path} ---\n${snippet}`);
					}
				}
				return buildResults(results, query);
			})(),
			'Error: Search took too long (exceeded 10 seconds). Please refine your query.'
		);
	}

	return withTimeout(
		(async () => {
			const results: string[] = [];
			const searchTerms = query
				.toLowerCase()
				.split(' ')
				.filter((t) => t.trim().length > 2);

			if (category === 'component') {
				if (!componentName) {
					return {
						content: [
							{
								type: 'text',
								text: 'Error: componentName is required for component search.'
							}
						],
						isError: true
					};
				}
				let safeComponentPath: string;
				try {
					safeComponentPath = resolveSafePath(
						COMPONENTS_DIR,
						componentName
					);
				} catch {
					return {
						content: [
							{
								type: 'text',
								text: `Error: Invalid component name '${componentName}'.`
							}
						],
						isError: true
					};
				}
				const compDocsDir = join(safeComponentPath, 'docs');
				if (existsSync(compDocsDir)) {
					const files = await readdir(compDocsDir);
					for (const file of files) {
						if (!file.endsWith('.md')) continue;
						if (
							docType &&
							!file.toLowerCase().includes(docType.toLowerCase())
						)
							continue;
						const content = await readFile(
							join(compDocsDir, file),
							'utf-8'
						);
						const isMatch =
							searchTerms.length === 0 ||
							searchTerms.every((term) =>
								content.toLowerCase().includes(term)
							);
						if (isMatch)
							results.push(
								`--- ${componentName}/docs/${file} ---\n${content}`
							);
					}
				} else {
					results.push(
						`No documentation found for component '${componentName}'.`
					);
				}
			} else {
				if (existsSync(DOCS_DIR)) {
					const searchDir = async (currentDir: string, depth = 5) => {
						if (depth === 0 || results.length >= 3) return;
						const entries = await readdir(currentDir, {
							withFileTypes: true
						});
						for (const entry of entries) {
							const fullPath = join(currentDir, entry.name);
							if (entry.isDirectory()) {
								await searchDir(fullPath, depth - 1);
							} else if (entry.name.endsWith('.md')) {
								const content = await readFile(
									fullPath,
									'utf-8'
								);
								const isMatch =
									searchTerms.length === 0 ||
									searchTerms.every((term) =>
										content.toLowerCase().includes(term)
									);
								if (isMatch) {
									const snippet =
										content.length > 3000
											? content.substring(0, 3000) +
												'\n... [TRUNCATED]'
											: content;
									results.push(
										`--- ${fullPath.replace(REPO_ROOT, '')} ---\n${snippet}`
									);
								}
							}
						}
					};
					await searchDir(DOCS_DIR);
				}
			}

			return buildResults(results, query);
		})(),
		'Error: Search took too long (exceeded 10 seconds). The directory might be too large. Please refine your query.'
	);
}
