import {
	ChangeEvent,
	CloseEventState,
	FormMessageProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	InitializedState,
	InnerCloseButtonProps,
	ShowLabelProps,
	ValidationType,
	WidthProps
} from '../../shared/model';
import { DBMultiSelectHeaderLabelProps } from '../multi-select-header/model';
import { DBMultiSelectFormFieldDefaultProps } from '../multi-select-form-field/model';

export type MultiSelectOptionType = {
	/**
	 * Identifier for option
	 */
	id?: string;

	/**
	 * Disables this option
	 */
	disabled?: boolean;

	/**
	 * If the value is different from the label you want to show to the user.
	 */
	label?: string;

	/**
	 * The value for the option
	 */
	value?: string;

	/**
	 * If the item is a group (only text)
	 */
	isGroup?: boolean;
};

export const SelectedTypeList = ['amount', 'text', 'tag'] as const;
export type SelectedTypeType = (typeof SelectedTypeList)[number];

export const MultiSelectTagWrappingList = ['overflow', 'grow'] as const;
export type MultiSelectTagWrappingType =
	(typeof MultiSelectTagWrappingList)[number];

export const MultiSelectWidthList = ['fixed', 'auto'] as const;
export type MultiSelectWidthType = (typeof MultiSelectWidthList)[number];

export interface DBMultiSelectDefaultProps {
	/**
	 * Label for the clear selection button
	 */
	clearSelectionLabel?: string;

	/**
	 * Show clear selection button (default:true)
	 */
	showClearSelection?: boolean;

	/**
	 * Disable default click outside handling. Will force header with close button.
	 */
	enableClickOutside?: boolean;
	/**
	 * Forces header
	 */
	enableHeader?: boolean;

	/**
	 * Forces search in header.
	 */
	enableSearch?: boolean;
	/**
	 * Optional: if select-type="amount" change the shown text
	 * @param amount The amount of selected checkboxes
	 */
	getAmountText?: (amount: number) => string;
	/**
	 * Dropdown - enable no options notification
	 */
	hasNoResults?: boolean;
	/**
	 * Dropdown - enable loading notification and spinner
	 */
	isLoading?: boolean;
	/**
	 * Dropdown - hint if data has to be loaded
	 */
	loadingText?: string;
	/**
	 * Dropdown - hint if there are no options
	 */
	noResultsText?: string;

	/**
	 * Triggers after some checkbox was clicked in dropdown
	 * @param values the changed values
	 */
	onSelect?: (values: string[]) => void;

	/**
	 * You should pass in the options as an array.
	 */
	options?: MultiSelectOptionType[];

	/**
	 * Optional: if you use selectedType=tag and options, you need to set the removeTagsText for screen reader users
	 */
	removeTagsText?: (option: MultiSelectOptionType) => string;

	/**
	 * Change the selected type for values shown in multi select
	 */
	selectedType?: SelectedTypeType;

	/**
	 * Optional: if you use selectedType=tag, you can change the behavior of tags
	 */
	tagWrapping?: MultiSelectTagWrappingType;

	/**
	 * Initial value for multi select
	 */
	values?: string[];

	/**
	 * Width of the component. Auto width based on parent elements width.
	 */
	width?: MultiSelectWidthType;
}

export type DBMultiSelectProps = GlobalProps &
	InnerCloseButtonProps &
	DBMultiSelectHeaderLabelProps &
	Omit<FormProps, 'value'> &
	FormMessageProps &
	DBMultiSelectDefaultProps &
	DBMultiSelectFormFieldDefaultProps &
	WidthProps &
	ShowLabelProps;

export interface DBMultiSelectDefaultState {
	_validity?: ValidationType;
	_values?: string[];
	_options?: MultiSelectOptionType[];
	_selectedOptions?: MultiSelectOptionType[];
	_hasNoOptions: boolean;
	_selectId?: string;
	_labelId?: string;
	_placeholderId?: string;
	_selectedLabels?: string;
	_externalChangeTimestamp?: number;
	_internalChangeTimestamp?: number;
	getOptionLabel: (option: MultiSelectOptionType) => string;
	getOptionChecked: (value?: string) => boolean;
	headerEnabled: boolean;
	searchEnabled: boolean;
	amountOptions: number;
	handleSummaryFocus: () => void;
	handleSelect: (value?: string) => void;
	handleSelectAll: () => void;
	handleClearAll: () => void;
	handleToggleOpen: () => void;
	handleRemoveDocumentEvents: () => void;
	handleOpenByKeyboardFocus: (onlySearch?: boolean) => void;
	handleFocusFirstDropdownCheckbox: () => void;
	handleKeyboardPress: (event: KeyboardEvent) => void;
	handleArrowDownUp: (event: KeyboardEvent) => void;
	handleArrowLeftRight: (event: KeyboardEvent) => void;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	selectAllChecked: boolean;
	selectAllIndeterminate: boolean;
}

export type DBMultiSelectState = DBMultiSelectDefaultState &
	GlobalState &
	FormState &
	CloseEventState;
