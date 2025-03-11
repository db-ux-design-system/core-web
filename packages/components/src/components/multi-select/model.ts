import {
	BaseFormProps,
	ChangeEvent,
	CloseEventState,
	CustomFormProps,
	FormMessageProps,
	FormState,
	GlobalProps,
	GlobalState,
	IconProps,
	PlacementVerticalType,
	PopoverState,
	RequiredProps,
	ShowIconProps,
	ShowLabelProps,
	ValidationType,
	WidthProps
} from '../../shared/model';
import { DBMultiSelectFormFieldDefaultProps } from '../multi-select-form-field/model';
import { MultiSelectDropdownWidthType } from '../multi-select-dropdown/model';
import { DBMultiSelectListItemExtraProps } from '../multi-select-list-item/model';

export type MultiSelectOptionType = {
	/**
	 * Disables this option
	 */
	disabled?: boolean;

	/**
	 * Identifier for option
	 */
	id?: string;

	/**
	 * If the item is a group title (only text)
	 */
	isGroupTitle?: boolean;

	/**
	 * If the value is different from the label you want to show to the user.
	 */
	label?: string;

	/**
	 * The value for the option
	 */
	value?: string;
} & DBMultiSelectListItemExtraProps;

export const SelectedTypeList = ['amount', 'text', 'tag'] as const;
export type SelectedTypeType = (typeof SelectedTypeList)[number];

export type DBMultiSelectDefaultProps = {
	/**
	 * Optional: if select-type="amount" change the shown text
	 */
	amountText?: string;

	/**
	 * Label for the clear selection button
	 */
	clearSelectionLabel?: string;

	/**
	 * Deselect all checkbox label
	 */
	deSelectAllLabel?: string;

	/**
	 * Changes the behavior of the dropdown with.
	 * Default: fixed 328px
	 * Auto: Based on the size of the form-field
	 */
	dropdownWidth?: MultiSelectDropdownWidthType | 'string';

	/**
	 * Dropdown - hint if data has to be loaded
	 */
	loadingText?: string;

	/**
	 * Change the button text for mobile close
	 */
	mobileCloseButtonText?: string;

	/**
	 * Enables MultiSelect
	 */

	multiple?: boolean;

	/**
	 * Dropdown - hint if there are no options
	 */
	noResultsText?: string;
	/**
	 * Optional: if select-type="amount" when amount changes
	 * @param amount The amount of selected checkboxes
	 */
	onAmountChange?: (amount: number) => void;
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
	 * The `placement` attributes values change the position to absolute and adds a transform based on the placement.
	 */
	placement?: PlacementVerticalType;

	/**
	 * Optional: if you use selectedType=tag and options, you need to set the removeTagsTexts for screen reader users
	 */
	removeTagsTexts?: string[];

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

	/**
	 * Change the selected type for values shown in multi select
	 */
	selectedType?: SelectedTypeType;

	/**
	 * Show clear selection button (default:true). Hide it if you have very small inputs e.g. in tables.
	 */
	showClearSelection?: boolean;

	/**
	 * Dropdown - enable loading infotext and spinner
	 */
	showLoading?: boolean;

	/**
	 * Dropdown - enable no options infotext
	 */
	showNoResults?: boolean;

	/**
	 * Forces search in header.
	 */
	showSearch?: boolean;

	/**
	 * Forces select all checkbox (only for multiple).
	 */
	showSelectAll?: boolean;

	/**
	 * Initial value for multi select
	 */
	values?: string[];
};

export type DBMultiSelectProps = GlobalProps &
	CustomFormProps &
	BaseFormProps &
	RequiredProps &
	FormMessageProps &
	DBMultiSelectDefaultProps &
	DBMultiSelectFormFieldDefaultProps &
	WidthProps &
	IconProps &
	ShowIconProps &
	ShowLabelProps;

export type DBMultiSelectDefaultState = {
	_validity?: ValidationType;
	_values?: string[];
	_options?: MultiSelectOptionType[];
	_selectedOptions?: MultiSelectOptionType[];
	_hasNoOptions: boolean;
	_selectId?: string;
	_labelId?: string;
	_placeholderId?: string;
	_selectedLabels?: string;
	_selectedLabelsId?: string;
	_infoTextId?: string;
	_externalChangeTimestamp?: number;
	_internalChangeTimestamp?: number;
	_name?: string;
	getNativeSelectValue: () => string;
	getOptionLabel: (option: MultiSelectOptionType) => string;
	getOptionChecked: (value?: string) => boolean;
	getOptionKey: (option: MultiSelectOptionType) => string;
	getTagRemoveLabel: (index: number) => string;
	selectAllEnabled: boolean;
	searchEnabled: boolean;
	amountOptions: number;
	setDescById: (descId?: string) => void;
	handleTagRemove: (option: MultiSelectOptionType, event?: any) => void;
	handleSummaryFocus: () => void;
	handleSelect: (value?: string) => void;
	handleSelectAll: () => void;
	handleClearAll: () => void;
	handleOpenByKeyboardFocus: (onlySearch?: boolean) => void;
	handleFocusFirstDropdownCheckbox: (activeElement?: Element) => void;
	handleKeyboardPress: (event: any) => void;
	handleArrowDownUp: (event: any) => void;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	getSelectAllLabel: () => string;
	selectAllChecked: boolean;
	selectAllIndeterminate: boolean;
};

export type DBMultiSelectState = DBMultiSelectDefaultState &
	GlobalState &
	FormState &
	CloseEventState &
	PopoverState;
