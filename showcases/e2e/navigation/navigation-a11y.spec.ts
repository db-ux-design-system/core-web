// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { expect, test } from '@playwright/test';
import {
	hasWebComponentSyntax,
	runAxeCoreTest,
	runA11yCheckerTest
	// @ts-expect-error - required for playwright
} from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const skipAxe = hasWebComponentSyntax(process.env.showcase);
test.describe('DBNavigation', () => {
	runAxeCoreTest({ path: '05/navigation', skipAxe });
	runAxeCoreTest({ path: '05/navigation', color: lvl3, skipAxe });
	runAxeCoreTest({ path: '05/navigation', density: 'functional', skipAxe });
	runA11yCheckerTest({ path: '05/navigation' });
});
