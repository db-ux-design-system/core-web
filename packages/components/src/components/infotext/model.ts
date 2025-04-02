// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	GlobalProps,
	GlobalState,
	IconProps,
	SemanticProps,
	ShowIconProps,
	SizeProps,
	TextProps
} from '../../shared/model';

export type DBInfotextDefaultProps = {};

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	SemanticProps &
	IconProps &
	SizeProps &
	ShowIconProps &
	TextProps;

export type DBInfotextDefaultState = {};

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
