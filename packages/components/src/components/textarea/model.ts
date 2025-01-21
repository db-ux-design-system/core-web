// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormState,
	FormTextProps,
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
	cols?: number;
	/**
	 * In most browsers, textareas are resizable — you'll notice the drag handle in the right-hand corner, you can control it with this
	 */
	resize?: TextareaResizeType;
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
	GlobalState;
