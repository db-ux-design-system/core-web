import type {
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
	 * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer
	 */
	cols?: number | string;
	/**
	 * The minimum number of visible text lines, enforced via `min-block-size`. Unlike the native `rows` attribute this keeps working together with `fieldSizing="content"`, providing a lower bound the auto-growing textarea cannot shrink below. If it is specified, it must be a positive integer. To set an explicit length instead of a line count, set the `--db-form-component-min-block-size` custom property.
	 */
	minRows?: number | string;
	/**
	 * The minimum visible width of the text control in average character widths, enforced via `min-inline-size`. Unlike the native `cols` attribute this keeps working together with `fieldSizing="content"`, providing a lower bound the auto-growing textarea cannot shrink below. If it is specified, it must be a positive integer. To set an explicit length instead of a character count, set the `--db-form-component-min-inline-size` custom property.
	 */
	minCols?: number | string;
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
	GlobalProps &
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
