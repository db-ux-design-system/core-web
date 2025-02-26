// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	ClickEventState,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	PlacementProps,
	PopoverProps,
	PopoverState
} from '../../shared/model';

export type DBTooltipDefaultProps = {
	showArrow?: boolean;
};

export type DBTooltipProps = DBTooltipDefaultProps &
	GlobalProps &
	EmphasisProps &
	PlacementProps &
	PopoverProps;

export type DBTooltipDefaultState = {};

export type DBTooltipState = DBTooltipDefaultState &
	GlobalState &
	ClickEventState<HTMLElement> &
	PopoverState &
	InitializedState;
