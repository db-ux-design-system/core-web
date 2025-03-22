// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	TextProps
} from '../../shared/model';

export type DBBrandDefaultProps = {
	/**
	 * @deprecated: Disable the default logo svg to pass in a custom `img`
	 */
	hideLogo?: boolean;
};

export type DBBrandProps = DBBrandDefaultProps &
	GlobalProps &
	IconProps &
	ShowIconProps &
	TextProps;

export type DBBrandDefaultState = {};

export type DBBrandState = DBBrandDefaultState & GlobalState;
