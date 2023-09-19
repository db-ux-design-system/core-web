import {
	ChangeEventProps,
	ChangeEventState,
	DefaultVariantProps,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	FormTextProps,
	OverflowProps,
	ValidEventProps
} from '../../shared/model';

export interface DBTextareaDefaultProps {
	/**
	 * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer
	 */
	cols?: number;
	/**
	 * In most browsers, textareas are resizable — you'll notice the drag handle in the right-hand corner, you can control it with this
	 */
	resize?: 'none' | 'both' | 'horizontal' | 'vertical';
	/**
	 * The number of visible text lines for the control. If it is specified, it must be a positive integer
	 */
	rows?: number;
	/**
	 * Specifies whether the textarea is subject to spell checking by the underlying browser/OS
	 */
	spellCheck?: boolean;

	/**
	 * Indicates how the control should wrap the value for form submission.
	 */
	wrap?: 'hard' | 'soft' | 'off';
}

export type DBTextareaProps = DBTextareaDefaultProps &
	ChangeEventProps &
	DefaultVariantProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	GlobalProps &
	FormTextProps &
	FormMessageProps &
	OverflowProps;

export interface DBTextareaDefaultState {}

export type DBTextareaState = DBTextareaDefaultState &
	ChangeEventState &
	FocusEventState &
	FormState &
	GlobalState;
