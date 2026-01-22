import {
	ContainerWidthProps,
	GlobalProps
} from '../../shared/model';

export type DBFooterDefaultProps = {
	/**
	 * Slot for the main footer content.
	 * Typically used for navigation links, footer columns, etc.
	 */
	main?: any;

	/**
	 * Slot for the meta footer content.
	 * Typically used for copyright information, legal links, etc.
	 */
	meta?: any;

	/**
	 * Shows or hides the copyright text "© Deutsche Bahn AG".
	 */
	showCopyright?: boolean | string;

	/**
	 * Shows or hides the main footer section.
	 */
	showMain?: boolean | string;

	/**
	 * Shows or hides the meta footer section.
	 */
	showMeta?: boolean | string;
};

export type DBFooterProps = DBFooterDefaultProps &
	GlobalProps &
	ContainerWidthProps;
