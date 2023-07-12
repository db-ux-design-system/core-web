import {
	GlobalProps,
	GlobalState,
	InitializedState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export interface DBHeaderDefaultProps {
	slotBrand?: any;
	slotMetaNavigation?: any;
	slotCallToAction?: any;
	slotActionBar?: any;
	drawerOpen?: boolean;

	/**
	 * Forces the header to use mobile layout for desktop as well.
	 * You should only use this setting if you really can't provide a smaller navigation.
	 * Overwrite size of the drawer with:
	 * 	@media screen and (min-width: $db-screens-m) {
	 * 		--db-drawer-max-width: xxx;
	 * 	}
	 */
	forceMobile?: boolean;
}

export type DBHeaderProps = DBHeaderDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBHeaderDefaultState {
	forcedToMobile?: boolean;
}

export type DBHeaderState = DBHeaderDefaultState &
	GlobalState &
	ToggleEventState &
	InitializedState;
