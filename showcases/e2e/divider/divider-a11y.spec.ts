// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBDivider', () => {
	runAxeCoreTest({ path: '01/divider' });
	runAxeCoreTest({ path: '01/divider', color: lvl3 });
	runAxeCoreTest({ path: '01/divider', density: 'functional' });
	runA11yCheckerTest({ path: '01/divider' });
});
