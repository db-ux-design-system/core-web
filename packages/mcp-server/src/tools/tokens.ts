import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import {
	getManifest,
	IS_MONOREPO,
	MAX_JSON_OUTPUT,
	TOKEN_FILES,
	truncate
} from '../utils';

type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

/** Returns all available design token categories, filtered to those with existing SCSS files. */
export async function handleListDesignTokenCategories(): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const categories = Object.keys(TOKEN_FILES).filter((key) =>
			existsSync(TOKEN_FILES[key])
		);
		return {
			content: [
				{ type: 'text', text: JSON.stringify(categories, null, 2) }
			]
		};
	}
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
	if (!IS_MONOREPO) {
		const manifest = await getManifest();
		const source = manifest.tokens[category];
		if (!source) {
			return {
				content: [
					{
						type: 'text',
						text: `Error: unknown category '${category}'. Available: ${Object.keys(manifest.tokens).join(', ')}`
					}
				],
				isError: true
			};
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
	const filePath = TOKEN_FILES[category];
	if (!filePath) {
		return {
			content: [
				{
					type: 'text',
					text: `Error: unknown category '${category}'. Available: ${Object.keys(TOKEN_FILES).join(', ')}`
				}
			],
			isError: true
		};
	}
	if (!existsSync(filePath)) {
		return {
			content: [
				{
					type: 'text',
					text: `Error: token file not found at ${filePath}`
				}
			],
			isError: true
		};
	}
	const source = await readFile(filePath, 'utf-8');
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
