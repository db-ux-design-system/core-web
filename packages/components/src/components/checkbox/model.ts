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
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	FormCheckProps;

export type DBCheckboxDefaultState = {
	_indeterminate: boolean;
};

export type DBCheckboxState = DBCheckboxDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState &
	FormCheckState;
