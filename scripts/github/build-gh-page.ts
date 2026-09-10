#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

/*
 * Assembles ONLY the current branch's (or version's) subtree into ./public,
 * which is then published with `keep_files: true` so it merges on top of the
 * existing gh-pages branch. This avoids downloading, unpacking and re-committing
 * the entire accumulated gh-pages site on every deploy (previously the dominant
 * cost of the deploy job). Pruning of removed branches stays in cleanup.yml.
 */
const buildGHPage = () => {
	const { NAME } = process.env;
	const OUT_DIR: string = process.env.OUT_DIR ?? 'out';
	const IS_RELEASE: boolean = process.env.RELEASE === 'true';
	const IS_PRE_RELEASE: boolean = process.env.PRE_RELEASE === 'true';

	if (!NAME) {
		console.error('Error: Missing NAME variable');
		process.exit(1);
	}

	console.log('➕ Create public dir');
	fs.mkdirSync('public', { recursive: true });

	// Copy the freshly built site into the subtree that this deploy owns.
	// With keep_files: true, everything already on gh-pages that we do NOT
	// write here is left untouched, so other previews/versions are preserved.
	const copyInto = (targetDir: string) => {
		fs.mkdirSync(path.dirname(targetDir), { recursive: true });
		if (fs.existsSync(targetDir)) {
			fs.rmSync(targetDir, { recursive: true, force: true });
		}

		fs.cpSync(OUT_DIR, targetDir, { recursive: true });
		console.log(`Copied dir ${OUT_DIR} to ${targetDir}`);
	};

	if (IS_PRE_RELEASE || IS_RELEASE) {
		copyInto(path.join('public', 'version', NAME));

		if (IS_RELEASE) {
			copyInto(path.join('public', 'version', 'latest'));

			// Root redirect to the latest published version.
			const { OWNER_NAME } = process.env;
			const { REPO_NAME } = process.env;
			const redirectContent = `<meta http-equiv="refresh" content="0; URL=https://${OWNER_NAME}.github.io/${REPO_NAME}/version/latest" />`;
			fs.writeFileSync(
				path.join('public', 'index.html'),
				redirectContent
			);
			console.log('🔃 Created root redirect to version/latest');
		}
	} else {
		copyInto(path.join('public', 'review', NAME));
	}
};

buildGHPage();
