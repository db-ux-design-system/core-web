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

const FRAMEWORKS = ['react', 'angular', 'vue'] as const;
type Framework = (typeof FRAMEWORKS)[number];

async function readOptional(path: string): Promise<string | null> {
	if (!existsSync(path)) return null;
	return readFile(path, 'utf-8');
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

	for (const name of componentNames) {
		// model.ts
		const props = await readOptional(
			join(COMPONENTS_SRC, name, 'model.ts')
		);

		// Example names from showcase
		const showcaseSrc = await readOptional(
			join(COMPONENTS_SRC, name, 'showcase', `${name}.showcase.lite.tsx`)
		);
		const examples = showcaseSrc
			? [...showcaseSrc.matchAll(/exampleName="([^"]+)"/g)].map(
					(m) => m[1]
				)
			: [];

		// Example source per framework
		const exampleCode = {} as Record<Framework, Record<string, string>>;
		for (const fw of FRAMEWORKS) {
			exampleCode[fw] = {};
			const exDir = join(
				OUTPUT_DIR,
				fw,
				'src/components',
				name,
				'examples'
			);
			if (!existsSync(exDir)) continue;
			const files = await readdir(exDir);
			for (const file of files.filter(
				(f) => !f.startsWith('_') && f.includes('.example.')
			)) {
				const src = await readFile(join(exDir, file), 'utf-8');
				// Key: full filename including extension (e.g. "show-icon-leading.example.tsx")
				exampleCode[fw][file] = src;
			}
		}

		components[name] = { props, examples, exampleCode };
	}

	const manifest = { icons, components };
	const outPath = join(import.meta.dirname, 'manifest.json');
	await writeFile(outPath, JSON.stringify(manifest));
	console.log(
		`manifest.json written (${Object.keys(components).length} components, ${icons.length} icons)`
	);
}

await buildManifest();
