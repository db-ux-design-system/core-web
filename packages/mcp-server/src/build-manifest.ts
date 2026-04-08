/**
 * Generates src/manifest.json at build time.
 * Run via: npx tsx src/build-manifest.ts
 *
 * The manifest embeds all component metadata and example source code so the
 * MCP server can operate without access to the monorepo source tree (e.g.
 * when invoked via `npx @db-ux/mcp-server`).
 */
import { existsSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import {
	COMPONENTS_DIR,
	DOCS_DIR,
	MIGRATION_DIR,
	OUTPUT_DIR,
	REPO_ROOT,
	TOKEN_FILES
} from './utils';

import { ALL_ICONS } from '@db-ux/db-theme-icons';
const FRAMEWORKS = [
	'react',
	'angular',
	'vue',
	'web-components',
	'html'
] as const;
type Framework = (typeof FRAMEWORKS)[number];

/** Reads a file and returns its content, or null if the file does not exist. */
async function readOptional(path: string): Promise<string | null> {
	if (!existsSync(path)) return null;
	return readFile(path, 'utf-8');
}

/**
 * Collects all metadata for a single component: props, example names, and
 * per-framework example source code.
 *
 * @param name - The component directory name (e.g. "button").
 * @param componentsSrc - Absolute path to the components source directory.
 * @param outputDir - Absolute path to the framework output root directory.
 * @returns A discriminated union: `{ hasError: false, name, data }` on success
 *          or `{ hasError: true }` when any file read fails.
 */
export async function processComponent(
	name: string,
	componentsSrc: string,
	outputDir: string
): Promise<
	| {
			hasError: false;
			name: string;
			data: {
				props: string | null;
				examples: string[];
				exampleCode: Record<Framework, Record<string, string>>;
			};
	  }
	| { hasError: true }
> {
	try {
		const props = await readOptional(join(componentsSrc, name, 'model.ts'));

		const showcaseSrc = await readOptional(
			join(componentsSrc, name, 'showcase', `${name}.showcase.lite.tsx`)
		);
		const examples = showcaseSrc
			? [...showcaseSrc.matchAll(/exampleName="([^"]+)"/g)].map(
					(m) => m[1]
				)
			: [];

		const exampleCode = {} as Record<Framework, Record<string, string>>;
		for (const fw of FRAMEWORKS) {
			exampleCode[fw] = {};
			if (fw === 'html') {
				const htmlIndex = await readOptional(
					join(componentsSrc, name, 'index.html')
				);
				if (htmlIndex) exampleCode[fw]['index.html'] = htmlIndex;
				continue;
			}
			const fwOutputDir = fw === 'web-components' ? 'stencil' : fw;
			const exDir = join(
				outputDir,
				fwOutputDir,
				'src/components',
				name,
				'examples'
			);
			if (!existsSync(exDir)) continue;
			const files = await readdir(exDir);
			for (const file of files.filter(
				(f) => !f.startsWith('_') && f.includes('.example.')
			)) {
				exampleCode[fw][file] = await readFile(
					join(exDir, file),
					'utf-8'
				);
			}
		}

		return {
			hasError: false as const,
			name,
			data: { props, examples, exampleCode }
		};
	} catch (error: any) {
		console.error(`Failed to process component ${name}: ${error.message}`);
		return { hasError: true as const };
	}
}

/**
 * Reads all token SCSS files defined in TOKEN_FILES and returns their raw
 * content keyed by category name. Skips categories whose file does not exist.
 */
async function collectTokens(): Promise<Record<string, string>> {
	const tokens: Record<string, string> = {};
	for (const [category, filePath] of Object.entries(TOKEN_FILES)) {
		if (!existsSync(filePath)) continue;
		tokens[category] = await readFile(filePath, 'utf-8');
	}
	return tokens;
}

/**
 * Recursively scans a directory for Markdown files and returns their content
 * keyed by path relative to the repo root.
 *
 * @param dir - The directory to scan.
 * @param depth - Maximum recursion depth (default 5).
 */
async function collectDocs(
	dir: string,
	depth = 5
): Promise<Record<string, string>> {
	const docs: Record<string, string> = {};
	if (!existsSync(dir) || depth === 0) return docs;
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			Object.assign(docs, await collectDocs(fullPath, depth - 1));
		} else if (entry.name.endsWith('.md')) {
			docs[relative(REPO_ROOT, fullPath)] = await readFile(
				fullPath,
				'utf-8'
			);
		}
	}
	return docs;
}

/**
 * Reads all .md files from docs/migration/ and returns their content keyed
 * by filename without the .md extension (e.g. "v2.x.x-to-v3.0.0").
 */
async function collectMigrationGuides(): Promise<Record<string, string>> {
	if (!existsSync(MIGRATION_DIR)) return {};
	const entries = await readdir(MIGRATION_DIR, { withFileTypes: true });
	const guides: Record<string, string> = {};
	for (const entry of entries) {
		if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
		const key = entry.name.slice(0, -3);
		guides[key] = await readFile(join(MIGRATION_DIR, entry.name), 'utf-8');
	}
	return guides;
}

/**
 * Entry point for the build step. Collects all component data, icons, tokens,
 * and docs, then writes the result to src/manifest.json.
 * Calls process.exit(1) if any component failed to process.
 */
async function buildManifest() {
	const componentEntries = await readdir(COMPONENTS_DIR, {
		withFileTypes: true
	});
	const componentNames = componentEntries
		.filter((e) => e.isDirectory())
		.map((e) => e.name);

	// Icon list from all-icons.ts
	const icons = ALL_ICONS;

	// Per-component data
	const components: Record<
		string,
		{
			props: string | null;
			examples: string[];
			exampleCode: Record<Framework, Record<string, string>>;
		}
	> = {};

	const entries = await Promise.all(
		componentNames.map((name) =>
			processComponent(name, COMPONENTS_DIR, OUTPUT_DIR)
		)
	);

	const hasErrors = entries.some((entry) => entry.hasError);
	for (const entry of entries) {
		if (!entry.hasError) components[entry.name] = entry.data;
	}

	const [tokens, docs, migrationGuides] = await Promise.all([
		collectTokens(),
		collectDocs(DOCS_DIR),
		collectMigrationGuides()
	]);

	const manifest = { icons, components, tokens, docs, migrationGuides };
	const outPath = join(import.meta.dirname, 'manifest.json');
	await writeFile(outPath, JSON.stringify(manifest));
	console.log(
		`manifest.json written (${Object.keys(components).length} components, ${icons.length} icons, ${Object.keys(tokens).length} token categories, ${Object.keys(docs).length} docs, ${Object.keys(migrationGuides).length} migration guides)`
	);

	if (hasErrors) process.exit(1);
}

await buildManifest();
