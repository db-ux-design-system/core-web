import { GlobalProps, GlobalState } from '../../shared/model';

export const CustomSelectDropdownWidthList = ['fixed', 'auto', 'full'] as const;
export type CustomSelectDropdownWidthType =
	(typeof CustomSelectDropdownWidthList)[number];

export type DBCustomSelectDropdownDefaultProps = {
	/**
	 * Changes the behavior of the dropdown with.
	 * Default: fixed 328px
	 * Full: Based on the size of the form-field
	 * Auto: Based on the size of the largest list item
	 */
	width?: CustomSelectDropdownWidthType | string;
};

export type DBCustomSelectDropdownProps = DBCustomSelectDropdownDefaultProps &
	GlobalProps;

export type DBCustomSelectDropdownDefaultState = {};

export type DBCustomSelectDropdownState = DBCustomSelectDropdownDefaultState &
	GlobalState;
