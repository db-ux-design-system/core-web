// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBNotification', () => {
	runAxeCoreTest({ path: '06/notification' });
	runAxeCoreTest({ path: '06/notification', color: lvl3 });
	runAxeCoreTest({ path: '06/notification', density: 'functional' });
	runA11yCheckerTest({ path: '06/notification' });
});
