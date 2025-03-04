import { GlobalProps, GlobalState } from '../../shared/model';

export const MultiSelectDropdownWidthList = ['fixed', 'auto'] as const;
export type MultiSelectDropdownWidthType =
	(typeof MultiSelectDropdownWidthList)[number];

export interface DBMultiSelectDropdownDefaultProps {
	/**
	 * Changes the behavior of the dropdown with.
	 * Default: fixed 328px
	 * Auto: Based on the size of the form-field
	 */
	width?: MultiSelectDropdownWidthType | 'string';
}

export type DBMultiSelectDropdownProps = DBMultiSelectDropdownDefaultProps &
	GlobalProps;

export interface DBMultiSelectDropdownDefaultState {}

export type DBMultiSelectDropdownState = DBMultiSelectDropdownDefaultState &
	GlobalState;
