import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = ['color-contrast']; // TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587

test.describe('DBSelect', () => {
	runAxeCoreTest({ path: '03/select', axeDisableRules });
	runAxeCoreTest({ path: '03/select', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '03/select',
		density: 'functional',
		axeDisableRules
	});
	runA11yCheckerTest({ path: '03/select' });
});
