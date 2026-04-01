import { type ToolResult, withTimeout } from '../utils';
import { getManifest } from '../utils/manifest';

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
							? content.substring(0, 3000) + '\n... [TRUNCATED]'
							: content;
					results.push(`--- ${path} ---\n${snippet}`);
				}
			}
			return buildResults(results, query);
		})(),
		'Error: Search took too long (exceeded 10 seconds). Please refine your query.'
	);
}
