/* eslint-disable unicorn/prefer-top-level-await */
import FS from 'node:fs';
import https from 'node:https';
import { glob } from 'glob';
import Replace from 'replace-in-file';

// eslint-disable-next-line prefer-regex-literals
const shieldRegex = new RegExp('https://img\\.shields\\.io/badge/(.*)\\.svg');
const docsPath = 'docs/images/download';

const startReplacement = (file, filesToReplace) => {
	let readFile = FS.readFileSync(file).toString();
	let match = readFile.match(shieldRegex);

	while (match?.length > 0) {
		const svgUrl = match[0];
		const svgName = decodeURI(match[1]);
		const pathname = `${docsPath}/${svgName}`;
		const pathNameSvg = `${pathname}.svg`;

		const foundSvg = filesToReplace.find(
			(downloadFile) => downloadFile.svgUrl === svgUrl
		);

		if (foundSvg) {
			if (!foundSvg.files.includes(file)) {
				foundSvg.files.push(file);
			}
		} else {
			filesToReplace.push({
				files: [file],
				svgUrl,
				pathname,
				pathNameSvg
			});
		}

		readFile = readFile.slice(match.index + svgUrl.length);
		match = readFile.match(shieldRegex);
	}
};

const convertImages = async () => {
	if (!FS.existsSync(docsPath)) {
		FS.mkdirSync(docsPath);
	}

	const mdfiles = await glob('**/*.md', { ignore: '**/node_modules/**' });
	let filesToReplace = [];

	for (const file of mdfiles) {
		startReplacement(file, filesToReplace);
	}

	// Windows has double backslash for paths
	filesToReplace = filesToReplace.map((file) => ({
		...file,
		files: file.files.map((fileName) => fileName.replace(/\\/g, '/'))
	}));

	for (const downloadFile of filesToReplace) {
		const { svgUrl, pathNameSvg, pathname, files } = downloadFile;

		Replace.sync({
			from: svgUrl,
			to: `/${pathNameSvg}`,
			files
		});

		if (!FS.existsSync(pathNameSvg)) {
			const fileStream = FS.createWriteStream(pathNameSvg);

			https.get(svgUrl, (incomingMessage) => {
				incomingMessage.pipe(fileStream);
				fileStream.on('finish', () => {
					fileStream.close();
					FS.writeFileSync(
						`${pathname}.licence`,
						`retrieved from URL: ${svgUrl}`
					);
				});
			});
		}
	}
};

convertImages();
