#!/usr/bin/env node

// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import type { OptionsType } from './types';
import startProgram from './program';
import { options } from './data';
import { migrate } from './migration';

const action = async (_: unknown, options: OptionsType) => {
	migrate(options, true);
};

startProgram(
	'@db-ux/core-foundations - migration',
	'CLI for DB UX Design System foundations',
	options,
	action
);
