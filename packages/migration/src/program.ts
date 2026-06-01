import { program } from 'commander';
import type { OptionsType, ProgramOptionsType } from './types';

const startProgram = (
	name: string,
	description: string,
	options: ProgramOptionsType[],
	action: (functionName: string, options: OptionsType) => void
) => {
	program.name(name).description(description);

	program.argument(
		'[function]',
		'function of this library you want to use [migration]'
	);

	for (const option of options) {
		const short =
			(option.short &&
				(option.short?.startsWith('-')
					? option.short
					: `-${option.short}`)) ??
			`-${option.name.charAt(0)}`;
		const long =
			option.long ??
			`--${option.name} ${option.array ? '[' : '<'}${option.name}${option.array ? 's...]' : '>'}`;
		if (option.required) {
			program.requiredOption(
				`${short}, ${long}`,
				option.description ?? '',
				option.defaultValue
			);
		} else {
			program.option(
				`${short}, ${long}`,
				option.description ?? '',
				option.defaultValue
			);
		}
	}

	program.action(action);

	program.parse();
};

export default startProgram;
