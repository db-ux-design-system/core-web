// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { BaseIconTypes } from './base-icon-types.js';

/** Provide default values for a string literal type but allow any other string as well.
 * @example* type Keys = "DEFAULT" | LooseAutocomplete
 */
export type LooseAutocomplete = string & Record<never, never>;

/** Assign property types from right to left.
 * Think `Object.assign` for types.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * */

export type Assign<Target, Source> = Omit<Target, keyof Source> & Source;

/**
 * This interface is empty because it is meant to be extended by the consuming app or from a theme.
 */
export interface OverwriteIcons {}

type InternalIcons = Assign<
	{
		types: BaseIconTypes | LooseAutocomplete;
	},
	OverwriteIcons
>;

export type IconTypes = InternalIcons['types'];
