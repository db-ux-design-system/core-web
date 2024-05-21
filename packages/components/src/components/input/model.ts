import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormMessageState,
	FormProps,
	FormState,
	FormTextProps,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	InputEventProps,
	InputEventState,
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
	dataList?: string[] | ValueLabelType[];
	dataListId?: string;
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
	step?: number | string;
};

export type DBInputProps = DBInputDefaultProps &
	GlobalProps &
	FormTextProps &
	InputEventProps<HTMLInputElement> &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	IconProps &
	IconAfterProps &
	FormMessageProps;

export type DBInputDefaultState = {
	_dataListId?: string;
	getDataList?: (_list?: string[] | ValueLabelType[]) => ValueLabelType[];
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	InputEventState<HTMLInputElement> &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	FormMessageState;
