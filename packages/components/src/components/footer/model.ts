import {
	ContainerWidthProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export type DBFooterDefaultProps = {
	/**
	 * Slot for legal and other meta content.
	 */
	meta?: any;

	/**
	 * Shows or hides the copyright text "© Deutsche Bahn AG".
	 */
	showCopyright?: boolean | string;

	/**
	 * Shows or hides the main footer area containing the default slot.
	 */
	showMain?: boolean | string;

	/**
	 * Shows or hides the meta footer area.
	 */
	showMeta?: boolean | string;
};

export type DBFooterProps = DBFooterDefaultProps &
	GlobalProps &
	ContainerWidthProps;

export type DBFooterDefaultState = {};
export type DBFooterState = DBFooterDefaultState & GlobalState;
