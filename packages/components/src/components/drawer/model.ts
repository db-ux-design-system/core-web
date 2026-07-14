import type {
	ClickEvent,
	CloseEventProps,
	CloseEventState,
	GeneralKeyboardEvent,
	GlobalProps,
	GlobalState,
	InitializedState
} from '../../shared/model';

export const DrawerBackdropList = [
	'none',
	'strong',
	'weak',
	'invisible'
] as const;
export type DrawerBackdropType = (typeof DrawerBackdropList)[number];

export const DrawerDirectionList = [
	'to-left',
	'to-right',
	'up',
	'down'
] as const;
export type DrawerDirectionType = (typeof DrawerDirectionList)[number];

export const DrawerVariantList = ['modal', 'inside'] as const;
export type DrawerVariantType = (typeof DrawerVariantList)[number];

export const DrawerPositionList = ['fixed', 'absolute'] as const;
export type DrawerPositionType = (typeof DrawerPositionList)[number];

export const DrawerContainerSizeList = [
	'small',
	'medium',
	'large',
	'full'
] as const;
export type DrawerContainerSizeType = (typeof DrawerContainerSizeList)[number];

export type DBDrawerDefaultProps = {
	/**
	 * The backdrop attribute changes the opacity of the backdrop.
	 * The backdrop 'none' will use `dialog.show()` instead of `dialog.showModal()`
	 */
	backdrop?: DrawerBackdropType;
	/**
	 * The direction attribute changes the position & animation of the drawer.
	 * E.g. "to-left" slides from right screen border to the left.
	 */
	direction?: DrawerDirectionType;

	/**
	 * Slot for changing the header of the drawer.
	 */
	header?: any;

	/**
	 * Slot for changing the footer of the drawer.
	 */
	footer?: any;

	/**
	 * Shows a spacing between screen and drawer-content to provide enough space for the backdrop
	 */
	showSpacing?: boolean | string;

	/**
	 * The open attribute opens or closes the drawer based on the state.
	 */
	open?: boolean | string;
	/**
	 * The rounded attribute changes the border radius of the corners on the "end" of the drawer.
	 * The "end" depends on which direction you use.
	 */
	rounded?: boolean | string;
	/**
	 * Set the variant modal|inside. Defaults to modal.
	 */
	variant?: DrawerVariantType;
	/**
	 * The position attribute changes the css-position (fixed or absolute) of the drawer.
	 *
	 * - `fixed` (default): Renders with `showModal()`, creating a true modal with a focus trap.
	 * - `absolute`: Renders with `show()`, acting as a simple overlay **without** a focus trap.
	 */
	position?: DrawerPositionType;

	/**
	 * Change the size of the drawer container.
	 */
	containerSize?: DrawerContainerSizeType;
};

export type DBDrawerProps = DBDrawerDefaultProps &
	GlobalProps &
	CloseEventProps<
		| ClickEvent<HTMLButtonElement | HTMLDialogElement>
		| GeneralKeyboardEvent<HTMLDialogElement>
	>;

export type DBDrawerDefaultState = {
	handleDialogOpen: () => void;
	isNotModal: () => boolean;
	handleBackdropPointerDown: (event: any) => void;
	backdropPointerDown: boolean;
	_closeTimeoutId?: number;
};

export type DBDrawerState = DBDrawerDefaultState &
	GlobalState &
	CloseEventState<
		| ClickEvent<HTMLButtonElement | HTMLDialogElement>
		| GeneralKeyboardEvent<HTMLDialogElement>
	> &
	InitializedState;
