import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import {
	ALL_ICONS_FILE,
	getManifest,
	IS_MONOREPO,
	MAX_JSON_OUTPUT,
	truncate
} from '../utils';

type ToolResult = {
	content: { type: 'text'; text: string }[];
	isError?: boolean;
};

export async function handleListIcons(): Promise<ToolResult> {
	if (IS_MONOREPO && existsSync(ALL_ICONS_FILE)) {
		const source = await readFile(ALL_ICONS_FILE, 'utf-8');
		const icons = [...source.matchAll(/'([^']+)'/g)].map((m) => m[1]);
		return {
			content: [
				{
					type: 'text',
					text: truncate(
						JSON.stringify(icons, null, 2),
						MAX_JSON_OUTPUT
					)
				}
			]
		};
	}
	const manifest = await getManifest();
	return {
		content: [
			{
				type: 'text',
				text: truncate(
					JSON.stringify(manifest.icons, null, 2),
					MAX_JSON_OUTPUT
				)
			}
		]
	};
}
