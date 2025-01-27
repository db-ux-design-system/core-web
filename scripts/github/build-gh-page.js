import fs from 'node:fs';
import path from 'node:path';
import tar from 'tar';

const NAME = process.env.NAME;
const OWNER_NAME = process.env.OWNER_NAME;
const REPO_NAME = process.env.REPO_NAME;
const RELEASE = process.env.RELEASE === 'true';
const PRE_RELEASE = process.env.PRE_RELEASE === 'true';

if (!NAME) {
	console.error('Error: Missing NAME variable');
	process.exit(1);
}

console.log('➕ Create public dir');
if (!fs.existsSync('public')) {
	fs.mkdirSync('public');
}

console.log('📥 Get gh-pages tar');

const result = await fetch(
	`https://github.com/${OWNER_NAME}/${REPO_NAME}/tarball/gh-pages`
);

if (!result.ok) {
	throw new Error(`Failed to fetch tarball: ${result.statusText}`);
}

const buffer = await result.arrayBuffer();
fs.writeFileSync('gh-pages.tar.gz', Buffer.from(buffer));
console.log('📦 Unpack Tar');
await tar.x({
	file: 'gh-pages.tar.gz',
	C: 'public',
	strip: 1
});

if (RELEASE) {
	console.log('🔃 Create redirect');
	const redirectContent = `<meta http-equiv="refresh" content="0; URL=https://${OWNER_NAME}.github.io/${REPO_NAME}/version/latest" />`;
	fs.writeFileSync(path.join('public', 'index.html'), redirectContent);
}

console.log('👣 Move out dir');
if (PRE_RELEASE || RELEASE) {
	const versionDir = path.join('public', 'version');
	if (!fs.existsSync(versionDir)) {
		console.log('Make dir ./public/version');
		fs.mkdirSync(versionDir);
	}
	const nameDir = path.join(versionDir, NAME);
	if (fs.existsSync(nameDir)) {
		console.log(`Remove dir ./public/version/${NAME}`);
		fs.rmdirSync(nameDir, { recursive: true });
	}
}
