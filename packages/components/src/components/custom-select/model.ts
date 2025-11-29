import {
	BaseFormProps,
	ClickEvent,
	CloseEventState,
	CustomFormProps,
	DocumentScrollState,
	FormMessageProps,
	FormState,
	FromValidState,
	GeneralEvent,
	GeneralKeyboardEvent,
	GlobalProps,
	GlobalState,
	IconProps,
	InputEvent,
	InteractionEvent,
	PlacementVerticalType,
	RequiredProps,
	ShowIconProps,
	ShowLabelProps,
	ValidationType,
	WidthType
} from '../../shared/model';
import { CustomSelectDropdownWidthType } from '../custom-select-dropdown/model';
import { DBCustomSelectFormFieldDefaultProps } from '../custom-select-form-field/model';
import { DBCustomSelectListItemExtraProps } from '../custom-select-list-item/model';

export type CustomSelectOptionType = {
	/**
	 * Disables this option
	 */
	disabled?: boolean;

	/**
	 * Identifier for option
	 */
	id?: string;

	/**
	 * If the value is different from the label you want to show to the user.
	 */
	label?: string;

	/**
	 * The value for the option
	 */
	value?: string;
} & DBCustomSelectListItemExtraProps;

export const SelectedTypeList = ['amount', 'text', 'tag'] as const;
export type SelectedTypeType = (typeof SelectedTypeList)[number];

export type DBCustomSelectEvents = {
	/**
	 * Optional: if select-type="amount" when amount changes
	 * @param amount The amount of selected checkboxes
	 */
	onAmountChange?: (amount: number) => void;

	/**
	 * Optional: if select-type="amount" when amount changes
	 * @param amount The amount of selected checkboxes
	 */
	amountChange?: (amount: number) => void;
	/**
	 * Triggers after some option was clicked in dropdown
	 * @param values the changed values
	 */
	onOptionSelected?: (values: string[]) => void;
	/**
	 * Triggers after some option was clicked in dropdown
	 * @param values the changed values
	 */
	optionSelected?: (values: string[]) => void;

	/**
	 * Informs the user when dropdown was toggled.
	 */
	onDropdownToggle?: (event: GeneralEvent<HTMLDetailsElement>) => void;
	/**
	 * Informs the user when dropdown was toggled.
	 */
	dropdownToggle?: (event: GeneralEvent<HTMLDetailsElement>) => void;

	/**
	 * Informs the user when a search was performed.
	 */
	onSearch?: (event: InputEvent<HTMLInputElement>) => void;
	/**
	 * Informs the user when a search was performed.
	 */
	search?: (event: InputEvent<HTMLInputElement>) => void;
};

export type DBCustomSelectDefaultProps = {
	/**
	 * Optional: if select-type="amount" change the shown text
	 */
	amountText?: string;
	/**
	 * Overwrite the default aria-label (props.label) for the custom-select-list
	 */
	listLabel?: string;

	/**
	 * Label for the clear selection button
	 */
	clearSelectionText?: string;

	/**
	 * Changes the behavior of the dropdown with.
	 * Default: fixed 328px
	 * Auto: Based on the size of the form-field
	 */
	dropdownWidth?: CustomSelectDropdownWidthType | string;

	/**
	 * Width of the component. Auto width based on children size, full width based on parent elements width.
	 */
	formFieldWidth?: WidthType | string;

	/**
	 * Dropdown - hint if data has to be loaded
	 */
	loadingText?: string;

	/**
	 * Change the button text for mobile close
	 */
	mobileCloseButtonText?: string;

	/**
	 * Enables CustomSelect
	 */

	multiple?: boolean | string;
	/**
	 * Dropdown - hint if there are no options
	 */
	noResultsText?: string;
	/**
	 * Programmatically open the dropdown. May differ if you don't use onDropdownToggle.
	 */
	open?: boolean;

	/**
	 * You should pass in the options as an array.
	 */
	options?: CustomSelectOptionType[];

	/**
	 * The `placement` attributes values change the position to absolute and adds a transform based on the placement.
	 */
	placement?: PlacementVerticalType;

	/**
	 * Optional: if you use selectedType=tag and options, you need to set the removeTagsTexts for screen reader users
	 */
	removeTagsTexts?: string[];

	/**
	 * Optional: Change the filter function for the search input
	 */
	searchFilter?: (
		option: CustomSelectOptionType,
		filterText: string
	) => boolean;

	/**
	 * Search label
	 */
	searchLabel?: string;

	/**
	 * Search placeholder
	 */
	searchPlaceholder?: string;

	/**
	 * Optional: Prefill the value of the search input
	 */
	searchValue?: string;

	/**
	 * Select all checkbox label
	 */
	selectAllLabel?: string;

	/**
	 * Optional: If you want to show a custom label for the selected values.
	 * You need to define the empty state as well based on selected options.
	 */
	selectedLabels?: string;

	/**
	 * Optional: Prefix text announced by screen readers before the selection
	 * (e.g., "Ausgewählt" or "Selected").
	 */
	selectedPrefix?: string;

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
	 * Optional: If you want to show a custom label based on the selected options.
	 */
	transformSelectedLabels?: (
		selectedOptions?: CustomSelectOptionType[]
	) => string;

	/**
	 * Initial value for multi select
	 */
	values?: string[];
};

