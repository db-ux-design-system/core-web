export type DefaultComponentExample = {
	name?: string;
	example?: any;
	style?: any;
	className?: string;
	code?: any;
};

export type DefaultComponentVariants = {
	name: string;
	examples: DefaultComponentExample[];
};

export type DefaultComponentProps = {
	title: string;
	description?: any;
	variants: DefaultComponentVariants[];
};
