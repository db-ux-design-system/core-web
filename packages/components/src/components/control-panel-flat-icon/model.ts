import { GlobalProps, GlobalState, NoTextProps } from '../../shared/model';

export type DBControlPanelFlatIconDefaultProps = {
	/**
	 * Slot to pass an anchor or link to skip the navigation and jump to main content.
	 */
	skipNavigation?: any;
};

export type DBControlPanelFlatIconProps = DBControlPanelFlatIconDefaultProps &
	GlobalProps &
	NoTextProps;

export type DBControlPanelFlatIconDefaultState = {
	_resizeObserverCallbackId?: string;
};

export type DBControlPanelFlatIconState = DBControlPanelFlatIconDefaultState &
	GlobalState;
