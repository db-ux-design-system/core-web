const { startProgram } = require('../program.js');
const { cleanIcons } = require('./index.js');

const options = [
	{
		name: 'ignoreGlobs',
		short: 'ig',
		description: 'Path icon glob to exclude from the fonts',
		array: true
	},
	{
		name: 'src',
		description: 'Src folder with all svgs',
		required: true
	}
];

const action = async (string_, options) => {
	const { src, ignoreGlobs } = options._optionValues;
	await cleanIcons(src, ignoreGlobs);
};

startProgram(
	'@db-ui/foundations - clean icons',
	'CLI to clean icon for icon fonts to work',
	options,
	action
);
