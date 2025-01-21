// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	ContainerWidthProps,
	GlobalProps,
	GlobalState,
	SpacingProps
} from '../../shared/model';

export type DBSectionDefaultProps = {};

export type DBSectionProps = DBSectionDefaultProps &
	GlobalProps &
	SpacingProps &
	ContainerWidthProps;

export type DBSectionDefaultState = {};

export type DBSectionState = DBSectionDefaultState & GlobalState;
