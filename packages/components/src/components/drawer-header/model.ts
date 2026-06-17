import  {
	ClickEventProps,
	ClickEventState, EndSlotProps,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps, StartSlotProps,
	TextProps
} from '../../shared/model';

export type DBDrawerHeaderDefaultProps = {
}

export type DBDrawerHeaderProps = DBDrawerHeaderDefaultProps &
	InnerCloseButtonProps &
	TextProps &
	GlobalProps &
	StartSlotProps &
	EndSlotProps;

export type DBDrawerHeaderDefaultState = {}

export type DBDrawerHeaderState = DBDrawerHeaderDefaultState &
	GlobalState;
