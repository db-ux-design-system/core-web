/* eslint-disable unicorn/prefer-top-level-await */
import FS from 'node:fs';
import https from 'node:https';
import { glob } from 'glob';
import Replace from 'replace-in-file';

// eslint-disable-next-line prefer-regex-literals
const shieldRegex = new RegExp('https://img\\.shields\\.io/[^)|\\s]*');
const docsPath = 'docs/images/download';

const findReplacements = (file, filesToReplace) => {
	let readFile = FS.readFileSync(file).toString();
	let match = readFile.match(shieldRegex);

	while (match?.length > 0) {
		const svgUrl = match[0];
		let svgName = svgUrl;
		if (svgUrl.includes('badge/dynamic/')) {
			const dynamicsMatch = svgUrl.match('query=%24.*');
			if (dynamicsMatch) {
				svgName = dynamicsMatch[0].replace('query=%24', '');
			}
		}

		svgName = decodeURI(svgName)
			.replace('https://img.shields.io/badge/', '')
			.replace('.svg', '')
			.replace(/[^a-zA-Z\d\s]/g, '')
			.replace(/ /g, '_');
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

const startReplacement = (filesToReplace) => {
	for (const downloadFile of filesToReplace) {
		const { svgUrl, pathNameSvg, pathname, files } = downloadFile;

		Replace.sync({
			files,
			processor(input) {
				let replacedInput = input;
				while (replacedInput.includes(svgUrl)) {
					replacedInput = replacedInput.replace(
						svgUrl,
						`/${pathNameSvg}`
					);
				}

				return replacedInput;
			}
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

const convertImages = async () => {
	if (!FS.existsSync(docsPath)) {
		FS.mkdirSync(docsPath);
	}

	const mdfiles = await glob('**/*.md', { ignore: '**/node_modules/**' });
	let filesToReplace = [];

	for (const file of mdfiles) {
		findReplacements(file, filesToReplace);
	}

	// Windows has double backslash for paths
	filesToReplace = filesToReplace.map((file) => ({
		...file,
		files: file.files.map((fileName) => fileName.replace(/\\/g, '/'))
	}));

	startReplacement(filesToReplace);
};

convertImages();
