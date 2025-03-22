// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export type DBNavigationDefaultProps = {};

export type DBNavigationProps = DBNavigationDefaultProps &
	GlobalProps &
	AriaLabelledByProps;

export type DBNavigationDefaultState = {};

export type DBNavigationState = DBNavigationDefaultState & GlobalState;
