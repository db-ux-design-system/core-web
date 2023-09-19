import { DBTabProps } from '../tab/model';
import { GlobalProps, GlobalState } from '../../shared/model';

export type DBTabBarDefaultProps = {
	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children.
	 */
	name?: string;
	tabs?: DBTabProps[] | string;
};

export type DBTabBarProps = DBTabBarDefaultProps & GlobalProps;

export type DBTabBarDefaultState = {
	convertTabs: (tabs?: any[] | string | undefined) => DBTabProps[];
};

export type DBTabBarState = DBTabBarDefaultState & GlobalState;
