import os from 'node:os';
import path from 'node:path';
import {
	mkdtemp,
	rm,
	readFile,
	writeFile,
	access,
	readdir
} from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import fg from 'fast-glob';

const COMPONENTS_DIR = path.resolve(process.cwd(), 'src/components');
const MITOSIS_BINARY = 'mitosis';
const TMP_PREFIX = 'mito-';

const frameworks = [
	{
		name: 'react',
		fenceLang: 'tsx',
		destExt: '.react.md'
	},
	{
		name: 'vue',
		fenceLang: 'vue',
		destExt: '.vue.md'
	},
	{
		name: 'angular',
		fenceLang: 'ts',
		destExt: '.angular.md'
	}
];

/**
 * Ensure the Mitosis CLI binary is available in PATH.
 * Throws if not found.
 */
function checkMitosisBinary() {
	const which = process.platform === 'win32' ? 'where' : 'which';
	const res = spawnSync(which, [MITOSIS_BINARY], { encoding: 'utf8' });
	if (res.status !== 0) {
		throw new Error(
			`'${MITOSIS_BINARY}' not found in PATH. Please install it.`
		);
	}
}

/**
 * Compile a .docs.lite.tsx file for a given framework using the Mitosis CLI.
 * @param {string} liteFile - Path to the .docs.lite.tsx file.
 * @param {{name:string,fenceLang:string,destExt:string}} fw
 * @returns {Promise<string|null>} The generated code snippet or null if none.
 */
async function compileWithCLI(liteFile, fw) {
	const tmpDir = await mkdtemp(path.join(os.tmpdir(), TMP_PREFIX));
	const args = ['compile', '-t', fw.name, '--out-dir', tmpDir, liteFile];
	const res = spawnSync(MITOSIS_BINARY, args, { encoding: 'utf8' });
	if (res.error || res.status !== 0) {
		console.log(
			`❌  ${fw.name} compilation failed:\n${res.stdout}\n${res.stderr}`
		);
		await rm(tmpDir, { recursive: true, force: true });
		throw new Error(`Mitosis compile failed for ${fw.name}`);
	}

	const pattern = `**/*.tsx`;
	const files = await fg(pattern, {
		cwd: tmpDir,
		absolute: true,
		nocase: true
	});

	let code = null;
	if (files.length > 0) {
		code = await readFile(files[0], 'utf8');
	}

	await rm(tmpDir, { recursive: true, force: true });
	return code;
}

/**
 * Process one component: read its .docs.lite.tsx, compile snippets, write .md files.
 * @param {string} name - Component folder name.
 */
async function processComponent(name) {
	const docsDir = path.join(COMPONENTS_DIR, name, 'docs');
	const liteFile = path.join(docsDir, `${name}.docs.lite.tsx`);
	try {
		await access(liteFile);
	} catch {
		console.log(`⚠️  Skipping '${name}': ${liteFile} not found.`);
		return;
	}

	await Promise.all(
		frameworks.map(async (fw) => {
			try {
				console.log(
					`🐛  Generating snippets for ${fw.name}-component: ${name}`
				);
				const code = await compileWithCLI(liteFile, fw);
				if (!code) {
					console.log(`⚠️  No output for ${fw.name}, skipping.`);
					return;
				}

				const snippet = ['```' + fw.fenceLang, code.trim(), '```'].join(
					'\n'
				);
				const outFile = path.join(docsDir, `${name}${fw.destExt}`);
				await writeFile(outFile, snippet + '\n', 'utf8');
				console.log(`✅  Written: ${outFile}`);
			} catch (error) {
				console.log(
					`❌  Error processing ${name} for ${fw.name}: ${error.message}`
				);
			}
		})
	);
}

checkMitosisBinary();

const entries = await readdir(COMPONENTS_DIR, { withFileTypes: true });

await Promise.all(
	entries
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => processComponent(dirent.name))
);
