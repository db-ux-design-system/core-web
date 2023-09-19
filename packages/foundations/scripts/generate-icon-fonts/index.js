/* eslint-disable no-await-in-loop */

const FSE = require('fs-extra');
const { startProgram } = require('../program.js');
const { cleanIcons } = require('../clean-icons/index.js');
const { gatherIcons } = require('./gather-icons.js');
const { svgToFont } = require('./svg-to-font.js');

const options = [
	{
		name: 'ignoreGlobs',
		short: 'ig',
		description: 'Path icon glob to exclude from the fonts',
		array: true
	},
	{
		name: 'variants',
		description: 'Font variants e.g. solid, inverted, etc.',
		array: true
	},
	{
		name: 'withSizes',
		description: 'Splits the font into different sizes'
	},
	{
		name: 'src',
		description: 'Src folder with all svgs',
		required: true
	},
	{
		name: 'prefix',
		description: 'Prefix of icons to delete for icons'
	},
	{
		name: 'fontName',
		description: 'The name of your font',
		required: true
	},
	{
		name: 'dryRun',
		description: 'prints the output of the command'
	},
	{
		name: 'debug',
		description: 'Extra logging',
		defaultValue: false
	}
];

const fileEndingsToDelete = [
	'eot',
	'less',
	'module.less',
	'styl',
	'svg',
	'symbol.svg',
	'ttf',
	'woff'
];

const action = async (string_, options) => {
	const values = options._optionValues;
	const dist = `${values.src}/fonts`;
	const fontName = values.fontName;
	const temporaryDirectory = `${values.src}/tmp`;
	const variants = values.variants;

	if (values.dryRun) {
		// eslint-disable-next-line no-console
		console.log('values:', values);
		gatherIcons(temporaryDirectory, values);
	} else {
		if (FSE.existsSync(temporaryDirectory)) {
			FSE.removeSync(temporaryDirectory);
		}

		if (FSE.existsSync(dist)) {
			FSE.removeSync(dist);
		}

		gatherIcons(temporaryDirectory, values);

		for (const variant of variants) {
			await cleanIcons(`${temporaryDirectory}/${variant}*`);
		}

		const allTemporaryDirectories = FSE.readdirSync(temporaryDirectory);
		for (const directory of allTemporaryDirectories) {
			const subDist = `${dist}/${directory}`;
			const subTemporaryDir = `${temporaryDirectory}/${directory}`;
			await svgToFont(subTemporaryDir, subDist, values);
			for (const ending of fileEndingsToDelete) {
				FSE.removeSync(`${subDist}/${fontName}.${ending}`);
			}

			FSE.removeSync(`${subDist}/symbol.html`);
			FSE.removeSync(`${subDist}/unicode.html`);
		}

		if (!values.debug) {
			FSE.removeSync(temporaryDirectory);
		}
	}
};

startProgram(
	'@db-ui/foundations - generate fonts',
	'CLI to generate icon fonts for DB UX Design System',
	options,
	action
);
