export type DefaultComponentExample = {
	name?: string;
	example?: any;
	style?: unknown;
	className?: string;
	code?: string;
};

export type DefaultComponentVariants = {
	name: string;
	examples: DefaultComponentExample[];
};

export type DefaultComponentProps = {
	title: string;
	variants: DefaultComponentVariants[];
};
