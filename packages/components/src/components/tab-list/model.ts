import { GlobalProps, GlobalState } from '../../shared/model';

export type DBTabListDefaultProps = {
	/**
	 * Informs the user if another tab has been selected.
	 */
	onTabSelect?: (target?: EventTarget) => void;

	/**
	 * Informs the user if the current tab index has changed.
	 */
	onIndexChange?: (index?: number) => void;
};

export type DBTabListProps = DBTabListDefaultProps & GlobalProps;

export type DBTabListDefaultState = {
	handleChange: (event: any) => void;
};

export type DBTabListState = DBTabListDefaultState & GlobalState;
