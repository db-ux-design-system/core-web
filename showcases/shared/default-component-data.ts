export type DefaultComponentExample = {
	name?: string;
	example?: any;
	style?: { width?: string }; // Add additional css properties here if you need more
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
