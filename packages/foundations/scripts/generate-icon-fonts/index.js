const { program } = require('commander');
const FSE = require('fs-extra');
const { gatherIcons } = require('./gather-icons.js');
const { svgToFont } = require('./svg-to-font.js');

const temporaryDirectory = 'tmp';
const options = [
	{
		name: 'extraIconsGlobs',
		short: 'ei',
		description: 'Path icon glob to include into the fonts',
		array: true
	},
	{
		name: 'ignoreGlobs',
		short: 'ig',
		description: 'Path icon glob to exclude into the fonts',
		array: true
	},
	{
		name: 'dist',
		description: 'Folder where to generate fonts'
	},
	{
		name: 'name',
		description: 'Name of your font'
	}
];

program
	.name('@db-ui/foundtaions - generate fonts')
	.description('CLI to generate icon fonts for DB UX Design System')
	.option('--dry-run', 'prints the output of the command');

for (const option of options) {
	const short =
		(option.short?.startsWith('-') ? option.short : `-${option.short}`) ||
		`-${option.name.charAt(0)}`;
	const long =
		option.long ||
		`--${option.name} ${option.array ? '[' : '<'}${option.name}${
			option.array ? 's...]' : '>'
		}`;
	program.option(`${short}, ${long}`, option.description || '');
}

program.action(async (string_, options) => {
	const values = options._optionValues;

	if (values.dryRun) {
		// eslint-disable-next-line no-console
		console.log('values:', values);
	} else {
		const dist = values.dist ?? './assets/icons/functional/fonts';
		const fontName = values.name ?? 'db-ux';
		FSE.removeSync(temporaryDirectory);
		gatherIcons(temporaryDirectory, values);
		await svgToFont(temporaryDirectory, fontName, dist);
	}
});

program.parse();
