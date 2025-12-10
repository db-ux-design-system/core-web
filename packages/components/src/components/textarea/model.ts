import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormState,
	FormTextProps,
	FromValidState,
	GlobalProps,
	GlobalState,
	InputEventProps,
	InputEventState
} from '../../shared/model';

export const TextareaResizeList = [
	'none',
	'both',
	'horizontal',
	'vertical'
] as const;
export type TextareaResizeType = (typeof TextareaResizeList)[number];

export const TextareaWrapList = ['hard', 'soft', 'off'] as const;
export type TextareaWrapType = (typeof TextareaWrapList)[number];

export type DBTextareaDefaultProps = {
	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the textarea element, generated automatically as a fallback if unset.
	 */
	textareaid?: string;
	/**
	 * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer
	 */
	cols?: number | string;
	/**
	 * In most browsers, textareas are resizable — you'll notice the drag handle in the right-hand corner, you can control it with this
	 */
	resize?: TextareaResizeType;

	/**
	 * Show/Hides drag handle in the right-hand corner - default: true
	 */
	showResizer?: boolean | string;

	/**
	 * The number of visible text lines for the control. If it is specified, it must be a positive integer
	 */
	rows?: number | string;
	/**
	 * Specifies whether the textarea is subject to spell checking by the underlying browser/OS
	 */
	spellCheck?: boolean;

	/**
	 * Indicates how the control should wrap the value for form submission.
	 */
	wrap?: TextareaWrapType;
};

export type DBTextareaProps = DBTextareaDefaultProps &
	ChangeEventProps<HTMLTextAreaElement> &
	InputEventProps<HTMLTextAreaElement> &
	FocusEventProps<HTMLTextAreaElement> &
	FormProps &
	Omit<GlobalProps, 'id'> &
	FormTextProps &
	FormMessageProps;

export type DBTextareaDefaultState = {};

export type DBTextareaState = DBTextareaDefaultState &
	ChangeEventState<HTMLTextAreaElement> &
	InputEventState<HTMLTextAreaElement> &
	FocusEventState<HTMLTextAreaElement> &
	FormState &
	GlobalState &
	FromValidState;
