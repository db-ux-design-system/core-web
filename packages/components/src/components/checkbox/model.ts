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

export interface DBCheckboxDefaultProps {
	/**
	 * Decide for a size (either regular, which is the default, or small)
	 */
	size?: 'small';

	/**
	 * Define an [indeterminate](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#indeterminate) state of a checkbox
	 */
	indeterminate?: boolean;
}

export type DBCheckboxProps = DBCheckboxDefaultProps &
	GlobalProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	FormCheckProps;

export type DBCheckboxDefaultState = {};

export type DBCheckboxState = DBCheckboxDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState &
	InitializedState;
