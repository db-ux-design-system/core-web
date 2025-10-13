import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormSizeProps,
	FormState,
	FormTextProps,
	FromValidState,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	InputEventProps,
	InputEventState,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps,
	SizeType,
	ValueLabelType
} from '../../shared/model';

export const InputTypeList = [
	'color',
	'date',
	'datetime-local',
	'email',
	'file', // TODO: move this to own component
	'hidden',
	'month',
	'number',
	'password',
	'range', // TODO: move this to own component
	'search',
	'tel',
	'text',
	'time',
	'url',
	'week'
] as const;
export type InputTypeType = (typeof InputTypeList)[number];

export type DBInputDefaultProps = {
	/**
	 * Set a [data list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) via attribute instead of children.
	 */
	dataList?: string[] | ValueLabelType[];
	/**
	 * Add a custom id to [data list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) if you're using `dataList` attribute.
	 */
	dataListId?: string;
	/**
	 * Allow selecting multiple files. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#multiple
	 */
	multiple?: boolean | string;
	/**
	 * Maximum value
	 */
	max?: number | string;
	/**
	 * Minimum value
	 */
	min?: number | string;

	/**
	 * Pattern the value must match to be valid
	 */
	pattern?: string;
	/**
	 * 	Type of form control
	 */
	type?: InputTypeType | string;
	/**
	 * Sets [step value](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step).
	 */
	step?: number | string;
	/**
	 * Hint for the [enter key behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) on virtual keyboards.
	 */
	enterkeyhint?:
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'search'
		| 'send';
	/**
	 * Hint for [virtual keyboard](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) selection.
	 */
	inputmode?:
		| 'none'
		| 'text'
		| 'decimal'
		| 'numeric'
		| 'tel'
		| 'search'
		| 'email'
		| 'url';
	/**
	 * The size of the message infotext. Defaults to "small".
	 */
	messageSize?: SizeType;
	/**
	 * The size of the valid message infotext. Defaults to "small".
	 */
	validMessageSize?: SizeType;
	/**
	 * The size of the invalid message infotext. Defaults to "small".
	 */
	invalidMessageSize?: SizeType;
};

export type DBInputProps = DBInputDefaultProps &
	GlobalProps &
	FormTextProps &
	InputEventProps<HTMLInputElement> &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	IconProps &
	IconTrailingProps &
	FormMessageProps &
	ShowIconProps &
	IconLeadingProps &
	ShowIconLeadingProps &
	ShowIconTrailingProps &
	FormSizeProps;

export type DBInputDefaultState = {
	_dataListId?: string;
	getDataList: () => ValueLabelType[];
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	InputEventState<HTMLInputElement> &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	FromValidState;
