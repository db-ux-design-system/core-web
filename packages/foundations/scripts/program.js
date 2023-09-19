const { program } = require('commander');

/**
 *
 * @param name {string}
 * @param description {string}
 * @param options {{name:string, [short]: string, [long]: string, [array]:boolean,[required]:boolean,[description]:string, [defaultValue]:string}[]}
 * @param action
 */
const startProgram = (name, description, options, action) => {
	program.name(name).description(description);

	for (const option of options) {
		const short =
			(option.short?.startsWith('-')
				? option.short
				: `-${option.short}`) || `-${option.name.charAt(0)}`;
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

	program.action(action);

	program.parse();
};

module.exports = { startProgram };
