// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { isStencil, runAxeCoreTest, runA11yCheckerTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// We need to change tabs anyway, we disable the rules for now
// TODO: There might be an issue in our implementation of which elements get which roles
// So we disabled "aria-allowed-role" for now
const axeDisableRules = ['aria-allowed-role'];
const aCheckerDisableRules = [
	'aria_child_tabbable',
	'input_checkboxes_grouped',
	'aria_role_valid'
];
// TODO: We skip this for now until mitosis output is correct
const skipChecker = isStencil(process.env.showcase);

test.describe('DBTabItem', () => {
	runAxeCoreTest({ path: '04/tab-item', axeDisableRules });
	runAxeCoreTest({ path: '04/tab-item', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '04/tab-item',
		density: 'functional',
		axeDisableRules
	});
	runA11yCheckerTest({
		path: '04/tab-item',
		aCheckerDisableRules,
		skipChecker
	});
});
