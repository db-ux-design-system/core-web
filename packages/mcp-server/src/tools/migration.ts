import { type ToolResult, error } from '../utils';
import { getManifest } from '../utils/manifest';

export async function handleListMigrationGuides(): Promise<ToolResult> {
	const manifest = await getManifest();
	return {
		content: [
			{
				type: 'text',
				text: JSON.stringify(
					Object.keys(manifest.migrationGuides),
					null,
					2
				)
			}
		]
	};
}

export async function handleGetMigrationGuide({
	guideName
}: {
	guideName: string;
}): Promise<ToolResult> {
	const manifest = await getManifest();
	const guide = manifest.migrationGuides[guideName];
	if (!guide) {
		return error(
			`Error: Migration guide '${guideName}' not found. Use list_migration_guides to see available guides.`
		);
	}

	return { content: [{ type: 'text', text: guide }] };
}