export type DBCustomSelectProps = GlobalProps &
	CustomFormProps &
	BaseFormProps &
	RequiredProps &
	FormMessageProps &
	DBCustomSelectDefaultProps &
	DBCustomSelectEvents &
	DBCustomSelectFormFieldDefaultProps &
	IconProps &
	ShowIconProps &
	ShowLabelProps;

export type DBCustomSelectDefaultState = {
	_validity?: ValidationType;
	_values?: string[];
	_options?: CustomSelectOptionType[];
	_selectedOptions?: CustomSelectOptionType[];
	_hasNoOptions: boolean;
	_selectId?: string;
	_labelId?: string;
	_summaryId?: string;
	_placeholderId?: string;
	_selectedLabels?: string;
	_selectedLabelsId?: string;
	_infoTextId?: string;
	_internalChangeTimestamp: number;
	_documentClickListenerCallbackId?: string;
	_searchValue?: string;
	_userInteraction?: boolean;
	getNativeSelectValue: () => string;
	getOptionLabel: (option: CustomSelectOptionType) => string;
	getOptionChecked: (value?: string) => boolean;
	getTagRemoveLabel: (option: CustomSelectOptionType) => string;
	selectAllEnabled: boolean;
	searchEnabled: boolean;
	amountOptions: number;
	setDescById: (descId?: string) => void;
	handleTagRemove: (
		option: CustomSelectOptionType,
		event?: ClickEvent<HTMLButtonElement> | void
	) => void;
	handleSummaryFocus: () => void;
	handleSelect: (value?: string) => void;
	handleSelectAll: (event: InputEvent<HTMLInputElement>) => void;
	handleClearAll: (event: InputEvent<HTMLInputElement>) => void;
	handleDropdownToggle: (event: GeneralEvent<HTMLDetailsElement>) => void;
	handleDocumentClose: (event: GeneralEvent<HTMLElement>) => void;
	handleOpenByKeyboardFocus: () => void;
	handleFocusFirstDropdownCheckbox: (activeElement?: Element) => void;
	handleKeyboardPress: (
		event: GeneralKeyboardEvent<HTMLDetailsElement>
	) => void;
	handleArrowDownUp: (event: GeneralKeyboardEvent<HTMLElement>) => void;
	handleSearch: (valueOrEvent?: InputEvent<HTMLInputElement> | string | void) => void;
	handleOptionSelected: (_values: string[]) => void;
	getSelectAllLabel: () => string;
	selectAllChecked: boolean;
	selectAllIndeterminate: boolean;
	handleAutoPlacement: () => void;
};

export type DBCustomSelectState = DBCustomSelectDefaultState &
	GlobalState &
	FormState &
	FromValidState &
	CloseEventState<InteractionEvent<HTMLDetailsElement>> &
	DocumentScrollState;
