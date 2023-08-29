const path = require('node:path');
const svgtofont = require('svgtofont');

/**
 * @param temporaryDirectory {string}
 * @param dist {string}
 * @param values {{ fontName: string, debug:boolean }}
 */
const svgToFont = async (temporaryDirectory, dist, values) => {
	const { fontName, debug } = values;
	const fileName = __filename;
	let lastSlashIndex = fileName.lastIndexOf('\\');
	if (lastSlashIndex === -1) {
		lastSlashIndex = fileName.lastIndexOf('/');
	}

	const generateIconFontsDir = fileName.slice(0, Math.max(0, lastSlashIndex));

	try {
		return svgtofont({
			src: temporaryDirectory,
			dist,
			fontName,
			log: debug,
			css: true,
			outSVGReact: false, // TODO: Consider if we want to give this to users
			outSVGPath: false,
			useNameAsUnicode: true,
			generateInfoData: true,
			// SvgoOptions: TODO: https://github.com/svg/svgo#configuration,
			svgicons2svgfont: {
				fontHeight: 1000,
				normalize: true,
				centerHorizontally: true
			},
			website: {
				index: 'font-class',
				template: path.resolve(generateIconFontsDir, 'template.ejs')
			},
			styleTemplates: path.resolve(generateIconFontsDir, 'styles')
		});
	} catch (error) {
		console.error(error);
	}

	return true;
};

module.exports = { svgToFont };
