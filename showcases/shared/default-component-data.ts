export type DefaultComponentExample = {
	name?: string;
	example?: any;
	style?: { display?: string; width?: string; height?: string }; // Add additional css properties here if you need more
	className?: string;
	props?: any;
	code?: {
		html?: string; // We will generate this with reacts 'renderToString'
		angular?: string;
		react?: string;
		vue?: string;
	};
};

export type DefaultComponentVariants = {
	name: string;
	examples: DefaultComponentExample[];
	slotCode?: any;
};

export type DefaultComponentProps = {
	title: string;
	variants: DefaultComponentVariants[];
};
