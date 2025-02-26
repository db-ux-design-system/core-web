// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import type { ReplaceInFileConfig } from 'replace-in-file';

export const iconQ32024: ReplaceInFileConfig[] = [
	// Renamed icons
	{
		files: '',
		from: /swap_vertical/g,
		to: 'arrows_vertical'
	},
	{
		files: '',
		from: /swap_horizontal/g,
		to: 'arrows_horizontal'
	},
	{
		files: '',
		from: /reload/g,
		to: 'circular_arrows'
	},
	{
		files: '',
		from: /volume_off/g,
		to: 'volume_silent'
	},
	{
		files: '',
		from: /law/g,
		to: 'paragraph_mark'
	},
	{
		files: '',
		from: /users/g,
		to: 'persons'
	},
	{
		files: '',
		from: /user/g,
		to: 'person'
	},
	{
		files: '',
		from: /wc_men/g,
		to: 'toilet_men'
	},
	{
		files: '',
		from: /wc_women/g,
		to: 'toilet_women'
	},
	{
		files: '',
		from: /wc/g,
		to: 'toilets'
	},
	{
		files: '',
		from: /filter/g,
		to: 'sliders_horizontal'
	},
	{
		files: '',
		from: /warning_triangle/g,
		to: 'exclamation_mark_triangle'
	},
	{
		files: '',
		from: /visible/g,
		to: 'eye'
	},
	{
		files: '',
		from: /visibility_disabled/g,
		to: 'eye_disabled'
	},
	{
		files: '',
		from: /flip_horizontal/g,
		to: 'arrows_horizontal'
	},
	{
		files: '',
		from: /flip_vertical/g,
		to: 'arrows_vertical'
	}
];
