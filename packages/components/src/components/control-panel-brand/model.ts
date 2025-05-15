import {
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	TextProps
} from '../../shared/model';

export type DBControlPanelBrandDefaultProps = {
};

export type DBControlPanelBrandProps = DBControlPanelBrandDefaultProps &
	GlobalProps &
	IconProps &
	ShowIconProps &
	TextProps;

export type DBControlPanelBrandDefaultState = {};

export type DBControlPanelBrandState = DBControlPanelBrandDefaultState & GlobalState;
