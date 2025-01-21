// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { type Page, test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { hoverPre } from '../fixtures/hover';
import { lvl3 } from '../fixtures/variants';

const selector = '.db-popover';

const preAxe = async (page: Page) => hoverPre(page, selector);

test.describe('DBPopover', () => {
	runAxeCoreTest({ path: '01/popover', preAxe });
	runAxeCoreTest({ path: '01/popover', color: lvl3, preAxe });
	runAxeCoreTest({ path: '01/popover', density: 'functional', preAxe });
	runA11yCheckerTest({ path: '01/popover' });
});
