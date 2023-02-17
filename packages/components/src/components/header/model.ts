import {
	GlobalProps,
	GlobalState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export interface DBHeaderDefaultProps {
	slotBrand?: any;
	slotMetaNavigation?: any;
	slotCallToAction?: any;
	slotActionBar?: any;
	drawerOpen?: boolean;
}

export type DBHeaderProps = DBHeaderDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBHeaderDefaultState {}

export type DBHeaderState = DBHeaderDefaultState &
	GlobalState &
	ToggleEventState;
