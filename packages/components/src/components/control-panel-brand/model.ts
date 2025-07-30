import {
	AdditionalInformationSlotProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	TextProps
} from '../../shared/model';

export type DBControlPanelBrandDefaultProps = {};

export type DBControlPanelBrandProps = DBControlPanelBrandDefaultProps &
	GlobalProps &
	IconProps &
	ShowIconProps &
	TextProps &
	AdditionalInformationSlotProps;

export type DBControlPanelBrandDefaultState = {};

export type DBControlPanelBrandState = DBControlPanelBrandDefaultState &
	GlobalState;
