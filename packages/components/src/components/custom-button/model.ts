import {
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	NoTextProps,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps,
	SizeProps,
	WidthProps,
	WrapProps
} from '../../shared/model';
import { DBButtonSharedProps } from '../button/model';

export type DBCustomButtonDefaultProps = {};

export type DBCustomButtonProps = DBCustomButtonDefaultProps &
	DBButtonSharedProps &
	GlobalProps &
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

export type DBCustomButtonDefaultState = {};

export type DBCustomButtonState = DBCustomButtonDefaultState & GlobalState;
