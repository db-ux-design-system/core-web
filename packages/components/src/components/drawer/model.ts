import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps
} from '../../shared/model';

export interface DBDrawerDefaultProps {
	/**
	 * The direction attribute changes the position & animation of the drawer.
	 * E. g. "left" slides from left screen border to the right.
	 */
	direction?: 'left' | 'right' | 'up' | 'down';
	/**
	 * If noBackdrop is set there is no semi-transparent black background behind the drawer.
	 * You can click behind the drawer without closing it.
	 */
	noBackdrop?: boolean;
	/**
	 * The open attribute opens or closes the drawer based on the state.
	 */
	open?: boolean;
	/**
	 * The rounded attribute changes the border radius of the corners on the "end" of the drawer.
	 * The "end" depends on which direction you use.
	 */
	rounded?: boolean;
	/**
	 * The @dependabot recreate attribute changes the padding inside the drawer.
	 */
	spacing?: 'medium' | 'small' | 'large' | 'none';
	/**
	 * React specific to change the header of the drawer.
	 */
	slotDrawerHeader?: any;
	/**
	 * The width attribute disables the max-width of the drawer and overlays over the entire screen.
	 * Default max-width is: calc(100% - $db-spacing-fixed-xl), but you can overwrite it with --db-drawer-max-width.
	 */
	width?: 'full';
	/**
	 * The withCloseButton attribute shows/hides the default close button.
	 */
	withCloseButton?: boolean;
}

export type DBDrawerProps = DBDrawerDefaultProps &
	GlobalProps &
	CloseEventProps &
	InnerCloseButtonProps;

export interface DBDrawerDefaultState {
	handleDialogOpen: () => void;
}

export type DBDrawerState = DBDrawerDefaultState &
	GlobalState &
	CloseEventState;
