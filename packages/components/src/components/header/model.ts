import {
	ContainerWidthProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationBehaviorState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBHeaderDefaultProps = {
	/**
	 * Slot to pass in the DBBrand component
	 */
	brand?: any;
	/**
	 * Slot to pass in a meta navigation.
	 * - Desktop: Above the regular header
	 * - Mobile: Inside the drawer
	 */
	metaNavigation?: any;
	/**
	 * Slot to pass one or more elements like DBButton (e.g. search) as primary action.
	 * - Desktop: Shown next to the main-navigation
	 * - Mobile: Shown next to the brand
	 */
	primaryAction?: any;
	/**
	 * Slot to pass one or more elements like DBButton (e.g. profile, language, etc.) as secondary action.
	 * - Desktop: Shown separated by divider at the end of the header
	 * - Mobile: Shown inside the drawer at the bottom.
	 */
	secondaryAction?: any;

	/**
	 * Open/closes the drawer for mobile header or if `forceMobile` is true.
	 */
	drawerOpen?: boolean | string;

	/**
	 * This attribute sets the label for the close button in the drawer
	 * which is shown after the burger menu opened.
	 */
	closeDrawerLabel?: string;

	/**
	 * Forces the header to use mobile layout for desktop as well.
	 * You should only use this setting if you really can't provide a smaller navigation.
	 * Overwrite size of the drawer with '--db-drawer-max-width: xxx'
	 */
	forceMobile?: boolean | string;

	/**
	 * This attribute sets the label for the burger menu button for mobile headers.
	 */
	burgerMenuLabel?: string;
};

export type DBHeaderProps = DBHeaderDefaultProps &
	GlobalProps &
	ToggleEventProps &
	ContainerWidthProps;

export type DBHeaderDefaultState = {
	forcedToMobile?: boolean;
};

export type DBHeaderState = DBHeaderDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	InitializedState &
	NavigationBehaviorState;
