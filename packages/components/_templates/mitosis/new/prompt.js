module.exports = [
	{
		type: 'input',
		name: 'name',
		message: "What's the component name (lowerCase, hyphen-separated)?"
	},
	{
		type: 'confirm',
		name: 'showcases',
		default: true,
		message: 'Do you want to auto-generate files for showcases?'
	},
	{
		type: 'confirm',
		name: 'readme',
		default: true,
		message: 'Do you want to auto-generate READMEs?'
	}
];
