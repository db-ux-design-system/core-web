import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import {
	type ToolResult,
	IS_MONOREPO,
	MIGRATION_DIR,
	err,
	getManifest,
	resolveSafePath
} from '../utils';

export async function handleListMigrationGuides(): Promise<ToolResult> {
	if (IS_MONOREPO) {
		if (!existsSync(MIGRATION_DIR)) {
			return {
				content: [{ type: 'text', text: 'No migration guides found.' }]
			};
		}
		const entries = await readdir(MIGRATION_DIR, { withFileTypes: true });
		const names = entries
			.filter((e) => e.isFile() && e.name.endsWith('.md'))
			.map((e) => e.name.slice(0, -3));
		return {
			content: [{ type: 'text', text: JSON.stringify(names, null, 2) }]
		};
	}
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
	if (IS_MONOREPO) {
		if (!existsSync(MIGRATION_DIR)) {
			return err('Migration directory not found.');
		}
		let filePath: string;
		try {
			filePath = resolveSafePath(MIGRATION_DIR, `${guideName}.md`);
		} catch {
			return err(`Error: Invalid guide name '${guideName}'.`);
		}
		if (!existsSync(filePath)) {
			return err(
				`Error: Migration guide '${guideName}' not found. Use list_migration_guides to see available guides.`
			);
		}
		return {
			content: [{ type: 'text', text: await readFile(filePath, 'utf-8') }]
		};
	}
	const manifest = await getManifest();
	const guide = manifest.migrationGuides[guideName];
	if (!guide) {
		return err(
			`Error: Migration guide '${guideName}' not found. Use list_migration_guides to see available guides.`
		);
	}
	return { content: [{ type: 'text', text: guide }] };
}
