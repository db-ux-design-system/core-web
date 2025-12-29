export type ProgrammOptionsType = {
	name: string;
	short?: string;
	long?: string;
	array?: boolean;
	required?: boolean;
	description?: string;
	defaultValue?: string | boolean | string[];
};

export type OptionsType = {
	src: string;
	type: (
		| string
		| 'colorQ32024'
		| 'iconQ32024'
		| 'sass_to_postcss'
		| 'v005_v006'
		| 'v006_v007'
	)[];
	dryRun?: string | boolean;
};
