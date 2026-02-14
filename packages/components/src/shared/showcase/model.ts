import { PatternhubProps } from '../model';

export type CardWrapperProps = {
	role?: string;
	label?: string;
	children?: any;
};
export type CardWrapperState = { href?: string; updateHref: () => void };

export type ContainerWrapperProps = {
	title?: string;
	/**
	 * Slot for subcomponents - used for Patternhub
	 */
	subComponent?: any;
	/**
	 * Changes header level - used for Patternhub
	 */
	isSubComponent?: boolean;

	children?: any;
} & PatternhubProps;

export type ContainerWrapperState = {
	hidden: boolean;
	getSourceFilePath: () => string | undefined;
	getGitHubSourceUrl: () => string | undefined;
};

export type LinkWrapperProps = {
	exampleName?: string;
	children?: any;
};

export type LinkWrapperState = {
	pageParam: string | null;
	getPage: () => string | undefined;
	getHref: () => string;
};
