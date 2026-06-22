import { GlobalProps, GlobalState, NoTextProps } from '../../shared/model';

export type DBControlPanelFlatIconDefaultProps = {};

export type DBControlPanelFlatIconProps = DBControlPanelFlatIconDefaultProps &
	GlobalProps &
	NoTextProps;

export type DBControlPanelFlatIconDefaultState = {
	_initialDensity?: string;
	_resizeObserverCallbackId?: string;
};

export type DBControlPanelFlatIconState = DBControlPanelFlatIconDefaultState &
	GlobalState;
