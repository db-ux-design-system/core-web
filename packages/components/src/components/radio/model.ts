// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormCheckProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	InitializedState,
	SizeProps
} from '../../shared/model';

export type DBRadioDefaultProps = {
	describedbyid?: string;
};

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	SizeProps;

export type DBRadioDefaultState = {};

export type DBRadioState = DBRadioDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState;
