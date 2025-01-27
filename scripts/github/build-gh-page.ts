import fs from 'node:fs';
import path from 'node:path';
import { extract } from 'tar';

const buildGHPage = async () => {
	const NAME: string | undefined = process.env.NAME;
	const OWNER_NAME: string | undefined = process.env.OWNER_NAME;
	const REPO_NAME: string | undefined = process.env.REPO_NAME;
	const OUT_DIR: string = process.env.OUT_DIR || 'out';
	const RELEASE: boolean = process.env.RELEASE === 'true';
	const PRE_RELEASE: boolean = process.env.PRE_RELEASE === 'true';

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
	await extract({
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
		if (RELEASE) {
			const latestDir = path.join(versionDir, 'latest');
			if (fs.existsSync(latestDir)) {
				console.log('Remove dir ./public/version/latest');
				fs.rmdirSync(latestDir, { recursive: true });
			}
			fs.mkdirSync(latestDir);
			fs.cpSync(OUT_DIR, latestDir, { recursive: true });
			console.log('Copied dir out to ./public/version/latest');
		}
		fs.cpSync(OUT_DIR, nameDir, { recursive: true });
		console.log(`Moved dir out to ./public/version/${NAME}`);
	} else {
		const reviewDir = path.join('public', 'review');
		if (!fs.existsSync(reviewDir)) {
			console.log('Make dir ./public/review');
			fs.mkdirSync(reviewDir);
		}
		const nameDir = path.join(reviewDir, NAME);
		if (fs.existsSync(nameDir)) {
			console.log(`Remove dir ./public/review/${NAME}`);
			fs.rmSync(nameDir, { recursive: true });
		}
		fs.cpSync(OUT_DIR, nameDir, { recursive: true });
		console.log(`Moved dir out to ./public/review/${NAME}`);
	}
};

void buildGHPage();
