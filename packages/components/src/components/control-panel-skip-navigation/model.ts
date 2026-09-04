import type { GlobalProps, GlobalState } from '../../shared/model';

export type DBControlPanelSkipNavigationDefaultProps = {
	/**
	 * Change the text for the link providing a skip for navigation jumping to main content
	 */
	text?: string;

	/**
	 * Target id for the skip-navigation link. Must match the `mainId` prop
	 * on `DBShellContent` if you override it. Only one shell should exist per page.
	 * @default 'main-content'
	 */
	target?: string;
};

export type DBControlPanelSkipNavigationProps =
	DBControlPanelSkipNavigationDefaultProps & GlobalProps;

export type DBControlPanelSkipNavigationDefaultState = {};

export type DBControlPanelSkipNavigationState =
	DBControlPanelSkipNavigationDefaultState & GlobalState;
