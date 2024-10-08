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
	type: (string | 'colorQ32024' | 'iconQ32024')[];
	dryRun?: string | boolean;
};
