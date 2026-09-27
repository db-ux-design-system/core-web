import { type ToolResult, error, withTimeout } from '../utils';
import { getManifest } from '../utils/manifest';

/**
 Number of doc snippets returned to the caller.
 */
const MAX_DOC_RESULTS = 3;

/**
 Shortest search term that is not discarded as noise.
 */
const MIN_TERM_LENGTH = 3;

/**
 Whitelisted path prefixes for docs_search results (using forward slashes
 as manifest keys always use POSIX-style paths from path.relative()).
 Only docs whose manifest key starts with one of these prefixes are returned.

 Blacklisted directories (migration/, adr/, research/, .vitepress/) are
 implicitly excluded because they don't match any whitelisted prefix.
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
 Builds a ToolResult from a list of matched document snippets.

 Returns at most {@link MAX_DOC_RESULTS} results and appends a truncation notice
 when more were found. The caller collects one result beyond the limit as a
 lookahead, which is what makes that notice reachable at all.
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
		{ type: 'text', text: results.slice(0, MAX_DOC_RESULTS).join('\n\n') }
	];
	if (results.length > MAX_DOC_RESULTS) {
		content.push({
			type: 'text',
			text: `Note: More than ${MAX_DOC_RESULTS} results were found. Some results were truncated. Please refine your search query for more specific results.`
		});
	}

	return { content };
}

/**
 Searches DB UX documentation for a given query string.
 Only docs from whitelisted directories (component docs and foundation docs)
 are searched. Migration guides, ADRs, research, and infrastructure files
 are explicitly excluded to reduce token consumption and prevent hallucinations.

 Falls back to the embedded manifest when running outside the monorepo.
 Applies a 10-second timeout to prevent hanging on large directory trees.

 @param query - Space-separated search terms (tokens shorter than 3 chars are ignored).
 @param query.query
 @param category - Search scope: "global" or "component".
 @param query.category
 @param componentName - Required when category is "component".
 @param query.componentName
 @param docType - Optional filename filter (e.g. "Migration", "Accessibility").
 @param query.docType
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
	if (
		category === 'component' &&
		(componentName === undefined || componentName === '')
	) {
		return error(
			"Error: 'componentName' is required when category is 'component'. Pass the component name (e.g. 'button'), or use category 'global' to search the foundation docs."
		);
	}

	return withTimeout(
		(async () => {
			const manifest = await getManifest();
			const searchTerms = query
				.toLowerCase()
				.split(' ')
				.filter((t) => t.trim().length >= MIN_TERM_LENGTH);

			// The filter above discards every term of a too-short query, and an
			// empty term list makes every() vacuously true — so 'db' would match
			// every document and the caller would get three arbitrary docs
			// presented as search hits. An explicitly empty query is a different
			// intent: the schema offers it as the way to list the docs in scope,
			// so that one stays allowed.
			if (searchTerms.length === 0 && query.trim() !== '') {
				return error(
					`Error: Query '${query}' contains no term of at least ${MIN_TERM_LENGTH} characters, so it would match every document. Use a longer term, or pass an empty query together with 'componentName' / 'docType' to list a specific doc.`
				);
			}

			const results: string[] = [];
			for (const [path, content] of Object.entries(manifest.docs)) {
				// One past the limit: the extra hit is not returned, it only
				// tells buildResults() that more documentation matched.
				if (results.length > MAX_DOC_RESULTS) {
					break;
				}

				// Normalize Windows backslashes to forward slashes
				const normalizedPath = path.replaceAll('\\', '/');
				// Defense-in-depth: skip docs outside whitelisted directories
				if (!isAllowedDocPath(normalizedPath)) {
					continue;
				}

				// Scope filter: a 'component' search only matches docs within
				// that component's directory. Deliberately NOT guarded by
				// `componentName &&` — that would skip the filter entirely for a
				// missing name and silently widen the search to every doc. The
				// name is guaranteed by the check above; if it were ever absent
				// this excludes everything, which fails visibly instead.
				if (
					category === 'component' &&
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
