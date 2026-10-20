import type {
	ColorState,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	MaterialState,
	NextGenDefaultProps,
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
	NextGenDefaultProps &
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

export type DBCustomButtonState = DBCustomButtonDefaultState &
	GlobalState &
	MaterialState &
	ColorState;
