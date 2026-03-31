import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { MIGRATION_DIR, IS_MONOREPO, getManifest, resolveSafePath } from '../utils';

type ToolResult = { content: { type: 'text'; text: string }[]; isError?: boolean };

export async function handleListMigrationGuides(): Promise<ToolResult> {
	if (IS_MONOREPO) {
		if (!existsSync(MIGRATION_DIR)) {
			return { content: [{ type: 'text', text: 'No migration guides found.' }] };
		}
		const entries = await readdir(MIGRATION_DIR, { withFileTypes: true });
		const names = entries
			.filter((e) => e.isFile() && e.name.endsWith('.md'))
			.map((e) => e.name.slice(0, -3));
		return { content: [{ type: 'text', text: JSON.stringify(names, null, 2) }] };
	}
	const manifest = await getManifest();
	return {
		content: [{ type: 'text', text: JSON.stringify(Object.keys(manifest.migrationGuides), null, 2) }]
	};
}

export async function handleGetMigrationGuide({
	guideName
}: {
	guideName: string;
}): Promise<ToolResult> {
	if (IS_MONOREPO) {
		if (!existsSync(MIGRATION_DIR)) {
			return { content: [{ type: 'text', text: 'Migration directory not found.' }], isError: true };
		}
		let filePath: string;
		try {
			filePath = resolveSafePath(MIGRATION_DIR, `${guideName}.md`);
		} catch {
			return {
				content: [{ type: 'text', text: `Error: Invalid guide name '${guideName}'.` }],
				isError: true
			};
		}
		if (!existsSync(filePath)) {
			return {
				content: [{ type: 'text', text: `Error: Migration guide '${guideName}' not found. Use list_migration_guides to see available guides.` }],
				isError: true
			};
		}
		return { content: [{ type: 'text', text: await readFile(filePath, 'utf-8') }] };
	}
	const manifest = await getManifest();
	const guide = manifest.migrationGuides[guideName];
	if (!guide) {
		return {
			content: [{ type: 'text', text: `Error: Migration guide '${guideName}' not found. Use list_migration_guides to see available guides.` }],
			isError: true
		};
	}
	return { content: [{ type: 'text', text: guide }] };
}
