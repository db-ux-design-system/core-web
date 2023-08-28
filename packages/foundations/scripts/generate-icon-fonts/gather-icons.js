const FSE = require('fs-extra');
const { globSync } = require('glob');

const generalPrefix = '';

const availableSizes = [16, 20, 24, 32, 48, 64];
const componentSizes = [24, 20, 16];

const allTemporaryDir = 'all';

/**
 * @param temporaryDirectory {string}
 * @param values {{ src: string, prefix: string, ignoreGlobs:string|string[], variants:string[], dryRun:boolean, withSizes: boolean }}
 */
const gatherIcons = (temporaryDirectory, values) => {
	const { src, ignoreGlobs, prefix, dryRun, variants, withSizes } = values;
	const paths = `${src}/**/*.svg`;

	// We use this to generate all combinations of variants and sizes as fonts
	const splitSizesArray = withSizes ? ['', ...availableSizes] : [''];
	const splitVariantsArray = variants.length > 0 ? ['', ...variants] : [''];

	const globPaths = globSync(paths, { ignore: ignoreGlobs }).map((path) =>
		path.replace(/\\/g, '/')
	);

	if (dryRun) {
		// eslint-disable-next-line no-console
		console.log('files:', globPaths);
		return;
	}

	if (!FSE.existsSync(temporaryDirectory)) {
		FSE.mkdirSync(temporaryDirectory);
	}

	if (!FSE.existsSync(`${temporaryDirectory}/${allTemporaryDir}`)) {
		FSE.mkdirSync(`${temporaryDirectory}/${allTemporaryDir}`);
	}

	const foundIconFiles = [];

	for (const svgPath of globPaths) {
		const paths = svgPath.split('/');
		let filename = paths.at(-1);
		let iconName;
		if (prefix) {
			filename = filename.replace(prefix, '');
		}

		iconName = filename.replace('.svg', '');
		for (const size of availableSizes) {
			iconName = iconName.replace(`_${size}`, '');
		}

		FSE.copyFileSync(
			svgPath,
			`${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${filename}`
		);

		if (iconName && !foundIconFiles.includes(iconName)) {
			foundIconFiles.push(iconName);
		}
	}

	for (const iconFileName of foundIconFiles) {
		const defaultFileExists = FSE.existsSync(
			`${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${iconFileName}.svg`
		);

		if (!defaultFileExists) {
			for (const size of componentSizes) {
				const sizeFileName = `${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${iconFileName}_${size}.svg`;
				if (FSE.existsSync(sizeFileName)) {
					FSE.copyFileSync(
						sizeFileName,
						`${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${iconFileName}.svg`
					);
					break;
				}
			}
		}

		for (const size of componentSizes) {
			// Generate all component sizes inside /all directory
			const requiredFilePath = `${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${iconFileName}_${size}.svg`;
			if (!FSE.existsSync(requiredFilePath)) {
				const nextBestSizeArray =
					size === 16 ? [20, 24] : size === 20 ? [24, 16] : [20, 16];
				for (const nextSize of nextBestSizeArray) {
					const nextSizeFilePath = `${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${iconFileName}_${nextSize}.svg`;
					if (FSE.existsSync(nextSizeFilePath)) {
						FSE.copyFileSync(nextSizeFilePath, requiredFilePath);
						break;
					}
				}
			}
		}

		for (const size of splitSizesArray) {
			// Generate new directories based on size and variant
			for (const variant of splitVariantsArray) {
				if (
					variant === ''
						? !variants.some((va) =>
								iconFileName.endsWith(`_${va}`)
						  )
						: iconFileName.endsWith(`_${variant}`)
				) {
					const fileName =
						variant === ''
							? iconFileName
							: iconFileName.replace(`_${variant}`, '');
					const sizeFileEnding = `${size === '' ? '' : `_${size}`}`;
					const directory = `${
						variant === '' ? 'default' : variant
					}${sizeFileEnding}`;
					const defaultFilePath = `${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${iconFileName}.svg`;
					const sizeFilePath = `${temporaryDirectory}/${allTemporaryDir}/${generalPrefix}${iconFileName}${sizeFileEnding}.svg`;

					if (!FSE.existsSync(`${temporaryDirectory}/${directory}`)) {
						FSE.mkdirSync(`${temporaryDirectory}/${directory}`);
					}

					if (FSE.existsSync(sizeFilePath)) {
						FSE.copyFileSync(
							sizeFilePath,
							`${temporaryDirectory}/${directory}/${generalPrefix}${fileName}.svg`
						);
					} else {
						FSE.copyFileSync(
							defaultFilePath,
							`${temporaryDirectory}/${directory}/${generalPrefix}${fileName}.svg`
						);
					}
				}
			}
		}
	}
};

module.exports = { gatherIcons };
