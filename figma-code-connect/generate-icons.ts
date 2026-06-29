/**
 * Generates Figma Code Connect batch files for all DB UX icons.
 *
 * Usage:
 *   npx tsx figma-code-connect/generate-icons.ts
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

// ── Load .env files if they exist (in CI, env vars are set directly) ──────────

for (const envPath of [
	join(currentDir, '..', '.env'),
	join(currentDir, 'react-figma', '.env')
]) {
	try {
		process.loadEnvFile(envPath);
	} catch {
		/* File doesn't exist, skip */
	}
}

// ── Config ────────────────────────────────────────────────────────────────────

const iconsFileKey = process.env.FIGMA_ICON_FILE;
const figmaApi = 'https://api.figma.com/v1';
const token = process.env.FIGMA_ACCESS_TOKEN;

if (!token) {
	throw new Error('FIGMA_ACCESS_TOKEN not set');
}

if (!iconsFileKey) {
	throw new Error('FIGMA_ICON_FILE not set');
}

// ── Fetch components from Figma ───────────────────────────────────────────────

console.log(`Fetching components from Figma file ${iconsFileKey}...`);

const response = await fetch(`${figmaApi}/files/${iconsFileKey}/components`, {
	headers: { 'X-Figma-Token': token }
});

if (!response.ok) {
	throw new Error(
		`Figma API error: ${response.status} ${response.statusText}`
	);
}

// The Figma API returns containing_frame with camelCase nodeId
type ContainingFrame = {
	name: string;
	nodeId: string;
	pageId?: string;
	pageName?: string;
	containingComponentSet?: { name: string; nodeId: string };
};

type FigmaComponent = {
	key: string;
	node_id: string;
	name: string;
	containing_frame?: ContainingFrame;
};

type FigmaApiResponse = {
	meta: { components: FigmaComponent[] };
};

const data = (await response.json()) as FigmaApiResponse;

// ── Build icon → nodeId map ───────────────────────────────────────────────────

type IconEntry = { nodeId: string; name: string };
const iconMap = new Map<string, IconEntry>();

for (const component of data.meta.components) {
	const frame = component.containing_frame;
	if (!frame?.nodeId) continue;

	// Normalize: "detachable-wheelchair" → "detachable_wheelchair"
	const iconName = frame.name
		.toLowerCase()
		.replaceAll(/\s+/g, '_')
		.replaceAll('-', '_');

	if (!iconMap.has(iconName)) {
		iconMap.set(iconName, { nodeId: frame.nodeId, name: frame.name });
	}
}

console.log(`Found ${iconMap.size} icon component sets.`);

// ── Load all-icons.ts ─────────────────────────────────────────────────────────

const allIconsPath = join(
	currentDir,
	'..',
	'node_modules',
	'@db-ux',
	'db-theme-icons',
	'build',
	'ts',
	'all-icons.ts'
);

const allIconsContent = readFileSync(allIconsPath, 'utf8');
const allIconsMatch = /\[([^\]]+)]/.exec(allIconsContent);
const allIcons: string[] = allIconsMatch
	? (JSON.parse(allIconsMatch[0].replaceAll("'", '"')) as string[])
	: [];

console.log(`Found ${allIcons.length} icons in all-icons.ts.`);

// ── Match icons to Figma nodes ────────────────────────────────────────────────

type Component = { url: string; id: string; iconName: string };
const components: Component[] = [];
const missing: string[] = [];

for (const iconName of allIcons) {
	const entry = iconMap.get(iconName);
	if (!entry) {
		missing.push(iconName);
		continue;
	}

	const nodeId = entry.nodeId.replace(':', '-');
	components.push({
		url: `https://www.figma.com/design/${iconsFileKey}?node-id=${nodeId}`,
		id: `icon-${iconName}`,
		iconName
	});
}

if (missing.length > 0) {
	console.warn(
		`⚠ ${missing.length} icons not found in Figma: ${missing.join(', ')}`
	);
}

console.log(`Matched ${components.length} icons.`);

// ── Generate batch files ──────────────────────────────────────────────────────

const iconTemplate = `import figma from 'figma'

export default {
  example: figma.code\`\${figma.batch.iconName}\`,
  imports: [],
  id: figma.batch.id,
}
`;

const frameworks = [
	{ dir: 'react-figma', label: 'React' },
	{ dir: 'vue-figma', label: 'Vue' },
	{ dir: 'angular-figma', label: 'Angular' }
];

for (const fw of frameworks) {
	const outDir = join(currentDir, fw.dir, 'src', 'icons');
	mkdirSync(outDir, { recursive: true });

	writeFileSync(join(outDir, 'icon.figma.batch.ts'), iconTemplate);

	writeFileSync(
		join(outDir, 'icon.figma.batch.json'),
		JSON.stringify(
			{
				templateFile: './icon.figma.batch.ts',
				components: components.map((c) => ({
					url: c.url,
					id: c.id,
					iconName: c.iconName
				}))
			},
			null,
			2
		)
	);

	console.log(`✓ ${fw.label}: wrote ${components.length} icons → ${outDir}`);
}

console.log('\nDone!');
