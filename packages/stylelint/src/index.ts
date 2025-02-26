// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import useSpacings from './rules/use-spacings.js';
import useBorderRadius from './rules/use-border-radius.js';
import useBorderHeight from './rules/use-border-height.js';
import useBorderColor from './rules/use-border-color.js';

const allRules = [
	useSpacings,
	useBorderRadius,
	useBorderHeight,
	useBorderColor
];

export default allRules;
