import { MAX_JSON_OUTPUT, type ToolResult, truncate } from '../utils';
import { getManifest } from '../utils/manifest';

/**
 * Returns all available DB UX icon names by parsing the generated all-icons.ts file.
 * Falls back to the embedded manifest when running outside the monorepo.
 */
export async function handleListIcons(): Promise<ToolResult> {
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
