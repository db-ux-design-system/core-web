#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

/*
 * Produces the small root redirect (index.html -> version/latest) for full
 * releases into ./root-redirect. The actual site is published per-subtree via
 * `destination_dir` in the workflow (review/<branch>, version/<name>,
 * version/latest), which replaces each owned subtree while leaving siblings
 * untouched. The root redirect is the one file that must coexist with all
 * subtrees, so it is published separately with keep_files: true.
 */
const buildGHPage = () => {
	const { NAME } = process.env;
	const IS_RELEASE: boolean = process.env.RELEASE === 'true';

	if (!NAME) {
		console.error('Error: Missing NAME variable');
		process.exit(1);
	}

	if (!IS_RELEASE) {
		console.log('Not a release; no root redirect needed.');
		return;
	}

	const { OWNER_NAME } = process.env;
	const { REPO_NAME } = process.env;
	const outDir = 'root-redirect';
	fs.mkdirSync(outDir, { recursive: true });
	const redirectContent = `<meta http-equiv="refresh" content="0; URL=https://${OWNER_NAME}.github.io/${REPO_NAME}/version/latest" />`;
	fs.writeFileSync(path.join(outDir, 'index.html'), redirectContent);
	console.log(
		'🔃 Created root redirect to version/latest in ./root-redirect'
	);
};

buildGHPage();
