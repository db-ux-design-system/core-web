import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps,
	WidthProps
} from '../../shared/model';

export interface DBDrawerDefaultProps {
	/**
	 * The direction attribute changes the position & animation of the drawer.
	 * E. g. "left" slides from left screen border to the right.
	 */
	direction?: 'left' | 'right' | 'up' | 'down';

	/**
	 * The emphasis attribute changes the opacity of the backdrop.
	 */
	emphasis?: 'strong' | 'weak';
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
	 * React specific to change the header of the drawer.
	 */
	slotDrawerHeader?: any;
	/**
	 * The @dependabot recreate attribute changes the padding inside the drawer.
	 */
	spacing?: 'medium' | 'small' | 'large' | 'none';

	/**
	 * The withCloseButton attribute shows/hides the default close button.
	 */
	withCloseButton?: boolean;
}

export type DBDrawerProps = DBDrawerDefaultProps &
	GlobalProps &
	CloseEventProps &
	InnerCloseButtonProps &
	WidthProps;

export interface DBDrawerDefaultState {
	handleDialogOpen: () => void;
}

export type DBDrawerState = DBDrawerDefaultState &
	GlobalState &
	CloseEventState;
