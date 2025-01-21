// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

export type DefaultComponentExample = {
	name?: string;
	experimental?: boolean;
	example?: any;
	style?: {
		display?: string;
		width?: string;
		height?: string;
	}; // Add additional css properties here if you need more
	className?: string;
	props?: any;
	code?: {
		html?: string; // We will generate this with reacts 'renderToString'
		angular?: string;
		react?: string;
		vue?: string;
	};
	children?: DefaultComponentExample[];
	density?: string;
	class?: string;
};

export type DefaultComponentVariants = {
	name: string;
	codeFileName?: string;
	children?: DefaultComponentExample[];
	examples: DefaultComponentExample[];
	color?: string;
	role?: string;
};

export type DefaultComponentProps = {
	title: string;
	variants: DefaultComponentVariants[];
};
