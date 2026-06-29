import { type ToolResult, withTimeout } from '../utils';
import { getManifest } from '../utils/manifest';

/**
 * Whitelisted path prefixes for docs_search results (using forward slashes
 * as manifest keys always use POSIX-style paths from path.relative()).
 * Only docs whose manifest key starts with one of these prefixes are returned.
 *
 * Blacklisted directories (migration/, adr/, research/, .vitepress/) are
 * implicitly excluded because they don't match any whitelisted prefix.
 */
const DOCS_ALLOWED_PREFIXES = [
	'packages/components/', // Component-specific docs
	'packages/foundations/docs/' // Foundation docs
];

/** Returns true if the given manifest doc path is within the whitelist. */
function isAllowedDocPath(docPath: string): boolean {
	return DOCS_ALLOWED_PREFIXES.some((prefix) => docPath.startsWith(prefix));
}

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

	const content: Array<{ type: 'text'; text: string }> = [
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
 * Only docs from whitelisted directories (component docs and foundation docs)
 * are searched. Migration guides, ADRs, research, and infrastructure files
 * are explicitly excluded to reduce token consumption and prevent hallucinations.
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
				// Normalize Windows backslashes to forward slashes
				const normalizedPath = path.replaceAll('\\', '/');
				// Defense-in-depth: skip docs outside whitelisted directories
				if (!isAllowedDocPath(normalizedPath)) continue;

				// Scope filter: when category is 'component' and componentName is given,
				// only match docs within that component's directory.
				if (
					category === 'component' &&
					componentName &&
					!normalizedPath.includes(`/components/${componentName}/`)
				) {
					continue;
				}

				// Doc type filter: when docType is given, only match docs whose
				// filename contains the type (e.g. 'Accessibility', 'React').
				if (
					docType &&
					!normalizedPath
						.toLowerCase()
						.includes(docType.toLowerCase())
				) {
					continue;
				}

				const haystack = (
					normalizedPath +
					'\n' +
					content
				).toLowerCase();
				const isMatch = searchTerms.every((term) =>
					haystack.includes(term)
				);
				if (isMatch) {
					const snippet =
						content.length > 3000
							? content.slice(0, 3000) + '\n... [TRUNCATED]'
							: content;
					results.push(`--- ${normalizedPath} ---\n${snippet}`);
				}
			}

			return buildResults(results, query);
		})(),
		'Error: Search took too long (exceeded 10 seconds). Please refine your query.'
	);
}
