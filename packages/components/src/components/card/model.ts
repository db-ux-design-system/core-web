// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	SpacingProps
} from '../../shared/model';

export const CardBehaviorList = ['static', 'interactive'] as const;
export type CardBehaviorType = (typeof CardBehaviorList)[number];

export const CardElevationLevelList = ['1', '2', '3'] as const;
export type CardElevationLevelType = (typeof CardElevationLevelList)[number];

export type DBCardDefaultProps = {
	/**
	 * Makes the card interactive
	 */
	behavior?: CardBehaviorType;

	/**
	 * Changes the elevation of the card which is equal to `basic-background-level`
	 */
	elevationLevel?: CardElevationLevelType;
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLElement> &
	SpacingProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState &
	GlobalState &
	ClickEventState<HTMLElement>;
