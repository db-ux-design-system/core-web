// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	ChangeEventProps,
	ChangeEventState,
	EmphasisProps,
	FocusEventProps,
	FocusEventState,
	FormCheckProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	SizeProps
} from '../../shared/model';

export type DBSwitchDefaultProps = {
	/**
	 * Add additional icons to indicate active/inactive state.
	 */
	visualAid?: boolean;
};

export type DBSwitchProps = DBSwitchDefaultProps &
	GlobalProps &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	EmphasisProps &
	SizeProps &
	IconProps &
	IconAfterProps;

export type DBSwitchDefaultState = {
	_checked: boolean;
};

export type DBSwitchState = DBSwitchDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState;
