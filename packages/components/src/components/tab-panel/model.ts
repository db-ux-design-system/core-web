// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export type DBTabPanelDefaultProps = {
	/**
	 * The content if you don't want to use children.
	 */
	content?: string;
};

export type DBTabPanelProps = DBTabPanelDefaultProps &
	GlobalProps &
	AriaLabelledByProps;

export type DBTabPanelDefaultState = {};

export type DBTabPanelState = DBTabPanelDefaultState & GlobalState;
