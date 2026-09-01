module.exports = [
	{
		type: 'input',
		name: 'name',
		message: "What's the component name (lowerCase, hyphen-separated)?"
	},
	{
		type: 'confirm',
		name: 'subComponent',
		default: false,
		message: 'Is this a sub-component (tested within a parent component)?'
	},
	{
		type: 'confirm',
		name: 'showcases',
		default: true,
		skip() {
			return this.state.answers.subComponent === true;
		},
		message: 'Do you want to auto-generate files for showcases?'
	},
	{
		type: 'confirm',
		name: 'readme',
		default: true,
		message: 'Do you want to auto-generate READMEs?'
	},
	{
		type: 'input',
		name: 'formValue',
		default: 'no',
		message:
			'Is your component a form component like an input, ' +
			'which has to inform the user if event.target.value changed? ' +
			'If it is a form component what´s the name of the changing value (checked, value, ...)?'
	}
];
