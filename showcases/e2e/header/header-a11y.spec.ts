// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
import {
	hasWebComponentSyntax,
	runAxeCoreTest,
	runA11yCheckerTest
	// @ts-expect-error - required for playwright
} from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBHeader', () => {
	runAxeCoreTest({
		path: '01/header',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '01/header',
		color: lvl3,
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	runAxeCoreTest({
		path: '01/header',
		density: 'functional',
		skipAxe: hasWebComponentSyntax(process.env.showcase)
	});
	// TODO: We skip this for now until mitosis output is correct
	runA11yCheckerTest({
		path: '01/header',
		skipChecker: hasWebComponentSyntax(process.env.showcase)
	});
});
