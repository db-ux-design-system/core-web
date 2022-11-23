import { DBTabProps } from '../tab/model';

export interface DBTabBarDefaultProps {
	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children.
	 */
	name?: string;
	tabs?: DBTabProps[] | string;
	children?: any;
}

export interface DBTabBarWcProps {
	stylePath?: string;
}

export type DBTabBarProps = DBTabBarDefaultProps & DBTabBarWcProps;

export interface DBTabBarState {
	stylePath?: string;
	convertTabs: (tabs?: DBTabProps[] | string) => DBTabProps[];
}
