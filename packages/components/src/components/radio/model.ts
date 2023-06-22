import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	FormProps,
	FormState,
	FormCheckProps,
	FormCheckState
} from '../../shared/model';

export interface DBRadioDefaultProps {
	describedbyid?: string;
	size?: 'small';
}

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	GlobalTextProps &
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
	FormCheckState;
