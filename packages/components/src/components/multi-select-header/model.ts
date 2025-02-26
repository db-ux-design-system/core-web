import {
	ChangeEvent,
	CloseEventProps,
	FormCheckProps,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps
} from '../../shared/model';

export const MultiSelectHeaderVariantList = ['default', 'search'] as const;
export type MultiSelectHeaderVariantType =
	(typeof MultiSelectHeaderVariantList)[number];

export interface DBMultiSelectHeaderLabelProps {
	/**
	 * Deselect all checkbox label
	 */
	deSelectAllLabel?: string;

	/**
	 * Search label
	 */
	searchLabel?: string;

	/**
	 * Search placeholder
	 */
	searchPlaceholder?: string;

	/**
	 * Select all checkbox label
	 */
	selectAllLabel?: string;
}

export interface DBMultiSelectHeaderDefaultProps {
	/**
	 * Checkbox select all event handling
	 */
	onSelectAll?: (event: ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Search event handling
	 */
	onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;

	/**
	 * Enable search input
	 */
	variant?: MultiSelectHeaderVariantType;

	/**
	 * If state for select all checkbox is indeterminate
	 */
	indeterminate?: boolean;
}

export type DBMultiSelectHeaderProps = DBMultiSelectHeaderDefaultProps &
	InnerCloseButtonProps &
	DBMultiSelectHeaderLabelProps &
	Omit<FormCheckProps, 'variant'> &
	GlobalProps &
	CloseEventProps;

export interface DBMultiSelectHeaderDefaultState {
	getSelectAllLabel: () => string;
	handleSelectAll: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClose: () => void;
	handleCloseKeydown: (event: KeyboardEvent) => void;
}

export type DBMultiSelectHeaderState = DBMultiSelectHeaderDefaultState &
	GlobalState;
