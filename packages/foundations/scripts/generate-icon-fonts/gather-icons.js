const FSE = require('fs-extra');
const { globSync } = require('glob');

const generalPrefix = '';

const availableSizes = [16, 20, 24, 32, 48, 64];
const componentSizes = [24, 20, 16];

/**
 * @param temporaryDirectory {string}
 * @param values {{ src: string, prefix: string, ignoreGlobs:string|string[], dryRun:boolean }}
 */
const gatherIcons = (temporaryDirectory, values) => {
	const src = values.src;
	const paths = `${src}/**/*.svg`;

	const globPaths = globSync(paths, { ignore: values.ignoreGlobs }).map(
		(path) => path.replace(/\\/g, '/')
	);

	if (values.dryRun) {
		// eslint-disable-next-line no-console
		console.log('files:', globPaths);
		return;
	}

	if (!FSE.existsSync(temporaryDirectory)) {
		FSE.mkdirSync(temporaryDirectory);
	}

	const foundIconFiles = [];

	for (const svgPath of globPaths) {
		const paths = svgPath.split('/');
		let filename = paths.at(-1);
		let iconName;
		if (values.prefix) {
			filename = filename.replace(values.prefix, '');
		}

		iconName = filename.replace('.svg', '');
		for (const size of availableSizes) {
			iconName = iconName.replace(`_${size}`, '');
		}

		FSE.copyFileSync(
			svgPath,
			`${temporaryDirectory}/${generalPrefix}${filename}`
		);

		if (iconName && !foundIconFiles.includes(iconName)) {
			foundIconFiles.push(iconName);
		}
	}

	for (const iconFileName of foundIconFiles) {
		const defaultFileExists = FSE.existsSync(
			`${temporaryDirectory}/${generalPrefix}${iconFileName}.svg`
		);

		if (!defaultFileExists) {
			for (const size of componentSizes) {
				const sizeFileName = `${temporaryDirectory}/${generalPrefix}${iconFileName}_${size}.svg`;
				if (FSE.existsSync(sizeFileName)) {
					FSE.copyFileSync(
						sizeFileName,
						`${temporaryDirectory}/${generalPrefix}${iconFileName}.svg`
					);
					break;
				}
			}
		}

		for (const size of componentSizes) {
			const requiredFilePath = `${temporaryDirectory}/${generalPrefix}${iconFileName}_${size}.svg`;
			if (!FSE.existsSync(requiredFilePath)) {
				const nextBestSizeArray =
					size === 16 ? [20, 24] : size === 20 ? [24, 16] : [20, 16];
				for (const nextSize of nextBestSizeArray) {
					const nextSizeFilePath = `${temporaryDirectory}/${generalPrefix}${iconFileName}_${nextSize}.svg`;
					if (FSE.existsSync(nextSizeFilePath)) {
						FSE.copyFileSync(nextSizeFilePath, requiredFilePath);
						break;
					}
				}
			}
		}
	}
};

module.exports = { gatherIcons };
