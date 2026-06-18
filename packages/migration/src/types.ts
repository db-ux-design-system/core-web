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
		| 'v005_v006'
		| 'v006_v007'
		| 'v007_v100'
		| 'v100_v200'
		| 'v200_v300'
	)[];
	dryRun?: string | boolean;
};
