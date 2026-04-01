import { type ToolResult, err, MAX_JSON_OUTPUT, truncate } from '../utils';
import { getManifest } from '../utils/manifest';

/** Returns all available design token categories, filtered to those with existing SCSS files. */
export async function handleListDesignTokenCategories(): Promise<ToolResult> {
	const manifest = await getManifest();
	return {
		content: [
			{
				type: 'text',
				text: JSON.stringify(Object.keys(manifest.tokens), null, 2)
			}
		]
	};
}

/**
 * Returns CSS custom properties (--db-*) and SCSS variables ($db-*) for a given category.
 * Filters raw SCSS file content to only the relevant variable declaration lines.
 * @param category - The token category key (e.g. "colors", "spacing").
 */
export async function handleGetDesignTokens({
	category
}: {
	category: string;
}): Promise<ToolResult> {
	const manifest = await getManifest();
	const source = manifest.tokens[category];
	if (!source) {
		return err(
			`Error: unknown category '${category}'. Available: ${Object.keys(manifest.tokens).join(', ')}`
		);
	}
	const lines = source
		.split('\n')
		.filter((line) => /--db-|^\$db-/.test(line));
	return {
		content: [
			{
				type: 'text',
				text: truncate(
					lines.length > 0 ? lines.join('\n') : source,
					MAX_JSON_OUTPUT
				)
			}
		]
	};
}
