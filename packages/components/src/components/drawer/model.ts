import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps,
	SpacingProps,
	WidthProps
} from '../../shared/model';

export const DrawerBackdropList = [
	'none',
	'strong',
	'weak',
	'invisible'
] as const;
export type DrawerBackdropType = (typeof DrawerBackdropList)[number];

export const DrawerDirectionList = ['left', 'right', 'up', 'down'] as const;
export type DrawerDirectionType = (typeof DrawerDirectionList)[number];

export interface DBDrawerDefaultProps {
	/**
	 * The backdrop attribute changes the opacity of the backdrop.
	 * The backdrop 'none' will use `dialog.show()` instead of `dialog.showModal()`
	 */
	backdrop?: DrawerBackdropType;

	/**
	 * The direction attribute changes the position & animation of the drawer.
	 * E.g. "left" slides from left screen border to the right.
	 */
	direction?: DrawerDirectionType;

	/**
	 * React specific to change the header of the drawer.
	 */
	drawerHeader?: unknown;
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
	 * The withCloseButton attribute shows/hides the default close button.
	 */
	withCloseButton?: boolean;
}

export type DBDrawerProps = DBDrawerDefaultProps &
	GlobalProps &
	CloseEventProps &
	InnerCloseButtonProps &
	WidthProps &
	SpacingProps;

export interface DBDrawerDefaultState {
	handleDialogOpen: () => void;
}

export type DBDrawerState = DBDrawerDefaultState &
	GlobalState &
	CloseEventState;
