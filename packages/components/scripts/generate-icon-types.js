/*
 * This script can be used to update the icon type for all components using icons.
 */

const FS = require('node:fs');

const foundationAssetsPath = '../foundations/assets/icons/functional/images';

const generateIconTypes = () => {
	try {
		const icons = FS.readdirSync(foundationAssetsPath)
			.reduce((previousValue, currentValue) => {
				if (currentValue.includes('svg')) {
					return previousValue;
				}

				let iconPaths = FS.readdirSync(
					`${foundationAssetsPath}/${currentValue}`
				);

				if (
					iconPaths.filter(
						(path) => path === 'inverted' || path === 'regular'
					).length === 2
				) {
					return [
						...previousValue,
						`// Directory: ${currentValue}-inverted`,
						...FS.readdirSync(
							`${foundationAssetsPath}/${currentValue}/inverted`
						),
						`// Directory: ${currentValue}-regular`,
						...FS.readdirSync(
							`${foundationAssetsPath}/${currentValue}/regular`
						)
					];
				}

				return [
					...previousValue,
					`// Directory: ${currentValue}`,
					...iconPaths
				];
			}, [])
			.filter(
				(icon) =>
					(!icon.includes('_solid') && icon.includes('_24')) ||
					icon.startsWith('//')
			)
			.map((icon) =>
				icon
					.replace('db_ic_', '')
					.replace('_24.svg', '')
					.replace(/-/g, '_')
			)
			.map((icon) => {
				if (icon.startsWith('//')) {
					return icon;
				}

				return `| '${icon}'`;
			});

		const iconTypes = `export type IconTypes = string \n ${icons.join(
			'\n'
		)}`;
		FS.writeFileSync('./src/shared/icon-types.ts', iconTypes);
	} catch (e) {
		console.log(e);
	}
};

generateIconTypes();
