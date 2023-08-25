const FSE = require('fs-extra');
const { globSync } = require('glob');

const dbIconPrefix = 'db_ic_';
const generalPrefix = '';
const defaultIconPath = 'assets/icons/functional/**/*.svg';

const availableSizes = [16, 20, 24, 32];

/**
 * @param tmpDirectory {string}
 * @param values {{ extraIconsGlob:string|string[], ignoreGlobs:string|string[], }}
 */
const gatherIcons = (temporaryDirectory, values) => {
	const paths = [defaultIconPath];

	if (values.extraIconsGlob) {
		paths.push(values.extraIconsGlob);
	}

	const globPaths = globSync(paths, { ignore: values.ignoreGlobs }).map(
		(path) => path.replace(/\\/g, '/')
	);

	if (!FSE.existsSync(temporaryDirectory)) {
		FSE.mkdirSync(temporaryDirectory);
	}

	const foundIconFiles = [];

	for (const svgPath of globPaths) {
		const paths = svgPath.split('/');
		let filename = paths.at(-1);
		let iconName;
		if (filename.startsWith(dbIconPrefix)) {
			filename = filename.replace(dbIconPrefix, '');
			iconName = filename.replace('.svg', '');
			for (const size of availableSizes) {
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
