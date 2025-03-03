// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

// Showcase uses <li> outside of <ul> in this case
// TODO: Let's investigate whether we could prevent this deactivation later on
const axeDisableRules = ['listitem'];

test.describe('DBAccordionItem', () => {
	runAxeCoreTest({ path: '04/accordion-item', axeDisableRules });
	runAxeCoreTest({ path: '04/accordion-item', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '04/accordion-item',
		density: 'functional',
		axeDisableRules
	});
	runA11yCheckerTest({ path: '04/accordion-item' });
});
