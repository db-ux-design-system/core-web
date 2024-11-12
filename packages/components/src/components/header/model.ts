import {
	ContainerWidthProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationBehaviourState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBHeaderDefaultProps = {
	/**
	 * Slot to pass in the DBBrand component
	 */
	brand?: unknown;
	/**
	 * Slot to pass in a meta navigation.
	 * Desktop: Above the regular header
	 * Mobile: Inside the drawer
	 */
	metaNavigation?: unknown;
	/**
	 * Slot to pass one or more elements like DBButton (e.g. search) as primary action.
	 * Desktop: Shown next to the main-navigation
	 * Mobile: Shown next to the brand
	 */
	primaryAction?: unknown;
	/**
	 * Slot to pass one or more elements like DBButton (e.g. profile, language, etc.) as secondary action.
	 * Desktop: Shown seperated by divider at the end of the header
	 * Mobile: Shown inside the drawer at the bottom.
	 */
	secondaryAction?: unknown;

	/**
	 * Open/closes the drawer for mobile header or if `forceMobile` is true.
	 */
	drawerOpen?: boolean;

	/**
	 * Forces the header to use mobile layout for desktop as well.
	 * You should only use this setting if you really can't provide a smaller navigation.
	 * Overwrite size of the drawer with '--db-drawer-max-width: xxx'
	 */
	forceMobile?: boolean;

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
	NavigationBehaviourState;
