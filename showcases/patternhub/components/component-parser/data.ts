export type ComponentParserType = {
	componentsString: string;
};

export type ComponentType = {
	index?: string | number;
	type?: string;
	content?: string | ComponentType[];
	props?: any;

	className?: string;
};
