/* eslint-disable @typescript-eslint/prefer-regexp-exec */

import { glob } from 'glob';
import fs from 'node:fs';
import * as https from 'node:https';
import { replaceInFileSync } from 'replace-in-file';

// eslint-disable-next-line prefer-regex-literals
const shieldRegex = new RegExp(String.raw`https://img\.shields\.io/[^)|\s]*`);
const docsPath = 'docs/images/download';

type Replacement = {
	files: string[];
	svgUrl: string;
	pathname: string;
	pathNameSvg: string;
};

const findReplacements = (file: string, filesToReplace: Replacement[]) => {
	let readFile = fs.readFileSync(file).toString();
	let match = readFile.match(shieldRegex);

	while (match && match.length > 0) {
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
			.replaceAll(/[^a-zA-Z\d\s]/g, '')
			.replaceAll(' ', '_');
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

		readFile = readFile.slice((match.index ?? 0) + svgUrl.length);
		match = readFile.match(shieldRegex);
	}
};

const startReplacement = (filesToReplace: Replacement[]) => {
	for (const downloadFile of filesToReplace) {
		const { svgUrl, pathNameSvg, pathname, files } = downloadFile;

		replaceInFileSync({
			files,
			processor(input: string) {
				let replacedInput: string = input;
				while (replacedInput.includes(svgUrl)) {
					replacedInput = replacedInput.replace(
						svgUrl,
						`/${pathNameSvg}`
					);
				}

				return replacedInput;
			}
		});

		if (!fs.existsSync(pathNameSvg)) {
			const fileStream = fs.createWriteStream(pathNameSvg);

			https.get(svgUrl, (incomingMessage) => {
				incomingMessage.pipe(fileStream);
				fileStream.on('finish', () => {
					fileStream.close();
					fs.writeFileSync(
						`${pathname}.licence`,
						`retrieved from URL: ${svgUrl}`
					);
				});
			});
		}
	}
};

const convertImages = async () => {
	if (!fs.existsSync(docsPath)) {
		fs.mkdirSync(docsPath);
	}

	const mdfiles: string[] = await glob('**/*.md', {
		ignore: '**/node_modules/**'
	});
	let filesToReplace: Replacement[] = [];

	for (const file of mdfiles) {
		findReplacements(file, filesToReplace);
	}

	// Windows has double backslash for paths
	filesToReplace = filesToReplace.map((file) => ({
		...file,
		files: file.files.map((fileName: string) =>
			fileName.replaceAll('\\', '/')
		)
	}));

	startReplacement(filesToReplace);
};

await convertImages();
