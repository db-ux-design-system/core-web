// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

test.describe('DBCard', () => {
	runAxeCoreTest({ path: '01/card' });
	runAxeCoreTest({ path: '01/card', color: lvl3 });
	runAxeCoreTest({ path: '01/card', density: 'functional' });
	runA11yCheckerTest({ path: '01/card' });
});
