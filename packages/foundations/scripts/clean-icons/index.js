const { globSync } = require('glob');
const SVGFixer = require('oslllo-svg-fixer');
const { startProgram } = require('../program.js');

const options = [
	{
		name: 'ignoreGlobs',
		short: 'ig',
		description: 'Path icon glob to exclude into the fonts',
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
	const paths = `${src}/**/*.svg`;
	const globPaths = globSync(paths, { ignore: ignoreGlobs })
		.map((path) => path.replace(/\\/g, '/'))
		.map((path) => path.slice(0, Math.max(0, path.lastIndexOf('/'))))
		.filter((v, i, self) => i === self.indexOf(v));

	for (const path of globPaths) {
		// eslint-disable-next-line no-await-in-loop,new-cap
		await SVGFixer(path, path, { showProgressBar: true }).fix();
	}
};

startProgram(
	'@db-ui/foundations - clean icons',
	'CLI to clean icon for icon fonts to work',
	options,
	action
);
