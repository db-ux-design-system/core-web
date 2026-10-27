import {
	AdaptiveDefaultProps,
	AltStateColorState,
	AltStateMaterialProps,
	AltStateMaterialState,
	ColorState,
	ColorType,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	InitializedState,
	MaterialState,
	MaterialType,
	NoTextProps,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps,
	SizeProps,
	WidthProps,
	WrapProps
} from '../../shared/model';
import type { DBButtonSharedProps } from '../button/model';

export type DBCustomButtonDefaultProps = {};

export type DBCustomButtonProps = DBCustomButtonDefaultProps &
	DBButtonSharedProps &
	GlobalProps &
	AdaptiveDefaultProps &
	AltStateMaterialProps &
	IconProps &
	WidthProps &
	SizeProps &
	ShowIconProps &
	ShowIconLeadingProps &
	ShowIconTrailingProps &
	IconLeadingProps &
	IconTrailingProps &
	NoTextProps &
	WrapProps;

export type DBCustomButtonDefaultState = {
	_material?: MaterialType | undefined;
	_color?: ColorType | undefined;
};

export type DBCustomButtonState = DBCustomButtonDefaultState &
	GlobalState &
	AltStateMaterialState &
	AltStateColorState & InitializedState;
