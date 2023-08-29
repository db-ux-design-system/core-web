const { program } = require('commander');
const FSE = require('fs-extra');
const { gatherIcons } = require('./gather-icons.js');
const { svgToFont } = require('./svg-to-font.js');

const options = [
	{
		name: 'ignoreGlobs',
		short: 'ig',
		description: 'Path icon glob to exclude into the fonts',
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
		defaultValue: './assets/icons/functional',
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

program
	.name('@db-ui/foundations - generate fonts')
	.description('CLI to generate icon fonts for DB UX Design System');

for (const option of options) {
	const short =
		(option.short?.startsWith('-') ? option.short : `-${option.short}`) ||
		`-${option.name.charAt(0)}`;
	const long =
		option.long ||
		`--${option.name} ${option.array ? '[' : '<'}${option.name}${
			option.array ? 's...]' : '>'
		}`;
	if (option.required) {
		program.requiredOption(
			`${short}, ${long}`,
			option.description || '',
			option.defaultValue
		);
	} else {
		program.option(
			`${short}, ${long}`,
			option.description || '',
			option.defaultValue
		);
	}
}

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
program.action(async (string_, options) => {
	const values = options._optionValues;
	const dist = `${values.src}/fonts`;
	const fontName = values.fontName;
	const temporaryDirectory = `${values.src}/tmp`;

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

		const allTemporaryDirectories = FSE.readdirSync(temporaryDirectory);
		for (const directory of allTemporaryDirectories) {
			const subDist = `${dist}/${directory}`;
			const subTemporaryDir = `${temporaryDirectory}/${directory}`;
			// eslint-disable-next-line no-await-in-loop
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
});

program.parse();
