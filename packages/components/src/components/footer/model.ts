import { GlobalProps, GlobalState, MaxWidthType } from '../../shared/model';

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

	/**
	 * Limits and centres the inner content container; the footer itself stays full width.
	 */
	width?: MaxWidthType;
};

export type DBFooterProps = DBFooterDefaultProps & GlobalProps;

export type DBFooterDefaultState = {};
export type DBFooterState = DBFooterDefaultState & GlobalState;
