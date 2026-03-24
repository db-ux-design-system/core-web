/**
 * Generates src/manifest.json at build time.
 * Run via: npx tsx src/build-manifest.ts
 *
 * The manifest embeds all component metadata and example source code so the
 * MCP server can operate without access to the monorepo source tree (e.g.
 * when invoked via `npx @db-ux/core-foundations`).
 */
import { existsSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const REPO_ROOT = resolve(import.meta.dirname, '../../..');
const COMPONENTS_SRC = join(REPO_ROOT, 'packages/components/src/components');
const FOUNDATIONS_SRC = join(REPO_ROOT, 'packages/foundations/src');
const OUTPUT_DIR = join(REPO_ROOT, 'output');

const FRAMEWORKS = ['react', 'angular', 'vue', 'web-components', 'html'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function readOptional(path: string): Promise<string | null> {
	if (!existsSync(path)) return null;
	return readFile(path, 'utf-8');
}

export async function processComponent(
	name: string,
	componentsSrc: string,
	outputDir: string
): Promise<{ hasError: false; name: string; data: { props: string | null; examples: string[]; exampleCode: Record<Framework, Record<string, string>> } } | { hasError: true }> {
	try {
		const props = await readOptional(join(componentsSrc, name, 'model.ts'));

		const showcaseSrc = await readOptional(
			join(componentsSrc, name, 'showcase', `${name}.showcase.lite.tsx`)
		);
		const examples = showcaseSrc
			? [...showcaseSrc.matchAll(/exampleName="([^"]+)"/g)].map((m) => m[1])
			: [];

		const exampleCode = {} as Record<Framework, Record<string, string>>;
		for (const fw of FRAMEWORKS) {
			exampleCode[fw] = {};
			if (fw === 'html') {
				const htmlIndex = await readOptional(join(componentsSrc, name, 'index.html'));
				if (htmlIndex) exampleCode[fw]['index.html'] = htmlIndex;
				continue;
			}
			const fwOutputDir = fw === 'web-components' ? 'stencil' : fw;
			const exDir = join(outputDir, fwOutputDir, 'src/components', name, 'examples');
			if (!existsSync(exDir)) continue;
			const files = await readdir(exDir);
			for (const file of files.filter((f) => !f.startsWith('_') && f.includes('.example.'))) {
				exampleCode[fw][file] = await readFile(join(exDir, file), 'utf-8');
			}
		}

		return { hasError: false as const, name, data: { props, examples, exampleCode } };
	} catch (error: any) {
		console.error(`Failed to process component ${name}: ${error.message}`);
		return { hasError: true as const };
	}
}

async function buildManifest() {
	const componentEntries = await readdir(COMPONENTS_SRC, {
		withFileTypes: true
	});
	const componentNames = componentEntries
		.filter((e) => e.isDirectory())
		.map((e) => e.name);

	// Icon list from all-icons.ts
	const allIconsSrc = await readOptional(
		join(FOUNDATIONS_SRC, 'all-icons.ts')
	);
	const icons = allIconsSrc
		? [...allIconsSrc.matchAll(/'([^']+)'/g)].map((m) => m[1])
		: [];

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
		componentNames.map((name) => processComponent(name, COMPONENTS_SRC, OUTPUT_DIR))
	);

	const hasErrors = entries.some((entry) => entry.hasError);
	for (const entry of entries) {
		if (!entry.hasError) components[entry.name] = entry.data;
	}

	const manifest = { icons, components };
	const outPath = join(import.meta.dirname, 'manifest.json');
	await writeFile(outPath, JSON.stringify(manifest));
	console.log(
		`manifest.json written (${Object.keys(components).length} components, ${icons.length} icons)`
	);

	if (hasErrors) process.exit(1);
}

await buildManifest();
