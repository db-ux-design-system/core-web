import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
	FOUNDATIONS_DIR,
	getManifest,
	IS_MONOREPO,
	MAX_JSON_OUTPUT,
	truncate
} from '../utils';

type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

export const TOKEN_FILES: Record<string, string> = {
	colors: join(FOUNDATIONS_DIR, 'scss/colors/_variables.scss'),
	typography: join(FOUNDATIONS_DIR, 'scss/fonts/_variables.scss'),
	spacing: join(FOUNDATIONS_DIR, 'scss/_variables.scss'),
	density: join(FOUNDATIONS_DIR, 'scss/density/_variables.scss'),
	animation: join(FOUNDATIONS_DIR, 'scss/animation/_animations.scss'),
	transitions: join(FOUNDATIONS_DIR, 'scss/animation/_transitions.scss')
};

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
