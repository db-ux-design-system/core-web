import { GlobalProps, GlobalState } from '../../shared/model';

export const MultiSelectDropdownWidthList = ['fixed', 'auto', 'full'] as const;
export type MultiSelectDropdownWidthType =
	(typeof MultiSelectDropdownWidthList)[number];

export type DBMultiSelectDropdownDefaultProps = {
	/**
	 * Changes the behavior of the dropdown with.
	 * Default: fixed 328px
	 * Full: Based on the size of the form-field
	 * Auto: Based on the size of the largest list item
	 */
	width?: MultiSelectDropdownWidthType | string;
};

export type DBMultiSelectDropdownProps = DBMultiSelectDropdownDefaultProps &
	GlobalProps;

export type DBMultiSelectDropdownDefaultState = {};

export type DBMultiSelectDropdownState = DBMultiSelectDropdownDefaultState &
	GlobalState;
