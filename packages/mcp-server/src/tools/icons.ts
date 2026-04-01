import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
	type ToolResult,
	ALL_ICONS_FILE,
	getManifest,
	IS_MONOREPO,
	MAX_JSON_OUTPUT,
	MIGRATION_DIR,
	truncate
} from '../utils';

/**
 * Parses the DB-UX icon names from the third column of icon-migration.md.
 * Returns null if the file does not exist.
 */
async function parseIconsFromMigrationGuide(): Promise<string[] | null> {
	const filePath = join(MIGRATION_DIR, 'icon-migration.md');
	if (!existsSync(filePath)) return null;
	const source = await readFile(filePath, 'utf-8');
	const icons = [
		...source.matchAll(/^\|\s*`[^`]+`\s*\|[^|]+\|\s*`([^`]+)`/gm)
	].map((m) => m[1]);
	return [...new Set(icons)];
}

/**
 * Returns all available DB UX icon names by parsing the generated all-icons.ts file.
 * Falls back to the embedded manifest when running outside the monorepo.
 */
export async function handleListIcons(): Promise<ToolResult> {
	if (IS_MONOREPO) {
		const source = existsSync(ALL_ICONS_FILE)
			? await readFile(ALL_ICONS_FILE, 'utf-8')
			: null;
		const iconsFromTs = source
			? [...source.matchAll(/'([^']+)'/g)].map((m) => m[1])
			: null;
		const iconsFromMd = await parseIconsFromMigrationGuide();
		const icons = mergeIconLists(iconsFromTs, iconsFromMd);
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

/**
 * Merges two icon lists, deduplicating by value.
 * Primary list takes precedence; secondary list adds any missing entries.
 */
function mergeIconLists(
	primary: string[] | null,
	secondary: string[] | null
): string[] {
	const base = primary ?? [];
	if (!secondary) return base;
	const set = new Set(base);
	for (const icon of secondary) set.add(icon);
	return [...set];
}
