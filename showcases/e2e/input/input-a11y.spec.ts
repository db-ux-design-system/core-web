import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { runA11yCheckerTest, runAxeCoreTest } from '../default.ts';
import { lvl3 } from '../fixtures/variants';

const axeDisableRules = ['color-contrast']; // TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
test.describe('DBInput', () => {
	runAxeCoreTest({ path: '03/input', axeDisableRules });
	runAxeCoreTest({ path: '03/input', color: lvl3, axeDisableRules });
	runAxeCoreTest({
		path: '03/input',
		density: 'functional',
		axeDisableRules
	});
	// TODO: There is an issue with datetime-local - https://github.com/IBMa/equal-access/issues/1910
	runA11yCheckerTest({
		path: '03/input',
		aCheckerDisableRules: ['label_ref_valid']
	});
});
