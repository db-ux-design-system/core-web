/* eslint-disable no-await-in-loop */

const FSE = require('fs-extra');
const { startProgram } = require('../program.js');
const { cleanIcons } = require('../clean-icons/index.js');
const { gatherIcons } = require('./gather-icons.js');
const { svgToFont } = require('./svg-to-font.js');

const options = [
	{
		name: 'ignoreGlobs',
		description: 'Path icon glob to exclude from the fonts',
		array: true
	},
	{
		name: 'variants',
		description:
			'Font variants e.g. solid, inverted, etc. We always add a "default" variant for icons.',
		array: true,
		defaultValue: []
	},
	{
		name: 'cleanIgnoreVariants',
		description:
			'Ignore variants which should not be cleaned automatically',
		array: true,
		defaultValue: []
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

const debugLog = (debug, message) => {
	if (debug) {
		// eslint-disable-next-line no-console
		console.log(message);
	}
};

const action = async (string_, options) => {
	const values = options._optionValues;
	const { src, fontName, dryRun, cleanIgnoreVariants, debug } = values;
	const dist = `${src}/fonts`;
	const temporaryDirectory = `${src}/tmp`;
	const ignoreVariants = [...cleanIgnoreVariants].map(
		(igVar) => `**/${igVar}*/**`
	);

	if (dryRun) {
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

		debugLog(debug, '---Start gathering icon---');
		gatherIcons(temporaryDirectory, values);

		debugLog(debug, '---Start cleaning icon---');
		await cleanIcons(`${temporaryDirectory}/*`, ignoreVariants, debug);

		debugLog(debug, '---Start svg to font ---');
		const allTemporaryDirectories = FSE.readdirSync(temporaryDirectory);
		for (const directory of allTemporaryDirectories) {
			const subDist = `${dist}/${directory}`;
			const subTemporaryDir = `${temporaryDirectory}/${directory}`;
			debugLog(debug, `svgToFont for ${subTemporaryDir}`);
			await svgToFont(subTemporaryDir, subDist, values);
			for (const ending of fileEndingsToDelete) {
				FSE.removeSync(`${subDist}/${fontName}.${ending}`);
			}

			FSE.removeSync(`${subDist}/symbol.html`);
			FSE.removeSync(`${subDist}/unicode.html`);
		}

		if (!debug) {
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
