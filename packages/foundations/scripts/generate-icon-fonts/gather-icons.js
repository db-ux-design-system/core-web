const FSE = require('fs-extra');
const { globSync } = require('glob');

const generalPrefix = '';

const availableSizes = [16, 20, 24, 32];

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
	let hasSizes = false;

	for (const svgPath of globPaths) {
		const paths = svgPath.split('/');
		let filename = paths.at(-1);
		let iconName;
		if (values.prefix) {
			filename = filename.replace(values.prefix, '');
		}

		iconName = filename.replace('.svg', '');
		for (const size of availableSizes) {
			if (iconName.endsWith(`_${size}`)) {
				hasSizes = true;
				iconName = iconName.replace(`_${size}`, '');
			}
		}

		FSE.copyFileSync(
			svgPath,
			`${temporaryDirectory}/${generalPrefix}${filename}`
		);

		if (iconName && !foundIconFiles.includes(iconName)) {
			foundIconFiles.push(iconName);
		}
	}

	if (!hasSizes) {
		// Generate the svg with _24 as ending
		for (const iconFileName of foundIconFiles) {
			FSE.renameSync(
				`${temporaryDirectory}/${generalPrefix}${iconFileName}.svg`,
				`${temporaryDirectory}/${generalPrefix}${iconFileName}_24.svg`
			);
		}
	}

	for (const iconFileName of foundIconFiles) {
		for (const size of availableSizes) {
			const requiredFilePath = `${temporaryDirectory}/${generalPrefix}${iconFileName}_${size}.svg`;
			if (!FSE.existsSync(requiredFilePath)) {
				// TODO: If 16 is missing this takes 32 instead of 20 as fallback...
				const nextBestSizeArray =
					size < 24
						? availableSizes.filter((aSize) => aSize > size)
						: availableSizes.slice().reverse();
				for (const nextSize of nextBestSizeArray) {
					const nextSizeFilePath = `${temporaryDirectory}/${generalPrefix}${iconFileName}_${nextSize}.svg`;
					if (FSE.existsSync(nextSizeFilePath)) {
						FSE.copyFileSync(nextSizeFilePath, requiredFilePath);
					}
				}
			}
		}
	}
};

module.exports = { gatherIcons };
