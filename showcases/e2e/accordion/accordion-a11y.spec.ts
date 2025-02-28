// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
import {
	hasWebComponentSyntax,
	runA11yCheckerTest,
	runAxeCoreTest
	// @ts-expect-error - required for playwright
} from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// https://stackoverflow.com/questions/78129019/can-you-have-an-li-in-a-autonomous-custom-element-with-the-parent-ul-not
// TODO: Let's investigate whether we could prevent this deactivation later on
const skipAxe = hasWebComponentSyntax(process.env.showcase);

test.describe('DBAccordion', () => {
	runAxeCoreTest({ path: '04/accordion', skipAxe });
	runAxeCoreTest({ path: '04/accordion', color: lvl3, skipAxe });
	runAxeCoreTest({ path: '04/accordion', density: 'functional', skipAxe });
	runA11yCheckerTest({
		path: '04/accordion'
	});
});
