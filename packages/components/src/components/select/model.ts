import {
	FocusEventProps,
	FocusEventState,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	FormProps,
	FormState
} from '../../shared/model';

export interface DBSelectDefaultProps {
	// TODO: Variants aren't being used by inputs as well, so we need to wait for the final spec
	// variant?: 'semitransparent' | 'white' | 'solid' | 'outline';
	invalid?: boolean;
	multiple?: false;
	size?: 'small';
}

export type DBSelectProps = DBSelectDefaultProps &
	GlobalProps &
	ClickEventProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps;

export interface DBSelectDefaultState {}

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState &
	ChangeEventState &
	FocusEventState &
	FormState;
