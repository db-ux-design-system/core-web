import { type CSSProperties, type ReactElement } from 'react';

export type DefaultComponentExample = {
	name: string;
	example: ReactElement;
	style?: CSSProperties;
	className?: string;
};

export type DefaultComponentVariants = {
	name: string;
	code?: string;
	examples: DefaultComponentExample[];
};

export type DefaultComponentProps = {
	title: string;
	description?: ReactElement;
	variants: DefaultComponentVariants[];
};
