import type { DBTabProps } from '../tab/model';

export type DBTabBarDefaultProps = {
	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children.
	 */
	name?: string;
	tabs?: DBTabProps[] | string;
	className?: string;
	children?: any;
};

export type DBTabBarWcProps = {
	stylePath?: string;
};

export type DBTabBarProps = DBTabBarDefaultProps & DBTabBarWcProps;

export type DBTabBarState = {
	stylePath?: string;
	convertTabs: (tabs?: DBTabProps[] | string) => DBTabProps[];
};
