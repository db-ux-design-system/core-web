import {
	FocusEventProps,
	FocusEventState,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	FormProps,
	FormState,
	FormCheckProps,
	InitializedState
} from '../../shared/model';

export interface DBRadioDefaultProps {
	describedbyid?: string;
	size?: 'small';
}

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	FormCheckProps;

export type DBRadioDefaultState = {};

export type DBRadioState = DBRadioDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState &
	InitializedState;
